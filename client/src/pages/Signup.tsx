import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { destinations } from '../data/destinations';

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', password: '', country: 'Singapore', city: 'Singapore' });
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      await signup(form);
      navigate('/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="text-center font-display text-3xl font-bold">List yourself free</h1>
      <p className="mt-2 text-center text-sm text-ink/60">
        Free accounts include your profile and one full itinerary. Get verified when you’re ready.
      </p>
      <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-sand bg-white p-8 shadow-md">
        <input
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Full name"
          className="w-full rounded-xl border border-sand px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-terra/40"
        />
        <input
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full rounded-xl border border-sand px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-terra/40"
        />
        <input
          type="password"
          required
          minLength={6}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          placeholder="Password (min 6 characters)"
          className="w-full rounded-xl border border-sand px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-terra/40"
        />
        <div className="grid grid-cols-2 gap-3">
          <select
            value={form.country}
            onChange={(e) => setForm({ ...form, country: e.target.value })}
            className="rounded-xl border border-sand px-4 py-3 text-sm"
          >
            {destinations.map((d) => (
              <option key={d.slug} value={d.country}>{d.country}</option>
            ))}
          </select>
          <input
            required
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            placeholder="City"
            className="rounded-xl border border-sand px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-terra/40"
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="btn-primary w-full">Create my free listing</button>
        <p className="text-center text-sm text-ink/60">
          Already listed?{' '}
          <Link to="/login" className="font-semibold text-terra hover:underline">Log in</Link>
        </p>
      </form>
    </div>
  );
}
