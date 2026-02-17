import { Link, Outlet, useLocation } from "react-router";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoSrc from "../../../images/logo.png";

const THEME_STORAGE_KEY = "theme";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Devlog", path: "/devlog" },
    { name: "Forum", path: "/forum" },
    { name: "Buy", path: "/buy" },
    { name: "Client Area", path: "/client" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme === "light" || savedTheme === "dark" ? savedTheme : prefersDark ? "dark" : "light";

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-[var(--vs-bg-page)] text-[var(--vs-text-primary)]">
      {/* Header */}
      <header className="bg-[var(--vs-bg-surface)] border-b border-[var(--vs-border)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src={logoSrc} alt="Vintage Story logo" className="w-12 h-12 object-contain" />
              <span className="text-xl tracking-tight text-[var(--vs-text-accent)]">Vintage Story</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-3">
              <nav className="flex space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-4 py-2 rounded transition-colors ${
                      isActive(link.path)
                        ? "bg-[var(--vs-highlight)] text-[var(--vs-text-accent)]"
                        : "text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] hover:text-[var(--vs-text-primary)]"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] hover:text-[var(--vs-text-primary)] transition-colors"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <button
                type="button"
                className="p-2 rounded text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] hover:text-[var(--vs-text-primary)] transition-colors"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              {/* Mobile menu button */}
              <button
                type="button"
                className="p-2 text-[var(--vs-text-secondary)] hover:text-[var(--vs-text-primary)]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-[var(--vs-border)]">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-2 rounded transition-colors ${
                    isActive(link.path)
                      ? "bg-[var(--vs-highlight)] text-[var(--vs-text-accent)]"
                      : "text-[var(--vs-text-secondary)] hover:bg-[var(--vs-bg-soft)] hover:text-[var(--vs-text-primary)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[var(--vs-bg-surface)] border-t border-[var(--vs-border)] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-[var(--vs-text-accent)] mb-4">About</h3>
              <p className="text-sm text-[var(--vs-text-muted)]">
                Vintage Story is a voxel survival game that combines crafting, exploration, and survival in a beautifully rendered world.
              </p>
            </div>
            <div>
              <h3 className="text-[var(--vs-text-accent)] mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Home</Link></li>
                <li><Link to="/devlog" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Devlog</Link></li>
                <li><Link to="/forum" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Forum</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[var(--vs-text-accent)] mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Documentation</a></li>
                <li><a href="#" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Bug Reports</a></li>
                <li><a href="#" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[var(--vs-text-accent)] mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Discord</a></li>
                <li><a href="#" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Twitter</a></li>
                <li><a href="#" className="text-[var(--vs-text-muted)] hover:text-[var(--vs-text-accent)]">Reddit</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[var(--vs-border)] text-center text-sm text-[var(--vs-text-muted)]">
            © 2026 Vintage Story. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
