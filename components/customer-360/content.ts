// Executive & Business copy for /customer-360
// Focused purely on Customer 360 & Community Intelligence (non-technical, edit-proof)

export const TRIAL_URL = "https://thricov2.thrico.social/#";

export const HERO = {
  eyebrow: "Customer 360 · Community Intelligence",
  title: ["One digital passport.", "Every community member, in one place."],
  subtitle:
    "Instead of keeping community posts, chapter memberships, event tickets, store purchases, gamification points, and login history in separate places — Customer 360 connects everything into one live profile for every member, student, or alumni.",
};

export interface SampleMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  location: string;
  isCurrentlyOnline: boolean;
  healthScore: number;
  healthStatus: "Thriving" | "Healthy" | "At Risk";
  segmentLabel: string;
  totalSpend: string;
  eventsAttended: number;
  communitiesJoined: number;
  contentCreated: number;
  pointsEarned: string;
  timeline: { text: string; time: string }[];
  aiSummary: {
    personaTitle: string;
    summary: string;
    suggestedOutreachChannel: "VIP Direct Call" | "Email" | "In-App Notification";
    recommendedAction: string;
  };
}

export const SAMPLE_MEMBERS: SampleMember[] = [
  {
    id: "pankaj",
    name: "Pankaj Verma",
    initials: "PV",
    role: "Alumni & Tech Founder",
    location: "Bengaluru",
    isCurrentlyOnline: true,
    healthScore: 94,
    healthStatus: "Thriving",
    segmentLabel: "👑 Champion",
    totalSpend: "₹18,450",
    eventsAttended: 14,
    communitiesJoined: 6,
    contentCreated: 48,
    pointsEarned: "4,850",
    timeline: [
      { text: "Checked in at Annual Tech Summit 2026", time: "2 hours ago" },
      { text: "Joined AI Innovators Community", time: "Yesterday" },
      { text: "Purchased Early Bird Ticket for ₹4,999", time: "3 days ago" },
    ],
    aiSummary: {
      personaTitle: "👑 VIP Community Champion & Power Spender",
      summary:
        "One of your most active contributors across tech discussions and flagship events, with ₹18,450 in lifetime spend and a 94/100 Health Score.",
      suggestedOutreachChannel: "VIP Direct Call",
      recommendedAction: "Invite to your Advisory Board & award a VIP Ambassador badge.",
    },
  },
  {
    id: "aisha",
    name: "Aisha Kapoor",
    initials: "AK",
    role: "Product Lead · Cohort '25",
    location: "Mumbai",
    isCurrentlyOnline: true,
    healthScore: 68,
    healthStatus: "Healthy",
    segmentLabel: "🌱 Potential Loyalist",
    totalSpend: "₹2,499",
    eventsAttended: 3,
    communitiesJoined: 3,
    contentCreated: 11,
    pointsEarned: "1,120",
    timeline: [
      { text: "Commented on Design Systems discussion", time: "4 hours ago" },
      { text: "Explored UX Research Meetup details", time: "Yesterday" },
      { text: "Registered for Product Teardown Workshop", time: "5 days ago" },
    ],
    aiSummary: {
      personaTitle: "🌱 Fast-Rising Product Builder",
      summary:
        "Joined recently with steady weekly visits and 11 helpful posts and comments. Showing strong interest in hands-on workshops.",
      suggestedOutreachChannel: "In-App Notification",
      recommendedAction: "Invite Aisha to her next flagship meetup to lock in loyalty.",
    },
  },
  {
    id: "rohan",
    name: "Rohan Mehta",
    initials: "RM",
    role: "Enterprise Member",
    location: "Delhi NCR",
    isCurrentlyOnline: false,
    healthScore: 34,
    healthStatus: "At Risk",
    segmentLabel: "⚠️ At Risk",
    totalSpend: "₹6,200",
    eventsAttended: 5,
    communitiesJoined: 4,
    contentCreated: 19,
    pointsEarned: "2,040",
    timeline: [
      { text: "Last visited the member portal", time: "21 days ago" },
      { text: "Opened Monthly Community Digest", time: "24 days ago" },
      { text: "Attended Cloud Architecture Roundtable", time: "42 days ago" },
    ],
    aiSummary: {
      personaTitle: "⚠️ High-Value Member Cooling Off",
      summary:
        "Historically active attendee with ₹6,200 in past spend, but hasn't visited in 3 weeks. Early check-in recommended before disengagement.",
      suggestedOutreachChannel: "Email",
      recommendedAction: "Send a friendly check-in with an invite to the upcoming summit.",
    },
  },
];

