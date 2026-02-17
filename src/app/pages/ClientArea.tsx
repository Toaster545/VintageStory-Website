import { useState } from "react";
import { Download, Key, Settings, User, Mail, Lock, Save, FileText } from "lucide-react";

export function ClientArea() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState<"downloads" | "account" | "licenses">("downloads");

  // Mock user data
  const userData = {
    username: "PlayerName",
    email: "player@example.com",
    memberSince: "January 2024",
    edition: "Deluxe Edition",
    licenseKey: "XXXX-XXXX-XXXX-XXXX"
  };

  const downloads = [
    {
      id: 1,
      name: "Vintage Story v1.18.0 (Windows)",
      size: "245 MB",
      date: "February 15, 2026",
      type: "Game Client"
    },
    {
      id: 2,
      name: "Vintage Story v1.18.0 (Linux)",
      size: "238 MB",
      date: "February 15, 2026",
      type: "Game Client"
    },
    {
      id: 3,
      name: "Vintage Story v1.18.0 (macOS)",
      size: "252 MB",
      date: "February 15, 2026",
      type: "Game Client"
    },
    {
      id: 4,
      name: "Server Files v1.18.0",
      size: "180 MB",
      date: "February 15, 2026",
      type: "Server"
    },
    {
      id: 5,
      name: "Official Soundtrack (MP3)",
      size: "124 MB",
      date: "December 2025",
      type: "Extras"
    },
    {
      id: 6,
      name: "Digital Artbook (PDF)",
      size: "85 MB",
      date: "December 2025",
      type: "Extras"
    }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen py-16">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--vs-bg-surface)] rounded-lg p-8 border border-[var(--vs-border)]">
            <h1 className="text-3xl mb-6 text-center text-[var(--vs-text-accent)]">Client Area Login</h1>
            <form onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }} className="space-y-4">
              <div>
                <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">Email or Username</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--vs-text-muted)]" size={20} />
                  <input
                    type="text"
                    placeholder="Enter your email or username"
                    className="w-full pl-10 pr-4 py-3 bg-[var(--vs-bg-page)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)] placeholder-[var(--vs-highlight)] focus:outline-none focus:border-[var(--vs-action)]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--vs-text-muted)]" size={20} />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-4 py-3 bg-[var(--vs-bg-page)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)] placeholder-[var(--vs-highlight)] focus:outline-none focus:border-[var(--vs-action)]"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-[var(--vs-text-secondary)]">
                  <input type="checkbox" className="rounded" />
                  Remember me
                </label>
                <a href="#" className="text-[var(--vs-action)] hover:text-[var(--vs-action-hover)]">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded-lg transition-colors"
              >
                Login
              </button>
            </form>
            <div className="mt-6 text-center text-sm text-[var(--vs-text-muted)]">
              Don't have an account?{" "}
              <a href="#" className="text-[var(--vs-action)] hover:text-[var(--vs-action-hover)]">
                Purchase the game
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl mb-2 text-[var(--vs-text-accent)]">Welcome back, {userData.username}!</h1>
          <p className="text-[var(--vs-text-secondary)]">Manage your account, downloads, and licenses</p>
        </div>

        {/* Account Info Card */}
        <div className="bg-[var(--vs-bg-surface)] rounded-lg p-6 border border-[var(--vs-border)] mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--vs-action)] to-[var(--vs-highlight)] rounded-full flex items-center justify-center text-2xl text-[var(--vs-action-contrast)]">
                {userData.username[0]}
              </div>
              <div>
                <div className="text-xl text-[var(--vs-text-accent)]">{userData.username}</div>
                <div className="text-sm text-[var(--vs-text-muted)]">{userData.email}</div>
                <div className="text-sm text-[var(--vs-text-muted)]">Member since {userData.memberSince}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="px-4 py-2 bg-[var(--vs-highlight)] text-[var(--vs-text-accent)] rounded">
                {userData.edition}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[var(--vs-border)]">
          <button
            onClick={() => setActiveTab("downloads")}
            className={`px-6 py-3 transition-colors ${
              activeTab === "downloads"
                ? "border-b-2 border-[var(--vs-action)] text-[var(--vs-text-accent)]"
                : "text-[var(--vs-text-secondary)] hover:text-[var(--vs-text-accent)]"
            }`}
          >
            <Download size={20} className="inline mr-2" />
            Downloads
          </button>
          <button
            onClick={() => setActiveTab("licenses")}
            className={`px-6 py-3 transition-colors ${
              activeTab === "licenses"
                ? "border-b-2 border-[var(--vs-action)] text-[var(--vs-text-accent)]"
                : "text-[var(--vs-text-secondary)] hover:text-[var(--vs-text-accent)]"
            }`}
          >
            <Key size={20} className="inline mr-2" />
            License Keys
          </button>
          <button
            onClick={() => setActiveTab("account")}
            className={`px-6 py-3 transition-colors ${
              activeTab === "account"
                ? "border-b-2 border-[var(--vs-action)] text-[var(--vs-text-accent)]"
                : "text-[var(--vs-text-secondary)] hover:text-[var(--vs-text-accent)]"
            }`}
          >
            <Settings size={20} className="inline mr-2" />
            Account Settings
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "downloads" && (
          <div>
            <h2 className="text-2xl mb-6 text-[var(--vs-text-accent)]">Available Downloads</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {downloads.map((download) => (
                <div
                  key={download.id}
                  className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)] hover:border-[var(--vs-highlight)] transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg mb-1 text-[var(--vs-text-accent)]">{download.name}</h3>
                      <div className="flex gap-4 text-sm text-[var(--vs-text-muted)]">
                        <span>{download.size}</span>
                        <span>•</span>
                        <span>{download.date}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-[var(--vs-bg-soft)] text-[var(--vs-action)] text-xs rounded">
                      {download.type}
                    </span>
                  </div>
                  <button className="w-full py-2 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded flex items-center justify-center gap-2 transition-colors">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
              <h3 className="text-lg mb-3 text-[var(--vs-text-accent)]">Installation Guide</h3>
              <ol className="list-decimal list-inside space-y-2 text-[var(--vs-text-secondary)]">
                <li>Download the appropriate version for your operating system</li>
                <li>Extract the downloaded archive to your desired location</li>
                <li>Run the game executable (Vintagestory.exe on Windows)</li>
                <li>Enter your license key when prompted</li>
                <li>Enjoy the game!</li>
              </ol>
            </div>
          </div>
        )}

        {activeTab === "licenses" && (
          <div>
            <h2 className="text-2xl mb-6 text-[var(--vs-text-accent)]">Your License Keys</h2>
            <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)] mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-lg text-[var(--vs-text-accent)]">Vintage Story - {userData.edition}</h3>
                  <p className="text-sm text-[var(--vs-text-muted)]">Purchased: {userData.memberSince}</p>
                </div>
                <span className="px-3 py-1 bg-[#2d5d2d] text-[#7dd87d] text-sm rounded">Active</span>
              </div>
              <div className="bg-[var(--vs-bg-page)] p-4 rounded border border-[var(--vs-border)]">
                <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">License Key</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userData.licenseKey}
                    readOnly
                    className="flex-1 px-4 py-2 bg-[var(--vs-bg-surface)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)]"
                  />
                  <button className="px-4 py-2 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded transition-colors">
                    Copy
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
              <h3 className="text-lg mb-3 text-[var(--vs-text-accent)]">License Information</h3>
              <ul className="space-y-2 text-[var(--vs-text-secondary)]">
                <li>• Your license allows installation on unlimited personal devices</li>
                <li>• Keep your license key secure and do not share it publicly</li>
                <li>• Contact support if you need to transfer your license</li>
                <li>• License includes all future updates for this edition</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "account" && (
          <div>
            <h2 className="text-2xl mb-6 text-[var(--vs-text-accent)]">Account Settings</h2>
            <div className="space-y-6">
              <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
                <h3 className="text-lg mb-4 text-[var(--vs-text-accent)]">Profile Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">Username</label>
                    <input
                      type="text"
                      value={userData.username}
                      className="w-full px-4 py-3 bg-[var(--vs-bg-page)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)] focus:outline-none focus:border-[var(--vs-action)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">Email</label>
                    <input
                      type="email"
                      value={userData.email}
                      className="w-full px-4 py-3 bg-[var(--vs-bg-page)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)] focus:outline-none focus:border-[var(--vs-action)]"
                    />
                  </div>
                  <button className="px-6 py-2 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded flex items-center gap-2 transition-colors">
                    <Save size={18} />
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
                <h3 className="text-lg mb-4 text-[var(--vs-text-accent)]">Change Password</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">Current Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-[var(--vs-bg-page)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)] focus:outline-none focus:border-[var(--vs-action)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-[var(--vs-bg-page)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)] focus:outline-none focus:border-[var(--vs-action)]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-[var(--vs-text-secondary)]">Confirm New Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-[var(--vs-bg-page)] border border-[var(--vs-border)] rounded text-[var(--vs-text-primary)] focus:outline-none focus:border-[var(--vs-action)]"
                    />
                  </div>
                  <button className="px-6 py-2 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded transition-colors">
                    Update Password
                  </button>
                </div>
              </div>

              <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
                <h3 className="text-lg mb-4 text-[var(--vs-text-accent)]">Danger Zone</h3>
                <button className="px-6 py-2 bg-[#5d2d2d] hover:bg-[#6d3737] text-[#ff9999] rounded transition-colors">
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLoggedIn(false)}
            className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)] transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
