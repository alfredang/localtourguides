import { useState, useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { destinations } from '../data/destinations';

function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/6588666375?text=Hi%20LocalTourGuides!%20I%27d%20like%20to%20find%20a%20local%20guide."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-terra to-cyan-500 shadow-xl ring-2 ring-white/60 transition hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8 fill-white" aria-hidden="true">
        <path d="M16 3C9.4 3 4 8.3 4 14.9c0 2.6.9 5 2.3 7L4.5 28l6.3-1.7c1.9 1 4 1.6 6.2 1.6h.1c6.6 0 11.9-5.3 11.9-11.9C29 8.3 22.6 3 16 3zm5.9 16.9c-.3.8-1.5 1.5-2.4 1.7-.6.1-1.4.2-4.2-.9-3.5-1.5-5.8-5-6-5.3-.2-.2-1.4-1.9-1.4-3.6s.9-2.6 1.2-2.9c.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.8.6.3.8 1 2.6 1.1 2.8.1.2.1.4 0 .6-.1.2-.2.4-.4.6l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.7 2.2 2.7 1.5 1.4 2.8 1.8 3.2 2 .4.2.6.1.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.4 1.1 2.8 1.3.4.2.7.3.8.5.1.2.1.9-.2 1.7z" />
      </svg>
    </a>
  );
}

export default function Layout() {
  const { session, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [destOpen, setDestOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setDestOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLink = 'text-sm font-medium text-ink/70 transition hover:text-terra';

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b border-sand bg-cream/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terra text-lg text-white">🧭</span>
            <span className="font-display text-xl font-bold">
              Local<span className="text-terra">TourGuides</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            <NavLink to="/guides" className={navLink}>Find a Guide</NavLink>
            <div className="relative">
              <button className={`${navLink} flex items-center gap-1`} onClick={() => setDestOpen(!destOpen)}>
                Destinations <span className="text-xs">▾</span>
              </button>
              {destOpen && (
                <div className="absolute left-0 top-full mt-2 w-56 rounded-2xl border border-sand bg-white p-2 shadow-xl">
                  {destinations.map((d) => (
                    <Link
                      key={d.slug}
                      to={`/destinations/${d.slug}`}
                      className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm hover:bg-cream"
                    >
                      <span>{d.flag}</span> {d.country}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink to="/how-it-works" className={navLink}>How It Works</NavLink>
            <NavLink to="/verification" className={navLink}>Verification</NavLink>
            <NavLink to="/blog" className={navLink}>Blog</NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            {session ? (
              <>
                <Link to={session.role === 'admin' ? '/admin' : '/dashboard'} className={navLink}>
                  {session.role === 'admin' ? 'Admin' : 'Dashboard'}
                </Link>
                <button onClick={logout} className={navLink}>Log out</button>
              </>
            ) : (
              <>
                <Link to="/login" className={navLink}>Guide Login</Link>
                <Link to="/signup" className="btn-primary !px-5 !py-2 text-sm">List Yourself Free</Link>
              </>
            )}
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <nav className="border-t border-sand bg-cream px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              <Link to="/guides" className={navLink}>Find a Guide</Link>
              {destinations.map((d) => (
                <Link key={d.slug} to={`/destinations/${d.slug}`} className={`${navLink} pl-3`}>
                  {d.flag} {d.country}
                </Link>
              ))}
              <Link to="/how-it-works" className={navLink}>How It Works</Link>
              <Link to="/verification" className={navLink}>Verification</Link>
              <Link to="/blog" className={navLink}>Blog</Link>
              {session ? (
                <>
                  <Link to={session.role === 'admin' ? '/admin' : '/dashboard'} className={navLink}>
                    {session.role === 'admin' ? 'Admin' : 'Dashboard'}
                  </Link>
                  <button onClick={logout} className={`${navLink} text-left`}>Log out</button>
                </>
              ) : (
                <>
                  <Link to="/login" className={navLink}>Guide Login</Link>
                  <Link to="/signup" className="btn-primary w-fit !px-5 !py-2 text-sm">List Yourself Free</Link>
                </>
              )}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-ink text-white/80">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terra text-lg">🧭</span>
              <span className="font-display text-xl font-bold text-white">
                Local<span className="text-amber-400">TourGuides</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed">
              The trusted marketplace for local tour guides across Singapore, Malaysia, China, Japan and
              Korea. Every verified guide has passed identity checks and a live online interview.
            </p>
            <p className="mt-4 text-xs text-white/50">iOS &amp; Android apps coming soon.</p>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">For Travellers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/guides" className="hover:text-amber-400">Find a Guide</Link></li>
              <li><Link to="/destinations/singapore" className="hover:text-amber-400">Destinations</Link></li>
              <li><Link to="/how-it-works" className="hover:text-amber-400">How It Works</Link></li>
              <li><Link to="/blog" className="hover:text-amber-400">Travel Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">For Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/signup" className="hover:text-amber-400">List Yourself Free</Link></li>
              <li><Link to="/login" className="hover:text-amber-400">Guide Login</Link></li>
              <li><Link to="/verification" className="hover:text-amber-400">Get Verified</Link></li>
              <li><Link to="/dashboard" className="hover:text-amber-400">Become Featured</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://wa.me/6588666375" className="hover:text-amber-400">WhatsApp +65 8866 6375</a>
              </li>
              <li>Singapore</li>
              <li><Link to="/privacy" className="hover:text-amber-400">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-white/50">
          <p>
            © 2026 LocalTourGuides. All rights reserved. Guide personal data (NRIC, contact details) is
            never displayed publicly.
          </p>
        </div>
      </footer>

      <WhatsAppWidget />
    </div>
  );
}
