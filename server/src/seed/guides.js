// Seed data: 28 local tour guides for LocalTourGuides.
// 20 Singapore + 2 each from Malaysia, China, Japan, South Korea.

export const guides = [
  {
    slug: 'mei-lin-tan',
    name: 'Mei Lin Tan',
    tagline: 'Hawker food trails through Chinatown',
    bio: 'I grew up above my grandmother\'s kopitiam on Smith Street, and I have been eating my way through Chinatown ever since. After fifteen years in food journalism, I now spend my days introducing travellers to the hawker aunties and uncles I have known my whole life. My tours are part history lesson, part feast, and always personal. Come hungry, leave with stories, recipes, and at least one new favourite dish you never knew existed.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin', 'Cantonese'],
    yearsExperience: 12,
    specialties: ['Food & Hawker Culture', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    isVerified: 1,
    isFeatured: 1,
    priceFrom: 78,
    itinerary: {
      title: 'Chinatown Hawker Heritage Trail',
      summary: 'Follow three generations of hawker history through Chinatown\'s food centres and shophouse lanes. We taste Michelin-listed classics and humble stalls tourists walk past, meet the families behind the woks, and finish with kopi brewed the old way. This is Singapore\'s food story told by someone who lived it.',
      duration: '4 hours',
      coverImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Taste eight signature dishes across two historic hawker centres',
        'Meet second-generation hawkers and hear their family stories',
        'Learn to order kopi like a local at a traditional coffee stall',
        'Walk the shophouse streets where Chinatown\'s food culture began',
        'Small groups of six, so nobody misses the good bites'
      ],
      stops: [
        { time: '9:00 AM', place: 'Maxwell Food Centre', description: 'We start with the breakfast crowd, sampling famous chicken rice and fluffy carrot cake while I explain how hawker centres became Singapore\'s communal dining rooms.' },
        { time: '10:15 AM', place: 'Smith Street & Temple Street', description: 'A slow walk past restored shophouses and my grandmother\'s old kopitiam site, tracing how street hawkers moved from pushcarts into purpose-built centres.' },
        { time: '11:00 AM', place: 'Chinatown Complex Food Centre', description: 'Singapore\'s largest hawker centre. We share claypot rice, handmade fishball noodles, and a stall run by the same family since 1971.' },
        { time: '12:15 PM', place: 'Thian Hock Keng Temple', description: 'A digestive stroll to Singapore\'s oldest Hokkien temple, where I connect immigrant history to the dishes we have just eaten.' },
        { time: '12:45 PM', place: 'Nanyang-style Coffee Stall', description: 'We end with sock-brewed kopi and kaya toast, and I teach you the ordering lingo so you can come back on your own.' }
      ]
    },
    reviews: [
      { author: 'Sarah K.', rating: 5, text: 'Mei Lin took our family of five to stalls we would never have found alone. My teenagers still talk about the claypot rice. She handled my daughter\'s nut allergy with total care.', date: '2026-05-14' },
      { author: 'Tom H.', rating: 5, text: 'Travelling solo for work, I joined last minute. Best four hours of my trip. Mei Lin knows every hawker by name and the history behind every dish.', date: '2026-03-02' },
      { author: 'Ines R.', rating: 4, text: 'Wonderful food and storytelling. It got hot by midday so bring a hat, but the kopi lesson at the end was worth everything.', date: '2025-11-20' }
    ]
  },
  {
    slug: 'ahmad-zulkifli',
    name: 'Ahmad Zulkifli',
    tagline: 'Kampong Glam stories from a fourth-generation local',
    bio: 'My family has lived around Kampong Glam for four generations, and I still pray at the Sultan Mosque my great-grandfather helped maintain. I left a corporate career to share the district I love: the perfumers, the textile merchants, the sarabat stalls, and the quiet lanes behind Haji Lane\'s murals. When you walk with me, you are not visiting a heritage district. You are visiting my neighbourhood, and my neighbours are expecting us.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Malay', 'Arabic'],
    yearsExperience: 9,
    specialties: ['Heritage Walks', 'Culture & Religion', 'Shopping & Crafts'],
    photoUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    isVerified: 1,
    isFeatured: 1,
    priceFrom: 65,
    itinerary: {
      title: 'Kampong Glam: The Sultan\'s Quarter Up Close',
      summary: 'Explore the historic Malay-Muslim quarter with someone whose family helped build it. We visit the Sultan Mosque respectfully, smell our way through a third-generation perfume house, taste teh sarabat and murtabak, and decode the street art of Haji Lane. History, faith, fashion, and food in one unhurried afternoon.',
      duration: '3.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Guided visit inside the Sultan Mosque with proper etiquette',
        'Blend your own attar at a heritage perfume house',
        'Teh sarabat and murtabak at a family-run stall',
        'Hidden courtyards and murals beyond the Haji Lane crowds',
        'Stories of the Bugis and Arab traders who shaped the district'
      ],
      stops: [
        { time: '2:00 PM', place: 'Sultan Mosque', description: 'We begin at the golden-domed heart of the district. I share its history and the etiquette of visiting, then take you inside during non-prayer hours.' },
        { time: '2:45 PM', place: 'Malay Heritage Centre Grounds', description: 'On the lawns of the former istana, I trace how a royal seat became a bustling trading quarter for pilgrims and merchants.' },
        { time: '3:30 PM', place: 'Jamal Kazura Aromatics', description: 'A third-generation perfumer teaches us how alcohol-free attars are blended. You will leave with a small scent made to your taste.' },
        { time: '4:15 PM', place: 'Haji Lane & Bali Lane', description: 'We wander the murals and indie boutiques, and I point out the pre-war architecture hiding behind the Instagram crowds.' },
        { time: '5:00 PM', place: 'Zam Zam Restaurant', description: 'We finish with murtabak and teh sarabat at a 1908 institution, while I answer everything you still want to know.' }
      ]
    },
    reviews: [
      { author: 'Priya D.', rating: 5, text: 'Ahmad\'s connection to the neighbourhood is real. The perfume blending was a highlight for my husband and me, and his mosque introduction was warm and respectful.', date: '2026-04-18' },
      { author: 'Ben W.', rating: 5, text: 'I booked this between business meetings and it was the best decision of the trip. Deep history delivered like a conversation with an old friend.', date: '2026-01-27' },
      { author: 'Amelia F.', rating: 4, text: 'Lovely pace for our family with a stroller. The kids loved the murals and the murtabak. Wish it were an hour longer honestly.', date: '2025-10-09' }
    ]
  },
  {
    slug: 'rachel-ng',
    name: 'Rachel Ng',
    tagline: 'Art deco mornings and brunch in Tiong Bahru',
    bio: 'I am an architect turned guide who fell hard for Tiong Bahru\'s streamline moderne estates, the oldest public housing in Singapore. I spent years documenting these buildings before deciding stories are better told on foot with coffee in hand. My walks mix design history with the neighbourhood\'s café culture and wet market life. Expect curved balconies, bomb shelters, excellent pastries, and a few residents who wave at us because they know me.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 7,
    specialties: ['Architecture & Design', 'Cafés & Brunch'],
    photoUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
    isVerified: 1,
    isFeatured: 1,
    priceFrom: 60,
    itinerary: {
      title: 'Tiong Bahru: Art Deco & Brunch Walk',
      summary: 'Spend a slow morning in Singapore\'s most stylish heritage estate. We read the 1930s architecture like a book, browse a wet market that still feeds the neighbourhood, peek at a pre-war air raid shelter, and settle into the café scene that made Tiong Bahru famous. Design lovers and brunch lovers equally welcome.',
      duration: '3 hours',
      coverImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Streamline moderne architecture explained by a real architect',
        'Morning wet market visit with tastings',
        'The story of Singapore\'s first public housing estate',
        'Freshly baked pastries and a proper flat white',
        'Hidden pre-war air raid shelter and horseshoe blocks'
      ],
      stops: [
        { time: '8:30 AM', place: 'Tiong Bahru Market', description: 'We start upstairs with chwee kueh and lor mee among the regulars, then browse the produce stalls downstairs as the neighbourhood does its morning shopping.' },
        { time: '9:30 AM', place: 'Guan Chuan Street Horseshoe Block', description: 'The estate\'s most photographed curve. I break down the nautical lines, spiral stairs, and why these 1930s flats still feel modern.' },
        { time: '10:15 AM', place: 'Pre-war Air Raid Shelter', description: 'A rare surviving civilian shelter beneath the flats. We talk wartime Tiong Bahru and how the estate survived the Occupation.' },
        { time: '10:45 AM', place: 'Bookshop & Mural Lane', description: 'We browse an independent bookshop and hunt the neighbourhood murals that capture kampong-era street life.' },
        { time: '11:15 AM', place: 'Heritage Café Finish', description: 'We end with coffee and pastries in a shophouse café, comparing old floor tiles and new espresso, my favourite contradiction.' }
      ]
    },
    reviews: [
      { author: 'Daniel O.', rating: 5, text: 'As two architects on holiday we were fussy customers, and Rachel exceeded every expectation. Her drawings and old photos brought the estate to life.', date: '2026-06-01' },
      { author: 'Hana S.', rating: 5, text: 'Perfect first morning in Singapore. Gentle pace, gorgeous buildings, and the chwee kueh breakfast was a revelation. Rachel is warm and endlessly knowledgeable.', date: '2026-02-13' }
    ]
  },
  {
    slug: 'priya-raman',
    name: 'Priya Raman',
    tagline: 'Spice, silk and stories in Little India',
    bio: 'My parents ran a spice shop on Buffalo Road for thirty years, so Little India\'s scents are the smell of my childhood. I trained as a chef before coming home to guide, and I still grind my own masalas every week. On my walks we touch, smell, and taste everything: curry leaves, jasmine garlands, banana leaf lunches. I want you to leave understanding why this district feeds both stomach and soul.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Tamil', 'Hindi'],
    yearsExperience: 11,
    specialties: ['Food & Hawker Culture', 'Culture & Religion', 'Markets'],
    photoUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
    isVerified: 1,
    isFeatured: 1,
    priceFrom: 70,
    itinerary: {
      title: 'Little India Spice Walk & Banana Leaf Lunch',
      summary: 'Wander the most sensory district in Singapore with a chef who grew up here. We smell our way through a real spice shop, watch garland makers at work, step inside a bustling Hindu temple, browse Tekka Market, and sit down to a proper banana leaf lunch eaten the traditional way, with your hands if you dare.',
      duration: '4 hours',
      coverImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Guided spice tasting in a decades-old family shop',
        'Sri Veeramakaliamman Temple visit with rituals explained',
        'Fresh jasmine garland demonstration',
        'Tekka Market tour with tropical fruit tastings',
        'Full banana leaf lunch included'
      ],
      stops: [
        { time: '10:00 AM', place: 'Tekka Market', description: 'We plunge into the morning rush, tasting tropical fruit and meeting the butchers, fishmongers, and sari sellers who make Tekka an institution.' },
        { time: '11:00 AM', place: 'Buffalo Road Spice Shop', description: 'At a shop my family has known for decades, we smell and taste whole spices, and I explain how a masala is balanced.' },
        { time: '11:45 AM', place: 'Sri Veeramakaliamman Temple', description: 'One of Singapore\'s oldest Hindu temples. I walk you through the deities, offerings, and etiquette so the rituals make sense.' },
        { time: '12:30 PM', place: 'Garland Makers of Campbell Lane', description: 'We watch jasmine and marigold garlands strung at astonishing speed and learn what each flower signifies at weddings and prayers.' },
        { time: '1:00 PM', place: 'Banana Leaf Lunch', description: 'We end with curries, rasam, and papadum served on banana leaf. I teach the hand-eating technique and the leaf-folding farewell.' }
      ]
    },
    reviews: [
      { author: 'Marcus L.', rating: 5, text: 'Priya turned a district I had only rushed through into a place I now love. The spice shop tasting alone was worth the price. Lunch was spectacular.', date: '2026-05-30' },
      { author: 'Chloe & Sam', rating: 5, text: 'We did this on our honeymoon and it was our favourite activity in Singapore. Priya is funny, generous, and knows absolutely everyone on the street.', date: '2026-03-19' },
      { author: 'Gita N.', rating: 4, text: 'Even as an Indian traveller I learned so much about the Singapore Tamil community. Temple visit was moving. Wear light clothes, it gets warm.', date: '2025-12-05' }
    ]
  },
  {
    slug: 'marcus-lim',
    name: 'Marcus Lim',
    tagline: 'Night photography at Marina Bay, tripods provided',
    bio: 'I shot skylines for magazines for a decade before realising I enjoyed teaching photography more than selling it. Marina Bay is my studio: I know exactly where the light falls at blue hour, which bridge gives the cleanest reflection, and when the light show hits its peak. Bring any camera, even just your phone. I will handle the tripods, the timing, and the patience. You handle the wonder.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 10,
    specialties: ['Photography', 'Night Tours'],
    photoUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
    isVerified: 1,
    isFeatured: 1,
    priceFrom: 95,
    itinerary: {
      title: 'Marina Bay Blue Hour Photography Walk',
      summary: 'Capture Singapore\'s iconic skyline the way professionals do. We chase blue hour from the Merlion to Gardens by the Bay, timing every stop to the best light. I provide tripods and hands-on coaching for any skill level, from full manual shooters to phone photographers. You leave with portfolio-worthy shots and skills that stick.',
      duration: '3.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Blue hour and night shots of the full Marina Bay skyline',
        'Tripods and neutral density filters provided',
        'Personal coaching on long exposure and composition',
        'Front-row spot for the Spectra light and water show',
        'Phone photographers fully catered for'
      ],
      stops: [
        { time: '5:45 PM', place: 'Merlion Park', description: 'We meet before sunset, claim the best angle of the Merlion against the skyline, and set up while I cover composition fundamentals.' },
        { time: '6:45 PM', place: 'Jubilee Bridge', description: 'Blue hour begins. Long exposures of the Esplanade and Marina Bay Sands as the city lights switch on and the sky goes cobalt.' },
        { time: '7:30 PM', place: 'Marina Bay Sands Waterfront', description: 'We position for Spectra, the light and water show, and I show you how to capture lasers and fountains without blowing highlights.' },
        { time: '8:15 PM', place: 'Helix Bridge', description: 'The double-helix structure glows purple and green at night. We play with leading lines and reflections from the walkway.' },
        { time: '8:45 PM', place: 'Gardens by the Bay Supertrees', description: 'We end beneath the glowing Supertree Grove, shooting upward compositions and reviewing everyone\'s best three shots over a cold drink.' }
      ]
    },
    reviews: [
      { author: 'Jenny T.', rating: 5, text: 'I came with just an iPhone and left with shots my friends refuse to believe I took. Marcus is patient, precise, and genuinely loves teaching.', date: '2026-06-10' },
      { author: 'Rob & Elaine', rating: 5, text: 'Celebrated our anniversary on this tour. Marcus quietly took a stunning couple photo of us at blue hour without being asked. Class act.', date: '2026-02-22' },
      { author: 'Akira M.', rating: 4, text: 'Solid technical instruction and perfect timing of locations. It rained briefly but Marcus adjusted the route without missing the light show.', date: '2025-11-08' }
    ]
  },
  {
    slug: 'wei-jie-chong',
    name: 'Wei Jie Chong',
    tagline: 'Southern Ridges canopy walks above the city',
    bio: 'I am a former park ranger who spent six years maintaining the trails I now guide. The Southern Ridges is my favourite classroom: nine kilometres of connected ridgeline where sea eagles ride thermals over Henderson Waves and the forest hums before the city wakes. I walk slowly on purpose. There are sunbirds to spot, wartime hills to explain, and one particular bench with the best skyline view nobody knows about.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 8,
    specialties: ['Nature & Wildlife', 'Hiking', 'History'],
    photoUrl: 'https://randomuser.me/api/portraits/men/6.jpg',
    isVerified: 1,
    isFeatured: 1,
    priceFrom: 55,
    itinerary: {
      title: 'Southern Ridges Sunrise Canopy Walk',
      summary: 'Beat the heat and the crowds on a ridgeline walk connecting three parks high above the city. We cross the sculptural Henderson Waves at golden hour, spot sunbirds and white-bellied sea eagles from the canopy walkways, and climb Mount Faber for a skyline payoff. A former ranger\'s pace, with binoculars provided.',
      duration: '4 hours',
      coverImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Henderson Waves bridge at golden hour, before the crowds',
        'Forest canopy walkways with birdwatching, binoculars provided',
        'Wartime history of Bukit Chandu explained on site',
        'Skyline and harbour views from Mount Faber',
        'Gentle pace suitable for most fitness levels'
      ],
      stops: [
        { time: '7:00 AM', place: 'Kent Ridge Park Canopy Walk', description: 'We start in the treetops as the forest wakes, listening for orioles and spotting changeable lizards along the boardwalk.' },
        { time: '8:00 AM', place: 'Reflections at Bukit Chandu', description: 'A pause at the ridge where the Malay Regiment made its 1942 stand. Short, sobering, and essential to understanding these hills.' },
        { time: '8:45 AM', place: 'HortPark & Forest Walk', description: 'Elevated steel walkways carry us through secondary forest at canopy height. This is our best window for sea eagles and sunbirds.' },
        { time: '9:45 AM', place: 'Henderson Waves', description: 'Singapore\'s highest pedestrian bridge, all sculpted timber curves. We linger for photos and my favourite hidden viewpoint nearby.' },
        { time: '10:30 AM', place: 'Mount Faber Peak', description: 'The final climb earns a panorama of harbour and skyline. We finish with kopi at the summit while I mark up your maps.' }
      ]
    },
    reviews: [
      { author: 'Louise M.', rating: 5, text: 'We saw a sea eagle within twenty minutes and Wei Jie identified every bird call after that. A wonderfully calm start to a hectic trip.', date: '2026-04-06' },
      { author: 'The Andersons', rating: 5, text: 'Our kids aged nine and twelve managed the whole route easily. Wei Jie turned it into a treasure hunt of plants and birds. Brilliant with children.', date: '2026-01-15' },
      { author: 'Farid A.', rating: 4, text: 'Beautiful route and expert guiding. Start time felt brutal at first but by 10am I understood exactly why we began at dawn.', date: '2025-10-25' }
    ]
  },
  {
    slug: 'faizal-rahman',
    name: 'Faizal Rahman',
    tagline: 'Cycling Pulau Ubin, Singapore\'s last kampong island',
    bio: 'I spent school holidays at my uncle\'s house on Pulau Ubin, catching mud crabs and cycling dirt tracks barefoot. The island still runs on well water and generator power, and I want you to feel that older Singapore before it fades. I keep my groups small, my bicycles well-oiled, and my route flexible, because if a wild boar family crosses our path or the tide reveals the flats at Chek Jawa, we stop and watch.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Malay'],
    yearsExperience: 14,
    specialties: ['Cycling', 'Nature & Wildlife', 'Island Life'],
    photoUrl: 'https://randomuser.me/api/portraits/men/7.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 68,
    itinerary: {
      title: 'Pulau Ubin Kampong & Chek Jawa Cycle',
      summary: 'Take a bumboat to the island time forgot. We cycle shaded tracks past tin-roofed kampong houses and abandoned quarries turned emerald lakes, watch for hornbills and wild boar, and walk the boardwalk over Chek Jawa\'s rich coastal flats. This is village Singapore, one boat ride and fifty years away from the city.',
      duration: '5 hours',
      coverImage: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Traditional bumboat crossing from Changi Point',
        'Cycle past working kampong houses and fruit orchards',
        'Chek Jawa wetlands boardwalk and viewing tower',
        'Emerald quarry lakes and granite mining history',
        'Wildlife spotting: hornbills, wild boar, mudskippers'
      ],
      stops: [
        { time: '8:30 AM', place: 'Changi Point Ferry Terminal', description: 'We board a wooden bumboat the old way, no schedule, departing when twelve passengers are aboard. The crossing itself is a time machine.' },
        { time: '9:15 AM', place: 'Ubin Town & Bike Fitting', description: 'The island\'s one-street village. We fit bikes, grab drinks from a provision shop, and I brief the route over a kampong map.' },
        { time: '10:00 AM', place: 'Butterfly Hill & Quarry Viewpoint', description: 'A gentle climb to views over a flooded granite quarry, now an impossibly green lake ringed by forest.' },
        { time: '11:00 AM', place: 'Chek Jawa Wetlands', description: 'We park the bikes and walk the coastal boardwalk over seagrass lagoons and mangroves, climbing the tower for a canopy view.' },
        { time: '12:30 PM', place: 'Kampong House Visit', description: 'We end at a traditional stilt house, chatting with residents about island life before catching the bumboat home.' }
      ]
    },
    reviews: [
      { author: 'Erik J.', rating: 5, text: 'The bumboat ride alone was worth it, then the island kept giving: boars, hornbills, and quarry lakes. Faizal\'s childhood stories made it personal.', date: '2026-05-02' },
      { author: 'Wendy C.', rating: 4, text: 'Great half-day escape from the city with my two teens. Trails were manageable and Faizal was patient with our many photo stops.', date: '2026-02-08' }
    ]
  },
  {
    slug: 'geraldine-chia',
    name: 'Geraldine Chia',
    tagline: 'Peranakan heritage and pastel shophouses of Joo Chiat',
    bio: 'I am a Peranakan daughter who grew up polishing my grandmother\'s kamcheng jars and helping her pound rempah for Sunday ayam buah keluak. Joo Chiat is my family\'s district, and its pastel shophouses hold our stories. I guide with heirloom beadwork in my bag and recipes in my head, because Peranakan culture is best understood through its objects and its food. Come let this Nyonya show you her world.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Malay', 'Hokkien'],
    yearsExperience: 16,
    specialties: ['Peranakan Culture', 'Heritage Walks', 'Food & Hawker Culture'],
    photoUrl: 'https://randomuser.me/api/portraits/women/8.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 72,
    itinerary: {
      title: 'Joo Chiat Peranakan Heritage Walk',
      summary: 'Discover the culture born when Chinese traders married Malay brides centuries ago. We admire the famous pastel terraces of Koon Seng Road, handle real heirloom beadwork and porcelain, taste kueh made to family recipes, and finish with Nyonya laksa. An intimate walk through a living culture, guided by one of its daughters.',
      duration: '3.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Koon Seng Road\'s iconic pastel Peranakan terraces',
        'Handle genuine heirloom beadwork and kamcheng porcelain',
        'Traditional kueh tasting at a family bakery',
        'The story of Baba-Nyonya culture told from inside it',
        'Nyonya laksa lunch to finish'
      ],
      stops: [
        { time: '9:30 AM', place: 'Koon Seng Road Terraces', description: 'The most beautiful shophouses in Singapore. I decode the tiles, swing doors, and motifs that announce a Peranakan home.' },
        { time: '10:15 AM', place: 'Kuan Im Tng Temple', description: 'A quieter stop where I explain how Peranakan faith blends Chinese deities with Southeast Asian practice.' },
        { time: '11:00 AM', place: 'Heirloom Show & Tell', description: 'Over tea, I unpack my grandmother\'s beaded slippers, sarong kebaya, and wedding porcelain, each with a family story attached.' },
        { time: '11:45 AM', place: 'Traditional Kueh Bakery', description: 'We taste ondeh ondeh, kueh lapis, and pineapple tarts while the bakers explain why good kueh cannot be rushed.' },
        { time: '12:30 PM', place: 'Nyonya Laksa Lunch', description: 'We end with a bowl of rich coconut laksa at a beloved local shop, and I share which dishes to hunt for the rest of your trip.' }
      ]
    },
    reviews: [
      { author: 'Margaret W.', rating: 5, text: 'Geraldine\'s heirloom session moved me to tears. Holding a century of family history in your hands is something no museum can offer.', date: '2026-04-27' },
      { author: 'Kenji & Mari', rating: 5, text: 'We knew nothing about Peranakan culture and left completely enchanted. The kueh tasting was our favourite. Geraldine treats guests like relatives.', date: '2026-01-09' },
      { author: 'Olivia P.', rating: 4, text: 'Rich, personal storytelling and gorgeous streets. The laksa finish was perfect. Book the morning slot, afternoons get steamy in Joo Chiat.', date: '2025-11-16' }
    ]
  },
  {
    slug: 'david-koh',
    name: 'David Koh',
    tagline: 'Walking Singapore\'s WWII fall and occupation',
    bio: 'My grandfather survived the Sook Ching screenings, and his stories set me on a thirty-year path of studying the war in Singapore. I taught history for two decades before guiding full time. My battlefield walks are honest, carefully researched, and human: soldiers on both sides, civilians in between. I bring archival photos and maps so you can stand exactly where history happened and see what the camera saw in 1942.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 18,
    specialties: ['WWII History', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/men/9.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 85,
    itinerary: {
      title: 'The Fall of Singapore: WWII History Trail',
      summary: 'Trace the seven days that ended an empire, from the beaches the invasion bypassed to the room where Britain surrendered. Using archival photographs held against today\'s skyline, we walk Fort Canning\'s Battlebox surrounds, the Kranji memorial rows, and the civilian memorial. Rigorous, respectful history from a former teacher.',
      duration: '5 hours',
      coverImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Fort Canning command centre and surrender decision explained on site',
        'Archival photos matched to modern locations',
        'Kranji War Cemetery with personal soldier stories',
        'Civilian War Memorial and the Sook Ching story',
        'Small group, thoughtful pacing, transport between sites included'
      ],
      stops: [
        { time: '9:00 AM', place: 'Fort Canning Hill', description: 'We begin above the old command bunker where Percival made the surrender decision, reconstructing the final week with maps and photographs.' },
        { time: '10:30 AM', place: 'Civilian War Memorial', description: 'Four pillars for four communities. I share my grandfather\'s Sook Ching account here, because civilians carried the longest war.' },
        { time: '11:15 AM', place: 'Changi Chapel & Museum', description: 'The POW years told through prisoner artwork and the replica chapel. Quiet time given for the exhibits that ask for it.' },
        { time: '12:45 PM', place: 'Kranji War Cemetery', description: 'Rows of Commonwealth graves on a peaceful hillside. I introduce individual soldiers whose letters and records I have researched.' },
        { time: '1:45 PM', place: 'Kranji Beach Landing Site', description: 'We finish where Japanese forces crossed the strait, closing the loop on how the impregnable fortress fell in a week.' }
      ]
    },
    reviews: [
      { author: 'Graham T.', rating: 5, text: 'My father served in Malaya, and David helped me find a name at Kranji connected to his unit. Meticulous, moving, unforgettable.', date: '2026-03-11' },
      { author: 'Lisa H.', rating: 5, text: 'I expected dates and battles and got humanity instead. The archival photo overlays are genius. Heavy content handled with real care.', date: '2025-12-14' }
    ]
  },
  {
    slug: 'siti-aminah-yusof',
    name: 'Siti Aminah Yusof',
    tagline: 'Wet market mornings and home-style cooking classes',
    bio: 'I learned to cook standing on a stool beside my mother, and I learned to shop by following her through Tekka and Geylang Serai markets before dawn. Today I run a small cooking studio out of a shophouse kitchen. My favourite thing is watching guests realise that sambal is not scary and rendang is patience, not magic. We shop together, cook together, and eat together, exactly as my family always has.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Malay'],
    yearsExperience: 13,
    specialties: ['Cooking Classes', 'Markets', 'Food & Hawker Culture'],
    photoUrl: 'https://randomuser.me/api/portraits/women/10.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 110,
    itinerary: {
      title: 'Market to Table: Malay Home Cooking Class',
      summary: 'Shop a real wet market with a home cook who knows every stallholder, then turn your haul into a Malay family feast. You will pound rempah by hand, learn the patience behind chicken rendang, temper sambal to your own heat, and sit down to eat what you made. Recipes and full bellies included.',
      duration: '5 hours',
      coverImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Guided wet market shopping with stallholder introductions',
        'Hands-on rempah pounding and sambal making',
        'Cook a three-dish Malay family menu from scratch',
        'Sit-down feast of everything you cooked',
        'Take-home recipe cards and spice starter pack'
      ],
      stops: [
        { time: '8:00 AM', place: 'Geylang Serai Market', description: 'We shop the morning rush for galangal, lemongrass, fresh turmeric, and chicken, and I show you how to judge quality like a makcik.' },
        { time: '9:30 AM', place: 'Shophouse Kitchen Welcome', description: 'Back at the studio, we unpack our haul over kopi and kuih while I walk through the menu and the mise en place.' },
        { time: '10:00 AM', place: 'Rempah & Sambal Station', description: 'Mortar and pestle time. You pound your own spice paste and learn why the order of ingredients matters.' },
        { time: '11:00 AM', place: 'The Stove', description: 'We cook chicken rendang low and slow, sambal goreng, and fragrant coconut rice, tasting and adjusting at every stage.' },
        { time: '12:30 PM', place: 'The Family Table', description: 'We plate everything kampong style and eat together. You leave with recipe cards, spice packs, and market shopping confidence.' }
      ]
    },
    reviews: [
      { author: 'Rebecca F.', rating: 5, text: 'I have taken cooking classes on four continents and this was the warmest. My rendang actually tasted like rendang. The market visit made it complete.', date: '2026-06-08' },
      { author: 'Paul & Janet', rating: 5, text: 'Retired couple, hopeless cooks, wonderful morning. Siti is patient, funny, and her kitchen smells like heaven. We recreated the sambal at home successfully.', date: '2026-02-01' },
      { author: 'Nadia B.', rating: 4, text: 'Fantastic hands-on class and generous portions. The rempah pounding is a proper workout. Bring an appetite and an empty camera roll.', date: '2025-10-18' }
    ]
  },
  {
    slug: 'jonathan-teo',
    name: 'Jonathan Teo',
    tagline: 'MacRitchie treetops, macaques and rainforest secrets',
    bio: 'I am a biology graduate who never quite left the forest. MacRitchie was my field research site for three years, and now it is where I take travellers who want to see the wild heart hiding inside this famously urban country. I can find flying lemurs sleeping against tree trunks and tell you which macaque is the troop leader. Slow walking, sharp eyes, and proper rainforest quiet: that is my method.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 6,
    specialties: ['Nature & Wildlife', 'Hiking'],
    photoUrl: 'https://randomuser.me/api/portraits/men/11.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 58,
    itinerary: {
      title: 'MacRitchie Rainforest & TreeTop Walk',
      summary: 'Hike into genuine rainforest without leaving the city, crossing the famous free-standing suspension bridge 25 metres above the forest floor. A trained biologist helps you spot flying lemurs, monitor lizards, and long-tailed macaques while decoding the ecosystem around you. Eleven kilometres of green therapy, paced for wildlife watching.',
      duration: '4.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'HSBC TreeTop Walk suspension bridge above the canopy',
        'Wildlife spotting with a trained biologist',
        'Flying lemurs, macaques, monitors and hornbills',
        'Reservoir boardwalks through pristine forest edge',
        'Trail snacks and electrolytes provided'
      ],
      stops: [
        { time: '7:30 AM', place: 'MacRitchie Reservoir Park', description: 'We start along the water while it is cool, watching for monitor lizards and learning how a colonial reservoir became a biodiversity ark.' },
        { time: '8:30 AM', place: 'Prunus & Petai Boardwalks', description: 'Forest-edge boardwalks perfect for spotting kingfishers and squirrels. I explain the difference between primary and secondary rainforest.' },
        { time: '10:00 AM', place: 'HSBC TreeTop Walk', description: 'The highlight: a 250-metre suspension bridge at canopy height. We scan for flying lemurs and raptors riding the thermals.' },
        { time: '11:00 AM', place: 'Jelutong Tower', description: 'A seven-storey observation tower inside the forest. We climb quietly and often catch hornbills at eye level.' },
        { time: '12:00 PM', place: 'Ranger Station Finish', description: 'We loop back along shaded trails, tally our species list over isotonic drinks, and I share other wild corners of Singapore worth your time.' }
      ]
    },
    reviews: [
      { author: 'Stefan B.', rating: 5, text: 'Jonathan spotted a colugo within the first hour, camouflaged flat against a trunk. I would have walked straight past. Real field-scientist guiding.', date: '2026-05-21' },
      { author: 'Amanda R.', rating: 4, text: 'Sweaty, long, and completely worth it. The treetop bridge is spectacular. Jonathan\'s macaque etiquette briefing saved our snacks from an ambush.', date: '2026-01-31' }
    ]
  },
  {
    slug: 'karen-loh',
    name: 'Karen Loh',
    tagline: 'Heaven, hell and folklore at Haw Par Villa',
    bio: 'I fell in love with Haw Par Villa as a child, when the Ten Courts of Hell gave me nightmares and questions in equal measure. I studied Chinese mythology and religion at university largely to answer those questions. Now I guide travellers through Asia\'s strangest theme park, decoding a thousand statues of gods, demons, and moral lessons. It is weird, wonderful, and far deeper than its reputation. Bring your curiosity.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin', 'Cantonese'],
    yearsExperience: 5,
    specialties: ['Mythology & Folklore', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 48,
    itinerary: {
      title: 'Haw Par Villa: Gods, Ghosts & the Ten Courts of Hell',
      summary: 'Explore the surreal 1937 park built by the Tiger Balm brothers, where a thousand statues teach Confucian morals through gloriously graphic dioramas. A mythology specialist decodes the legends behind the spectacle: the Monkey King, the Eight Immortals, and the infamous Ten Courts of Hell. Strange, profound, and unforgettable.',
      duration: '2.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'The Ten Courts of Hell explained, not just endured',
        'Legends of the Monkey King and Eight Immortals',
        'The Tiger Balm brothers\' story of medicine and marketing',
        'Photo guidance for the park\'s most surreal corners',
        'Mythology cheat sheet to take home'
      ],
      stops: [
        { time: '9:00 AM', place: 'Park Gates & Tiger Car', description: 'We start with the Aw brothers themselves: how a balm empire funded the world\'s oddest morality theme park.' },
        { time: '9:30 AM', place: 'Ten Courts of Hell', description: 'The infamous walkthrough of the afterlife\'s judgement system. I explain each court\'s logic so horror becomes philosophy.' },
        { time: '10:30 AM', place: 'Journey to the West Dioramas', description: 'The Monkey King\'s greatest scenes in painted concrete. I retell the episodes with all the mischief they deserve.' },
        { time: '11:00 AM', place: 'Eight Immortals & Virtue Tableaux', description: 'We meet Chinese mythology\'s most beloved crew and unpack the filial piety scenes that puzzle most visitors.' },
        { time: '11:30 AM', place: 'Hilltop Pavilion Finish', description: 'We end with harbour views and a rapid-fire mythology quiz. Winners get a Tiger Balm souvenir, naturally.' }
      ]
    },
    reviews: [
      { author: 'Josh M.', rating: 5, text: 'Went expecting kitsch, left with a working knowledge of Chinese cosmology. Karen is hilarious and scholarly at once. Weirdest, best morning in Singapore.', date: '2026-04-12' },
      { author: 'Claire & Dom', rating: 5, text: 'Our kids were gripped by the Monkey King stories, and honestly so were we. Karen judged the hell courts perfectly for a family audience.', date: '2025-12-28' }
    ]
  },
  {
    slug: 'hafiz-ismail',
    name: 'Hafiz Ismail',
    tagline: 'Geylang Serai market culture and Malay soul food',
    bio: 'Geylang Serai raised me. My first job was helping at my aunt\'s kuih stall during Ramadan, and I still measure every festive season against those glowing bazaar nights. I guide because this district gets overlooked, and it should not be: the market is one of Singapore\'s liveliest, the food is soulful, and the Malay heritage runs deep. Walk with me and taste the neighbourhood that taught me everything.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Malay'],
    yearsExperience: 7,
    specialties: ['Markets', 'Food & Hawker Culture', 'Culture & Religion'],
    photoUrl: 'https://randomuser.me/api/portraits/men/13.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 52,
    itinerary: {
      title: 'Geylang Serai Market & Malay Food Walk',
      summary: 'Dive into the heart of Malay Singapore at its most vibrant market. We browse batik and songkok stalls, taste kuih in a dozen colours, watch dendeng grilled over charcoal, and share a proper nasi padang spread. A neighbourhood tour with the volume turned up, guided by someone who grew up in its lanes.',
      duration: '3.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Geylang Serai wet market\'s legendary produce floor',
        'Kuih tasting across a rainbow of traditional cakes',
        'Batik, songkok and textile stalls with maker stories',
        'Charcoal-grilled dendeng and putu piring demonstrations',
        'Full nasi padang lunch to finish'
      ],
      stops: [
        { time: '9:00 AM', place: 'Geylang Serai Market Produce Floor', description: 'Turmeric leaves, banana blossoms, fresh belacan: I tour you through ingredients that define Malay cooking and the stallholders who supply mine.' },
        { time: '10:00 AM', place: 'Kuih Corner', description: 'We assemble a tasting box of ondeh ondeh, kuih lapis, and seri muka while the makers explain the pandan-and-coconut science.' },
        { time: '10:45 AM', place: 'Textile & Songkok Stalls', description: 'Upstairs among the batik bolts, we talk baju kurung tailoring and the festive economy of Hari Raya.' },
        { time: '11:30 AM', place: 'Putu Piring Master', description: 'Steamed rice cakes with molten gula melaka, made at blurring speed. We eat them scalding, the only correct way.' },
        { time: '12:00 PM', place: 'Nasi Padang Lunch', description: 'We finish at my favourite stall with beef rendang, sambal goreng, and sayur lodeh, and I teach the point-and-pay etiquette.' }
      ]
    },
    reviews: [
      { author: 'Tara S.', rating: 5, text: 'Hafiz knows everyone and everyone knows Hafiz. The kuih box was almost too pretty to eat. Almost. A joyful, delicious morning.', date: '2026-03-25' },
      { author: 'Michael D.', rating: 4, text: 'Solo traveller here. Great energy, generous tastings, and the nasi padang finish defeated me completely. Skip breakfast beforehand, trust me.', date: '2025-11-30' }
    ]
  },
  {
    slug: 'adeline-yeo',
    name: 'Adeline Yeo',
    tagline: 'Craft cocktails in heritage shophouse bars',
    bio: 'I spent eight years behind some of Singapore\'s best bars before stepping out from behind the counter to guide. This city quietly became one of the world\'s great cocktail capitals, and its best rooms hide inside pre-war shophouses. I know the bartenders, the back doors, and the stories in every bottle of local gin. My evenings mix history and craft in equal pours, with excellent snacks along the way.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 8,
    specialties: ['Cocktails & Nightlife', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/women/14.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 150,
    itinerary: {
      title: 'Shophouse Cocktail Crawl: Heritage in a Glass',
      summary: 'An insider\'s evening through award-winning bars hidden in Chinatown and Boat Quay shophouses. We taste cocktails built on Southeast Asian ingredients, from pandan-infused gins to laksa-leaf highballs, meet the bartenders behind them, and trace how a strait-laced city became a world cocktail capital. Three bars, four drinks, endless stories.',
      duration: '4 hours',
      coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Three acclaimed bars hidden in heritage shophouses',
        'Four cocktails featuring Southeast Asian ingredients included',
        'Meet-the-bartender moments arranged at each stop',
        'The history of the Singapore Sling, myths corrected',
        'Bar snacks pairing local flavours with each pour'
      ],
      stops: [
        { time: '6:00 PM', place: 'Amoy Street Aperitivo', description: 'We begin in a converted 1920s trading house with a pandan gin highball and the story of Singapore\'s cocktail renaissance.' },
        { time: '7:15 PM', place: 'Hidden Speakeasy, Ann Siang Hill', description: 'Behind an unmarked door, the bartender walks us through a tasting flight built on kaya, calamansi, and local spice.' },
        { time: '8:30 PM', place: 'Boat Quay Rooftop', description: 'A river-view rooftop above the old godowns. We sip a modern Sling variation while I demolish the drink\'s tourist myths.' },
        { time: '9:30 PM', place: 'Nightcap Counter', description: 'An intimate eight-seat counter for a final custom cocktail, mixed to each guest\'s taste after the bartender interviews you.' }
      ]
    },
    reviews: [
      { author: 'James P.', rating: 5, text: 'Entertained clients on this crawl and looked like a genius for booking it. Every room was stunning and Adeline\'s bartender access is genuinely special.', date: '2026-05-09' },
      { author: 'Noor A.', rating: 5, text: 'The speakeasy flight was extraordinary and the company even better. Adeline reads the group perfectly and paces the evening like a pro.', date: '2026-02-14' },
      { author: 'Greg L.', rating: 4, text: 'Pricey but fair given four quality cocktails are included. The final custom drink was the best negroni variation I have ever had.', date: '2025-12-20' }
    ]
  },
  {
    slug: 'brandon-tan',
    name: 'Brandon Tan',
    tagline: 'Sentosa sunsets beyond the theme parks',
    bio: 'I grew up sailing dinghies off Sentosa\'s southern shore, back when my friends thought the island was only roller coasters. I know its quiet side: the coastal forts, the hidden beach coves, the ridge paths where peacocks wander, and exactly which stretch of sand catches the best sunset. My evening walks trade queues and rides for sea breeze and golden light. Bring sandals you can kick off.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 5,
    specialties: ['Beaches & Islands', 'Sunset Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 50,
    itinerary: {
      title: 'Sentosa Golden Hour: Forts, Coves & Sunset',
      summary: 'See the island locals actually love, away from the theme park queues. We walk the ramparts of a real 19th-century fort, follow the coastal boardwalk past quiet coves, cross the suspension bridge to Singapore\'s southernmost point, and settle onto the sand for sunset with cold drinks. Sea breeze included, crowds not.',
      duration: '3.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Fort Siloso\'s coastal guns and tunnels without the crowds',
        'Hidden beach coves along the southern shore',
        'Suspension bridge to the Southernmost Point of Continental Asia',
        'Prime sunset spot with drinks provided',
        'Peacock and kingfisher sightings along the ridge'
      ],
      stops: [
        { time: '4:00 PM', place: 'Fort Siloso Skywalk', description: 'We arrive via the treetop skywalk, then explore the fort\'s guns and tunnels while I tell the story of the war they never got to fight facing the right way.' },
        { time: '5:00 PM', place: 'Siloso Beach Boardwalk', description: 'A slow coastal walk past quiet coves and swaying casuarinas, with the container port skyline as a surreal backdrop.' },
        { time: '5:45 PM', place: 'Palawan Suspension Bridge', description: 'We cross to the tiny islet marking the Southernmost Point of Continental Asia, a title I will happily defend over drinks.' },
        { time: '6:15 PM', place: 'Tanjong Beach', description: 'The locals\' beach. We claim a spot on the sand, open the cooler, and watch the ships anchor as the sky turns amber.' },
        { time: '7:15 PM', place: 'Sunset Finish', description: 'Golden hour into blue hour with your feet in the sand. I share my map of the island\'s other secrets before we part.' }
      ]
    },
    reviews: [
      { author: 'Holly G.', rating: 5, text: 'We almost skipped Sentosa entirely, thinking it was just theme parks. Brandon showed us an island we never expected. That sunset was unreal.', date: '2026-04-30' },
      { author: 'Dev P.', rating: 4, text: 'Relaxed pace, great fort stories, cold drinks at the perfect moment. Solo traveller friendly too. The skywalk views surprised me most.', date: '2025-12-08' }
    ]
  },
  {
    slug: 'cheryl-lim',
    name: 'Cheryl Lim',
    tagline: 'Summiting Bukit Timah, Singapore\'s highest hill',
    bio: 'I am a trail runner and certified nature guide who has climbed Bukit Timah more times than I can count, in every weather and every season. The hill is only 163 metres, but it protects more tree species than all of North America, and I never tire of proving that fact to sceptics. My hikes are honest workouts softened by monkey sightings, ancient dipterocarps, and the smugness of summiting a nation\'s highest point before breakfast.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin', 'Hokkien'],
    yearsExperience: 6,
    specialties: ['Hiking', 'Nature & Wildlife'],
    photoUrl: 'https://randomuser.me/api/portraits/women/16.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 45,
    itinerary: {
      title: 'Bukit Timah Summit & Rainforest Loop',
      summary: 'Climb to the top of Singapore through primary rainforest older than the city itself. We take the quieter side trails up, learn why this small hill holds staggering biodiversity, summit the 163-metre peak, and descend past a former quarry turned tranquil lake. A genuine hike with a guide who knows every root and shortcut.',
      duration: '3 hours',
      coverImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Summit Singapore\'s highest natural point',
        'Primary rainforest with trees over 200 years old',
        'Long-tailed macaques and flying lemur spotting',
        'Hindhede Quarry lake viewpoint',
        'Quieter side trails away from the main path crowds'
      ],
      stops: [
        { time: '7:30 AM', place: 'Visitor Centre Trailhead', description: 'We warm up with a route briefing and the hill\'s big claim: more tree species in this reserve than the entire North American continent.' },
        { time: '8:00 AM', place: 'Dairy Farm Loop', description: 'The quiet ascent through towering dipterocarps. I point out strangler figs, ant plants, and the macaque troops watching us pass.' },
        { time: '9:00 AM', place: 'Bukit Timah Summit', description: 'The 163-metre summit stone and mandatory photo. We catch our breath while I explain how this hill survived when everything around it was cleared.' },
        { time: '9:30 AM', place: 'Hindhede Quarry Lookout', description: 'A dramatic cliff-ringed lake left by granite quarrying, now serenely reclaimed by forest and turtles.' },
        { time: '10:15 AM', place: 'Trailhead Finish', description: 'We loop back down for isotonic drinks and local bananas, the traditional summit reward, while I suggest your next Singapore hike.' }
      ]
    },
    reviews: [
      { author: 'Mark V.', rating: 5, text: 'Proper hike, not a stroll. Cheryl sets a good pace and her forest knowledge is encyclopedic. Summiting a country before 9am felt great.', date: '2026-06-14' },
      { author: 'Susanna K.', rating: 4, text: 'The quarry lookout stole the show. Steeper than expected in parts, so wear real shoes, but Cheryl was encouraging the whole way.', date: '2026-03-07' }
    ]
  },
  {
    slug: 'nicholas-foo',
    name: 'Nicholas Foo',
    tagline: 'Street art safaris through Singapore\'s painted lanes',
    bio: 'I picked up a spray can at nineteen and a camera at twenty, and I have been documenting Singapore\'s street art scene ever since. I know the artists behind the murals, the stories coded into the walls, and the back lanes where new pieces appear overnight. My walks connect the dots between heritage shophouse murals and the underground scene most tours never mention. Comfortable shoes and curiosity required; artistic talent optional.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin'],
    yearsExperience: 4,
    specialties: ['Street Art', 'Photography', 'Urban Exploration'],
    photoUrl: 'https://randomuser.me/api/portraits/men/17.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 55,
    itinerary: {
      title: 'Street Art Hunt: Murals, Lanes & the Artists Behind Them',
      summary: 'Hunt murals across Chinatown, Kampong Glam, and the hidden lanes between them with a photographer from inside the scene. We decode heritage murals painted from old photographs, find the newest unsanctioned pieces, and talk about making street art in the world\'s most regulated city. Ends with a hands-on stencil session.',
      duration: '3.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Thirty-plus murals across three neighbourhoods',
        'Backstories from an insider who knows the artists',
        'Heritage murals decoded scene by scene',
        'Photography tips for shooting art in tight lanes',
        'Hands-on stencil art session to finish'
      ],
      stops: [
        { time: '3:00 PM', place: 'Chinatown Mural Lanes', description: 'We start with the famous heritage murals, and I show you the vintage photographs the artist painted them from.' },
        { time: '4:00 PM', place: 'Ann Siang & Club Street Backlanes', description: 'Quieter alleys where paste-ups and small unsanctioned works hide behind bins and utility boxes. Fresh finds every week.' },
        { time: '4:45 PM', place: 'Victoria Street Corridor', description: 'A transit walk with a purpose: legal walls, commissioned shutters, and the story of how the city licenses creativity.' },
        { time: '5:15 PM', place: 'Kampong Glam & Gelam Gallery', description: 'Southeast Asia\'s first outdoor gallery lane. We compare local and international styles and catch works in progress if we are lucky.' },
        { time: '6:00 PM', place: 'Stencil Workshop Finish', description: 'At a studio corner, you cut and spray your own small stencil piece to take home. Aprons provided, mess encouraged.' }
      ]
    },
    reviews: [
      { author: 'Zoe W.', rating: 5, text: 'Nicholas knows the scene from the inside and it shows. We even met one of the artists mid-piece. The stencil workshop was a blast.', date: '2026-05-17' },
      { author: 'Liam & Katy', rating: 5, text: 'Way more depth than we expected from a street art walk. Great photo coaching too. Our stencils are framed in our hallway now.', date: '2026-01-04' }
    ]
  },
  {
    slug: 'robert-goh',
    name: 'Robert Goh',
    tagline: 'Kopitiam mornings: coffee, toast and uncle wisdom',
    bio: 'I ran my family\'s kopitiam in Balestier for twenty years before handing the tongs to my nephew. Now I take travellers on the morning rounds I never gave up: sock-brewed kopi, charcoal-grilled kaya toast, eggs eaten with pepper and soy the correct way. A kopitiam is Singapore\'s living room, and every marble table has opinions worth hearing. Sit with me, order in the old lingo, and become a regular for a morning.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin', 'Hokkien', 'Cantonese'],
    yearsExperience: 21,
    specialties: ['Kopitiam Culture', 'Food & Hawker Culture', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 42,
    itinerary: {
      title: 'Kopitiam Culture Crawl: Kopi, Kaya & Conversation',
      summary: 'Learn Singapore\'s coffee shop culture from a man who ran one for two decades. We visit three generations of kopitiams, from a 1940s charcoal-toast original to a third-wave revival, mastering the ordering lingo as we go. Kopi-o kosong, teh-c siew dai: by the end, you will order like you were born here.',
      duration: '3 hours',
      coverImage: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Three kopitiams spanning eight decades of history',
        'Sock-brewed kopi demonstration behind the counter',
        'Charcoal-grilled kaya toast and soft-boiled eggs done right',
        'Master the full kopi ordering vocabulary',
        'Morning conversation with real kopitiam regulars'
      ],
      stops: [
        { time: '7:30 AM', place: 'Balestier Heritage Kopitiam', description: 'My old family shop. We start behind the counter watching kopi pulled through the cotton sock, then take our marble table with the regulars.' },
        { time: '8:30 AM', place: 'Charcoal Toast Institution', description: 'One of the last kopitiams grilling kaya toast over charcoal. We compare the smoky difference and eat soft-boiled eggs the proper way.' },
        { time: '9:30 AM', place: 'Corner Provision Shop', description: 'A short walk past Balestier\'s shophouses to a provision shop selling kaya and kopi powder, where we stock your suitcase.' },
        { time: '10:00 AM', place: 'New-Wave Kopi Bar', description: 'We finish where tradition meets the third wave, tasting a modern take and debating, over one last cup, whether the old ways win.' }
      ]
    },
    reviews: [
      { author: 'Fiona M.', rating: 5, text: 'Uncle Robert is a treasure. The regulars at his old shop teased him mercilessly and folded us right into the conversation. Best kopi of my life.', date: '2026-04-03' },
      { author: 'Antoine R.', rating: 5, text: 'As a barista I came for coffee technique and left with cultural history, ordering fluency, and two jars of kaya. Perfect morning.', date: '2025-11-02' },
      { author: 'Grace T.', rating: 4, text: 'Charming and delicious. My kids loved dipping toast in soft-boiled eggs. Three coffee stops is a lot of caffeine, pace yourself.', date: '2025-09-21' }
    ]
  },
  {
    slug: 'melissa-ong',
    name: 'Melissa Ong',
    tagline: 'Island hopping the Southern Islands by ferry',
    bio: 'My grandfather was a boatman who ferried pilgrims to Kusu Island every ninth lunar month, and I grew up on his stories of turtles, temples, and sea spirits. Today I lead small groups across the Southern Islands: St John\'s, Lazarus, Kusu. Clear lagoons, island cats, hilltop shrines, and not a single shopping mall. I pack the picnic, watch the tides, and bring my grandfather\'s stories along for the crossing.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Mandarin', 'Malay'],
    yearsExperience: 9,
    specialties: ['Beaches & Islands', 'Heritage Walks', 'Nature & Wildlife'],
    photoUrl: 'https://randomuser.me/api/portraits/women/19.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 88,
    itinerary: {
      title: 'Southern Islands Hop: St John\'s, Lazarus & Kusu',
      summary: 'Escape the city by public ferry to three islands most visitors never learn exist. We swim at Lazarus\'s crescent lagoon, one of Singapore\'s prettiest beaches, meet the resident cats of St John\'s, and climb to the Malay shrines and turtle sanctuary of Kusu. A full island day with picnic included and skyline views on the ride home.',
      duration: '6 hours',
      coverImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Three islands in one day by scheduled ferry',
        'Swim at Lazarus Island\'s white-sand lagoon',
        'Kusu Island\'s hilltop keramat and turtle sanctuary',
        'Island picnic lunch prepared by a local caterer',
        'Skyline sunset views on the return crossing'
      ],
      stops: [
        { time: '9:00 AM', place: 'Marina South Pier', description: 'We board the island ferry with the fishing uncles and weekend picnickers. I hand out the day plan and my grandfather\'s route, roughly.' },
        { time: '9:45 AM', place: 'St John\'s Island', description: 'Once a quarantine station, now a sleepy isle of lagoons and famously sociable cats. We walk its history and its jetties.' },
        { time: '11:00 AM', place: 'Lazarus Island Lagoon', description: 'Across the causeway to a perfect crescent of white sand. Swim, float, or simply refuse to believe you are still in Singapore.' },
        { time: '12:30 PM', place: 'Beach Picnic', description: 'Lunch under the casuarinas: otah sandwiches, tropical fruit, and calamansi juice, packed by my favourite island caterer.' },
        { time: '2:00 PM', place: 'Kusu Island', description: 'The sacred island. We visit the Chinese temple, climb 152 steps to the Malay keramat, and meet the resident turtles.' },
        { time: '3:30 PM', place: 'Return Ferry', description: 'The golden-hour crossing home, with the skyline rising from the sea and time for one last island story.' }
      ]
    },
    reviews: [
      { author: 'Charlotte B.', rating: 5, text: 'Lazarus lagoon is genuinely one of the loveliest beaches I have swum at anywhere, and we nearly had it to ourselves. Melissa\'s family stories made the day.', date: '2026-05-25' },
      { author: 'The Riveras', rating: 5, text: 'Our two young boys are still talking about the turtles and the island cats. Perfectly organised family day, and the picnic was generous.', date: '2026-02-27' },
      { author: 'Owen S.', rating: 4, text: 'A proper unplugged day. Bring reef-safe sunscreen and a dry bag. Ferry schedule means no shortcuts home, so commit to the full day.', date: '2025-10-12' }
    ]
  },
  {
    slug: 'sandra-de-souza',
    name: 'Sandra de Souza',
    tagline: 'Katong food crawl through Eurasian and Peranakan kitchens',
    bio: 'I am Eurasian, Katong born and raised, from a family that argues about sugee cake recipes at every gathering. My neighbourhood packs Peranakan, Eurasian, and Hainanese food history into a few delicious kilometres, and I have spent years eating my way along them so you can skip straight to the good stuff. My crawls are generous, unhurried, and full of the aunties and uncles who still cook the old recipes.',
    country: 'Singapore',
    city: 'Singapore',
    languages: ['English', 'Kristang'],
    yearsExperience: 10,
    specialties: ['Food & Hawker Culture', 'Peranakan Culture', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 75,
    itinerary: {
      title: 'Katong Food Crawl: Laksa, Sugee & the Old East Coast',
      summary: 'Eat through Singapore\'s most storied food neighbourhood with a Katong girl. We slurp the famous cut-noodle laksa, compare kueh from rival Peranakan bakeries, taste Eurasian sugee cake and devil\'s curry, and walk off each course past ornate shophouses. Six tastings, a century of recipes, and no room for dinner afterwards.',
      duration: '4 hours',
      coverImage: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'The original Katong laksa eaten with only a spoon',
        'Rival Peranakan kueh bakeries compared side by side',
        'Eurasian sugee cake and devil\'s curry tastings',
        'Ornate Katong shophouse architecture explained',
        'Six tastings included, generous portions'
      ],
      stops: [
        { time: '10:00 AM', place: 'Katong Laksa Corner', description: 'We start with the icon: rich coconut laksa with cut noodles, eaten spoon-only. I explain the great laksa wars of East Coast Road.' },
        { time: '11:00 AM', place: 'Peranakan Kueh Bakery Duel', description: 'Two rival bakeries, one block apart. We taste kueh lapis and ondeh ondeh from both and cast votes that settle nothing.' },
        { time: '11:45 AM', place: 'Joo Chiat Shophouse Row', description: 'A digestive walk past Katong\'s most ornate facades while I unpack the Eurasian and Peranakan families who built them.' },
        { time: '12:30 PM', place: 'Eurasian Kitchen', description: 'My community\'s table: devil\'s curry with proper fire, and sugee cake from a recipe older than the shop that serves it.' },
        { time: '1:30 PM', place: 'Kim Choo Dessert Finish', description: 'We end with durian chendol and a nonya dumpling masterclass demonstration, plus my handwritten list of where to eat next.' }
      ]
    },
    reviews: [
      { author: 'Vanessa L.', rating: 5, text: 'Sandra\'s Katong is full of flavour and family history. The laksa lived up to the hype and the sugee cake exceeded it. Come very hungry.', date: '2026-06-03' },
      { author: 'Pete D.', rating: 4, text: 'Excellent crawl with serious portions. Devil\'s curry has real heat, which delighted me and defeated my wife. Great shophouse commentary between stops.', date: '2026-01-18' }
    ]
  },
  {
    slug: 'ooi-beng-hooi',
    name: 'Ooi Beng Hooi',
    tagline: 'Penang street food from a third-generation hawker family',
    bio: 'My grandfather sold char kway teow from a pushcart on Penang Road, my father from a coffee shop corner, and I grew up scraping the wok between school assignments. Penang food is not a topic for me, it is my inheritance. I guide travellers through George Town\'s hawker legends and back-lane secrets, from assam laksa sharp enough to wake the dead to cendol worth queuing in the sun for. Eat like my family does.',
    country: 'Malaysia',
    city: 'Penang',
    languages: ['English', 'Malay', 'Hokkien', 'Mandarin'],
    yearsExperience: 15,
    specialties: ['Food & Hawker Culture', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/men/21.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 55,
    itinerary: {
      title: 'George Town Street Food Odyssey',
      summary: 'Eat through the street food capital of Southeast Asia with a third-generation hawker son. We chase wok hei at a charcoal char kway teow stall, slurp assam laksa by the jetty, hunt the city\'s best cendol, and finish among the clan kongsi houses with stories of the families who cooked Penang into legend.',
      duration: '4.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Charcoal-fired char kway teow from a family friend\'s wok',
        'Assam laksa at a stall locals defend fiercely',
        'Famous Penang Road cendol done right',
        'Clan jetties and kongsi houses between courses',
        'Seven tastings included across George Town'
      ],
      stops: [
        { time: '4:00 PM', place: 'Siam Road Char Kway Teow', description: 'We start at a charcoal wok that has smoked for decades. I explain wok hei while we wait, because waiting is part of the dish.' },
        { time: '5:00 PM', place: 'Chowrasta Market Lanes', description: 'Back-lane snack stalls between the market and Penang Road: muah chee, apom, and the city\'s most argued-about cendol.' },
        { time: '6:00 PM', place: 'Chew Jetty', description: 'A walk along the clan jetty\'s wooden houses at golden hour, with the story of the waterfront families who fed the port.' },
        { time: '6:45 PM', place: 'Assam Laksa Corner', description: 'The sour, spicy, mackerel-rich bowl Penang is proudest of. We eat it the local way, with extra prawn paste on the side.' },
        { time: '7:30 PM', place: 'Kimberley Street Finish', description: 'The evening street lights up with duck kway chap and four-season kuih. We graze, recap, and I mark your map for tomorrow.' }
      ]
    },
    reviews: [
      { author: 'Hannah J.', rating: 5, text: 'Beng Hooi\'s family history is woven into every stall we visited. The char kway teow was life-changing and I do not use that word lightly.', date: '2026-05-06' },
      { author: 'Colin F.', rating: 5, text: 'I have done food tours in ten countries and this was the best value of them all. Seven tastings and I surrendered at six.', date: '2026-02-19' },
      { author: 'Mabel O.', rating: 4, text: 'Fantastic food and jetty views at sunset. It is a lot of walking in humid heat, so dress light. The cendol break was perfectly timed.', date: '2025-11-24' }
    ]
  },
  {
    slug: 'nurul-ain-hassan',
    name: 'Nurul Ain Hassan',
    tagline: 'Kuala Lumpur heritage walks from Merdeka Square to Kampung Baru',
    bio: 'I am a KL girl with an architecture degree and a soft spot for the city everyone rushes past on their way to the towers. My walks move from colonial Merdeka Square through the old commercial streets of Chinatown to Kampung Baru, the Malay village that skyscrapers surrounded but never swallowed. I love showing how three communities built one city, and where to find the best banana fritters while we discuss it.',
    country: 'Malaysia',
    city: 'Kuala Lumpur',
    languages: ['English', 'Malay'],
    yearsExperience: 6,
    specialties: ['Heritage Walks', 'Architecture & Design', 'Food & Hawker Culture'],
    photoUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 48,
    itinerary: {
      title: 'KL Heritage Walk: Merdeka Square to Kampung Baru',
      summary: 'Trace Kuala Lumpur\'s story from muddy river confluence to modern metropolis. We start among Merdeka Square\'s Moorish-revival landmarks, wander the shophouses and wet market lanes of old Chinatown, and finish in Kampung Baru, where wooden village houses sit in the shadow of the Petronas Towers. Three communities, one remarkable city.',
      duration: '4 hours',
      coverImage: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Merdeka Square\'s colonial and Moorish-revival architecture',
        'The river confluence that named the city',
        'Old Chinatown shophouses and Central Market',
        'Kampung Baru\'s traditional wooden houses beneath the towers',
        'Banana fritters and teh tarik along the way'
      ],
      stops: [
        { time: '9:00 AM', place: 'Merdeka Square', description: 'Independence was declared on this padang. We read the Sultan Abdul Samad Building\'s domes and clocktower like an architecture lecture, minus the exam.' },
        { time: '10:00 AM', place: 'Masjid Jamek & River of Life', description: 'The confluence where KL began, literally the muddy estuary of its name, with the city\'s oldest mosque presiding over it.' },
        { time: '10:45 AM', place: 'Petaling Street & Central Market', description: 'Old Chinatown\'s wet market lanes and art deco Central Market, with stops for air mata kucing and roasted chestnuts.' },
        { time: '11:45 AM', place: 'Kampung Baru Village Walk', description: 'A gazetted Malay village of stilted wooden houses surrounded by skyscrapers. We meet residents and hear why they never sold.' },
        { time: '12:30 PM', place: 'Nasi Lemak Finish', description: 'We end at a legendary kampung stall with banana-leaf nasi lemak and teh tarik, towers gleaming above the zinc roofs.' }
      ]
    },
    reviews: [
      { author: 'Richard E.', rating: 5, text: 'Nurul\'s architecture background elevates the whole walk. The contrast of Kampung Baru\'s wooden houses against the towers is a photo I will keep forever.', date: '2026-03-29' },
      { author: 'Yuki T.', rating: 4, text: 'A thoughtful route through three very different KLs. The nasi lemak ending was superb. Morning start keeps the heat manageable.', date: '2025-12-11' }
    ]
  },
  {
    slug: 'wang-lei',
    name: 'Wang Lei',
    tagline: 'Great Wall hikes on the quiet, wild sections',
    bio: 'I was born in a village beneath the Gubeikou section of the Great Wall, where my grandmother grazed goats along the ramparts. I have hiked and studied the Wall for twenty years, and I specialise in the quiet stretches: crumbling watchtowers, chestnut forests, and ridgelines where you might not meet another soul all day. I carry the permits, the picnic, and six hundred years of stories. You bring good boots.',
    country: 'China',
    city: 'Beijing',
    languages: ['English', 'Mandarin'],
    yearsExperience: 20,
    specialties: ['Hiking', 'History', 'Photography'],
    photoUrl: 'https://randomuser.me/api/portraits/men/23.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 160,
    itinerary: {
      title: 'Wild Great Wall: Gubeikou to Jinshanling Hike',
      summary: 'Hike the Great Wall the way it deserves: wild, quiet, and stretching to the horizon. We traverse from unrestored Gubeikou towers to Jinshanling\'s dramatic ridgeline, walking original Ming brickwork through chestnut groves and mountain passes. Village lunch, round-trip transport from Beijing, and a guide who grew up beneath these ramparts.',
      duration: '10 hours',
      coverImage: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Unrestored, crowd-free sections of original Ming wall',
        'Ridge-top panoramas across dozens of watchtowers',
        'Home-style village lunch in a farmhouse courtyard',
        'Round-trip private transport from central Beijing',
        'Stories from a guide born in a Wall village'
      ],
      stops: [
        { time: '7:00 AM', place: 'Beijing Hotel Pickup', description: 'We drive northeast out of the city, and I use the ride to set the scene: Ming dynasty frontier politics, told like a family saga.' },
        { time: '9:30 AM', place: 'Gubeikou General Tower', description: 'Boots on original 500-year-old brick. This unrestored stretch is rough, honest, and gloriously empty of crowds.' },
        { time: '11:30 AM', place: 'Village Farmhouse Lunch', description: 'A courtyard lunch of noodles, mountain vegetables, and my aunt\'s chestnut chicken in the village where I was born.' },
        { time: '12:45 PM', place: 'Jinshanling West Gate Ascent', description: 'We climb back to the wall where restoration begins, and the ridgeline unfurls ahead, tower after tower to the horizon.' },
        { time: '3:00 PM', place: 'General Tower Panorama', description: 'The hike\'s crowning viewpoint. We rest, shoot photos, and pick out the wild section we conquered this morning.' },
        { time: '4:00 PM', place: 'Descent & Return Drive', description: 'Down through the chestnut groves to our driver, with cold drinks waiting and Beijing by early evening.' }
      ]
    },
    reviews: [
      { author: 'Alan & Ruth', rating: 5, text: 'We had watchtowers entirely to ourselves for hours. Wang Lei\'s village lunch and family stories turned a hike into something we will never forget.', date: '2026-04-21' },
      { author: 'Sophie N.', rating: 5, text: 'Challenging in the best way. The unrestored section feels like real exploration. Every logistics detail was flawless, right down to the cold drinks.', date: '2025-10-30' }
    ]
  },
  {
    slug: 'li-xiaoyun',
    name: 'Li Xiaoyun',
    tagline: 'Hutong life, courtyard homes and Beijing breakfasts',
    bio: 'I grew up in a courtyard house in a Dongcheng hutong, sharing a yard with three families, two jujube trees, and one opinionated cat. Much of that world is vanishing, so I guide to keep it alive: breakfast stalls that open at dawn, grandmothers playing cards under the trees, craftsmen repairing bicycles the old way. My walks are slow and full of small kindnesses. This is Beijing at courtyard height.',
    country: 'China',
    city: 'Beijing',
    languages: ['English', 'Mandarin'],
    yearsExperience: 8,
    specialties: ['Heritage Walks', 'Food & Hawker Culture', 'Local Life'],
    photoUrl: 'https://randomuser.me/api/portraits/women/24.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 70,
    itinerary: {
      title: 'Hutong Mornings: Courtyards, Breakfast & Bell Tower',
      summary: 'Spend a morning inside Beijing\'s old alleyway world before it changes forever. We eat a proper hutong breakfast of jianbing and soy milk, visit a courtyard home where my neighbours still live, watch the Bell and Drum Tower square wake up, and learn to read the carved gate piers that reveal each family\'s old status.',
      duration: '3.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Hutong breakfast crawl: jianbing, baozi and fresh soy milk',
        'Visit inside a lived-in courtyard home',
        'Bell and Drum Towers and their morning square life',
        'Learn to decode courtyard gates and door piers',
        'Rickshaw ride through the narrowest lanes'
      ],
      stops: [
        { time: '7:30 AM', place: 'Breakfast Stall Row', description: 'We join the queue for jianbing crepes folded to order, then baozi and warm soy milk, eaten standing like proper locals.' },
        { time: '8:30 AM', place: 'Courtyard Home Visit', description: 'My old neighbours welcome us into their siheyuan for tea beneath the jujube tree, and stories of four generations in one yard.' },
        { time: '9:30 AM', place: 'Drum & Bell Tower Square', description: 'The square between the towers is old Beijing\'s living room: dancers, shuttlecock circles, and card games we are welcome to lose.' },
        { time: '10:15 AM', place: 'Gate Pier Reading Walk', description: 'A slow lane walk where I teach you to read carved door piers and lintels, the old status symbols of courtyard Beijing.' },
        { time: '11:00 AM', place: 'Rickshaw Finish', description: 'We end with a gentle rickshaw loop through lanes too narrow for cars, and my list of hutong eateries for the rest of your stay.' }
      ]
    },
    reviews: [
      { author: 'Diane C.', rating: 5, text: 'The courtyard tea with Xiaoyun\'s neighbours was the most genuine travel moment of our entire China trip. The jianbing was outstanding too.', date: '2026-06-05' },
      { author: 'Piotr K.', rating: 4, text: 'Lovely unhurried morning far from the tourist machine. Xiaoyun translates conversations on the fly so you feel included everywhere. Highly recommended.', date: '2026-01-23' }
    ]
  },
  {
    slug: 'haruka-nakamura',
    name: 'Haruka Nakamura',
    tagline: 'Kyoto temples at dawn, before the city wakes',
    bio: 'I trained in tea ceremony for ten years and worked at a temple guesthouse before becoming a guide, so my Kyoto runs on dawn light and quiet rituals. The city\'s famous temples are overwhelmed by mid-morning, but at six they belong to the monks, the gardeners, and us. I guide slowly and quietly, sharing Zen garden design, temple etiquette, and the small seasonal details Japanese aesthetics are built on. Early alarms, deep rewards.',
    country: 'Japan',
    city: 'Kyoto',
    languages: ['Japanese', 'English'],
    yearsExperience: 11,
    specialties: ['Temples & Shrines', 'Tea Culture', 'Heritage Walks'],
    photoUrl: 'https://randomuser.me/api/portraits/women/25.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 120,
    itinerary: {
      title: 'Kyoto at Dawn: Temples, Gardens & Tea',
      summary: 'Meet Kyoto before the crowds arrive. We climb to Kiyomizu-dera as the doors open, walk the preserved lanes of Higashiyama in soft morning light, sit with a Zen rock garden while I unpack its design, and finish with a proper bowl of matcha prepared with ceremony. Kyoto\'s soul, on Kyoto\'s schedule.',
      duration: '4.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Kiyomizu-dera at opening time, nearly empty',
        'Preserved Higashiyama lanes in dawn light',
        'Zen garden design decoded at a quiet temple',
        'Traditional matcha and wagashi to finish',
        'Temple etiquette taught gently along the way'
      ],
      stops: [
        { time: '5:45 AM', place: 'Yasaka Pagoda Meeting Point', description: 'We meet beneath the five-storey pagoda in blue dawn light, streets empty, lanterns still glowing. The best photo of your trip happens first.' },
        { time: '6:00 AM', place: 'Kiyomizu-dera', description: 'Through the gates as they open. The great wooden stage over the valley, morning bells, and space to actually feel the place.' },
        { time: '7:30 AM', place: 'Sannenzaka & Ninenzaka Lanes', description: 'Down the preserved stone lanes before the shops open, while I explain machiya townhouse architecture and the geography of old Kyoto.' },
        { time: '8:15 AM', place: 'Kodai-ji Zen Garden', description: 'We sit with raked gravel and stone. I unpack how a Zen garden is composed, and why emptiness is the point.' },
        { time: '9:15 AM', place: 'Tea House Finish', description: 'A quiet tatami room, seasonal wagashi, and matcha whisked before you. I teach the guest\'s role, then we simply enjoy it.' }
      ]
    },
    reviews: [
      { author: 'Laura M.', rating: 5, text: 'The 5:45 start felt cruel until we stood alone at Kiyomizu-dera. Haruka\'s tea ceremony ending was profoundly calming. A perfect morning.', date: '2026-04-09' },
      { author: 'Stephen G.', rating: 5, text: 'Haruka\'s explanation of the Zen garden changed how I saw every temple afterwards. Quiet, unhurried, deeply knowledgeable guiding.', date: '2026-02-06' },
      { author: 'Renee A.', rating: 4, text: 'Beautiful route and the empty lanes were magical. Wear comfortable shoes for the slopes. The wagashi alone justified the alarm clock.', date: '2025-11-18' }
    ]
  },
  {
    slug: 'kenji-sato',
    name: 'Kenji Sato',
    tagline: 'Tokyo izakaya nights in the yokocho alleys',
    bio: 'I spent fifteen years as a salaryman in Shimbashi, which means I earned a doctorate in izakaya culture the honest way: one after-work evening at a time. Now I take travellers into the lantern-lit yokocho alleys I know best, ordering the yakitori, pouring the sake, and translating both the menu and the mood. Tokyo opens up after dark over shared skewers. Let me show you how to belong there.',
    country: 'Japan',
    city: 'Tokyo',
    languages: ['Japanese', 'English'],
    yearsExperience: 7,
    specialties: ['Food & Hawker Culture', 'Nightlife', 'Local Life'],
    photoUrl: 'https://randomuser.me/api/portraits/men/26.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 140,
    itinerary: {
      title: 'Tokyo Izakaya Crawl: Yokocho Alleys After Dark',
      summary: 'Duck under the noren curtains into Tokyo\'s tiny lantern-lit drinking alleys with a former salaryman as your fixer. Three izakaya, each with its own character: smoky yakitori counters, a six-seat sake bar, and a retro alley joint where the master remembers everyone. Food, drinks, and cultural fluency included.',
      duration: '4 hours',
      coverImage: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Three contrasting izakaya across two yokocho alleys',
        'Charcoal yakitori ordered the insider way',
        'Guided sake tasting with a six-seat bar master',
        'Izakaya etiquette: seating, ordering, toasting, paying',
        'Food and first drinks at every stop included'
      ],
      stops: [
        { time: '6:00 PM', place: 'Shimbashi Station Square', description: 'We meet under the old locomotive as the salaryman tide flows out of the offices, and I brief you on the night\'s unwritten rules.' },
        { time: '6:20 PM', place: 'Yakitori Alley Counter', description: 'Elbow to elbow at a charcoal counter under the train tracks. We order tsukune, negima, and things you will trust me on.' },
        { time: '7:45 PM', place: 'Six-Seat Sake Bar', description: 'A hidden bar where the master pours a guided flight, from crisp junmai to a funky namazake, with stories for each bottle.' },
        { time: '9:00 PM', place: 'Retro Yokocho Izakaya', description: 'Showa-era posters, oden steaming in the corner, regulars who will absolutely talk to you. This is where the evening slows down.' },
        { time: '10:00 PM', place: 'Ramen or Farewell', description: 'The traditional fork in the road: I walk you to the station, or we commit to a closing bowl of midnight ramen. No judgement either way.' }
      ]
    },
    reviews: [
      { author: 'Brian T.', rating: 5, text: 'Kenji got us into places we could never have entered alone, and the regulars adopted us by round two. The sake flight was exceptional.', date: '2026-05-22' },
      { author: 'Alexis W.', rating: 5, text: 'As a solo female traveller I felt completely comfortable the whole night. Brilliant food, hilarious salaryman stories, and yes, we chose the ramen.', date: '2026-03-13' }
    ]
  },
  {
    slug: 'park-ji-eun',
    name: 'Park Ji-eun',
    tagline: 'Seoul palaces in hanbok, history in full colour',
    bio: 'I studied Joseon dynasty history at university and worked as a palace docent before guiding independently. My favourite magic trick is watching guests change into hanbok and stand straighter as five centuries of history suddenly feel personal. We walk Gyeongbokgung\'s grand axis, catch the changing of the guard, and drink traditional tea in Bukchon\'s hanok lanes. History should be worn, tasted, and photographed, not just recited.',
    country: 'South Korea',
    city: 'Seoul',
    languages: ['Korean', 'English'],
    yearsExperience: 9,
    specialties: ['Palaces & History', 'Hanbok Experience', 'Tea Culture'],
    photoUrl: 'https://randomuser.me/api/portraits/women/27.jpg',
    isVerified: 1,
    isFeatured: 0,
    priceFrom: 90,
    itinerary: {
      title: 'Gyeongbokgung in Hanbok: Palace & Bukchon Walk',
      summary: 'Dress in flowing hanbok and walk Seoul\'s grandest palace with a former docent. We time our arrival for the changing of the royal guard, explore throne halls and lotus pavilions with the dynasty\'s dramas retold, then wander Bukchon\'s hanok village lanes to a traditional tea house. Free palace entry in hanbok, unforgettable photos guaranteed.',
      duration: '4.5 hours',
      coverImage: 'https://images.unsplash.com/photo-1548115184-bc6544d06a58?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Full hanbok rental and dressing assistance included',
        'Changing of the Royal Guard ceremony, perfectly timed',
        'Throne hall and Gyeonghoeru Pavilion with docent-level storytelling',
        'Bukchon Hanok Village back lanes and viewpoints',
        'Traditional tea and sweets in a hanok tea house'
      ],
      stops: [
        { time: '9:00 AM', place: 'Hanbok Studio Fitting', description: 'We choose your colours and get you dressed properly, sashes and all, while I explain what hanbok signified across social ranks.' },
        { time: '10:00 AM', place: 'Gwanghwamun Gate', description: 'We arrive for the changing of the guard in full costume and drums, then pass through the great gate like a royal delegation.' },
        { time: '10:30 AM', place: 'Geunjeongjeon Throne Hall', description: 'The ceremonial heart of the Joseon dynasty. Kings, coups, and court intrigue, told beneath the twin dragon ceiling.' },
        { time: '11:30 AM', place: 'Gyeonghoeru Pavilion & Gardens', description: 'The lotus pond pavilion where kings feasted envoys. Prime photo territory, and I know all the angles.' },
        { time: '12:30 PM', place: 'Bukchon Hanok Village', description: 'We climb the quiet upper lanes of the hanok village, pausing at the famous rooftop viewpoints away from the crowds.' },
        { time: '1:15 PM', place: 'Hanok Tea House Finish', description: 'Omija tea and yakgwa sweets on a warm wooden floor, while we sort your photos and I answer everything Joseon.' }
      ]
    },
    reviews: [
      { author: 'Meredith L.', rating: 5, text: 'Ji-eun\'s storytelling made the palace feel alive, and the hanbok photos are the best pictures of us ever taken. Worth every won.', date: '2026-06-12' },
      { author: 'Carlos & Ana', rating: 5, text: 'We did this on day one and it set the tone for our whole Korea trip. The tea house finish in Bukchon was serene perfection.', date: '2026-01-08' },
      { author: 'Tessa V.', rating: 4, text: 'Wonderful history depth and great guard ceremony timing. Hanbok in summer is warm, so book a morning slot like we did.', date: '2025-09-27' }
    ]
  },
  {
    slug: 'kang-min-ho',
    name: 'Kang Min-ho',
    tagline: 'Busan fish markets and seaside village mornings',
    bio: 'I am a Busan native whose family has bought fish at Jagalchi Market for three generations, and I still do the shopping for my mother every Saturday. My tours smell of the sea in the best way: haggling ajummas, tanks of squirming octopus, grilled mackerel eaten metres from the boats that landed it. We finish in Gamcheon\'s painted hillside lanes. Busan is loud, salty, and warm-hearted, exactly like its markets.',
    country: 'South Korea',
    city: 'Busan',
    languages: ['Korean', 'English'],
    yearsExperience: 10,
    specialties: ['Markets', 'Food & Hawker Culture', 'Local Life'],
    photoUrl: 'https://randomuser.me/api/portraits/men/28.jpg',
    isVerified: 0,
    isFeatured: 0,
    priceFrom: 75,
    itinerary: {
      title: 'Busan Markets & Gamcheon Culture Village',
      summary: 'Plunge into Korea\'s greatest fish market with a local who shops it weekly. We tour Jagalchi\'s tanks and auction floors, eat the freshest seafood breakfast of your life, graze street snacks through Gukje Market\'s alleys, then climb into Gamcheon Culture Village\'s rainbow lanes for sea views and murals. Busan, full volume.',
      duration: '5 hours',
      coverImage: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=900&q=80&auto=format&fit=crop',
      highlights: [
        'Jagalchi Fish Market with a three-generation regular',
        'Pick-your-own seafood breakfast upstairs from the tanks',
        'Gukje Market street snacks: hotteok, eomuk, bibim dangmyeon',
        'Gamcheon Culture Village\'s painted hillside lanes',
        'Harbour views and mural photo spots locals prefer'
      ],
      stops: [
        { time: '8:00 AM', place: 'Jagalchi Market Auction Floor', description: 'We start where the boats unload. I translate the auction chaos and introduce the ajummas who have sold to my family for decades.' },
        { time: '9:00 AM', place: 'Tank Row & Seafood Breakfast', description: 'You choose from the tanks, and it is grilled and served upstairs within minutes, with harbour views and my mother\'s dipping sauce trick.' },
        { time: '10:30 AM', place: 'Gukje Market Alleys', description: 'Post-war market lanes stacked with everything imaginable. We graze on seed hotteok and fish cakes as we wander.' },
        { time: '11:30 AM', place: 'Bosu-dong Book Alley', description: 'A quick detour through the secondhand book street, a survivor of refugee-era Busan with stories on every shelf.' },
        { time: '12:15 PM', place: 'Gamcheon Culture Village', description: 'We climb into the painted hillside maze, hitting the mural lanes and viewpoints in the order that dodges the tour buses.' }
      ]
    },
    reviews: [
      { author: 'Jasmine H.', rating: 5, text: 'The seafood breakfast was the freshest meal of my life, and Min-ho\'s market relationships got us tastes no tourist gets. Gamcheon was gorgeous.', date: '2026-05-19' },
      { author: 'Duncan M.', rating: 4, text: 'Loud, fishy, fantastic. Not for the squeamish at the tanks, but that is honest Busan. The hotteok in Gukje Market deserves a medal.', date: '2025-12-23' }
    ]
  }
];
