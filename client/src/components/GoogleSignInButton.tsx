import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../lib/auth';

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string | undefined;
const SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

declare global {
  interface Window {
    google?: any;
  }
}

/** Load the Google Identity Services script once, shared across mounts. */
let scriptPromise: Promise<void> | null = null;
function loadGis(): Promise<void> {
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    if (window.google?.accounts?.id) return resolve();
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    const el = existing ?? document.createElement('script');
    el.addEventListener('load', () => resolve());
    el.addEventListener('error', () => reject(new Error('Could not reach Google')));
    if (!existing) {
      el.src = SCRIPT_SRC;
      el.async = true;
      el.defer = true;
      document.head.appendChild(el);
    }
  });
  return scriptPromise;
}

/**
 * Renders Google's official "Sign in with Google" button. Signing in with an
 * email we've never seen creates the guide account, so this doubles as signup.
 * Renders nothing when VITE_GOOGLE_CLIENT_ID is unset, which keeps the login
 * page working in dev setups that have no Google credentials configured.
 */
export default function GoogleSignInButton({ text = 'signin_with' }: { text?: 'signin_with' | 'signup_with' }) {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const holder = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!CLIENT_ID) return;
    let cancelled = false;

    loadGis()
      .then(() => {
        if (cancelled || !holder.current || !window.google?.accounts?.id) return;
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: async (response: { credential?: string }) => {
            if (!response?.credential) return setError('No credential returned by Google');
            try {
              const s = await loginWithGoogle(response.credential);
              navigate(s.role === 'admin' ? '/admin' : '/dashboard');
            } catch (err) {
              setError((err as Error).message);
            }
          },
        });
        // GIS renders into a fixed-width iframe, so the width has to be a
        // number. Measure the container and clamp to Google's supported range
        // (min 200) so the button never overflows the card on a phone.
        const available = Math.floor(holder.current.getBoundingClientRect().width);
        window.google.accounts.id.renderButton(holder.current, {
          type: 'standard',
          theme: 'outline',
          size: 'large',
          shape: 'pill',
          text,
          width: Math.max(200, Math.min(available || 320, 400)),
          logo_alignment: 'center',
        });
      })
      .catch(() => !cancelled && setError('Could not load Google sign-in'));

    return () => {
      cancelled = true;
    };
  }, [loginWithGoogle, navigate, text]);

  if (!CLIENT_ID) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <span className="h-px flex-1 bg-sand" />
        <span className="text-xs uppercase tracking-wide text-ink/40">or</span>
        <span className="h-px flex-1 bg-sand" />
      </div>
      <div ref={holder} className="flex justify-center [color-scheme:light]" />
      {error && <p className="text-center text-sm text-red-600">{error}</p>}
    </div>
  );
}
