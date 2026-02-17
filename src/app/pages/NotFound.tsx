import { Home } from "lucide-react";
import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-8xl mb-4 text-[var(--vs-highlight)]">404</div>
          <h1 className="text-4xl mb-4 text-[var(--vs-text-accent)]">Page Not Found</h1>
          <p className="text-xl text-[var(--vs-text-secondary)] mb-8">
            The page you're looking for seems to have wandered off into the wilderness.
          </p>
        </div>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--vs-action)] hover:bg-[var(--vs-action-hover)] text-[var(--vs-action-contrast)] rounded-lg transition-colors"
        >
          <Home size={20} />
          Return Home
        </Link>
      </div>
    </div>
  );
}
