import { NextRequest, NextResponse } from 'next/server';
import { insforge } from '@/lib/insforge';
import { sendContactEmail } from '@/lib/email';
import { contactFormSchema } from '@/lib/validations';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validated = contactFormSchema.safeParse(body);
    if (!validated.success) {
      return NextResponse.json(
        { data: null, error: validated.error.errors[0].message, success: false },
        { status: 400 }
      );
    }

    // Save to database
    await insforge.database
      .from('contact_messages')
      .insert(validated.data);

    // Send email
    await sendContactEmail(validated.data);

    return NextResponse.json({
      data: { message: 'Message sent successfully' },
      error: null,
      success: true,
    });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { data: null, error: 'Failed to send message', success: false },
      { status: 500 }
    );
  }
}