export const SUPERPOWERS = [
  {
    icon: "HeartPulse",
    title: "Engagement Health Score (0–100)",
    body: "Just like a credit score shows financial health, the Health Score shows how connected a member is: Thriving (80–100), Healthy (50–79), or At Risk (Below 40).",
  },
  {
    icon: "Layers",
    title: "Smart Member Categories",
    body: "Automatically groups members into 7 easy-to-understand tiers — from Champions and Loyal Members to At Risk and Hibernating.",
  },
  {
    icon: "Wallet",
    title: "Unified Lifetime Impact",
    body: "See exact Total Spend (₹), Events Attended, Communities Joined, Content Created, and Gamification Points on every profile.",
  },
  {
    icon: "History",
    title: "Real-Time Activity Timeline",
    body: "A live chronological feed across web and mobile apps — showing every check-in, community join, ticket purchase, and claimed offer.",
  },
];

export const LIFETIME_METRICS = [
  {
    icon: "IndianRupee",
    label: "Total Spend (₹)",
    detail: "Revenue from event tickets, community store merch, and memberships.",
  },
  {
    icon: "CalendarCheck",
    label: "Events Attended",
    detail: "Exact count of community summits, workshops, and meetups attended.",
  },
  {
    icon: "UsersRound",
    label: "Communities Joined",
    detail: "Chapters, alumni circles, and interest groups the member belongs to.",
  },
  {
    icon: "MessageSquareText",
    label: "Community Content",
    detail: "Posts, discussion replies, polls voted on, and helpful comments shared.",
  },
  {
    icon: "Award",
    label: "Gamification Points",
    detail: "Community reward points and badges earned through participation and referrals.",
  },
];

export interface MemberCategory {
  id: string;
  emoji: string;
  label: string;
  activityWindow: string;
  engagementLevel: string;
  spendProfile: string;
  whoTheyAre: string;
  action: string;
  tone: "amber" | "blue" | "indigo" | "sky" | "orange" | "zinc" | "rose";
}

