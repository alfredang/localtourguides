import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { marked } from 'marked';
import { api, BlogPost as Post } from '../lib/api';
import { SocialShare } from '../components/Shared';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    api<Post>(`/blog/${slug}`).then(setPost).catch(() => setNotFound(true));
  }, [slug]);

  if (notFound)
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Post not found</h1>
        <Link to="/blog" className="btn-primary mt-6">Back to the blog</Link>
      </div>
    );
  if (!post) return <p className="py-24 text-center text-ink/50">Loading…</p>;

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <Link to="/blog" className="text-sm font-semibold text-terra hover:underline">← The Travel Table</Link>
      <p className="mt-6 text-xs font-bold uppercase tracking-widest text-terra">{post.category}</p>
      <h1 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">{post.title}</h1>
      <p className="mt-3 text-sm text-ink/50">
        By {post.author} · {post.publishedAt}
      </p>
      <img src={post.coverImage} alt={post.title} className="mt-6 w-full rounded-2xl object-cover shadow-md" />
      <div
        className="prose-blog mt-8"
        dangerouslySetInnerHTML={{ __html: marked.parse(post.content || '') as string }}
      />
      <div className="mt-10 border-t border-sand pt-6">
        <SocialShare title={post.title} />
      </div>
      <div className="mt-10 rounded-2xl bg-gradient-to-br from-terra to-amber-600 p-8 text-center text-white">
        <h2 className="font-display text-2xl font-semibold">Ready to explore like a local?</h2>
        <p className="mt-2 text-white/85">Browse verified local guides and enquire for free.</p>
        <Link to="/guides" className="mt-4 inline-block rounded-full bg-white px-6 py-3 font-semibold text-terra transition hover:bg-amber-50">
          Find a guide
        </Link>
      </div>
    </article>
  );
}
