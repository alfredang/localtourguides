export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl font-bold">Privacy Policy</h1>
      <div className="mt-8 space-y-6 leading-relaxed text-ink/80">
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">What we collect</h2>
          <p className="mt-2">
            Traveller enquiries (name, email, message) are shared only with the specific guide you
            contact. Lead-magnet signups store your email for the requested download. Guide accounts store
            an email address and password hash.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Verification documents</h2>
          <p className="mt-2">
            Selfie photos, NRIC images and qualification documents uploaded for verification are stored
            securely, reviewed privately by our verification team, and used for no other purpose. They are
            never displayed publicly, never shared with travellers, and never included in any public API
            response. Only the resulting Verified badge is visible.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">What is public</h2>
          <p className="mt-2">
            A guide’s public profile shows only the information they choose to publish: name, photo,
            bio, city, languages, specialties, itinerary and reviews. Contact details are never shown —
            all communication flows through the portal.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-ink">Contact</h2>
          <p className="mt-2">
            Questions about your data? Message us on WhatsApp at +65 8866 6375.
          </p>
        </section>
      </div>
    </div>
  );
}
