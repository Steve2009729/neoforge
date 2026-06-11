'use client';

import { useEffect, useState } from 'react';

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Auto-hide after 30 seconds as failsafe
    const timer = setTimeout(() => setIsLoading(false), 30000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="text-center">
        {/* Animated gradient spinner */}
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#7C3AED] border-r-[#A855F7] animate-spin"
            style={{
              background: 'conic-gradient(from 0deg, #7C3AED 0%, #A855F7 25%, transparent 50%, #7C3AED 100%)',
              WebkitMaskImage: 'radial-gradient(circle, transparent 70%, black 100%)',
              maskImage: 'radial-gradient(circle, transparent 70%, black 100%)',
            }}
          />
        </div>

        {/* Loading text */}
        <p className="text-white font-semibold animate-pulse">
          NeoForge Loading
        </p>
      </div>

      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-spin {
          animation: spin 2s linear infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </div>
  );
}
