const U = (id: string) => `https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`;

export interface HeroSlide {
  image: string;
  caption: string;
  place: string;
}

// Verified destination photography for the hero collage
export const heroSlides: HeroSlide[][] = [
  [
    { image: U('1525625293386-3f8f99389edd'), caption: 'Marina Bay', place: 'Singapore' },
    { image: U('1493976040374-85c8e12f0c0e'), caption: 'Higashiyama lanes', place: 'Kyoto, Japan' },
    { image: U('1508804185872-d7badad00f7d'), caption: 'The Great Wall', place: 'China' },
    { image: U('1517154421773-0529f29ea451'), caption: 'Night market streets', place: 'Seoul, Korea' },
    { image: U('1508964942454-1a56651d54ac'), caption: 'Supertree Grove', place: 'Singapore' },
  ],
  [
    { image: U('1596422846543-75c6fc197f07'), caption: 'Petronas Towers', place: 'Kuala Lumpur, Malaysia' },
    { image: U('1478436127897-769e1b3f0f36'), caption: 'Fushimi Inari', place: 'Kyoto, Japan' },
    { image: U('1548115184-bc6544d06a58'), caption: 'Hanok rooftops', place: 'South Korea' },
    { image: U('1547981609-4b6bfe67ca0b'), caption: 'Forbidden City', place: 'Beijing, China' },
    { image: U('1565967511849-76a60a516170'), caption: 'The Merlion', place: 'Singapore' },
  ],
];

export interface Destination {
  country: string;
  slug: string;
  flag: string;
  blurb: string;
  image: string;
  spots: { name: string; note: string }[];
}

export const destinations: Destination[] = [
  {
    country: 'Singapore',
    slug: 'singapore',
    flag: '🇸🇬',
    blurb: 'Hawker culture, heritage shophouses and secret island escapes in the Lion City.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80&auto=format&fit=crop',
    spots: [
      { name: 'Kampong Glam', note: 'Textile alleys, Sultan Mosque and third-wave kopi' },
      { name: 'Tiong Bahru', note: 'Art-deco estates and Singapore’s best brunch' },
      { name: 'Pulau Ubin', note: 'The last kampung — by bicycle' },
      { name: 'Maxwell & Chinatown', note: 'Michelin-listed hawker legends' },
    ],
  },
  {
    country: 'Malaysia',
    slug: 'malaysia',
    flag: '🇲🇾',
    blurb: 'Street food capitals, colonial quarters and rainforest highlands next door.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=900&q=80&auto=format&fit=crop',
    spots: [
      { name: 'George Town, Penang', note: 'Street art and the world’s best char kway teow' },
      { name: 'Kuala Lumpur', note: 'Kampung Baru heritage against the Petronas skyline' },
      { name: 'Malacca', note: 'Peranakan mansions and Jonker Street nights' },
      { name: 'Cameron Highlands', note: 'Tea plantations in the clouds' },
    ],
  },
  {
    country: 'China',
    slug: 'china',
    flag: '🇨🇳',
    blurb: 'Imperial palaces, hidden hutongs and wild sections of the Great Wall.',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&q=80&auto=format&fit=crop',
    spots: [
      { name: 'Great Wall at Mutianyu', note: 'Watchtower hikes without the crowds' },
      { name: 'Beijing Hutongs', note: 'Courtyard life and dumpling masters' },
      { name: 'Shanghai French Concession', note: 'Plane-tree lanes and jazz-age villas' },
      { name: 'Xi’an Muslim Quarter', note: 'Biang biang noodles and night markets' },
    ],
  },
  {
    country: 'Japan',
    slug: 'japan',
    flag: '🇯🇵',
    blurb: 'Temple mornings, izakaya nights and seasons that transform every street.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=80&auto=format&fit=crop',
    spots: [
      { name: 'Kyoto', note: 'Dawn at Fushimi Inari before the crowds arrive' },
      { name: 'Tokyo Shitamachi', note: 'Yanaka’s old-town lanes and standing bars' },
      { name: 'Osaka Dotonbori', note: 'Street food the kuidaore way' },
      { name: 'Nara', note: 'Great Buddha, sacred deer and mochi theatre' },
    ],
  },
  {
    country: 'South Korea',
    slug: 'south-korea',
    flag: '🇰🇷',
    blurb: 'Palace hanbok walks, night markets and coastal temple sunrises.',
    image: 'https://images.unsplash.com/photo-1546874177-9e664107314e?w=900&q=80&auto=format&fit=crop',
    spots: [
      { name: 'Seoul Gyeongbokgung', note: 'Royal palaces and Bukchon hanok village' },
      { name: 'Gwangjang Market', note: 'Bindaetteok and live-octopus dares' },
      { name: 'Busan', note: 'Gamcheon culture village and Jagalchi fish market' },
      { name: 'Jeju Island', note: 'Volcanic hikes and haenyeo divers' },
    ],
  },
];
