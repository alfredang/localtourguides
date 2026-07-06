import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api, GuideDetail } from '../lib/api';
import { Stars, VerifiedBadge, FeaturedBadge, SocialShare } from '../components/Shared';

export default function GuideProfile() {
  const { slug } = useParams();
  const [guide, setGuide] = useState<GuideDetail | null>(null);
  const [notFound, setNotFound] = useState(false);

  // enquiry form
  const [enq, setEnq] = useState({ name: '', email: '', travelDate: '', groupSize: '2', message: '' });
  const [enqDone, setEnqDone] = useState(false);
  const [enqError, setEnqError] = useState('');

  // review form
  const [rev, setRev] = useState({ author: '', rating: 5, text: '' });
  const [revDone, setRevDone] = useState(false);

  function load() {
    api<GuideDetail>(`/guides/${slug}`).then(setGuide).catch(() => setNotFound(true));
  }
  useEffect(load, [slug]);

  if (notFound)
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Guide not found</h1>
        <Link to="/guides" className="btn-primary mt-6">Browse all guides</Link>
      </div>
    );
  if (!guide) return <p className="py-24 text-center text-ink/50">Loading…</p>;

  async function submitEnquiry(e: React.FormEvent) {
    e.preventDefault();
    setEnqError('');
    try {
      await api(`/guides/${guide!.id}/enquiries`, { method: 'POST', body: JSON.stringify(enq) });
      setEnqDone(true);
    } catch (err) {
      setEnqError((err as Error).message);
    }
  }

  async function submitReview(e: React.FormEvent) {
    e.preventDefault();
    await api(`/guides/${guide!.id}/reviews`, { method: 'POST', body: JSON.stringify(rev) });
    setRevDone(true);
    load();
  }

  const it = guide.itinerary;

  return (
    <div>
      {/* Profile hero */}
      <section className="bg-gradient-to-br from-sky-100 via-cream to-amber-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center">
          {it && (
            <img
              src={it.coverImage}
              alt={it.title}
              className="h-44 w-full rounded-2xl border-4 border-white object-cover shadow-xl md:w-64"
            />
          )}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="font-display text-3xl font-bold sm:text-4xl">{guide.name}</h1>
              {guide.isFeatured && <FeaturedBadge />}
              {guide.isVerified && <VerifiedBadge />}
            </div>
            <p className="mt-2 text-lg text-ink/70">{guide.tagline}</p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink/60">
              <span className="flex items-center gap-1.5">
                <Stars rating={guide.ratingAvg} />
                <strong className="text-ink">{guide.ratingAvg.toFixed(1)}</strong> ({guide.ratingCount} reviews)
              </span>
              <span>📍 {guide.city}, {guide.country}</span>
              <span>🗣 {guide.languages.join(', ')}</span>
              <span>🎒 {guide.yearsExperience} years guiding</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {guide.specialties.map((s) => (
                <span key={s} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-terra shadow-sm">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <SocialShare title={`${guide.name} — local guide in ${guide.city} | LocalTourGuides`} />
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
            <p className="text-sm text-ink/50">Experiences from</p>
            <p className="font-display text-3xl font-bold text-terra">S${guide.priceFrom}</p>
            <p className="text-xs text-ink/50">per person</p>
            <a href="#enquire" className="btn-primary mt-4 w-full">Send an enquiry</a>
            <p className="mt-2 text-xs text-ink/40">Free — no booking fees</p>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {/* About */}
          <h2 className="font-display text-2xl font-semibold">About {guide.name.split(' ')[0]}</h2>
          <p className="mt-3 leading-relaxed text-ink/80">{guide.bio}</p>

          {/* Itinerary */}
          {it && (
            <div className="mt-10">
              <h2 className="font-display text-2xl font-semibold">Itinerary: {it.title}</h2>
              <p className="mt-3 leading-relaxed text-ink/80">{it.summary}</p>
              <p className="mt-2 text-sm font-semibold text-terra">⏱ {it.duration}</p>

              <div className="mt-5 grid gap-2 sm:grid-cols-2">
                {it.highlights.map((h) => (
                  <p key={h} className="flex items-start gap-2 rounded-xl bg-sand/60 px-4 py-3 text-sm">
                    <span className="text-terra">✦</span> {h}
                  </p>
                ))}
              </div>

              <ol className="mt-8 space-y-0 border-l-2 border-terra/30 pl-6">
                {it.stops.map((s, i) => (
                  <li key={i} className="relative pb-8">
                    <span className="absolute -left-[31px] flex h-4 w-4 items-center justify-center rounded-full bg-terra ring-4 ring-cream" />
                    <p className="text-xs font-bold uppercase tracking-widest text-terra">{s.time}</p>
                    <h3 className="mt-1 font-display text-lg font-semibold">{s.place}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{s.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Reviews */}
          <div className="mt-10">
            <h2 className="font-display text-2xl font-semibold">Reviews ({guide.ratingCount})</h2>
            <div className="mt-4 space-y-4">
              {guide.reviews.map((r) => (
                <div key={r.id} className="rounded-2xl border border-sand bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{r.author}</p>
                    <Stars rating={r.rating} />
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{r.text}</p>
                  <p className="mt-2 text-xs text-ink/40">{r.date?.slice(0, 10)}</p>
                </div>
              ))}
            </div>

            {revDone ? (
              <p className="mt-6 rounded-2xl bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
                Thanks — your review is live!
              </p>
            ) : (
              <form onSubmit={submitReview} className="mt-6 rounded-2xl border border-sand bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold">Leave a review</h3>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <input
                    required
                    value={rev.author}
                    onChange={(e) => setRev({ ...rev, author: e.target.value })}
                    placeholder="Your name"
                    className="rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40"
                  />
                  <div className="flex items-center gap-1 px-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <button
                        key={i}
                        type="button"
                        onClick={() => setRev({ ...rev, rating: i })}
                        className={`text-2xl transition ${i <= rev.rating ? 'text-amber-500' : 'text-sand'}`}
                        aria-label={`${i} stars`}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  required
                  value={rev.text}
                  onChange={(e) => setRev({ ...rev, text: e.target.value })}
                  placeholder="How was your experience?"
                  rows={3}
                  className="mt-3 w-full rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40"
                />
                <button type="submit" className="btn-secondary mt-3 !py-2 text-sm">Submit review</button>
              </form>
            )}
          </div>
        </div>

        {/* Enquiry form */}
        <div id="enquire" className="h-fit rounded-2xl border border-sand bg-white p-7 shadow-lg lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-semibold">Enquire with {guide.name.split(' ')[0]}</h2>
          <p className="mt-1 text-sm text-ink/60">
            Sent through the portal — your details are only shared with this guide.
          </p>
          {enqDone ? (
            <p className="mt-5 rounded-2xl bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
              🎉 Enquiry sent! {guide.name.split(' ')[0]} usually replies within a day.
            </p>
          ) : (
            <form onSubmit={submitEnquiry} className="mt-5 space-y-3">
              <input
                required
                value={enq.name}
                onChange={(e) => setEnq({ ...enq, name: e.target.value })}
                placeholder="Your name"
                className="w-full rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40"
              />
              <input
                required
                type="email"
                value={enq.email}
                onChange={(e) => setEnq({ ...enq, email: e.target.value })}
                placeholder="Your email"
                className="w-full rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40"
              />
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="date"
                  value={enq.travelDate}
                  onChange={(e) => setEnq({ ...enq, travelDate: e.target.value })}
                  className="rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40"
                />
                <select
                  value={enq.groupSize}
                  onChange={(e) => setEnq({ ...enq, groupSize: e.target.value })}
                  className="rounded-xl border border-sand px-4 py-2.5 text-sm"
                >
                  {['1', '2', '3', '4', '5', '6+'].map((n) => (
                    <option key={n} value={n}>{n} {n === '1' ? 'person' : 'people'}</option>
                  ))}
                </select>
              </div>
              <textarea
                required
                value={enq.message}
                onChange={(e) => setEnq({ ...enq, message: e.target.value })}
                placeholder="Tell the guide about your trip — dates, interests, dietary needs…"
                rows={4}
                className="w-full rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40"
              />
              {enqError && <p className="text-sm text-red-600">{enqError}</p>}
              <button type="submit" className="btn-primary w-full">Send enquiry — free</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
