import { ArrowRight, Download, Users, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import backgroundSrc from "../../../images/background.png";

const promoVideoId = "NJjifFq1NGY";

export function Home() {
  const [isPromoPlaying, setIsPromoPlaying] = useState(true);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={backgroundSrc} alt="Vintage Story background" className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--vs-bg-page)]/35 via-[var(--vs-bg-page)]/45 to-[var(--vs-bg-page)]/65" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl mb-6 text-[var(--vs-text-accent)]">
              Survive. Craft. Thrive.
            </h1>
            <p className="text-xl text-[var(--vs-text-secondary)] mb-8">
              Experience a deep survival and crafting game in a beautifully rendered voxel world. Build, explore, and conquer the challenges of a harsh yet rewarding environment.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/buy"
                className="px-8 py-3 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded-lg flex items-center gap-2 transition-colors"
              >
                Get the Game <ArrowRight size={20} />
              </Link>
              <Link
                to="/client"
                className="px-8 py-3 bg-[var(--vs-bg-soft)] hover:bg-[var(--vs-border)] text-[var(--vs-text-accent)] rounded-lg flex items-center gap-2 transition-colors"
              >
                <Download size={20} /> Download Client
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-[var(--vs-bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl text-center mb-12 text-[var(--vs-text-accent)]">What Makes Vintage Story Unique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[var(--vs-bg-page)] p-6 rounded-lg border border-[var(--vs-border)]">
              <div className="w-12 h-12 bg-[var(--vs-highlight)] rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-[var(--vs-text-accent)]" size={24} />
              </div>
              <h3 className="text-xl mb-3 text-[var(--vs-text-accent)]">Deep Crafting System</h3>
              <p className="text-[var(--vs-text-muted)]">
                Over 1000+ unique items and blocks to craft, from simple tools to complex machinery. Master the art of survival through intricate recipes and progression.
              </p>
            </div>
            <div className="bg-[var(--vs-bg-page)] p-6 rounded-lg border border-[var(--vs-border)]">
              <div className="w-12 h-12 bg-[var(--vs-highlight)] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[var(--vs-text-accent)]" size={24} />
              </div>
              <h3 className="text-xl mb-3 text-[var(--vs-text-accent)]">Multiplayer Co-op</h3>
              <p className="text-[var(--vs-text-muted)]">
                Team up with friends to build thriving settlements, explore dangerous caves, and survive together in a challenging world.
              </p>
            </div>
            <div className="bg-[var(--vs-bg-page)] p-6 rounded-lg border border-[var(--vs-border)]">
              <div className="w-12 h-12 bg-[var(--vs-highlight)] rounded-lg flex items-center justify-center mb-4">
                <Download className="text-[var(--vs-text-accent)]" size={24} />
              </div>
              <h3 className="text-xl mb-3 text-[var(--vs-text-accent)]">Mod Support</h3>
              <p className="text-[var(--vs-text-muted)]">
                Extensive modding support with thousands of community-created modifications. Customize your experience to your liking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl text-[var(--vs-text-accent)]">Latest Updates</h2>
            <Link to="/devlog" className="text-[var(--vs-action)] hover:text-[var(--vs-action-hover)] flex items-center gap-2">
              View All <ArrowRight size={20} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[var(--vs-bg-surface)] rounded-lg overflow-hidden border border-[var(--vs-border)]">
              <img
                src="../../../images/1.22.png"
                alt="Update"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[var(--vs-text-muted)] mb-2">February 5, 2026</div>
                <h3 className="text-xl mb-2 text-[var(--vs-text-accent)]">1.22.0-pre - Fishing, Mechanisms, Metalworking and More! </h3>
                <p className="text-[var(--vs-text-secondary)] mb-4">
                  New farming mechanics, expanded animal husbandry, and improved building tools make settling down more rewarding than ever.
                </p>
                <Link to="/devlog" className="text-[var(--vs-action)] hover:text-[var(--vs-action-hover)] flex items-center gap-2">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="bg-[var(--vs-bg-surface)] rounded-lg overflow-hidden border border-[var(--vs-border)]">
              <img
                src="../../../images/background.png"
                alt="Update"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="text-sm text-[var(--vs-text-muted)] mb-2">February 1, 2026</div>
                <h3 className="text-xl mb-2 text-[var(--vs-text-accent)]">Metalworking Overhaul</h3>
                <p className="text-[var(--vs-text-secondary)] mb-4">
                  Completely revamped metalworking systems with new alloys, smithing techniques, and decorative metal items.
                </p>
                <Link to="/devlog" className="text-[var(--vs-action)] hover:text-[var(--vs-action-hover)] flex items-center gap-2">
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[var(--vs-bg-surface)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[500px] overflow-hidden rounded-lg border border-[var(--vs-border)]">
            {isPromoPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${promoVideoId}?autoplay=1&mute=1&loop=1&playlist=${promoVideoId}&controls=1&modestbranding=1&rel=0`}
                title="Vintage Story trailer video"
                allow="autoplay; encrypted-media; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <img src={backgroundSrc} alt="Vintage Story background" className="w-full h-full object-cover" />
            )}
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsPromoPlaying(true)}
              className="px-4 py-2 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded transition-colors"
            >
              Play Video
            </button>
            <button
              type="button"
              onClick={() => setIsPromoPlaying(false)}
              className="px-4 py-2 bg-[var(--vs-bg-soft)] hover:bg-[var(--vs-border)] text-[var(--vs-text-accent)] rounded transition-colors"
            >
              Stop Video
            </button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-[var(--vs-bg-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-[var(--vs-text-accent)]">Join Our Community</h2>
            <p className="text-[var(--vs-text-secondary)] max-w-2xl mx-auto">
              Connect with thousands of players, share your creations, get help, and discuss strategies in our active community forums.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="/forum"
              className="px-8 py-3 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded-lg transition-colors"
            >
              Visit Forums
            </Link>
            <a
              href="#"
              className="px-8 py-3 bg-[var(--vs-bg-soft)] hover:bg-[var(--vs-border)] text-[var(--vs-text-accent)] rounded-lg transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
