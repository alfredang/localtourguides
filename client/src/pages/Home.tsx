import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api, Guide, BlogPost, Stats, Tour } from '../lib/api';
import { GuideCard, TourCard, LeadMagnet, Stars } from '../components/Shared';
import { destinations, heroSlides, HeroSlide } from '../data/destinations';

const testimonials = [
  {
    quote:
      'Wei Ming took us through hawker stalls we would never have found on our own. It felt like eating with an old friend who happens to know every auntie in Chinatown.',
    name: 'Rachel T.',
    detail: 'Family trip from Australia',
  },
  {
    quote:
      'The verification badge is what convinced me to book. Our guide was exactly who she said she was — knowledgeable, warm, and full of stories about growing up in Joo Chiat.',
    name: 'Daniel M.',
    detail: 'Solo traveller from the UK',
  },
  {
    quote:
      'We sent an enquiry at 9pm and had a personalised itinerary in our inbox by breakfast. The whole trip was planned around our kids and it was perfect.',
    name: 'Ayesha R.',
    detail: 'Family of five from Dubai',
  },
];

const howItWorks = [
  {
    icon: '🗺️',
    title: 'Browse itineraries',
    text: 'Explore day plans crafted by locals — food trails, heritage walks, hidden neighbourhoods. Filter by city, language and verified status.',
  },
  {
    icon: '💬',
    title: 'Send a free enquiry',
    text: 'Message any guide through the portal with your dates and group size. No fees, no commitment — your contact details stay private.',
  },
  {
    icon: '🤝',
    title: 'Meet your local',
    text: 'Agree on the details and meet your guide on the ground. Leave a star rating afterwards to help fellow travellers.',
  },
];

const verifySteps = [
  {
    step: 'Step 1',
    title: 'Create a free listing',
    text: 'Sign up and publish your itinerary at no cost. Your listing stays live — free accounts include one full itinerary.',
  },
  {
    step: 'Step 2',
    title: 'Upload documents',
    text: 'Submit a selfie photo and NRIC (plus any guiding licence). Reviewed privately by our team — never shown publicly.',
  },
  {
    step: 'Step 3',
    title: 'Live online interview',
    text: 'A short video call where we verify your identity and real local knowledge — not just a form submission.',
  },
  {
    step: 'Step 4',
    title: 'Verified badge goes live',
    text: 'Pass and the green ✓ badge appears on your profile instantly — plus you unlock Featured placement at the top of search.',
  },
];

