import { useState } from "react";
import { MessageSquare, ThumbsUp, Eye, Pin, Lock, Clock } from "lucide-react";

interface ForumCategory {
  id: number;
  name: string;
  description: string;
  topics: number;
  posts: number;
  icon: string;
}

interface ForumThread {
  id: number;
  title: string;
  author: string;
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  isPinned?: boolean;
  isLocked?: boolean;
  likes: number;
}

const categories: ForumCategory[] = [
  {
    id: 1,
    name: "General Discussion",
    description: "General talk about Vintage Story",
    topics: 1247,
    posts: 8932,
    icon: "💬"
  },
  {
    id: 2,
    name: "Game Support",
    description: "Technical support and troubleshooting",
    topics: 834,
    posts: 4521,
    icon: "🛠️"
  },
  {
    id: 3,
    name: "Suggestions & Ideas",
    description: "Share your ideas for the game",
    topics: 567,
    posts: 3214,
    icon: "💡"
  },
  {
    id: 4,
    name: "Modding",
    description: "Mod development and sharing",
    topics: 423,
    posts: 2876,
    icon: "⚙️"
  },
  {
    id: 5,
    name: "Multiplayer",
    description: "Find servers and team up",
    topics: 678,
    posts: 3456,
    icon: "🌐"
  },
  {
    id: 6,
    name: "Screenshots & Videos",
    description: "Show off your creations",
    topics: 891,
    posts: 5234,
    icon: "📸"
  }
];

const threads: ForumThread[] = [
  {
    id: 1,
    title: "Version 1.18 Discussion - Share Your Thoughts!",
    author: "DevTeam",
    category: "General Discussion",
    replies: 234,
    views: 5621,
    lastActivity: "5 minutes ago",
    isPinned: true,
    likes: 156
  },
  {
    id: 2,
    title: "Game crashes on startup after update",
    author: "player123",
    category: "Game Support",
    replies: 12,
    views: 234,
    lastActivity: "15 minutes ago",
    likes: 8
  },
  {
    id: 3,
    title: "Suggestion: More decorative blocks for building",
    author: "Builder_Pro",
    category: "Suggestions & Ideas",
    replies: 45,
    views: 892,
    lastActivity: "1 hour ago",
    likes: 67
  },
  {
    id: 4,
    title: "[MOD] Advanced Agriculture v2.1 Released",
    author: "ModderX",
    category: "Modding",
    replies: 89,
    views: 2134,
    lastActivity: "2 hours ago",
    likes: 123
  },
  {
    id: 5,
    title: "Looking for players - New server launching tomorrow!",
    author: "ServerHost",
    category: "Multiplayer",
    replies: 34,
    views: 567,
    lastActivity: "3 hours ago",
    likes: 42
  },
  {
    id: 6,
    title: "My medieval castle after 200 hours of work",
    author: "CastleBuilder",
    category: "Screenshots & Videos",
    replies: 78,
    views: 3421,
    lastActivity: "4 hours ago",
    likes: 234
  },
  {
    id: 7,
    title: "Best tips for surviving your first winter?",
    author: "Newbie2026",
    category: "General Discussion",
    replies: 56,
    views: 1234,
    lastActivity: "5 hours ago",
    likes: 45
  },
  {
    id: 8,
    title: "Performance optimization guide for low-end PCs",
    author: "TechGuru",
    category: "Game Support",
    replies: 23,
    views: 678,
    lastActivity: "6 hours ago",
    isLocked: true,
    likes: 89
  }
];

export function Forum() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredThreads = selectedCategory === "all" 
    ? threads 
    : threads.filter(t => t.category === selectedCategory);

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl mb-4 text-[var(--vs-text-accent)]">Community Forums</h1>
          <p className="text-[var(--vs-text-secondary)] max-w-3xl">
            Connect with other players, get help, share your creations, and discuss everything Vintage Story!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6 text-[var(--vs-text-accent)]">Forum Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.name)}
                className={`p-6 rounded-lg border text-left transition-colors ${
                  selectedCategory === category.name
                    ? "bg-[var(--vs-highlight)] border-[var(--vs-action)]"
                    : "bg-[var(--vs-bg-surface)] border-[var(--vs-border)] hover:border-[var(--vs-highlight)]"
                }`}
              >
                <h3 className="text-lg mb-2 text-[var(--vs-text-accent)]">{category.name}</h3>
                <p className="text-sm text-[var(--vs-text-muted)] mb-3">{category.description}</p>
                <div className="flex gap-4 text-xs text-[var(--vs-text-muted)]">
                  <span>{category.topics} topics</span>
                  <span>{category.posts} posts</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Threads */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl text-[var(--vs-text-accent)]">
              {selectedCategory === "all" ? "Recent Threads" : selectedCategory}
            </h2>
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedCategory("all")}
                className={`px-4 py-2 rounded text-sm ${
                  selectedCategory === "all"
                    ? "bg-[var(--vs-highlight)] text-[var(--vs-text-accent)]"
                    : "bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)]"
                }`}
              >
                All Categories
              </button>
              <button className="px-4 py-2 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded text-sm">
                New Thread
              </button>
            </div>
          </div>

          {/* Threads List */}
          <div className="space-y-3">
            {filteredThreads.map((thread) => (
              <div
                key={thread.id}
                className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)] hover:border-[var(--vs-highlight)] transition-colors cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {thread.isPinned && (
                        <Pin size={16} className="text-[var(--vs-action)]" />
                      )}
                      {thread.isLocked && (
                        <Lock size={16} className="text-[var(--vs-text-muted)]" />
                      )}
                      <h3 className="text-lg text-[var(--vs-text-accent)] hover:text-[var(--vs-action)]">
                        {thread.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[var(--vs-text-muted)]">
                      <span>by {thread.author}</span>
                      <span className="px-2 py-1 bg-[var(--vs-bg-soft)] rounded text-xs">
                        {thread.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-6 text-sm text-[var(--vs-text-muted)]">
                    <div className="flex items-center gap-1">
                      <MessageSquare size={16} />
                      <span>{thread.replies}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye size={16} />
                      <span>{thread.views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp size={16} />
                      <span>{thread.likes}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs text-[var(--vs-text-muted)] mt-3">
                  <Clock size={12} />
                  <span>Last activity {thread.lastActivity}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <button className="px-4 py-2 bg-[var(--vs-highlight)] text-[var(--vs-text-accent)] rounded">1</button>
            <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">2</button>
            <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">3</button>
            <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">Next →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
