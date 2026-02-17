import { Check, Shield, Users, Zap } from "lucide-react";

interface PricingPlan {
  id: number;
  name: string;
  price: number;
  features: string[];
  recommended?: boolean;
}

const plans: PricingPlan[] = [
  {
    id: 1,
    name: "Standard Edition",
    price: 24.99,
    features: [
      "Full game access",
      "Regular updates",
      "Single player mode",
      "Multiplayer support",
      "Basic mod support",
      "Community access"
    ]
  },
  {
    id: 2,
    name: "Deluxe Edition",
    price: 34.99,
    recommended: true,
    features: [
      "Everything in Standard",
      "Official soundtrack (MP3)",
      "Digital artbook",
      "Exclusive in-game items",
      "Priority support",
      "Early access to updates"
    ]
  },
  {
    id: 3,
    name: "Server License",
    price: 49.99,
    features: [
      "Dedicated server hosting",
      "Up to 50 players",
      "Advanced admin tools",
      "Custom mod support",
      "Priority technical support",
      "Whitelist management"
    ]
  }
];

export function Buy() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-4 text-[var(--vs-text-accent)]">Get Vintage Story</h1>
          <p className="text-xl text-[var(--vs-text-secondary)] max-w-3xl mx-auto">
            Choose the edition that's right for you and start your survival adventure today.
            All purchases include lifetime updates and support.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          <div className="flex items-center gap-2 text-[var(--vs-text-muted)]">
            <Shield className="text-[var(--vs-action)]" size={24} />
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--vs-text-muted)]">
            <Zap className="text-[var(--vs-action)]" size={24} />
            <span>Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2 text-[var(--vs-text-muted)]">
            <Users className="text-[var(--vs-action)]" size={24} />
            <span>100K+ Players</span>
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-lg p-8 ${
                plan.recommended
                  ? "bg-[var(--vs-highlight)] border-2 border-[var(--vs-action)]"
                  : "bg-[var(--vs-bg-surface)] border border-[var(--vs-border)]"
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--vs-action)] text-[var(--vs-action-contrast)] px-4 py-1 rounded-full text-sm">
                  Recommended
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl mb-2 text-[var(--vs-text-accent)]">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl text-[var(--vs-text-accent)]">${plan.price}</span>
                  <span className="text-[var(--vs-text-muted)]"> USD</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-[var(--vs-text-secondary)]">
                    <Check className="text-[var(--vs-action)] flex-shrink-0 mt-0.5" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-lg transition-colors ${
                  plan.recommended
                    ? "bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)]"
                    : "bg-[var(--vs-bg-soft)] hover:bg-[var(--vs-border)] text-[var(--vs-text-accent)]"
                }`}
              >
                Purchase Now
              </button>
            </div>
          ))}
        </div>

        {/* System Requirements */}
        <div className="bg-[var(--vs-bg-surface)] rounded-lg p-8 border border-[var(--vs-border)]">
          <h2 className="text-2xl mb-6 text-[var(--vs-text-accent)]">System Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg mb-4 text-[var(--vs-action)]">Minimum</h3>
              <ul className="space-y-2 text-[var(--vs-text-secondary)]">
                <li><strong className="text-[var(--vs-text-accent)]">OS:</strong> Windows 7, 8, 10, 11 (64-bit)</li>
                <li><strong className="text-[var(--vs-text-accent)]">Processor:</strong> Intel Core i5 or equivalent</li>
                <li><strong className="text-[var(--vs-text-accent)]">Memory:</strong> 4 GB RAM</li>
                <li><strong className="text-[var(--vs-text-accent)]">Graphics:</strong> OpenGL 4.2 compatible GPU</li>
                <li><strong className="text-[var(--vs-text-accent)]">Storage:</strong> 2 GB available space</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg mb-4 text-[var(--vs-action)]">Recommended</h3>
              <ul className="space-y-2 text-[var(--vs-text-secondary)]">
                <li><strong className="text-[var(--vs-text-accent)]">OS:</strong> Windows 10, 11 (64-bit)</li>
                <li><strong className="text-[var(--vs-text-accent)]">Processor:</strong> Intel Core i7 or equivalent</li>
                <li><strong className="text-[var(--vs-text-accent)]">Memory:</strong> 8 GB RAM</li>
                <li><strong className="text-[var(--vs-text-accent)]">Graphics:</strong> NVIDIA GTX 1060 or equivalent</li>
                <li><strong className="text-[var(--vs-text-accent)]">Storage:</strong> 4 GB available space (SSD recommended)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-[var(--vs-bg-soft)] rounded text-[var(--vs-text-secondary)]">
            <strong className="text-[var(--vs-text-accent)]">Note:</strong> Also available for Linux and macOS. 
            Performance may vary depending on your system configuration and installed mods.
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-2xl mb-6 text-[var(--vs-text-accent)]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
              <h3 className="text-lg mb-2 text-[var(--vs-text-accent)]">Is there a free demo available?</h3>
              <p className="text-[var(--vs-text-secondary)]">
                Yes! You can download a free demo from our client area that allows you to play for 10 in-game days.
              </p>
            </div>
            <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
              <h3 className="text-lg mb-2 text-[var(--vs-text-accent)]">What payment methods do you accept?</h3>
              <p className="text-[var(--vs-text-secondary)]">
                We accept all major credit cards, PayPal, and various regional payment methods through our secure payment partners.
              </p>
            </div>
            <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
              <h3 className="text-lg mb-2 text-[var(--vs-text-accent)]">Can I upgrade from Standard to Deluxe Edition later?</h3>
              <p className="text-[var(--vs-text-secondary)]">
                Yes! You can upgrade at any time by paying the price difference through your client area.
              </p>
            </div>
            <div className="bg-[var(--vs-bg-surface)] p-6 rounded-lg border border-[var(--vs-border)]">
              <h3 className="text-lg mb-2 text-[var(--vs-text-accent)]">What is your refund policy?</h3>
              <p className="text-[var(--vs-text-secondary)]">
                We offer a 14-day money-back guarantee. If you're not satisfied with your purchase, contact our support team for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
