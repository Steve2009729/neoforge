'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getInsforgeClient } from '@/lib/insforge-browser';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const insforge = getInsforgeClient();
        const { data: user, error } = await insforge.auth.getCurrentUser();

        if (error || !user) {
          router.push('/auth/login?error=oauth_failed');
          return;
        }

        // Check if profile exists, if not create one
        const response = await fetch('/api/profile');
        const profileData = await response.json();

        if (!profileData.success) {
          // Profile doesn't exist, it will be created via database trigger
          // or we redirect to onboarding
          router.push('/dashboard/profile?onboarding=true');
          return;
        }

        router.push('/dashboard');
      } catch (error) {
        router.push('/auth/login?error=callback_failed');
      }
    };

    handleCallback();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
        <p className="text-gray-400">Completing sign in...</p>
      </div>
    </div>
  );
}
