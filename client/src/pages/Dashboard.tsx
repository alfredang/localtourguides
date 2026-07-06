import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api, GuideDetail, Enquiry, ItineraryStop } from '../lib/api';
import { useAuth } from '../lib/auth';
import { VerifiedBadge, FeaturedBadge } from '../components/Shared';

type Tab = 'profile' | 'itinerary' | 'enquiries' | 'verification';

export default function Dashboard() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [tab, setTab] = useState<Tab>('profile');
  const [me, setMe] = useState<GuideDetail | null>(null);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [saved, setSaved] = useState('');

  useEffect(() => {
    if (!session) {
      navigate('/login');
      return;
    }
    load();
  }, [session]);

  function load() {
    api<GuideDetail>('/me').then(setMe).catch(() => navigate('/login'));
    api<Enquiry[]>('/me/enquiries').then(setEnquiries).catch(() => {});
  }

  function flash(msg: string) {
    setSaved(msg);
    setTimeout(() => setSaved(''), 3000);
  }

  if (!me) return <p className="py-24 text-center text-ink/50">Loading your dashboard…</p>;

  const tabs: { key: Tab; label: string }[] = [
    { key: 'profile', label: 'Profile' },
    { key: 'itinerary', label: 'My Itinerary' },
    { key: 'enquiries', label: `Enquiries (${enquiries.filter((e) => e.status === 'new').length} new)` },
    { key: 'verification', label: 'Verification' },
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex flex-wrap items-center gap-3">
        {me.photoUrl ? (
          <img src={me.photoUrl} alt={me.name} className="h-14 w-14 rounded-full object-cover shadow" />
        ) : (
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-terra text-2xl text-white shadow">🧭</span>
        )}
        <div>
          <h1 className="font-display text-2xl font-bold">Welcome back, {me.name.split(' ')[0]}</h1>
          <div className="mt-1 flex gap-2">
            {me.isFeatured && <FeaturedBadge />}
            {me.isVerified ? (
              <VerifiedBadge />
            ) : (
              <span className="rounded-full bg-sand px-2.5 py-0.5 text-xs font-semibold text-ink/60">
                Free listing — not yet verified
              </span>
            )}
          </div>
        </div>
        <Link to={`/guides/${me.slug}`} className="ml-auto text-sm font-semibold text-terra hover:underline">
          View public profile →
        </Link>
      </div>

      {saved && (
        <p className="mt-4 rounded-2xl bg-green-50 px-5 py-3 text-sm font-semibold text-green-700">{saved}</p>
      )}

      <div className="mt-8 flex flex-wrap gap-2 border-b border-sand pb-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              tab === t.key ? 'bg-terra text-white' : 'bg-white text-ink/60 shadow-sm hover:text-terra'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === 'profile' && <ProfileTab me={me} onSaved={() => { flash('Profile saved!'); load(); }} />}
        {tab === 'itinerary' && <ItineraryTab me={me} onSaved={() => { flash('Itinerary saved!'); load(); }} />}
        {tab === 'enquiries' && <EnquiriesTab enquiries={enquiries} onChange={load} />}
        {tab === 'verification' && <VerificationTab me={me} onSubmitted={() => { flash('Verification submitted — we will contact you to schedule your interview.'); load(); }} />}
      </div>
    </div>
  );
}

function ProfileTab({ me, onSaved }: { me: GuideDetail; onSaved: () => void }) {
  const [form, setForm] = useState({
    name: me.name,
    tagline: me.tagline,
    bio: me.bio,
    city: me.city,
    country: me.country,
    photoUrl: me.photoUrl,
    priceFrom: me.priceFrom,
    languages: me.languages.join(', '),
    specialties: me.specialties.join(', '),
    yearsExperience: me.yearsExperience,
  });

  async function save(e: React.FormEvent) {
    e.preventDefault();
    await api('/me', {
      method: 'PUT',
      body: JSON.stringify({
        ...form,
        priceFrom: Number(form.priceFrom) || 0,
        yearsExperience: Number(form.yearsExperience) || 1,
        languages: form.languages.split(',').map((s) => s.trim()).filter(Boolean),
        specialties: form.specialties.split(',').map((s) => s.trim()).filter(Boolean),
      }),
    });
    onSaved();
  }

  const input = 'w-full rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40';
  return (
    <form onSubmit={save} className="space-y-4 rounded-2xl border border-sand bg-white p-7 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Name
          <input className={`${input} mt-1`} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label className="text-sm font-semibold">Photo URL
          <input className={`${input} mt-1`} value={form.photoUrl} onChange={(e) => setForm({ ...form, photoUrl: e.target.value })} />
        </label>
      </div>
      <label className="block text-sm font-semibold">Tagline
        <input className={`${input} mt-1`} value={form.tagline} onChange={(e) => setForm({ ...form, tagline: e.target.value })} placeholder="e.g. Hawker food trails through Chinatown" />
      </label>
      <label className="block text-sm font-semibold">Bio
        <textarea rows={4} className={`${input} mt-1`} value={form.bio} onChange={(e) => setForm({ ...form, bio: e.target.value })} />
      </label>
      <div className="grid gap-4 sm:grid-cols-3">
        <label className="text-sm font-semibold">City
          <input className={`${input} mt-1`} value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
        </label>
        <label className="text-sm font-semibold">Price from (S$)
          <input type="number" className={`${input} mt-1`} value={form.priceFrom} onChange={(e) => setForm({ ...form, priceFrom: Number(e.target.value) })} />
        </label>
        <label className="text-sm font-semibold">Years of experience
          <input type="number" className={`${input} mt-1`} value={form.yearsExperience} onChange={(e) => setForm({ ...form, yearsExperience: Number(e.target.value) })} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Languages (comma separated)
          <input className={`${input} mt-1`} value={form.languages} onChange={(e) => setForm({ ...form, languages: e.target.value })} />
        </label>
        <label className="text-sm font-semibold">Specialties (comma separated)
          <input className={`${input} mt-1`} value={form.specialties} onChange={(e) => setForm({ ...form, specialties: e.target.value })} />
        </label>
      </div>
      <button type="submit" className="btn-primary">Save profile</button>
    </form>
  );
}

