import { createContext, useContext, useState, ReactNode } from 'react';
import { api } from './api';

interface Session {
  token: string;
  role: string;
  guideId: number | null;
}

interface AuthContextValue {
  session: Session | null;
  login: (email: string, password: string) => Promise<Session>;
  signup: (payload: { name: string; email: string; password: string; country: string; city: string }) => Promise<Session>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValue>(null!);

function loadSession(): Session | null {
  const token = localStorage.getItem('ltg_token');
  const role = localStorage.getItem('ltg_role');
  const guideId = localStorage.getItem('ltg_guide_id');
  if (!token || !role) return null;
  return { token, role, guideId: guideId ? Number(guideId) : null };
}

function storeSession(s: Session) {
  localStorage.setItem('ltg_token', s.token);
  localStorage.setItem('ltg_role', s.role);
  if (s.guideId != null) localStorage.setItem('ltg_guide_id', String(s.guideId));
  else localStorage.removeItem('ltg_guide_id');
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(loadSession);

  async function login(email: string, password: string) {
    const s = await api<Session>('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    storeSession(s);
    setSession(s);
    return s;
  }

  async function signup(payload: { name: string; email: string; password: string; country: string; city: string }) {
    const s = await api<Session>('/auth/signup', { method: 'POST', body: JSON.stringify(payload) });
    storeSession(s);
    setSession(s);
    return s;
  }

  function logout() {
    localStorage.removeItem('ltg_token');
    localStorage.removeItem('ltg_role');
    localStorage.removeItem('ltg_guide_id');
    setSession(null);
  }

  return <AuthContext.Provider value={{ session, login, signup, logout }}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
