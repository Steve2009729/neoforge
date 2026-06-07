import { insforge } from './insforge';
import { cookies } from 'next/headers';

export async function getServerSession() {
  try {
    const { data: user, error } = await insforge.auth.getCurrentUser();
    if (error || !user) return null;
    return user;
  } catch {
    return null;
  }
}

export async function requireAuth() {
  const user = await getServerSession();
  if (!user) {
    throw new Error('Unauthorized');
  }
  return user;
}

export async function getProfileByUserId(userId: string) {
  const { data, error } = await insforge.database
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();

  if (error) return null;
  return data;
}

export async function getProfileByUsername(username: string) {
  const { data, error } = await insforge.database
    .from('profiles')
    .select('*')
    .eq('username', username)
    .eq('is_public', true)
    .single();

  if (error) return null;
  return data;
}

export async function createProfileForNewUser(userId: string, userData: {
  email: string;
  full_name?: string;
  avatar_url?: string;
}) {
  const username = userData.full_name
    ? userData.full_name.toLowerCase().replace(/\s+/g, '') + Math.floor(Math.random() * 1000)
    : 'user' + Math.floor(Math.random() * 100000);

  const { data, error } = await insforge.database
    .from('profiles')
    .insert({
      id: userId,
      username,
      full_name: userData.full_name || null,
      email: userData.email,
      avatar_url: userData.avatar_url || null,
    })
    .select()
    .single();

  if (error) throw new Error('Failed to create profile');
  return data;
}