export const MEMBER_CATEGORIES: MemberCategory[] = [
  {
    id: "champions",
    emoji: "👑",
    label: "Champions",
    activityWindow: "Active within 7 days",
    engagementLevel: "50+ activities",
    spendProfile: "₹5,000+ spent",
    whoTheyAre: "Your most active, highest-spending VIP members.",
    action: "Invite them to advisory boards, give them VIP badges, and make them ambassadors.",
    tone: "amber",
  },
  {
    id: "loyal",
    emoji: "💎",
    label: "Loyal Members",
    activityWindow: "Active within 14 days",
    engagementLevel: "20+ activities",
    spendProfile: "Consistent regulars",
    whoTheyAre: "Consistent regulars who always participate.",
    action: "Reward them with gamification points, special perks, and community spotlights.",
    tone: "blue",
  },
  {
    id: "potential",
    emoji: "🌱",
    label: "Potential Loyalists",
    activityWindow: "Active within 14 days",
    engagementLevel: "5–19 activities",
    spendProfile: "Growing interest",
    whoTheyAre: "Newer members who are showing high interest.",
    action: "Invite them to their first major event to lock in their loyalty.",
    tone: "indigo",
  },
  {
    id: "new",
    emoji: "✨",
    label: "New Members",
    activityWindow: "Joined this week",
    engagementLevel: "Getting started",
    spendProfile: "First-time visitors",
    whoTheyAre: "Just joined this week and exploring.",
    action: "Send a warm welcome guide and recommend top communities to join.",
    tone: "sky",
  },
  {
    id: "at-risk",
    emoji: "⚠️",
    label: "At Risk",
    activityWindow: "2–4 weeks inactive",
    engagementLevel: "Declining visits",
    spendProfile: "Previously active",
    whoTheyAre: "Used to be active, but haven't visited in 2–4 weeks.",
    action: "Send an automated friendly check-in or an upcoming event invite.",
    tone: "orange",
  },
  {
    id: "hibernating",
    emoji: "💤",
    label: "Hibernating",
    activityWindow: "Inactive over a month",
    engagementLevel: "Low recent activity",
    spendProfile: "Dormant account",
    whoTheyAre: "Inactive for over a month.",
    action: "Send an exclusive discount or a \"We miss you\" highlight digest.",
    tone: "zinc",
  },
  {
    id: "lost",
    emoji: "🛑",
    label: "Lost / Churned",
    activityWindow: "Inactive for months",
    engagementLevel: "No recent visits",
    spendProfile: "₹0 recent spend",
    whoTheyAre: "Inactive for months.",
    action: "Send a simple feedback survey to understand why they stopped visiting.",
    tone: "rose",
  },
];

export const BUSINESS_USE_CASES = [
  {
    tag: "Use Case 01 · Community Retention",
    icon: "ShieldAlert",
    title: "Preventing Churn Before Members Leave",
    problem:
      "Community members, students, or alumni quietly stop posting and visiting — and by the time your team notices, they are gone.",
    solution:
      "Customer 360 automatically spots members shifting into the \"At Risk\" category and triggers a friendly re-engagement email or in-app invite with active discussions and upcoming community events.",
  },
  {
    tag: "Use Case 02 · Community Advocacy",
    icon: "Crown",
    title: "Finding Your Top Brand & Chapter Ambassadors",
    problem:
      "Community organizers struggle to know who their most passionate contributors, mentors, and peer connectors really are.",
    solution:
      "Filter for \"Champions\" with a Health Score above 90 to instantly surface ready-made chapter mentors, guest speakers, and community ambassadors.",
  },
  {
    tag: "Use Case 03 · Community Revenue",
    icon: "Ticket",
    title: "Maximizing Event & Summit Ticket Sales",
    problem:
      "Sending generic event blast emails to the entire community leads to low open rates and member fatigue.",
    solution:
      "Target members active in related interest groups, past community events, or high lifetime spend with tailored VIP and early-bird ticket offerings.",
  },
];

export interface CopilotPromptFixture {
  id: string;
  prompt: string;
  badge: string;
  headline: string;
  summary: string;
  metrics: { label: string; value: string }[];
  recommendation: string;
}