function ItineraryTab({ me, onSaved }: { me: GuideDetail; onSaved: () => void }) {
  const it = me.itinerary;
  const [form, setForm] = useState({
    title: it?.title || '',
    summary: it?.summary || '',
    duration: it?.duration || '',
    coverImage: it?.coverImage || '',
    highlights: (it?.highlights || []).join('\n'),
  });
  const [stops, setStops] = useState<ItineraryStop[]>(it?.stops?.length ? it.stops : [{ time: '', place: '', description: '' }]);

  async function save(e: React.FormEvent) {
    e.preventDefault();
    await api('/me/itinerary', {
      method: 'PUT',
      body: JSON.stringify({
        ...form,
        highlights: form.highlights.split('\n').map((s) => s.trim()).filter(Boolean),
        stops: stops.filter((s) => s.place),
      }),
    });
    onSaved();
  }

  const input = 'w-full rounded-xl border border-sand px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-terra/40';
  return (
    <form onSubmit={save} className="space-y-4 rounded-2xl border border-sand bg-white p-7 shadow-sm">
      <p className="rounded-xl bg-amber-50 px-4 py-3 text-xs text-ink/70">
        Free accounts include <strong>one itinerary</strong> — make it count! This is what travellers see
        and search for.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">Title
          <input required className={`${input} mt-1`} value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="e.g. Chinatown Hawker Heritage Trail" />
        </label>
        <label className="text-sm font-semibold">Duration
          <input className={`${input} mt-1`} value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} placeholder="e.g. 4 hours" />
        </label>
      </div>
      <label className="block text-sm font-semibold">Summary
        <textarea rows={3} className={`${input} mt-1`} value={form.summary} onChange={(e) => setForm({ ...form, summary: e.target.value })} />
      </label>
      <label className="block text-sm font-semibold">Cover image URL
        <input className={`${input} mt-1`} value={form.coverImage} onChange={(e) => setForm({ ...form, coverImage: e.target.value })} placeholder="Leave blank for an automatic image" />
      </label>
      <label className="block text-sm font-semibold">Highlights (one per line)
        <textarea rows={4} className={`${input} mt-1`} value={form.highlights} onChange={(e) => setForm({ ...form, highlights: e.target.value })} />
      </label>

      <div>
        <p className="text-sm font-semibold">Stops</p>
        <div className="mt-2 space-y-3">
          {stops.map((s, i) => (
            <div key={i} className="grid gap-2 rounded-xl bg-cream p-3 sm:grid-cols-[110px_1fr_auto]">
              <input className={input} value={s.time} placeholder="9:00 AM" onChange={(e) => setStops(stops.map((x, j) => (j === i ? { ...x, time: e.target.value } : x)))} />
              <div className="space-y-2">
                <input className={input} value={s.place} placeholder="Place" onChange={(e) => setStops(stops.map((x, j) => (j === i ? { ...x, place: e.target.value } : x)))} />
                <input className={input} value={s.description} placeholder="What happens here?" onChange={(e) => setStops(stops.map((x, j) => (j === i ? { ...x, description: e.target.value } : x)))} />
              </div>
              <button type="button" onClick={() => setStops(stops.filter((_, j) => j !== i))} className="text-sm text-red-500 hover:underline">
                Remove
              </button>
            </div>
          ))}
        </div>
        <button type="button" onClick={() => setStops([...stops, { time: '', place: '', description: '' }])} className="mt-2 text-sm font-semibold text-terra hover:underline">
          + Add stop
        </button>
      </div>

      <button type="submit" className="btn-primary">Save itinerary</button>
    </form>
  );
}

