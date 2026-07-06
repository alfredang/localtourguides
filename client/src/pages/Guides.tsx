import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { api, Guide } from '../lib/api';
import { GuideCard } from '../components/Shared';
import { destinations } from '../data/destinations';

const languages = ['English', 'Mandarin', 'Malay', 'Tamil', 'Japanese', 'Korean', 'Cantonese'];

export default function Guides() {
  const [params, setParams] = useSearchParams();
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const q = params.get('q') || '';
  const country = params.get('country') || '';
  const language = params.get('language') || '';
  const verified = params.get('verified') || '';
  const [search, setSearch] = useState(q);

  useEffect(() => {
    setLoading(true);
    const qs = new URLSearchParams();
    if (q) qs.set('q', q);
    if (country) qs.set('country', country);
    if (language) qs.set('language', language);
    if (verified) qs.set('verified', verified);
    api<Guide[]>(`/guides?${qs.toString()}`)
      .then(setGuides)
      .finally(() => setLoading(false));
  }, [q, country, language, verified]);

  function update(key: string, value: string) {
    const next = new URLSearchParams(params);
    if (value) next.set(key, value);
    else next.delete(key);
    setParams(next);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-bold sm:text-4xl">Find your local guide</h1>
      <p className="mt-2 text-ink/60">
        Featured and verified guides always appear first — that’s how we rank every search.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          update('q', search);
        }}
        className="mt-6 flex flex-col gap-3 lg:flex-row"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search itineraries, neighbourhoods, specialties…"
          className="flex-1 rounded-full border border-sand bg-white px-5 py-3 shadow-sm outline-none focus:ring-2 focus:ring-terra/40"
        />
        <select
          value={country}
          onChange={(e) => update('country', e.target.value)}
          className="rounded-full border border-sand bg-white px-4 py-3 text-sm shadow-sm"
        >
          <option value="">All countries</option>
          {destinations.map((d) => (
            <option key={d.slug} value={d.country}>{d.flag} {d.country}</option>
          ))}
        </select>
        <select
          value={language}
          onChange={(e) => update('language', e.target.value)}
          className="rounded-full border border-sand bg-white px-4 py-3 text-sm shadow-sm"
        >
          <option value="">Any language</option>
          {languages.map((l) => (
            <option key={l} value={l}>{l}</option>
          ))}
        </select>
        <label className="flex items-center gap-2 rounded-full border border-sand bg-white px-4 py-3 text-sm shadow-sm">
          <input
            type="checkbox"
            checked={verified === '1'}
            onChange={(e) => update('verified', e.target.checked ? '1' : '')}
            className="accent-terra"
          />
          Verified only
        </label>
        <button type="submit" className="btn-primary !py-3">Search</button>
      </form>

      {loading ? (
        <p className="mt-16 text-center text-ink/50">Loading guides…</p>
      ) : guides.length === 0 ? (
        <p className="mt-16 text-center text-ink/50">No guides match your search — try different keywords.</p>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {guides.map((g) => (
            <GuideCard key={g.id} guide={g} />
          ))}
        </div>
      )}
    </div>
  );
}
