import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Guide, Tour, api } from '../lib/api';

export function Stars({ rating, className = '' }: { rating: number; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 text-amber-500 ${className}`} aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= Math.round(rating) ? '' : 'opacity-30'}>★</span>
      ))}
    </span>
  );
}

export function VerifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-semibold text-green-700">
      ✓ Verified
    </span>
  );
}

export function FeaturedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
      ★ Featured
    </span>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  // Destination-first: cards show where the guide takes you, never portrait photos.
  const cover = guide.coverImage || `https://picsum.photos/seed/${guide.slug}/900/600`;
  return (
    <Link
      to={`/guides/${guide.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-44 overflow-hidden bg-sand">
        <img
          src={cover}
          alt={guide.itineraryTitle || `${guide.city}, ${guide.country}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {guide.isFeatured && <FeaturedBadge />}
          {guide.isVerified && <VerifiedBadge />}
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pb-2 pt-8">
          <p className="text-xs font-semibold text-white/90">📍 {guide.city}, {guide.country}</p>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold">{guide.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink/60">{guide.tagline}</p>
        <div className="mt-2 flex items-center gap-2 text-sm">
          <Stars rating={guide.ratingAvg} />
          <span className="font-semibold">{guide.ratingAvg.toFixed(1)}</span>
          <span className="text-ink/50">({guide.ratingCount})</span>
        </div>
        <div className="mt-auto flex items-center justify-between pt-3 text-sm">
          <span className="text-xs text-ink/50">Speaks {guide.languages.join(', ')}</span>
          <span className="font-semibold text-terra">from S${guide.priceFrom}</span>
        </div>
      </div>
    </Link>
  );
}

export function TourCard({ tour }: { tour: Tour }) {
  const g = tour.guide;
  return (
    <Link
      to={`/guides/${g.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden bg-sand">
        <img
          src={tour.coverImage}
          alt={tour.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {g.isFeatured && <FeaturedBadge />}
          {g.isVerified && <VerifiedBadge />}
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          ⏱ {tour.duration}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold leading-snug">{tour.title}</h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink/60">{tour.summary}</p>
        <div className="mt-auto flex items-center justify-between pt-3 text-sm">
          <span className="text-xs text-ink/50">
            with {g.name} · <Stars rating={g.ratingAvg} className="text-xs" /> {g.ratingAvg.toFixed(1)}
          </span>
          <span className="font-semibold text-terra">from S${g.priceFrom}</span>
        </div>
      </div>
    </Link>
  );
}

export function SocialShare({ title }: { title: string }) {
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const enc = encodeURIComponent;
  const links = [
    { label: 'WhatsApp', href: `https://wa.me/?text=${enc(`${title} ${url}`)}`, bg: 'bg-[#25D366]' },
    { label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`, bg: 'bg-[#1877F2]' },
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`, bg: 'bg-black' },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`, bg: 'bg-[#0A66C2]' },
    { label: 'Email', href: `mailto:?subject=${enc(title)}&body=${enc(url)}`, bg: 'bg-ink' },
  ];
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-semibold text-ink/60">Share:</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`${l.bg} rounded-full px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-80`}
        >
          {l.label}
        </a>
      ))}
    </div>
  );
}

export function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      await api('/leads', { method: 'POST', body: JSON.stringify({ email, source: 'city-guides' }) });
      setDone(true);
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <section className="bg-gradient-to-br from-terra-dark via-terra to-cyan-500 py-12 text-white">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">Free download</p>
        <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
          48 Hours Like a Local — 5 free city guides
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/85">
          Insider itineraries for Singapore, Penang, Kyoto, Seoul and Beijing — written by our verified
          guides. Rated <Stars rating={5} className="text-amber-300" /> <strong>4.9/5</strong> by 1,200+
          travellers.
        </p>
        <div className="mx-auto mt-4 flex max-w-2xl flex-wrap justify-center gap-2 text-xs font-semibold">
          {['✓ Hour-by-hour weekend plans', '✓ Where locals actually eat', '✓ Transport cheat-sheets', '✓ Printable & works offline'].map((b) => (
            <span key={b} className="rounded-full bg-white/15 px-3 py-1.5">{b}</span>
          ))}
        </div>
        {done ? (
          <p className="mt-6 rounded-2xl bg-white/15 px-6 py-4 font-semibold">
            🎉 Check your inbox — your city guides are on the way!
          </p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 rounded-full px-5 py-3 text-ink outline-none ring-amber-300 focus:ring-2"
            />
            <button type="submit" className="rounded-full bg-ink px-6 py-3 font-semibold transition hover:bg-black">
              Get the guides
            </button>
          </form>
        )}
        {error && <p className="mt-3 text-sm text-amber-200">{error}</p>}
        <div className="mt-6 flex justify-center">
          <SocialShare title="48 Hours Like a Local — free city guides from LocalTourGuides" />
        </div>
      </div>
    </section>
  );
}