function EnquiriesTab({ enquiries, onChange }: { enquiries: Enquiry[]; onChange: () => void }) {
  async function markReplied(id: number) {
    await api(`/me/enquiries/${id}/replied`, { method: 'POST' });
    onChange();
  }
  if (enquiries.length === 0)
    return (
      <p className="rounded-2xl border border-sand bg-white p-10 text-center text-ink/50">
        No enquiries yet. Verified and Featured guides receive the most enquiries — check the
        Verification tab!
      </p>
    );
  return (
    <div className="space-y-4">
      {enquiries.map((e) => (
        <div key={e.id} className="rounded-2xl border border-sand bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-semibold">{e.name}</p>
            <a href={`mailto:${e.email}`} className="text-sm text-terra hover:underline">{e.email}</a>
            {e.status === 'new' ? (
              <span className="rounded-full bg-terra/10 px-2.5 py-0.5 text-xs font-semibold text-terra">New</span>
            ) : (
              <span className="rounded-full bg-sand px-2.5 py-0.5 text-xs font-semibold text-ink/50">Replied</span>
            )}
            <span className="ml-auto text-xs text-ink/40">{e.createdAt?.slice(0, 16).replace('T', ' ')}</span>
          </div>
          <p className="mt-2 text-sm text-ink/60">
            {e.travelDate && <>📅 {e.travelDate} · </>}👥 {e.groupSize || '—'} people
          </p>
          <p className="mt-3 rounded-xl bg-cream px-4 py-3 text-sm leading-relaxed">{e.message}</p>
          {e.status === 'new' && (
            <button onClick={() => markReplied(e.id)} className="btn-secondary mt-4 !py-2 text-xs">
              Mark as replied
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

function VerificationTab({ me, onSubmitted }: { me: GuideDetail; onSubmitted: () => void }) {
  const [selfie, setSelfie] = useState<File | null>(null);
  const [nric, setNric] = useState<File | null>(null);
  const [qualification, setQualification] = useState<File | null>(null);
  const [error, setError] = useState('');
  const v = me.verification;

  if (me.isVerified)
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
        <p className="text-4xl">🎉</p>
        <h2 className="mt-2 font-display text-xl font-semibold text-green-700">You’re verified!</h2>
        <p className="mt-2 text-sm text-ink/70">
          The green badge is live on your profile{me.isFeatured ? ' and you’re Featured at the top of search.' : '. Want more enquiries? Contact us on WhatsApp to become Featured.'}
        </p>
      </div>
    );

  if (v && v.status === 'submitted')
    return (
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-8 text-center">
        <p className="text-4xl">⏳</p>
        <h2 className="mt-2 font-display text-xl font-semibold">Verification in review</h2>
        <p className="mt-2 text-sm text-ink/70">
          Documents received on {v.created_at?.slice(0, 10)}. Interview status:{' '}
          <strong>{v.interview_status}</strong>. We’ll reach out to schedule your live online interview.
        </p>
      </div>
    );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    if (!selfie || !nric) {
      setError('A selfie photo and NRIC image are required.');
      return;
    }
    const fd = new FormData();
    fd.append('selfie', selfie);
    fd.append('nric', nric);
    if (qualification) fd.append('qualification', qualification);
    try {
      await api('/me/verification', { method: 'POST', body: fd });
      onSubmitted();
    } catch (err) {
      setError((err as Error).message);
    }
  }

  const fileInput = 'mt-1 w-full rounded-xl border border-dashed border-sand bg-cream px-4 py-3 text-sm';
  return (
    <form onSubmit={submit} className="space-y-5 rounded-2xl border border-sand bg-white p-7 shadow-sm">
      {v?.status === 'rejected' && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
          Your previous submission was not approved. You may submit again.
        </p>
      )}
      <div>
        <h2 className="font-display text-xl font-semibold">Get your verified badge</h2>
        <p className="mt-1 text-sm text-ink/60">
          Three steps: upload documents → live online interview → badge goes live. Your documents are
          reviewed privately and <strong>never displayed publicly</strong>.
        </p>
      </div>
      <label className="block text-sm font-semibold">1 · Selfie photo (required)
        <input type="file" accept="image/*" className={fileInput} onChange={(e) => setSelfie(e.target.files?.[0] || null)} />
      </label>
      <label className="block text-sm font-semibold">2 · NRIC / national ID (required)
        <input type="file" accept="image/*,.pdf" className={fileInput} onChange={(e) => setNric(e.target.files?.[0] || null)} />
      </label>
      <label className="block text-sm font-semibold">3 · Tour guide licence or qualification (optional)
        <input type="file" accept="image/*,.pdf" className={fileInput} onChange={(e) => setQualification(e.target.files?.[0] || null)} />
      </label>
      <p className="rounded-xl bg-cream px-4 py-3 text-xs text-ink/60">
        After we review your documents, we’ll contact you to schedule a <strong>10–15 minute live
        online interview</strong> — a friendly chat to confirm your identity and local knowledge.
      </p>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button type="submit" className="btn-primary">Submit for verification</button>
    </form>
  );
}
