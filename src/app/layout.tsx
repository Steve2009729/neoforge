import type { Metadata } from 'next';
import './globals.css';
import ErrorBoundary from '@/components/error-boundary';

export const metadata: Metadata = {
  title: 'NeoForge - Developer Portfolio Platform',
  description: 'Build your developer portfolio in seconds. Connect with the community and land amazing opportunities.',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon-192.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-192.png" />
      </head>
      <body>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  );
}
