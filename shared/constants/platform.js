const categories = [
  {
    id: 'startups',
    title: 'Startups',
    description: 'Pitch-driven shows, founder diaries, and accelerator content tied to TradeEthiopia momentum.',
  },
  {
    id: 'trade-export',
    title: 'Trade & Export',
    description: 'Practical trade education, export guides, and interviews with Ethiopia-focused merchants.',
  },
  {
    id: 'business-news',
    title: 'Business News',
    description: 'Daily updates on markets, policy, and investment with a focus on entrepreneurship.',
  },
  {
    id: 'interviews',
    title: 'Interviews',
    description: 'Founder stories, sponsor spotlights, and thought-leader conversations.',
  },
  {
    id: 'documentaries',
    title: 'Documentaries',
    description: 'Deep dives on trade corridors, innovation clusters, and the future of African commerce.',
  },
  {
    id: 'partnerships',
    title: 'About & Partnerships',
    description: 'Program details, sponsorship opportunities, and how to plug into TradeXTV.',
  },
];

const featurePillars = [
  {
    id: 'streaming',
    title: 'Streaming & Media System',
    description: 'Creators upload shows, track watch progress, and fan interactions signal content quality.',
    points: ['Video uploads with signed URLs', 'Series + episode management', 'Likes, comments, subscriptions'],
  },
  {
    id: 'creator-studio',
    title: 'Content Creator Studio',
    description: 'Role-based experiences for Admin, Producers, Hosts, Editors, and Guests to build shows.',
    points: ['Upload + playlist management', 'Analytics dashboard (views, watch time)', 'Monetization-ready primitives'],
  },
  {
    id: 'business-programs',
    title: 'Business & Startup Programs',
    description: 'Founder spotlights, trade education, and accelerator-themed series aligned with TradeEthiopia.',
    points: ['Startup pitch shows', 'Founder interviews', 'Training & export education'],
  },
  {
    id: 'promotion',
    title: 'Promotion & Campaigns',
    description: 'Featured businesses, sponsored slots, banners, and TradeEthiopia cross-promotion.',
    points: ['Sponsored video placements', 'Banner & video ads', 'Cross-platform promotion planning'],
  },
];

const programs = [
  {
    title: 'Startup Pitch Theater',
    description: 'Showcases founders and product-market stories, with live feedback loops for investors.',
  },
  {
    title: 'Export Ready',
    description: 'Step-by-step trade readiness playlists that pair with TradeEthiopia export desks.',
  },
  {
    title: 'Business Training Lab',
    description: 'Weekly learning series on finance, marketing, and scaling for African entrepreneurs.',
  },
  {
    title: 'Innovation Dialogues',
    description: 'Documentary-style trade innovation stories spotlighting Ethiopia and the diaspora.',
  },
];

const roles = [
  { name: 'Viewer', access: 'Watch, comment, subscribe' },
  { name: 'Creator', access: 'Upload and manage owned content' },
  { name: 'Producer', access: 'Curate shows/episodes and coordinate releases' },
  { name: 'Admin', access: 'Full control (users, content, layout, analytics, ads)' },
  { name: 'Partner', access: 'Sponsored content and promotion workflows' },
];

module.exports = {
  categories,
  featurePillars,
  programs,
  roles,
};
