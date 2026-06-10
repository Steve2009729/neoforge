import { cookies } from 'next/headers';
import { insforge } from './insforge';

export async function requireAuth() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get('insforge-session');

  if (!sessionCookie) {
    throw new Error('Not authenticated');
  }

  try {
    // Get current user from InsForge session
    // The session cookie contains user information
    const sessionData = sessionCookie.value;

    if (!sessionData) {
      throw new Error('Invalid session');
    }

    // Parse session to get user data
    // This is a simplified approach - the actual user object is attached to the session
    const user = { id: sessionData, session: sessionData };

    return user;
  } catch {
    throw new Error('Authentication failed');
  }
}
