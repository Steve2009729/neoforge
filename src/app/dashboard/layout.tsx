// Stage 2: Dashboard layout
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex gap-8">
        <aside className="w-64 bg-white border-r p-6">{/* Sidebar */}</aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
