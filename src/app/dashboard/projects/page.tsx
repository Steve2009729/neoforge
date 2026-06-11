export default function DashboardProjectsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-extrabold text-white mb-2">Your Projects</h1>
            <p className="text-[#D1D5DB]">Manage and showcase your work</p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
            Add Project
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((idx) => (
            <div
              key={idx}
              className="bg-[#1A1A2E] border border-[#2D2D47] rounded-xl p-6 hover:border-[#7C3AED] transition-all"
            >
              <div className="w-full h-40 bg-gradient-to-br from-[#2D2D47] to-[#0D0D14] rounded-lg mb-4 flex items-center justify-center">
                <p className="text-[#9CA3AF]">Project Image</p>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project {idx}</h3>
              <p className="text-[#D1D5DB] text-sm mb-4">Brief project description goes here</p>
              <button className="text-[#7C3AED] hover:text-[#A855F7] font-medium transition-colors">
                Edit Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
