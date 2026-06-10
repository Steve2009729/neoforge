import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { insforge } from '@/lib/insforge';
import { extractUserId } from '@/lib/utils';

export async function GET() {
  try {
    const user = await requireAuth();
    const userId = extractUserId(user);

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User not authenticated', success: false },
        { status: 401 }
      );
    }

    // Get notifications
    const { data: notifications, error } = await insforge
      .database
      .from('notifications')
      .select('*')
      .eq('recipient_id', userId)
      .order('created_at', { ascending: false })
      .limit(50);

    if (error) {
      throw error;
    }

    return NextResponse.json({ data: notifications || [], success: true });
  } catch (error) {
    console.error('Notifications GET error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const user = await requireAuth();
    const userId = extractUserId(user);

    if (!userId) {
      return NextResponse.json(
        { data: null, error: 'User not authenticated', success: false },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { notification_id } = body;

    if (!notification_id) {
      return NextResponse.json(
        { data: null, error: 'notification_id is required', success: false },
        { status: 400 }
      );
    }

    // Get notification to verify ownership
    const { data: notification, error: getError } = await insforge
      .database
      .from('notifications')
      .select('*')
      .eq('id', notification_id)
      .single();

    if (getError || !notification) {
      return NextResponse.json(
        { data: null, error: 'Notification not found', success: false },
        { status: 404 }
      );
    }

    if (notification.recipient_id !== userId) {
      return NextResponse.json(
        { data: null, error: 'Not authorized', success: false },
        { status: 403 }
      );
    }

    // Mark as read
    const { data: updated, error: updateError } = await insforge
      .database
      .from('notifications')
      .update({ is_read: true })
      .eq('id', notification_id)
      .select()
      .single();

    if (updateError || !updated) {
      throw updateError;
    }

    return NextResponse.json({ data: updated, success: true });
  } catch (error) {
    console.error('Notifications PATCH error:', error);
    return NextResponse.json(
      { data: null, error: 'Internal server error', success: false },
      { status: 500 }
    );
  }
}
