'use client';

import Link from 'next/link';

interface DeveloperCardProps {
  username: string;
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  repos: number;
  languages: string[];
  isReal?: boolean;
}

export default function DeveloperCard({
  username,
  name,
  avatar,
  bio,
  followers,
  repos,
  languages,
  isReal = false,
}: DeveloperCardProps) {
  return (
    <div className="min-w-[300px] bg-[#1A1A2E] border border-[#2D2D47] rounded-xl p-6 hover:border-[#7C3AED] transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]">
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <img
          src={avatar}
          alt={name}
          width={64}
          height={64}
          className="rounded-full w-16 h-16 object-cover"
          loading="lazy"
        />
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-[#9CA3AF] text-sm">@{username}</p>
          {isReal && (
            <span className="inline-block mt-1 px-2 py-1 bg-[#7C3AED] text-white text-xs rounded-full">
              GitHub Verified
            </span>
          )}
        </div>
      </div>

      {/* Bio */}
      <p className="text-[#D1D5DB] text-sm mb-4 line-clamp-2">{bio}</p>

      {/* Stats */}
      <div className="flex gap-4 mb-4 text-sm">
        <div>
          <p className="text-[#9CA3AF]">Followers</p>
          <p className="text-white font-bold">{followers.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-[#9CA3AF]">Repos</p>
          <p className="text-white font-bold">{repos}</p>
        </div>
      </div>

      {/* Languages */}
      {languages.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {languages.slice(0, 3).map((lang) => (
            <span
              key={lang}
              className="px-3 py-1 bg-[#252541] text-[#A855F7] text-xs rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      )}

      {/* View Button */}
      <Link
        href={`/portfolio/${username}`}
        className="block w-full mt-4 py-2 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white rounded-lg hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all font-medium text-center"
      >
        View Portfolio
      </Link>
    </div>
  );
}
