import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    try {
      const s = await login(email, password);
      navigate(s.role === 'admin' ? '/admin' : '/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  }

  return (
    <div className="mx-auto max-w-md px-4 py-16 sm:px-6">
      <h1 className="text-center font-display text-3xl font-bold">Guide login</h1>
      <p className="mt-2 text-center text-sm text-ink/60">
        Manage your itinerary, enquiries and verification.
      </p>
      <form onSubmit={submit} className="mt-8 space-y-4 rounded-2xl border border-sand bg-white p-8 shadow-md">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-xl border border-sand px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-terra/40"
        />
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full rounded-xl border border-sand px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-terra/40"
        />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="btn-primary w-full">Log in</button>
        <p className="text-center text-sm text-ink/60">
          New here?{' '}
          <Link to="/signup" className="font-semibold text-terra hover:underline">
            List yourself free
          </Link>
        </p>
      </form>
    </div>
  );
}
