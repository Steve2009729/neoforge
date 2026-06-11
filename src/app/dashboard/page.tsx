export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl">
        <h1 className="text-4xl font-extrabold text-white mb-2">Welcome to Your Dashboard</h1>
        <p className="text-[#D1D5DB] mb-8">Manage your profile and portfolio here.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Profile Views', value: '1,234', icon: '👁️' },
            { title: 'Projects', value: '12', icon: '🚀' },
            { title: 'Followers', value: '567', icon: '👥' },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-[#1A1A2E] border border-[#2D2D47] rounded-xl p-6 hover:border-[#7C3AED] transition-colors"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <p className="text-[#9CA3AF] text-sm mb-2">{card.title}</p>
              <p className="text-3xl font-bold text-white">{card.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
