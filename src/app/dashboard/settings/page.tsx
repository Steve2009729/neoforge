export default function DashboardSettingsPage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-extrabold text-white mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Privacy Section */}
          <div className="bg-[#1A1A2E] border border-[#2D2D47] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Privacy</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-4 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="text-white font-medium">Make profile public</p>
                  <p className="text-[#9CA3AF] text-sm">Allow others to view your portfolio</p>
                </div>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="text-white font-medium">Show email</p>
                  <p className="text-[#9CA3AF] text-sm">Display your email publicly</p>
                </div>
              </label>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="bg-[#1A1A2E] border border-[#2D2D47] rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Notifications</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-4 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="text-white font-medium">Email notifications</p>
                  <p className="text-[#9CA3AF] text-sm">Receive updates via email</p>
                </div>
              </label>
              <label className="flex items-center gap-4 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <div>
                  <p className="text-white font-medium">Message alerts</p>
                  <p className="text-[#9CA3AF] text-sm">Get notified of new messages</p>
                </div>
              </label>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-[#1A1A2E] border border-[#EF4444] rounded-xl p-6">
            <h2 className="text-xl font-bold text-[#EF4444] mb-4">Danger Zone</h2>
            <button className="px-6 py-2 border border-[#EF4444] text-[#EF4444] rounded-lg hover:bg-[#EF4444]/10 transition-colors font-medium">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
