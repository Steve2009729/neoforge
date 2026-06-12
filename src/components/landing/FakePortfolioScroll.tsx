'use client';

import { motion } from 'framer-motion';

const FAKE_PORTFOLIOS = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Full-Stack Engineer',
    skills: ['React', 'Node.js', 'TypeScript'],
    projects: 12,
    avatar: 'SC',
    color: '#7C3AED',
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    title: 'DevOps Specialist',
    skills: ['Docker', 'Kubernetes', 'AWS'],
    projects: 18,
    avatar: 'MR',
    color: '#A855F7',
  },
  {
    id: 3,
    name: 'Alex Kim',
    title: 'Mobile Developer',
    skills: ['React Native', 'Swift', 'Kotlin'],
    projects: 9,
    avatar: 'AK',
    color: '#EC4899',
  },
  {
    id: 4,
    name: 'Jordan Lee',
    title: 'AI/ML Engineer',
    skills: ['Python', 'TensorFlow', 'PyTorch'],
    projects: 15,
    avatar: 'JL',
    color: '#06B6D4',
  },
  {
    id: 5,
    name: 'Emma Thompson',
    title: 'UI/UX Designer',
    skills: ['Figma', 'Design Systems', 'CSS'],
    projects: 20,
    avatar: 'ET',
    color: '#F59E0B',
  },
  {
    id: 6,
    name: 'David Park',
    title: 'Backend Architect',
    skills: ['Go', 'PostgreSQL', 'gRPC'],
    projects: 25,
    avatar: 'DP',
    color: '#10B981',
  },
];

const scrollingDevs = [...FAKE_PORTFOLIOS, ...FAKE_PORTFOLIOS];

export default function FakePortfolioScroll() {
  return (
    <section className="py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Developers Building Amazing Things
          </h2>
          <p className="text-center text-[#B8B5C9]">
            Join thousands of developers showcasing their portfolios
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll */}
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="animate-scroll-left flex gap-6" style={{ width: '200%' }}>
          {scrollingDevs.map((dev, idx) => (
            <motion.div
              key={`${dev.id}-${idx}`}
              className="flex-shrink-0"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-80 p-6 rounded-xl border border-[#2D2D4A] hover:border-[#7C3AED] transition-all"
                style={{
                  backgroundColor: '#1A1A2E',
                  boxShadow: `0 0 20px ${dev.color}20`,
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm"
                    style={{ background: `linear-gradient(135deg, ${dev.color}, ${dev.color}dd)` }}
                  >
                    {dev.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{dev.name}</h3>
                    <p className="text-[#B8B5C9] text-sm">{dev.title}</p>
                  </div>
                </div>

                <div className="flex gap-2 mb-4">
                  {dev.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-[#2D2D4A] text-[#A855F7] rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>

                <p className="text-[#6B6882] text-sm">{dev.projects} projects published</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
