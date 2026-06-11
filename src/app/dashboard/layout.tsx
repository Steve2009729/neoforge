import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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
        <aside className="hidden md:block w-64 bg-[#1A1A2E] border-r border-[#2D2D47] p-6">
          <nav className="space-y-2">
            <Link
              href="/dashboard"
              className="block px-4 py-2 rounded-lg text-white hover:bg-[#7C3AED]/10 hover:border-[#7C3AED] border border-transparent transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/profile"
              className="block px-4 py-2 rounded-lg text-[#D1D5DB] hover:text-white hover:bg-[#7C3AED]/10 border border-transparent transition-colors"
            >
              Profile
            </Link>
            <Link
              href="/dashboard/projects"
              className="block px-4 py-2 rounded-lg text-[#D1D5DB] hover:text-white hover:bg-[#7C3AED]/10 border border-transparent transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/dashboard/settings"
              className="block px-4 py-2 rounded-lg text-[#D1D5DB] hover:text-white hover:bg-[#7C3AED]/10 border border-transparent transition-colors"
            >
              Settings
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
