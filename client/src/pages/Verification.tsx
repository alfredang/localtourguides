import { Link } from 'react-router-dom';
import { VerifiedBadge, FeaturedBadge } from '../components/Shared';

const steps = [
  {
    title: '1 · Create your free listing',
    text: 'Sign up and publish your profile and itinerary at no cost. Verification is optional — but verified guides receive far more enquiries and rank higher in every search.',
  },
  {
    title: '2 · Upload your documents',
    text: 'From your dashboard, upload a clear selfie photo, your NRIC (front and back) and any tour-guide licence or qualification. Documents are reviewed privately by our team, stored securely, and never displayed anywhere on the site.',
  },
  {
    title: '3 · Live online interview',
    text: 'We schedule a short video call to confirm you match your documents and to chat about your local knowledge — the routes you know, the stories you tell. It’s friendly, not an exam.',
  },
  {
    title: '4 · Badge goes live',
    text: 'Once approved, the green ✓ Verified badge appears on your profile immediately and you unlock the option to become Featured for top-of-search placement.',
  },
];

export default function Verification() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
      <div className="text-center">
        <h1 className="font-display text-4xl font-bold">How guide verification works</h1>
        <p className="mx-auto mt-3 max-w-2xl text-ink/60">
          The <VerifiedBadge /> badge means we checked a guide’s identity, credentials and real local
          knowledge — not just a form submission.
        </p>
      </div>

      <div className="mt-10 space-y-5">
        {steps.map((s) => (
          <div key={s.title} className="rounded-2xl border border-sand bg-white p-7 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-green-700">{s.title}</h2>
            <p className="mt-2 leading-relaxed text-ink/70">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-green-50 p-7">
        <h2 className="font-display text-xl font-semibold">Your privacy, protected</h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          NRIC images and personal documents are used solely for verification. They are never shown on
          your public profile, never shared with travellers, and never appear in search results. Only the
          badge is public.
        </p>
      </div>

      <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-7">
        <h2 className="font-display text-xl font-semibold">
          Verified unlocks <FeaturedBadge />
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-ink/70">
          Featured guides appear at the very top of search results and destination pages, with a
          highlighted badge on their card. Only verified guides can become Featured — trust comes first.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link to="/signup" className="btn-primary">Start free — get verified when you’re ready</Link>
      </div>
    </div>
  );
}
