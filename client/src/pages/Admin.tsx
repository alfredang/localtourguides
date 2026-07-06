import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { api } from '../lib/api';
import { useAuth } from '../lib/auth';

interface VerificationRow {
  id: number;
  guideId: number;
  guideName: string;
  guideSlug: string;
  city: string;
  country: string;
  hasSelfie: boolean;
  hasNric: boolean;
  hasQualification: boolean;
  interviewStatus: string;
  status: string;
  createdAt: string;
}

interface AdminGuide {
  id: number;
  slug: string;
  name: string;
  city: string;
  country: string;
  isVerified: boolean;
  isFeatured: boolean;
  ratingAvg: number;
  ratingCount: number;
}

export default function Admin() {
  const { session } = useAuth();
  const navigate = useNavigate();
  const [verifications, setVerifications] = useState<VerificationRow[]>([]);
  const [guides, setGuides] = useState<AdminGuide[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!session || session.role !== 'admin') {
      navigate('/login');
      return;
    }
    load();
  }, [session]);

  function load() {
    api<VerificationRow[]>('/admin/verifications').then(setVerifications).catch((e) => setError(e.message));
    api<AdminGuide[]>('/admin/guides').then(setGuides).catch(() => {});
  }

  async function act(path: string) {
    await api(path, { method: 'POST' });
    load();
  }

  const pending = verifications.filter((v) => v.status === 'submitted');

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-bold">Admin console</h1>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

      <h2 className="mt-10 font-display text-xl font-semibold">
        Verification queue {pending.length > 0 && <span className="text-terra">({pending.length} pending)</span>}
      </h2>
      {verifications.length === 0 ? (
        <p className="mt-4 rounded-2xl border border-sand bg-white p-8 text-center text-ink/50">
          No verification requests yet.
        </p>
      ) : (
        <div className="mt-4 space-y-3">
          {verifications.map((v) => (
            <div key={v.id} className="flex flex-wrap items-center gap-3 rounded-2xl border border-sand bg-white p-5 shadow-sm">
              <div className="min-w-48">
                <Link to={`/guides/${v.guideSlug}`} className="font-semibold text-terra hover:underline">
                  {v.guideName}
                </Link>
                <p className="text-xs text-ink/50">{v.city}, {v.country} · {v.createdAt?.slice(0, 10)}</p>
              </div>
              <div className="flex gap-2 text-xs">
                <span className={`rounded-full px-2.5 py-1 font-semibold ${v.hasSelfie ? 'bg-green-100 text-green-700' : 'bg-sand text-ink/40'}`}>Selfie</span>
                <span className={`rounded-full px-2.5 py-1 font-semibold ${v.hasNric ? 'bg-green-100 text-green-700' : 'bg-sand text-ink/40'}`}>NRIC</span>
                <span className={`rounded-full px-2.5 py-1 font-semibold ${v.hasQualification ? 'bg-green-100 text-green-700' : 'bg-sand text-ink/40'}`}>Qualification</span>
                <span className="rounded-full bg-amber-100 px-2.5 py-1 font-semibold text-amber-700">Interview: {v.interviewStatus}</span>
              </div>
              <div className="ml-auto flex items-center gap-2">
                {v.status === 'submitted' ? (
                  <>
                    <button onClick={() => act(`/admin/verifications/${v.id}/approve`)} className="rounded-full bg-green-600 px-4 py-1.5 text-xs font-semibold text-white hover:bg-green-700">
                      Approve (interview passed)
                    </button>
                    <button onClick={() => act(`/admin/verifications/${v.id}/reject`)} className="rounded-full bg-red-500 px-4 py-1.5 text-xs font-semibold text-white hover:bg-red-600">
                      Reject
                    </button>
                  </>
                ) : (
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${v.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                    {v.status}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <h2 className="mt-12 font-display text-xl font-semibold">All guides</h2>
      <div className="mt-4 overflow-x-auto rounded-2xl border border-sand bg-white shadow-sm">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-cream text-xs uppercase tracking-wide text-ink/50">
            <tr>
              <th className="px-5 py-3">Guide</th>
              <th className="px-5 py-3">Location</th>
              <th className="px-5 py-3">Rating</th>
              <th className="px-5 py-3">Verified</th>
              <th className="px-5 py-3">Featured</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((g) => (
              <tr key={g.id} className="border-t border-sand">
                <td className="px-5 py-3">
                  <Link to={`/guides/${g.slug}`} className="font-semibold text-terra hover:underline">{g.name}</Link>
                </td>
                <td className="px-5 py-3 text-ink/60">{g.city}, {g.country}</td>
                <td className="px-5 py-3">{g.ratingAvg.toFixed(1)} ★ ({g.ratingCount})</td>
                <td className="px-5 py-3">{g.isVerified ? '✅' : '—'}</td>
                <td className="px-5 py-3">
                  <button
                    onClick={() => act(`/admin/guides/${g.id}/feature`)}
                    disabled={!g.isVerified && !g.isFeatured}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      g.isFeatured
                        ? 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                        : g.isVerified
                          ? 'bg-sand text-ink/60 hover:bg-amber-100 hover:text-amber-700'
                          : 'cursor-not-allowed bg-cream text-ink/30'
                    }`}
                    title={!g.isVerified && !g.isFeatured ? 'Only verified guides can be featured' : ''}
                  >
                    {g.isFeatured ? '★ Featured — click to remove' : 'Make featured'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
