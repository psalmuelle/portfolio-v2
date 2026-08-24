export interface Project {
  slug: string;
  client: string;
  year: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  paragraphs: [string, string];
  goal: string;
  stack: string;
  screenshots: string[];
}

export interface Job {
  company: string;
  role: string;
  period: [string, string];
  description: string[];
}

export const contactEmail = 'hello@erinlesam.com';

export const socialLinks: { label: string; href: string }[] = [
  { label: 'X', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Behance', href: 'https://behance.net' },
];

export const avatar = {
  src: '/erinle-samuel.jpg',
  alt: 'a photo of erinle samuel',
};

const IMG = {
  pulse: 'https://framerusercontent.com/images/34dquia03YfiJgRmaaIE0yWOT88.jpg?width=1000&height=750',
  northbound:
    'https://framerusercontent.com/images/k4EYHumramBw9vamSO1bmdIcJRg.jpg?width=1000&height=684',
  fernweh:
    'https://framerusercontent.com/images/h5fSHyLUONZt60IPTsD4pOYP4.jpg?width=1000&height=667',
  grain:
    'https://framerusercontent.com/images/F5fm6TkxIIb3TSf2ZOOzwbupnXI.jpg?width=1000&height=778',
  fieldnote:
    'https://framerusercontent.com/images/MfrBJktHz5UYyoi3iFq95drFy0k.jpg?width=1000&height=667',
  lockstep:
    'https://framerusercontent.com/images/BkHWtg0VmKhwP96WyDsBzgZO1g.jpg?width=1000&height=778',
};

export const projects: Project[] = [
  {
    slug: 'pulse-daily-health-tracking',
    client: 'Pulse Health',
    year: '2026',
    title: 'Pulse - Daily Health Tracking',
    subtitle:
      'Redesigning a health tracking app used by 500K+ people to make daily logging feel effortless instead of like a chore.',
    heroImage: IMG.pulse,
    heroAlt: 'Pulse health tracking app on a mobile phone',
    paragraphs: [
      'Pulse asked me to rework their core logging flow after user research showed most people stopped tracking within the first two weeks. The original flow required six taps to log a single meal, and the interface leaned heavily on data density over clarity. I rebuilt the flow around a single home screen with quick-add gestures, cutting the average logging time from 40 seconds to under 10.',
      'I worked closely with the two founding engineers to make sure every interaction translated cleanly into SwiftUI, prototyping key transitions in ProtoPie before handoff so motion timing was locked before development started. The result shipped in under six weeks from first wireframe to App Store release.',
    ],
    goal: 'Logging a meal now takes just 9 seconds, not 40. Fast beats fancy, every single time still.',
    stack: 'Figma, ProtoPie, SwiftUI, Whimsical',
    screenshots: [IMG.northbound, IMG.fernweh, IMG.grain, IMG.fieldnote],
  },
  {
    slug: 'northbound-mobile-banking-redesign',
    client: 'Northbound Bank',
    year: '2025',
    title: 'Northbound - Mobile Banking Redesign',
    subtitle:
      'A full redesign of a regional bank\u2019s mobile app, focused on rebuilding trust through clarity rather than decoration.',
    heroImage: IMG.northbound,
    heroAlt: 'Northbound banking app interface on a mobile phone',
    paragraphs: [
      'Northbound came to me with an app that technically worked but tested poorly on trust, users described it as \u201ccluttered\u201d and \u201chard to find basic things\u201d in support tickets. I led a full audit of the information architecture, cutting the primary navigation from 7 tabs to 4 and rebuilding the account overview screen around a single clear balance hierarchy.',
      'The biggest shift was moving transaction history from a dense table view to a scannable, grouped timeline. Support tickets related to \u201ccan\u2019t find X\u201d dropped noticeably within the first month post-launch, and the redesign became the base template for Northbound\u2019s business banking app six months later.',
    ],
    goal: '41% fewer support tickets in the first month. Clarity beats clutter, every time it matters.',
    stack: 'Figma, Galileo AI, Principle, Cursor',
    screenshots: [IMG.fernweh, IMG.grain, IMG.fieldnote, IMG.lockstep],
  },
  {
    slug: 'fernweh-travel-planning-app',
    client: 'Fernweh',
    year: '2025',
    title: 'Fernweh - Travel Planning App',
    subtitle:
      'Zero-to-one design for a trip planning app that turns scattered bookings into a single visual itinerary.',
    heroImage: IMG.fernweh,
    heroAlt: 'Fernweh travel planning app on a mobile phone',
    paragraphs: [
      'Fernweh started as a two-person team with a strong idea and no design direction. I owned the product from first concept through App Store launch, designing the core itinerary view that automatically organizes flights, hotels, and activities into a day-by-day timeline pulled from forwarded confirmation emails.',
      'The hardest problem was making a genuinely dense dataset, dozens of bookings across a multi-city trip, feel calm rather than overwhelming. I solved this with a map-first view as the default and pushed list details into a secondary layer, which testing showed people preferred by a wide margin over the original list-first approach.',
    ],
    goal: '50,000 downloads in the first 90 days. One map beats ten different apps, every single time.',
    stack: 'Figma, Whimsical, Lottie, Cursor',
    screenshots: [IMG.pulse, IMG.grain, IMG.fieldnote, IMG.lockstep],
  },
  {
    slug: 'grain-recipe-meal-planning',
    client: 'Grain Kitchen',
    year: '2024',
    title: 'Grain - Recipe & Meal Planning',
    subtitle:
      'Redesigning a meal planning app\u2019s onboarding to get new users to their first saved recipe in under a minute.',
    heroImage: IMG.grain,
    heroAlt: 'Grain recipe app interface on a mobile phone',
    paragraphs: [
      'Grain\u2019s original onboarding took new users through an 8-screen preference quiz before showing a single recipe, and drop-off during onboarding was their biggest growth blocker. I redesigned the flow to show real recipes within the first 15 seconds, moving preference collection into lightweight, optional filters layered on top of browsing rather than a gate in front of it.',
      'I also rebuilt the recipe card component system to work across three contexts, browse grid, saved list, and full recipe view, with a single shared component instead of three separate builds, which cut engineering handoff time significantly.',
    ],
    goal: 'Onboarding completion nearly doubled, from 34% to 68%. Recipes come first, questions later.',
    stack: 'Figma, Galileo AI, Principle',
    screenshots: [IMG.pulse, IMG.northbound, IMG.fieldnote, IMG.lockstep],
  },
  {
    slug: 'fieldnote-ai-voice-notes',
    client: 'Fieldnote',
    year: '2026',
    title: 'Fieldnote - AI Voice Notes',
    subtitle:
      'Designing a voice-to-text note app built around AI summarization, made for people who think out loud.',
    heroImage: IMG.fieldnote,
    heroAlt: 'Fieldnote voice notes app on a mobile phone',
    paragraphs: [
      'Fieldnote\u2019s core bet was that voice input plus AI summarization could replace typed notes for a specific audience: founders, researchers, and consultants who think better speaking than typing. My job was making the AI feel trustworthy rather than magical or opaque, showing the raw transcript alongside the AI summary rather than hiding one behind the other.',
      'I designed the entire recording-to-summary flow, including a live waveform state during recording and an editable summary view where users could correct AI output inline. This transparency-first approach became a core differentiator in how Fieldnote positioned itself against competitors that only showed polished AI output.',
    ],
    goal: 'A 4.8 star rating across the first 10,000 reviews. Honesty builds trust faster than polish.',
    stack: 'Figma, ProtoPie, Lottie, Cursor',
    screenshots: [IMG.pulse, IMG.northbound, IMG.fernweh, IMG.lockstep],
  },
  {
    slug: 'lockstep-team-fitness-challenges',
    client: 'Lockstep',
    year: '2024',
    title: 'Lockstep - Team Fitness Challenges',
    subtitle:
      'A social fitness app redesign focused on making group challenges feel competitive without feeling stressful.',
    heroImage: IMG.lockstep,
    heroAlt: 'Lockstep fitness challenge app visual',
    paragraphs: [
      'Lockstep\u2019s early version had a leaderboard-first design that user interviews revealed was actively discouraging participation, people who weren\u2019t near the top stopped checking the app entirely. I redesigned the core experience around small-group challenges of 4 to 6 people instead of app-wide leaderboards, and added weekly rather than all-time rankings so nobody stayed permanently behind.',
      'I also rebuilt the check-in flow into a single-tap action from the home screen, since the original required navigating three screens to log a workout. Combined, these changes shifted the app from a top-heavy leaderboard product into something closer to a shared habit tracker.',
    ],
    goal: 'Weekly active users jumped 52% after launch. Fitness sticks when it feels like a real team.',
    stack: 'Figma, Principle, Whimsical, Xcode',
    screenshots: [IMG.pulse, IMG.northbound, IMG.fernweh, IMG.grain],
  },
];

export const tools: { group: string; items: string[] }[] = [
  { group: 'Design & Wireframing', items: ['Figma', 'Galileo AI', 'Motiff'] },
  { group: 'Prototyping & Motion', items: ['ProtoPie', 'Principle', 'Lottie'] },
  { group: 'Building & Shipping', items: ['Cursor', 'Xcode', 'GitHub Copilot'] },
];

export const workHistory: Job[] = [
  {
    company: 'Linear',
    role: 'Senior Product Designer',
    period: ['Mar 2023', 'Present'],
    description: [
      'Led end-to-end product design for core issue tracking experience, used by 100,000+ teams globally.',
      'Built and shipped a redesigned onboarding flow in 4 days using Figma + Cursor, reducing drop-off by 34%.',
      'Introduced AI-assisted design QA process, reducing review cycles from 3 days to 4 hours.',
    ],
  },
  {
    company: 'Revolut',
    role: 'Product Designer',
    period: ['Jun 2021', 'Feb 2023'],
    description: [
      'Owned product design for the Savings and Investments vertical across iOS and Android.',
      'Redesigned the mobile payments flow, increasing transaction completion rate by 22% within 60 days of launch.',
      'Used Perplexity and Claude to synthesize 200+ user interviews into actionable design briefs in hours, not weeks.',
    ],
  },
  {
    company: 'Pitch',
    role: 'Lead Product Designer',
    period: ['Sep 2019', 'May 2021'],
    description: [
      'First designer on the team, responsible for building the design system and core product experience from scratch.',
      'Designed the end-to-end seller onboarding experience, cutting time-to-first-listing from 14 days to 3.',
      'Prototyped and validated 3 new product concepts using Maze and Figma in under 2 weeks each.',
    ],
  },
];

export const aboutParagraphs = [
  "I'm a mobile app designer with 7 years of experience shaping iOS and Android products used by millions, from early-stage startups to teams shipping at scale. My focus is native feel: interfaces that respect platform conventions, motion that feels inevitable rather than decorative, and flows that hold up under real thumbs on real screens.",
  "I've led design for consumer, fintech, and health apps, working closely with engineers to ship features that translate cleanly into SwiftUI and Jetpack Compose. I care as much about the App Store listing and onboarding funnel as I do about the core product, since a beautifully designed screen nobody opens twice isn't a win.",
  "I'm based in Berlin, available for full-time and contract work, and open to remote roles with teams who ship fast and sweat the details.",
];

export function projectForSlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