function CollageColumn({ slides, speed }: { slides: HeroSlide[]; speed: string }) {
  // The list is duplicated so the -50% translate loops seamlessly.
  const doubled = [...slides, ...slides];
  return (
    <div className={`flex flex-col gap-4 ${speed}`}>
      {doubled.map((s, i) => (
        <figure key={i} className="relative w-44 shrink-0 overflow-hidden rounded-2xl shadow-lg sm:w-52">
          <img src={s.image} alt={`${s.caption}, ${s.place}`} loading="lazy" className="h-56 w-full object-cover sm:h-64" />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-ink/80 to-transparent px-3 pb-2.5 pt-8">
            <p className="text-sm font-semibold text-white">{s.caption}</p>
            <p className="text-xs text-white/75">{s.place}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function Home() {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    api<Guide[]>('/guides').then((g) => setGuides(g.slice(0, 6))).catch(() => {});
    api<Tour[]>('/tours?featured=1&limit=6').then(setTours).catch(() => {});
    api<BlogPost[]>('/blog').then((p) => setPosts(p.slice(0, 3))).catch(() => {});
    api<Stats>('/stats').then(setStats).catch(() => {});
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-cream to-amber-50">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-terra/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_460px] lg:py-10">
          <div>
            <p className="font-semibold uppercase tracking-widest text-terra">
              Singapore · Malaysia · China · Japan · Korea
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight sm:text-5xl xl:text-6xl">
              Explore like a local, <span className="text-terra">with a local</span>
            </h1>
            <p className="mt-4 max-w-xl text-lg text-ink/70">
              Skip the tour buses. Wander hawker lanes, hidden temples and kampung backstreets with
              verified local guides who grew up there — every itinerary handcrafted, every enquiry free.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                navigate(`/guides?q=${encodeURIComponent(q)}`);
              }}
              className="mt-6 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Try 'hawker food' or 'Kyoto temples'…"
                className="flex-1 rounded-full border border-sand bg-white px-5 py-3.5 shadow-sm outline-none focus:ring-2 focus:ring-terra/40"
              />
              <button type="submit" className="btn-primary">Search Guides</button>
            </form>

            <div className="mt-3 flex flex-wrap gap-3">
              <Link to="/guides" className="text-sm font-semibold text-terra hover:underline">
                Find a guide →
              </Link>
              <Link to="/signup" className="text-sm font-semibold text-ink/60 hover:underline">
                Are you a guide? List yourself free →
              </Link>
            </div>

            <div className="mt-7 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { value: stats ? `${stats.guides}+` : '—', label: 'Local guides' },
                { value: stats ? String(stats.countries) : '—', label: 'Countries' },
                { value: stats ? `${stats.avgRating}★` : '—', label: 'Average rating' },
                { value: stats ? `${stats.reviews}+` : '—', label: 'Traveller reviews' },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl bg-white/80 p-3.5 text-center shadow-sm backdrop-blur">
                  <p className="font-display text-2xl font-bold text-terra">{s.value}</p>
                  <p className="text-xs font-medium text-ink/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-scrolling destination collage */}
          <div
            className="relative hidden h-[520px] overflow-hidden lg:flex lg:justify-end lg:gap-4"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 8%, black 92%, transparent)',
            }}
            aria-hidden="true"
          >
            <CollageColumn slides={heroSlides[0]} speed="animate-scroll-slow" />
            <div className="pt-16">
              <CollageColumn slides={heroSlides[1]} speed="animate-scroll-slower" />
            </div>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">Special destinations</h2>
            <p className="mt-1.5 text-ink/60">Five countries, hundreds of stories only locals can tell.</p>
          </div>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              to={`/destinations/${d.slug}`}
              className="group overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-36 overflow-hidden">
                <img
                  src={d.image}
                  alt={d.country}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-semibold">
                  {d.flag} {d.country}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-ink/60">{d.blurb}</p>
                <p className="mt-2 text-xs font-semibold text-terra">
                  {d.spots.slice(0, 2).map((s) => s.name).join(' · ')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured tours */}
      <section className="bg-sky-50/70 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="section-title">Featured tours</h2>
              <p className="mt-1.5 text-ink/60">Handcrafted itineraries from our featured local guides.</p>
            </div>
            <Link to="/guides" className="hidden font-semibold text-terra hover:underline sm:block">
              Browse all →
            </Link>
          </div>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => (
              <TourCard key={t.guide.slug} tour={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured guides */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">Featured guides</h2>
            <p className="mt-1.5 text-ink/60">Featured and verified locals, ranked to the top of every search.</p>
          </div>
          <Link to="/guides" className="hidden font-semibold text-terra hover:underline sm:block">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.id} guide={g} />
          ))}
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link to="/guides" className="btn-secondary">View all guides</Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-sky-50/70 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-title text-center">How LocalTourGuides works</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {howItWorks.map((s, i) => (
              <div key={s.title} className="rounded-2xl border border-sand bg-white p-7 text-center shadow-sm">
                <span className="text-4xl">{s.icon}</span>
                <p className="mt-3 text-xs font-bold uppercase tracking-widest text-terra">Step {i + 1}</p>
                <h3 className="mt-1 font-display text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6" id="verification">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">How guide verification works</h2>
          <p className="mt-2 text-ink/70">
            The green <span className="font-semibold text-green-700">✓ Verified</span> badge means we
            checked the guide’s identity, credentials and real local knowledge — not just a form
            submission. Sensitive documents are never displayed publicly.
          </p>
        </div>
        <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {verifySteps.map((s) => (
            <div key={s.step} className="rounded-2xl border border-green-100 bg-green-50/50 p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-green-600">{s.step}</p>
              <h3 className="mt-2 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link to="/signup" className="btn-primary">Start free — get verified when you’re ready</Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-sky-50/70 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-title text-center">Travellers love going local</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-sand bg-white p-7 shadow-sm">
                <Stars rating={5} />
                <blockquote className="mt-3 text-sm leading-relaxed text-ink/80">“{t.quote}”</blockquote>
                <figcaption className="mt-4">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />

      {/* Blog preview */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="section-title">The Travel Table</h2>
            <p className="mt-1.5 text-ink/60">Stories, city guides and tips from our local guides.</p>
          </div>
          <Link to="/blog" className="hidden font-semibold text-terra hover:underline sm:block">
            Read the blog →
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <Link
              key={p.id}
              to={`/blog/${p.slug}`}
              className="group overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="h-44 overflow-hidden">
                <img
                  src={p.coverImage}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold uppercase tracking-widest text-terra">{p.category}</p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink/60">{p.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
