import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NeoForge — Build Your Developer Portfolio',
  description: 'Showcase your projects, connect with developers worldwide, and land your dream role.',
  authors: [{ name: 'Neo Steve' }],
  creator: 'Neo Steve',
  icons: { icon: '/favicon.ico' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ 
        backgroundColor: '#0D0D14', 
        color: '#F5F3FF', 
        minHeight: '100vh',
        margin: 0,
        padding: 0,
        fontFamily: 'ui-sans-serif, system-ui, sans-serif'
      }}>
        {children}
      </body>
    </html>
  );
}
