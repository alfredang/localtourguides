export interface Guide {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  bio: string;
  country: string;
  city: string;
  languages: string[];
  yearsExperience: number;
  specialties: string[];
  photoUrl: string;
  isVerified: boolean;
  isFeatured: boolean;
  priceFrom: number;
  ratingAvg: number;
  ratingCount: number;
  coverImage?: string | null;
  itineraryTitle?: string | null;
}

export interface Tour {
  title: string;
  summary: string;
  duration: string;
  coverImage: string;
  guide: Guide;
}

export interface ItineraryStop {
  time: string;
  place: string;
  description: string;
}

export interface Itinerary {
  id: number;
  title: string;
  summary: string;
  duration: string;
  coverImage: string;
  highlights: string[];
  stops: ItineraryStop[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface GuideDetail extends Guide {
  itinerary: Itinerary | null;
  reviews: Review[];
  plan?: string;
  verification?: { id: number; interview_status: string; status: string; created_at: string } | null;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  coverImage: string;
  category: string;
  author: string;
  publishedAt: string;
}

export interface Enquiry {
  id: number;
  name: string;
  email: string;
  travelDate: string | null;
  groupSize: string | null;
  message: string;
  status: string;
  createdAt: string;
}

export interface Stats {
  guides: number;
  countries: number;
  reviews: number;
  avgRating: number;
}

export function getToken() {
  return localStorage.getItem('ltg_token');
}

export async function api<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    ...(options.headers as Record<string, string> | undefined),
  };
  if (!(options.body instanceof FormData)) headers['Content-Type'] = 'application/json';
  const token = getToken();
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`/api${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as { error?: string }).error || `Request failed (${res.status})`);
  return data as T;
}
