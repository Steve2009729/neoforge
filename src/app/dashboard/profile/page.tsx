export default function DashboardProfilePage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-extrabold text-white mb-8">Profile Settings</h1>

        <div className="bg-[#1A1A2E] border border-[#2D2D47] rounded-xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-white mb-2">Username</label>
            <input
              type="text"
              defaultValue="john_dev"
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white focus:border-[#7C3AED] outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">Bio</label>
            <textarea
              defaultValue="Full-stack developer passionate about building amazing things."
              rows={4}
              className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white focus:border-[#7C3AED] outline-none transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">GitHub Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white focus:border-[#7C3AED] outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Location</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-[#252541] border border-[#2D2D47] rounded-lg text-white focus:border-[#7C3AED] outline-none transition-colors"
              />
            </div>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white font-bold rounded-lg hover:shadow-[0_0_30px_rgba(124,58,237,0.5)] transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
