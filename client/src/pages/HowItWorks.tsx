import { Link } from 'react-router-dom';

const travellerSteps = [
  {
    icon: '🔍',
    title: 'Search & compare',
    text: 'Browse itineraries by destination, language or specialty. Featured and verified guides always rank first, so the most trusted locals are the first you see.',
  },
  {
    icon: '💬',
    title: 'Enquire for free',
    text: 'Send your dates, group size and interests through the portal. No booking fees, and your contact details are only shared with the guide you choose.',
  },
  {
    icon: '🤝',
    title: 'Meet & explore',
    text: 'Confirm the details together and meet your guide on the ground for a day designed around you — not a script.',
  },
  {
    icon: '⭐',
    title: 'Rate your experience',
    text: 'Leave a star rating and review afterwards. Your feedback keeps quality high and helps the best guides get discovered.',
  },
];

const guideSteps = [
  {
    icon: '📝',
    title: 'List yourself free',
    text: 'A free account includes your profile and one full itinerary — live immediately, no credit card needed.',
  },
  {
    icon: '🛡️',
    title: 'Get verified',
    text: 'Upload your selfie and NRIC, then pass a short live online interview. Your documents are reviewed privately and never displayed.',
  },
  {
    icon: '🚀',
    title: 'Go Featured',
    text: 'Verified guides can upgrade to Featured for top-of-search placement, a highlighted badge and priority in destination pages.',
  },
  {
    icon: '📥',
    title: 'Receive enquiries',
    text: 'Traveller enquiries land in your dashboard inbox. Reply on your terms and build your reputation with reviews.',
  },
];

export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="font-display text-4xl font-bold">How LocalTourGuides works</h1>
        <p className="mt-3 text-ink/60">
          A simple, trusted way to connect travellers with the locals who know their cities best.
        </p>
      </div>

      <h2 className="section-title mt-14">For travellers</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {travellerSteps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-sand bg-white p-7 shadow-sm">
            <span className="text-3xl">{s.icon}</span>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-terra">Step {i + 1}</p>
            <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title mt-14">For guides</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {guideSteps.map((s, i) => (
          <div key={s.title} className="rounded-2xl border border-sand bg-white p-7 shadow-sm">
            <span className="text-3xl">{s.icon}</span>
            <p className="mt-3 text-xs font-bold uppercase tracking-widest text-green-600">Step {i + 1}</p>
            <h3 className="mt-1 font-display text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-4">
        <Link to="/guides" className="btn-primary">Find a guide</Link>
        <Link to="/signup" className="btn-secondary">List yourself free</Link>
      </div>
    </div>
  );
}
