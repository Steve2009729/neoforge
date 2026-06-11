import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  // Placeholder data - would be fetched from API in production
  const profile = {
    username,
    name: 'John Developer',
    bio: 'Full-stack developer passionate about building amazing things.',
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`,
    followers: 1234,
    following: 567,
    projects: 12,
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
  };

  return (
    <div className="min-h-screen bg-[#0D0D14]">
      <Navbar />

      <div className="pt-20 pb-12">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-[#7C3AED]/10 to-transparent py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Avatar */}
              <img
                src={profile.avatar}
                alt={profile.name}
                width={160}
                height={160}
                className="rounded-full w-40 h-40 object-cover"
              />

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl font-extrabold text-white mb-2">
                  {profile.name}
                </h1>
                <p className="text-[#D1D5DB] text-lg mb-4">@{username}</p>
                <p className="text-[#D1D5DB] mb-6 max-w-2xl">
                  {profile.bio}
                </p>

                {/* Stats */}
                <div className="flex gap-8 justify-center md:justify-start mb-6">
                  <div>
                    <p className="text-[#9CA3AF] text-sm">Followers</p>
                    <p className="text-2xl font-bold text-white">
                      {profile.followers.toLocaleString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#9CA3AF] text-sm">Following</p>
                    <p className="text-2xl font-bold text-white">
                      {profile.following}
                    </p>
                  </div>
                  <div>
                    <p className="text-[#9CA3AF] text-sm">Projects</p>
                    <p className="text-2xl font-bold text-white">
                      {profile.projects}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                  <button className="px-6 py-2 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
                    Follow
                  </button>
                  <button className="px-6 py-2 border border-[#7C3AED] text-[#7C3AED] font-bold rounded-lg hover:bg-[#7C3AED]/10 transition-all">
                    Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {profile.skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-[#1A1A2E] border border-[#7C3AED] text-[#A855F7] rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((idx) => (
              <div
                key={idx}
                className="bg-[#1A1A2E] border border-[#2D2D47] rounded-xl overflow-hidden hover:border-[#7C3AED] transition-all"
              >
                <div className="w-full h-40 bg-gradient-to-br from-[#2D2D47] to-[#0D0D14] flex items-center justify-center">
                  <p className="text-[#9CA3AF]">Project Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2">
                    Project {idx}
                  </h3>
                  <p className="text-[#D1D5DB] text-sm mb-4">
                    Brief description of the project and technologies used.
                  </p>
                  <Link
                    href="#"
                    className="text-[#7C3AED] hover:text-[#A855F7] font-medium transition-colors"
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
