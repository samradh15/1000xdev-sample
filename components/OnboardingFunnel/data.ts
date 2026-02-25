export const PROJECT_TYPES = [
    { id: "web", label: "Web Application", desc: "Custom web apps, dashboards, portals", icon: "🌐" },
    { id: "mobile", label: "Mobile App", desc: "iOS, Android, cross-platform", icon: "📱" },
    { id: "saas", label: "SaaS Product", desc: "Multi-tenant, subscription-based", icon: "☁️" },
    { id: "ai", label: "AI Integration", desc: "LLMs, RAG, ML pipelines", icon: "🤖" },
    { id: "ecom", label: "E-commerce", desc: "Shopify, headless, custom stores", icon: "🛒" },
    { id: "mvp", label: "MVP / Prototype", desc: "Validate fast, ship in weeks", icon: "🚀" },
];

export const CASE_STUDIES: Record<string, {
    name: string; metrics: string[]; quote: string; quotee: string; geo: string;
}> = {
    web: { name: "TradewiseApp", metrics: ["50K+ users", "6-week MVP", "4.8★ rating"], quote: "They turned our messy spreadsheets into a real-time trading platform in 6 weeks. Unreal.", quotee: "Rajesh M., Founder", geo: "India" },
    mobile: { name: "KheloMore", metrics: ["500+ venues", "250 cities", "4.6★ on Play Store"], quote: "Our booking rate jumped 3× after the app launch. The UX is world-class.", quotee: "Ankit S., CEO", geo: "India" },
    saas: { name: "Loan Doctor", metrics: ["PWA + Mobile + Admin", "3-month delivery", "99.9% uptime"], quote: "Full-stack SaaS from zero to production in 3 months. They handled everything.", quotee: "Priya K., Co-founder", geo: "India" },
    ai: { name: "BioHeaven360", metrics: ["AI-first healthcare", "HIPAA compliant", "10K+ patients"], quote: "The AI pipeline they built processes lab results in seconds. Game-changing.", quotee: "Dr. Kumar, CTO", geo: "Dubai" },
    ecom: { name: "Amriti", metrics: ["Shopify + Next.js", "Sales doubled", "Sub-2s load time"], quote: "Post-launch, our conversions literally doubled. Worth every rupee.", quotee: "Dr. Nikita, Founder", geo: "India" },
    mvp: { name: "AstroLearn", metrics: ["24K students", "8-week build", "4.9★ rating"], quote: "From napkin sketch to 24K users in 2 months. They move impossibly fast.", quotee: "Vishal T., Founder", geo: "New Zealand" },
};

export const TIMELINE_OPTIONS = [
    { id: "asap", label: "ASAP", desc: "Need it yesterday" },
    { id: "1month", label: "< 1 Month", desc: "Quick turnaround" },
    { id: "1-3months", label: "1–3 Months", desc: "Standard timeline" },
    { id: "flexible", label: "Flexible", desc: "No rush" },
];

export const BUDGET_OPTIONS = [
    { id: "mvp", label: "₹2L – ₹5L", tag: "MVP", desc: "Validate your idea" },
    { id: "growth", label: "₹5L – ₹15L", tag: "Growth", desc: "Production-ready product", popular: true },
    { id: "scale", label: "₹15L – ₹40L", tag: "Scale", desc: "Enterprise features" },
    { id: "enterprise", label: "₹40L+", tag: "Enterprise", desc: "Full platform build" },
];

export const INTENTS = [
    { id: "idea", emoji: "💡", title: "I have an idea", desc: "I want to build a product" },
    { id: "problem", emoji: "🔧", title: "I have a problem", desc: "My current tech needs fixing" },
    { id: "exploring", emoji: "🔍", title: "I'm exploring", desc: "Just researching options" },
];

export const SOCIAL_STATS = [
    { value: "30+", label: "Clients" },
    { value: "100%", label: "Production" },
    { value: "3", label: "Countries" },
    { value: "6+", label: "Years" },
];

export type FunnelData = {
    intent: string;
    projectType: string;
    timeline: string;
    budget: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    brief: string;
};

export function buildDemoQueryString(data: FunnelData): string {
    const params = new URLSearchParams({
        demo: "1",
        name: data.name,
        company: data.company || "",
        type: data.projectType || "web",
        timeline: data.timeline || "",
        budget: data.budget || "",
    });
    return params.toString();
}
