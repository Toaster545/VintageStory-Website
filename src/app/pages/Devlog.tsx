import { Calendar, Tag } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

interface DevlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
}

const devlogPosts: DevlogPost[] = [
  {
    id: 1,
    title: "Version 1.18 - The Homestead Update",
    date: "February 15, 2026",
    author: "Dev Team",
    category: "Major Update",
    excerpt: "A massive update focused on farming, animal husbandry, and settlement building. This update transforms the homesteading experience.",
    image: "https://images.unsplash.com/photo-1762247789755-7c599807588b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXJ2aXZhbCUyMGdhbWUlMjBmb3Jlc3R8ZW58MXx8fHwxNzcxMzYxNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "New farming mechanics, crop rotation system, expanded animal breeds, improved building materials, and much more!"
  },
  {
    id: 2,
    title: "Metalworking System Overhaul",
    date: "February 1, 2026",
    author: "Dev Team",
    category: "Feature Update",
    excerpt: "Complete revamp of the metalworking system with new alloys, smithing techniques, and decorative options.",
    image: "https://images.unsplash.com/photo-1711829799900-42470ee55689?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNyYWZ0aW5nJTIwdG9vbHN8ZW58MXx8fHwxNzcxMzYxNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "Added 15 new metal alloys, reworked smithing mechanics, new decorative metal items, and improved tool durability balancing."
  },
  {
    id: 3,
    title: "Performance Improvements & Bug Fixes",
    date: "January 20, 2026",
    author: "Dev Team",
    category: "Patch",
    excerpt: "Significant performance optimizations and stability improvements across all game systems.",
    image: "https://images.unsplash.com/photo-1644003197803-6782a1ed1cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b3hlbCUyMGdhbWUlMjBibG9ja3N8ZW58MXx8fHwxNzcxMzYxNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "Reduced memory usage by 30%, fixed multiplayer sync issues, improved chunk loading times, and resolved various gameplay bugs."
  },
  {
    id: 4,
    title: "Winter Survival Challenge Event",
    date: "January 5, 2026",
    author: "Community Team",
    category: "Event",
    excerpt: "Join our special winter event featuring unique challenges, exclusive rewards, and community competitions!",
    image: "https://images.unsplash.com/photo-1706503255088-6b01357981b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbWVkaWV2YWwlMjB2aWxsYWdlfGVufDF8fHx8MTc3MTM2MTc4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "Survive harsh winter conditions, complete special challenges, and earn unique cosmetic items. Event runs through February!"
  },
  {
    id: 5,
    title: "Modding API 2.0 Released",
    date: "December 18, 2025",
    author: "Dev Team",
    category: "Development",
    excerpt: "Major update to our modding API with new features, better documentation, and improved mod compatibility.",
    image: "https://images.unsplash.com/photo-1644003197803-6782a1ed1cdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b3hlbCUyMGdhbWUlMjBibG9ja3N8ZW58MXx8fHwxNzcxMzYxNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "New API endpoints, better mod loader, improved debugging tools, and comprehensive documentation for mod creators."
  },
  {
    id: 6,
    title: "Community Spotlight: Player Creations",
    date: "December 1, 2025",
    author: "Community Team",
    category: "Community",
    excerpt: "Showcasing the most incredible builds, mods, and creative projects from our amazing community!",
    image: "https://images.unsplash.com/photo-1759701547036-bf7d7b05cc52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb21tdW5pdHklMjBkaXNjdXNzaW9ufGVufDF8fHx8MTc3MTM2MTc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content: "From massive castles to intricate automated farms, see what our community has been building this month!"
  }
];

export function Devlog() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl mb-4 text-[var(--vs-text-accent)]">Development Blog</h1>
          <p className="text-[var(--vs-text-secondary)] max-w-3xl">
            Stay up to date with the latest updates, features, and news about Vintage Story. 
            Follow our development journey and see what's coming next!
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 bg-[var(--vs-highlight)] text-[var(--vs-text-accent)] rounded">All Posts</button>
          <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">Major Updates</button>
          <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">Features</button>
          <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">Events</button>
          <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">Community</button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {devlogPosts.map((post) => (
            <article key={post.id} className="bg-[var(--vs-bg-surface)] rounded-lg overflow-hidden border border-[var(--vs-border)] hover:border-[var(--vs-highlight)] transition-colors">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="px-3 py-1 bg-[var(--vs-highlight)] text-[var(--vs-text-accent)] text-sm rounded">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-[var(--vs-text-muted)]">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-2xl mb-3 text-[var(--vs-text-accent)]">{post.title}</h2>
                <p className="text-[var(--vs-text-secondary)] mb-4">{post.excerpt}</p>
                <div className="text-[var(--vs-text-muted)] mb-4">{post.content}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[var(--vs-text-muted)]">By {post.author}</span>
                  <button className="text-[var(--vs-action)] hover:text-[var(--vs-action-hover)] transition-colors">
                    Read Full Post →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="px-4 py-2 bg-[var(--vs-highlight)] text-[var(--vs-text-accent)] rounded">1</button>
          <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">2</button>
          <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">3</button>
          <button className="px-4 py-2 bg-[var(--vs-bg-surface)] text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] rounded">Next →</button>
        </div>
      </div>
    </div>
  );
}
