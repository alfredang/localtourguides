export function publicGuide(row) {
  if (!row) return null;
  // Whitelist only — contact details and account data never leave the server.
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    tagline: row.tagline,
    bio: row.bio,
    country: row.country,
    city: row.city,
    languages: JSON.parse(row.languages || '[]'),
    yearsExperience: row.years_experience,
    specialties: JSON.parse(row.specialties || '[]'),
    photoUrl: row.photo_url,
    isVerified: !!row.is_verified,
    isFeatured: !!row.is_featured,
    priceFrom: row.price_from,
    ratingAvg: row.rating_avg,
    ratingCount: row.rating_count,
  };
}

export function publicItinerary(row) {
  if (!row) return null;
  return {
    id: row.id,
    title: row.title,
    summary: row.summary,
    duration: row.duration,
    coverImage: row.cover_image,
    highlights: JSON.parse(row.highlights || '[]'),
    stops: JSON.parse(row.stops || '[]'),
  };
}

export function publicReview(row) {
  return {
    id: row.id,
    author: row.author_name,
    rating: row.rating,
    text: row.text,
    date: row.created_at,
  };
}

export function publicPost(row, { withContent = false } = {}) {
  if (!row) return null;
  const post = {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    coverImage: row.cover_image,
    category: row.category,
    author: row.author,
    publishedAt: row.published_at,
  };
  if (withContent) post.content = row.content;
  return post;
}
