import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { api, Guide } from '../lib/api';
import { GuideCard } from '../components/Shared';
import { destinations } from '../data/destinations';

export default function Destination() {
  const { slug } = useParams();
  const dest = destinations.find((d) => d.slug === slug);
  const [guides, setGuides] = useState<Guide[]>([]);

  useEffect(() => {
    if (dest) {
      api<Guide[]>(`/guides?country=${encodeURIComponent(dest.country)}`).then(setGuides).catch(() => {});
    }
  }, [slug]);

  if (!dest)
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Destination not found</h1>
        <Link to="/" className="btn-primary mt-6">Back home</Link>
      </div>
    );

  return (
    <div>
      <section className="relative">
        <img src={dest.image} alt={dest.country} className="h-72 w-full object-cover sm:h-96" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-7xl px-4 pb-10 sm:px-6">
          <h1 className="font-display text-4xl font-bold text-white sm:text-5xl">
            {dest.flag} {dest.country}
          </h1>
          <p className="mt-2 max-w-2xl text-white/85">{dest.blurb}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="section-title">Signature spots</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dest.spots.map((s) => (
            <div key={s.name} className="rounded-2xl border border-sand bg-white p-6 shadow-sm">
              <h3 className="font-display text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand/50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="section-title">Local guides in {dest.country}</h2>
          {guides.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-sand bg-white p-10 text-center">
              <p className="text-ink/60">
                Guides for {dest.country} are joining soon. Are you a local expert?
              </p>
              <Link to="/signup" className="btn-primary mt-5">List yourself free</Link>
            </div>
          ) : (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {guides.map((g) => (
                <GuideCard key={g.id} guide={g} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