export const COPILOT_PROMPTS: CopilotPromptFixture[] = [
  {
    id: "profile",
    prompt: "Show me the Customer 360 profile for Pankaj Verma",
    badge: "Member Passport",
    headline: "Pankaj Verma — 👑 Champion (Health 94/100)",
    summary:
      "Active 2 hours ago in Bengaluru. ₹18,450 lifetime spend across 14 events attended, 6 communities joined, and 48 posts and comments.",
    metrics: [
      { label: "Health Score", value: "94 / 100" },
      { label: "Total Spend", value: "₹18,450" },
      { label: "Best Channel", value: "VIP Direct Call" },
    ],
    recommendation: "Invite Pankaj to speak at Annual Tech Summit 2026.",
  },
  {
    id: "churn",
    prompt: "Which members are at risk of churning this month?",
    badge: "Churn Watchlist",
    headline: "38 Members Moved Into \"At Risk\"",
    summary:
      "Members who haven't visited in 2–4 weeks with Health Scores below 40 — including 12 past event buyers.",
    metrics: [
      { label: "At Risk Members", value: "38" },
      { label: "Average Health", value: "33 / 100" },
      { label: "Past Spend", value: "₹2,14,000" },
    ],
    recommendation: "Send an automated \"We miss you\" invite with a VIP summit pass.",
  },
  {
    id: "funnel",
    prompt: "Show me our event registration conversion funnel",
    badge: "Event Insights",
    headline: "Annual Tech Summit 2026 — Registration Funnel",
    summary:
      "Live member journey from event page visits to checkout starts and confirmed ticket purchases.",
    metrics: [
      { label: "Event Page Views", value: "4,820" },
      { label: "Started Checkout", value: "1,190 (24.7%)" },
      { label: "Tickets Purchased", value: "742 (62.4%)" },
    ],
    recommendation: "Follow up with 448 unfinished checkouts via In-App Notification.",
  },
  {
    id: "loyal",
    prompt: "Who are our top 10 most loyal members?",
    badge: "Loyalty Leaderboard",
    headline: "Top 10 Most Engaged Community Leaders",
    summary:
      "Ranked by Health Score (90+), consistent event attendance, and helpful posts across your communities.",
    metrics: [
      { label: "Health Range", value: "91 – 98" },
      { label: "Avg Events", value: "16.4 attended" },
      { label: "Avg Points", value: "4,310 pts" },
    ],
    recommendation: "Feature them in this month's spotlight and award VIP badges.",
  },
];

export const DIGITAL_FOOTPRINT = {
  devices: [
    { name: "Desktop", sessions: 34, pct: 65 },
    { name: "Mobile App & Web", sessions: 16, pct: 31 },
    { name: "Tablet", sessions: 2, pct: 4 },
  ],
  os: [
    { name: "macOS", pct: 48 },
    { name: "iOS", pct: 26 },
    { name: "Windows", pct: 19 },
    { name: "Android", pct: 7 },
  ],
  browsers: [
    { name: "Chrome", pct: 68 },
    { name: "Safari", pct: 24 },
    { name: "Firefox", pct: 8 },
  ],
  topPages: [
    { title: "AI Innovators Community Feed", path: "/communities/ai-innovators", views: 18 },
    { title: "Annual Tech Summit 2026", path: "/events/tech-summit-2026", views: 14 },
    { title: "Alumni Mentorship Directory", path: "/mentors", views: 9 },
    { title: "Community Perks & Merch Store", path: "/marketplace/vip-passes", views: 7 },
  ],
};

export const FAQS = [
  {
    q: "What is Customer 360 in simple words?",
    a: "Think of Customer 360 as an all-in-one digital passport for every member, student, or alumni in your community. Instead of keeping community posts, chapter memberships, event tickets, store purchases, and login history in separate places, everything comes together in one single profile.",
  },
  {
    q: "What does the Engagement Health Score (0 to 100) tell me?",
    a: "Just like a credit score shows financial health, the Health Score shows how actively connected a member is to your community: Thriving (80–100) for super active contributors and buyers, Healthy (50–79) for steady readers and attendees, and At Risk (Below 40) when someone hasn't visited in over 2 weeks.",
  },
  {
    q: "How do the 7 Smart Member Categories work?",
    a: "The system automatically groups community members based on how recently they visited, how often they post, react, or attend events, and how much they spend — placing them into Champions, Loyal Members, Potential Loyalists, New Members, At Risk, Hibernating, or Lost / Churned with clear next steps.",
  },
  {
    q: "Do community admins need technical skills to use Customer 360?",
    a: "Not at all. Community admins can ask the AI Copilot questions in plain English — like 'Which members are at risk of churning this month?' or 'Show me the Customer 360 profile for Pankaj Verma' — and instantly get visual cards, health metrics, and next-step recommendations.",
  },
  {
    q: "How does Customer 360 help grow community engagement and event ticket sales?",
    a: "Instead of sending generic blasts to every member, you can invite active group members and past attendees to relevant workshops, recognize top Champions as community mentors, and re-engage At Risk members before they leave.",
  },
];
