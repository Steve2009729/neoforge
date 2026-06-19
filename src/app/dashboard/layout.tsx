import Link from 'next/link';
import { Navbar } from '@/components/shared/Navbar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#0D0D14] flex flex-col">
      <Navbar />
      <div className="flex-1 flex pt-16">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 bg-[#1A1A2E] border-r border-[#2D2D4A] p-6">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded-lg text-white hover:bg-[#7C3AED]/10 border border-[#2D2D4A] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/profile"
              className="block px-4 py-2 rounded-lg text-[#B8B5C9] hover:text-white hover:bg-[#7C3AED]/10 border border-[#2D2D4A] transition-colors"
            >
              Profile
            </Link>
            <Link
              href="/dashboard/projects"
              className="block px-4 py-2 rounded-lg text-[#B8B5C9] hover:text-white hover:bg-[#7C3AED]/10 border border-[#2D2D4A] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/dashboard/settings"
              className="block px-4 py-2 rounded-lg text-[#B8B5C9] hover:text-white hover:bg-[#7C3AED]/10 border border-[#2D2D4A] transition-colors"
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
