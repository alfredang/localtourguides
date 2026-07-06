import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { api, BlogPost } from '../lib/api';

const categories = ['All', 'City Guides', 'Food & Culture', 'Hidden Gems', 'Travel Tips', 'Guide Stories'];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [cat, setCat] = useState('All');

  useEffect(() => {
    api<BlogPost[]>('/blog').then(setPosts).catch(() => {});
  }, []);

  const filtered = cat === 'All' ? posts : posts.filter((p) => p.category === cat);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-bold">The Travel Table</h1>
        <p className="mt-3 text-ink/60">
          City guides, food trails and stories from the locals who know their streets best.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              cat === c ? 'bg-terra text-white' : 'bg-white text-ink/60 shadow-sm hover:text-terra'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link
            key={p.id}
            to={`/blog/${p.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-sand bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={p.coverImage}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-bold uppercase tracking-widest text-terra">{p.category}</p>
              <h2 className="mt-2 font-display text-lg font-semibold leading-snug">{p.title}</h2>
              <p className="mt-2 line-clamp-3 text-sm text-ink/60">{p.excerpt}</p>
              <p className="mt-auto pt-4 text-xs text-ink/40">
                {p.author} · {p.publishedAt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
