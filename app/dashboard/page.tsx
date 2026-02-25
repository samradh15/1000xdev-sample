"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    LayoutDashboard, CheckSquare, MessageSquare, FileText,
    CreditCard, ThumbsUp, Settings, Bell, ChevronRight,
    TrendingUp, Clock, AlertCircle, CheckCircle2, Circle,
    Upload, Download, ExternalLink, Plus, Filter, Search,
    Star, ArrowUpRight, Zap, Globe, Activity,
    Calendar, Send, Eye, Edit3, Package, Layers, Menu, X,
} from "lucide-react";

/* ─── MOCK DATA ─────────────────────────────────────────────── */

const PROJECT = {
    name: "TradeWise Pro – Web & Mobile",
    client: "Rajesh Mehta",
    company: "TradeWise Pvt. Ltd.",
    avatar: "RM",
    manager: "Aryan Singh",
    startDate: "Jan 15, 2026",
    deadline: "Apr 30, 2026",
    progress: 62,
    health: "on-track" as const,
    budget: 4200000,
    spent: 2604000,
    nextMilestone: "Sprint 3 – Backend APIs",
    nextDeadline: "Mar 8, 2026",
};

const MILESTONES = [
    { id: 1, title: "Discovery & Requirements", status: "done", date: "Jan 20", notes: "All documents signed. Scope locked.", deliverable: "SOW + Tech Spec" },
    { id: 2, title: "UI/UX Design & Prototype", status: "done", date: "Feb 5", notes: "Figma approved by client.", deliverable: "Figma File + Prototype" },
    { id: 3, title: "Sprint 1 – Frontend Shell", status: "done", date: "Feb 19", notes: "All screens deployed to staging.", deliverable: "Staging URL" },
    { id: 4, title: "Sprint 2 – Auth & Onboarding", status: "in-progress", date: "Mar 4", notes: "Auth complete. Onboarding 80% done.", deliverable: "Auth module + Onboarding" },
    { id: 5, title: "Sprint 3 – Backend APIs", status: "upcoming", date: "Mar 18", notes: "API spec ready.", deliverable: "REST API + Postman" },
    { id: 6, title: "Sprint 4 – AI Integration", status: "upcoming", date: "Apr 2", notes: "", deliverable: "AI features on staging" },
    { id: 7, title: "QA & Testing", status: "upcoming", date: "Apr 15", notes: "", deliverable: "QA report + bug fixes" },
    { id: 8, title: "Launch", status: "upcoming", date: "Apr 30", notes: "", deliverable: "Production deploy" },
];

const UPDATES = [
    {
        id: 1, week: "Week 6", date: "Feb 24, 2026", author: "Aryan Singh", initials: "AS",
        title: "Auth complete + Onboarding 80% done",
        body: "Completed the full authentication module with magic link + Google OAuth. Onboarding wizard 80% built — final step going in tomorrow.",
        screenshots: ["Auth flow", "Onboarding step 3"],
        comments: [{ author: "Rajesh M", initials: "RM", text: "Looks great! Can we add phone OTP as well?", time: "2h ago" }],
    },
    {
        id: 2, week: "Week 5", date: "Feb 17, 2026", author: "Aryan Singh", initials: "AS",
        title: "Sprint 1 delivered – All screens live on staging",
        body: "All 14 frontend screens are now live on staging. Trading dashboard, portfolio view, and watchlist are pixel-perfect to the Figma.",
        screenshots: ["Dashboard", "Portfolio", "Watchlist"],
        comments: [
            { author: "Rajesh M", initials: "RM", text: "Love the dashboard! The candlestick chart looks perfect.", time: "5d ago" },
            { author: "Aryan S", initials: "AS", text: "Thanks! Working on mobile responsive this week.", time: "5d ago" },
        ],
    },
];

const DOCUMENTS = [
    { id: 1, name: "Statement of Work v2.pdf", type: "pdf", size: "340 KB", date: "Jan 19", category: "Legal", uploader: "1000X Team" },
    { id: 2, name: "TradeWise_Figma_Design.fig", type: "figma", size: "12.4 MB", date: "Feb 4", category: "Design", uploader: "1000X Team" },
    { id: 3, name: "API_Documentation_v1.pdf", type: "pdf", size: "2.1 MB", date: "Feb 20", category: "Technical", uploader: "1000X Team" },
    { id: 4, name: "Brand_Assets.zip", type: "zip", size: "8.7 MB", date: "Jan 20", category: "Assets", uploader: "Rajesh M" },
    { id: 5, name: "Sprint_2_Demo.mp4", type: "video", size: "95 MB", date: "Feb 19", category: "Demo", uploader: "1000X Team" },
    { id: 6, name: "NDA_Signed.pdf", type: "pdf", size: "180 KB", date: "Jan 15", category: "Legal", uploader: "Rajesh M" },
];

const INVOICES = [
    { id: "INV-001", title: "Project Kickoff – 30%", amount: 1260000, due: "Jan 20, 2026", status: "paid", milestone: "Discovery" },
    { id: "INV-002", title: "Design & Sprint 1 – 30%", amount: 1260000, due: "Feb 19, 2026", status: "paid", milestone: "Sprint 1" },
    { id: "INV-003", title: "Sprint 2 & 3 – 20%", amount: 840000, due: "Mar 18, 2026", status: "due", milestone: "Sprint 3" },
    { id: "INV-004", title: "Launch & Handover – 20%", amount: 840000, due: "Apr 30, 2026", status: "upcoming", milestone: "Launch" },
];

const APPROVALS_DATA = [
    { id: 1, title: "Figma UI Design – Homepage & Dashboard", status: "approved", date: "Feb 3", requestedBy: "1000X Team", type: "Design" },
    { id: 2, title: "API Architecture Document", status: "approved", date: "Feb 18", requestedBy: "1000X Team", type: "Technical" },
    { id: 3, title: "Sprint 2 Demo – Auth & Onboarding Flow", status: "pending", date: "Feb 24", requestedBy: "1000X Team", type: "Demo" },
    { id: 4, title: "Color palette revision for mobile app", status: "revision", date: "Feb 22", requestedBy: "1000X Team", type: "Design" },
];

/* ─── HELPERS ────────────────────────────────────────────────── */

function Avatar({ initials, size = 32 }: { initials: string; size?: number }) {
    return (
        <div
            className="rounded-full bg-[#E08552] flex items-center justify-center flex-shrink-0"
            style={{ width: size, height: size }}
        >
            <span className="text-white font-serif font-bold" style={{ fontSize: size * 0.35 }}>
                {initials}
            </span>
        </div>
    );
}

function StatusBadge({ status }: { status: string }) {
    const map: Record<string, string> = {
        done: "bg-emerald-100 text-emerald-700 border-emerald-200",
        "in-progress": "bg-[#E08552]/10 text-[#E08552] border-[#E08552]/20",
        upcoming: "bg-[#2A241D]/5 text-[#2A241D]/50 border-[#2A241D]/10",
        paid: "bg-emerald-100 text-emerald-700 border-emerald-200",
        due: "bg-amber-100 text-amber-700 border-amber-200",
        approved: "bg-emerald-100 text-emerald-700 border-emerald-200",
        pending: "bg-amber-100 text-amber-700 border-amber-200",
        revision: "bg-red-100 text-red-600 border-red-200",
    };
    const label: Record<string, string> = {
        done: "Done", "in-progress": "In Progress", upcoming: "Upcoming",
        paid: "Paid", due: "Due", approved: "Approved", pending: "Pending", revision: "Revision",
    };
    return (
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${map[status] || map.upcoming}`}>
            {label[status] || status}
        </span>
    );
}

function ProgressBar({ value, className = "" }: { value: number; className?: string }) {
    return (
        <div className={`h-1.5 bg-black/5 rounded-full overflow-hidden ${className}`}>
            <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#E08552] to-[#D4713B]"
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
        </div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    visible: (i: number) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.06 },
    }),
};

/* ─── VIEWS ──────────────────────────────────────────────────── */

function OverviewView() {
    return (
        <div className="flex flex-col gap-8">
            {/* Project Hero */}
            <motion.div
                variants={fadeUp} initial="hidden" animate="visible" custom={0}
                className="bg-white/60 backdrop-blur-sm border border-black/5 rounded-[24px] p-8 relative overflow-hidden"
            >
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-[#E08552]/5 rounded-full blur-2xl" />
                <div className="flex justify-between items-start flex-wrap gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600">On Track</span>
                        </div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A241D] mb-2">{PROJECT.name}</h2>
                        <div className="flex items-center gap-3">
                            <Avatar initials={PROJECT.avatar} size={28} />
                            <span className="text-sm text-[#2A241D]/60">{PROJECT.client} · {PROJECT.company}</span>
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="font-serif text-4xl font-bold text-[#2A241D]">{PROJECT.progress}%</div>
                        <div className="text-xs text-[#2A241D]/50 mb-2">Overall Progress</div>
                        <div className="w-40"><ProgressBar value={PROJECT.progress} /></div>
                    </div>
                </div>
                <div className="flex gap-8 mt-6 flex-wrap text-xs text-[#2A241D]/50">
                    {[
                        { label: "Start", value: PROJECT.startDate, Icon: Calendar },
                        { label: "Deadline", value: PROJECT.deadline, Icon: Clock },
                        { label: "Next", value: PROJECT.nextMilestone, Icon: ChevronRight },
                    ].map(({ label, value, Icon }, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <Icon size={13} />
                            <span>{label}:</span>
                            <span className="font-medium text-[#2A241D]/70">{value}</span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Stat Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Milestones", value: "3/8", sub: "5 remaining", Icon: CheckCircle2, accent: true },
                    { label: "Budget Used", value: "62%", sub: `₹${(PROJECT.spent / 100000).toFixed(0)}L of ₹${(PROJECT.budget / 100000).toFixed(0)}L`, Icon: TrendingUp },
                    { label: "Weeks Left", value: "9", sub: "Deadline Apr 30", Icon: Clock },
                    { label: "Approvals", value: "1", sub: "Sprint 2 demo pending", Icon: AlertCircle },
                ].map((s, i) => (
                    <motion.div
                        key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i + 1}
                        className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl p-5 hover:-translate-y-0.5 hover:border-[#E08552]/30 transition-all duration-300 group"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${s.accent ? "bg-[#E08552]/10 text-[#E08552]" : "bg-black/5 text-[#2A241D]/40"} group-hover:text-[#E08552] group-hover:bg-[#E08552]/10 transition-colors`}>
                                <s.Icon size={16} />
                            </div>
                            <ArrowUpRight size={13} className="text-[#2A241D]/20 group-hover:text-[#E08552] transition-colors" />
                        </div>
                        <div className="font-serif text-2xl font-bold text-[#2A241D]">{s.value}</div>
                        <div className="text-xs text-[#2A241D]/50 mt-0.5">{s.label}</div>
                        <div className="text-[10px] text-[#2A241D]/35 mt-1">{s.sub}</div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Recent Activity */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={5}
                    className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-6">
                    <h3 className="font-serif text-lg font-bold text-[#2A241D] mb-5">Recent Activity</h3>
                    <div className="flex flex-col gap-4">
                        {MILESTONES.slice(0, 5).map((m) => (
                            <div key={m.id} className="flex items-start gap-3">
                                <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${m.status === "done" ? "bg-emerald-500" : m.status === "in-progress" ? "bg-[#E08552]" : "bg-[#2A241D]/15"}`} />
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-medium text-[#2A241D]">{m.title}</div>
                                    <div className="text-xs text-[#2A241D]/40">{m.date} · {m.deliverable}</div>
                                </div>
                                <StatusBadge status={m.status} />
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Budget */}
                <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={6}
                    className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-6">
                    <h3 className="font-serif text-lg font-bold text-[#2A241D] mb-5">Budget Overview</h3>
                    <div className="flex items-end gap-2 h-28 mb-4">
                        {INVOICES.map((inv) => {
                            const pct = (inv.amount / PROJECT.budget) * 100 * 2.5;
                            const isPaid = inv.status === "paid";
                            return (
                                <div key={inv.id} className="flex-1 bg-black/[0.03] rounded-t-md flex items-end" title={inv.title}>
                                    <div
                                        className={`w-full rounded-t-md ${isPaid ? "bg-gradient-to-t from-[#E08552] to-[#E08552]/70" : "bg-[#2A241D]/10"}`}
                                        style={{ height: `${pct}%` }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex gap-4 mb-4 text-xs text-[#2A241D]/50">
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-[#E08552]" />Paid</div>
                        <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-sm bg-[#2A241D]/10" />Remaining</div>
                    </div>
                    <div className="flex flex-col divide-y divide-black/5">
                        {INVOICES.map((inv) => (
                            <div key={inv.id} className="flex justify-between items-center py-2.5">
                                <div>
                                    <div className="text-xs font-medium text-[#2A241D]">{inv.title}</div>
                                    <div className="text-[10px] text-[#2A241D]/40">{inv.due}</div>
                                </div>
                                <div className="text-right flex items-center gap-2">
                                    <span className="text-sm font-medium text-[#2A241D]">₹{(inv.amount / 100000).toFixed(1)}L</span>
                                    <StatusBadge status={inv.status} />
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function MilestonesView() {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A241D]">Milestones</h2>
                    <p className="text-sm text-[#2A241D]/50 mt-1">Track project delivery end to end</p>
                </div>
                <div className="text-xs text-[#2A241D]/50">
                    <span className="text-emerald-600 font-bold">3</span> done · <span className="text-[#E08552] font-bold">1</span> active · <span className="font-bold">4</span> upcoming
                </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-8">
                <div className="mb-8">
                    <div className="flex justify-between mb-2 text-sm text-[#2A241D]/60">
                        <span>Overall Completion</span>
                        <span className="font-medium text-[#2A241D]">3 / 8 milestones</span>
                    </div>
                    <ProgressBar value={37.5} className="h-2" />
                </div>

                <div className="flex flex-col">
                    {MILESTONES.map((m, i) => (
                        <motion.div key={m.id} variants={fadeUp} initial="hidden" animate="visible" custom={i}
                            className="flex gap-4 pb-6 relative"
                        >
                            {i < MILESTONES.length - 1 && (
                                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-black/5" />
                            )}
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 z-10 mt-0.5 ${m.status === "done" ? "bg-emerald-100 border-2 border-emerald-400" :
                                m.status === "in-progress" ? "bg-[#E08552]/10 border-2 border-[#E08552]" :
                                    "bg-[#2A241D]/5 border-2 border-[#2A241D]/10"
                                }`}>
                                {m.status === "done" && <CheckCircle2 size={11} className="text-emerald-600" />}
                                {m.status === "in-progress" && <div className="w-2 h-2 rounded-full bg-[#E08552]" />}
                                {m.status === "upcoming" && <Circle size={10} className="text-[#2A241D]/30" />}
                            </div>
                            <div className={`flex-1 rounded-2xl p-4 ${m.status === "in-progress" ? "bg-[#E08552]/[0.03] border border-[#E08552]/10" : ""}`}>
                                <div className="flex justify-between items-start flex-wrap gap-2">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="font-sans text-sm font-semibold text-[#2A241D]">{m.title}</span>
                                            <StatusBadge status={m.status} />
                                        </div>
                                        {m.notes && <p className="text-xs text-[#2A241D]/50 mb-1">{m.notes}</p>}
                                        <div className="flex items-center gap-1.5 text-xs text-[#2A241D]/35">
                                            <Package size={11} />{m.deliverable}
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-[#2A241D]/40">{m.date}</div>
                                        {m.status === "done" && (
                                            <button className="mt-1 text-[10px] border border-black/10 rounded-lg px-2 py-1 text-[#2A241D]/50 hover:text-[#E08552] hover:border-[#E08552]/30 transition-colors">
                                                <Download size={10} className="inline mr-1" />Download
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function UpdatesView() {
    const [comment, setComment] = useState("");
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="font-serif text-2xl font-bold text-[#2A241D]">Weekly Updates</h2>
                <p className="text-sm text-[#2A241D]/50 mt-1">Progress feed from the 1000X team</p>
            </div>
            {UPDATES.map((u, idx) => (
                <motion.div key={u.id} variants={fadeUp} initial="hidden" animate="visible" custom={idx}
                    className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] overflow-hidden hover:border-[#E08552]/20 transition-colors">
                    <div className="p-5 border-b border-black/5 flex items-center gap-3">
                        <Avatar initials={u.initials} size={36} />
                        <div>
                            <div className="text-sm font-semibold text-[#2A241D]">{u.author}</div>
                            <div className="text-[10px] text-[#2A241D]/40">{u.week} · {u.date}</div>
                        </div>
                    </div>
                    <div className="p-5">
                        <h3 className="text-base font-semibold text-[#2A241D] mb-2">{u.title}</h3>
                        <p className="text-sm text-[#2A241D]/60 leading-relaxed mb-4">{u.body}</p>
                        {u.screenshots && (
                            <div className="flex gap-2 mb-4 flex-wrap">
                                {u.screenshots.map((s, i) => (
                                    <div key={i} className="px-3 py-1.5 bg-black/[0.03] border border-black/5 rounded-lg text-xs text-[#2A241D]/60 flex items-center gap-1.5">
                                        <Eye size={11} className="text-[#E08552]" />{s}
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="bg-[#F9F8F6] rounded-2xl p-4">
                            {u.comments.map((c, i) => (
                                <div key={i} className="flex gap-2.5 mb-3 last:mb-0">
                                    <Avatar initials={c.initials} size={26} />
                                    <div className="flex-1 bg-white/70 rounded-xl p-3">
                                        <div className="flex justify-between mb-1">
                                            <span className="text-xs font-semibold text-[#2A241D]">{c.author}</span>
                                            <span className="text-[10px] text-[#2A241D]/30">{c.time}</span>
                                        </div>
                                        <p className="text-xs text-[#2A241D]/60">{c.text}</p>
                                    </div>
                                </div>
                            ))}
                            <div className="flex gap-2.5 mt-3">
                                <Avatar initials={PROJECT.avatar} size={26} />
                                <div className="flex-1 flex gap-2">
                                    <input
                                        className="flex-1 bg-white/70 border border-black/5 rounded-xl px-3 py-2 text-xs text-[#2A241D] placeholder:text-[#2A241D]/30 outline-none focus:border-[#E08552]/30 transition-colors"
                                        placeholder="Write a comment..."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                    />
                                    <button className="bg-[#E08552] text-white rounded-xl px-3 py-2 hover:bg-[#D4713B] transition-colors">
                                        <Send size={13} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function DocumentsView() {
    const categories = ["All", "Legal", "Design", "Technical", "Assets", "Demo"];
    const [cat, setCat] = useState("All");
    const filtered = cat === "All" ? DOCUMENTS : DOCUMENTS.filter((d) => d.category === cat);
    const typeColors: Record<string, { bg: string; text: string; label: string }> = {
        pdf: { bg: "bg-red-50", text: "text-red-500", label: "PDF" },
        figma: { bg: "bg-purple-50", text: "text-purple-500", label: "FIG" },
        zip: { bg: "bg-amber-50", text: "text-amber-600", label: "ZIP" },
        video: { bg: "bg-emerald-50", text: "text-emerald-600", label: "MP4" },
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A241D]">Document Vault</h2>
                    <p className="text-sm text-[#2A241D]/50 mt-1">{DOCUMENTS.length} files · All assets in one place</p>
                </div>
                <button className="bg-[#E08552] text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-[#D4713B] transition-colors">
                    <Upload size={14} />Upload
                </button>
            </div>
            <div className="flex gap-2 flex-wrap">
                {categories.map((c) => (
                    <button key={c} onClick={() => setCat(c)} className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all ${cat === c ? "bg-[#E08552] text-white border-[#E08552]" : "bg-transparent text-[#2A241D]/50 border-black/10 hover:border-[#E08552]/30 hover:text-[#E08552]"}`}>
                        {c}
                    </button>
                ))}
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] divide-y divide-black/5">
                {filtered.map((f) => {
                    const tc = typeColors[f.type] || typeColors.pdf;
                    return (
                        <div key={f.id} className="flex items-center gap-3 px-5 py-3.5 hover:bg-black/[0.01] transition-colors cursor-pointer">
                            <div className={`w-10 h-10 rounded-xl ${tc.bg} flex items-center justify-center flex-shrink-0`}>
                                <span className={`text-[10px] font-bold ${tc.text}`}>{tc.label}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium text-[#2A241D] truncate">{f.name}</div>
                                <div className="text-[10px] text-[#2A241D]/40">{f.size} · by {f.uploader}</div>
                            </div>
                            <span className="text-[10px] text-[#2A241D]/30 hidden sm:block">{f.date}</span>
                            <button className="text-[#2A241D]/30 hover:text-[#E08552] transition-colors"><Download size={14} /></button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function BillingView() {
    const paid = INVOICES.filter((i) => i.status === "paid").reduce((a, i) => a + i.amount, 0);
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="font-serif text-2xl font-bold text-[#2A241D]">Billing & Payments</h2>
                <p className="text-sm text-[#2A241D]/50 mt-1">Invoice history and upcoming payments</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                    { label: "Total Contract", value: `₹${(PROJECT.budget / 100000).toFixed(0)}L`, color: "text-[#2A241D]" },
                    { label: "Amount Paid", value: `₹${(paid / 100000).toFixed(1)}L`, color: "text-emerald-600" },
                    { label: "Remaining", value: `₹${((PROJECT.budget - paid) / 100000).toFixed(1)}L`, color: "text-amber-600" },
                    { label: "Next Due", value: "Mar 18", color: "text-[#E08552]" },
                ].map((s, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i}
                        className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl p-5">
                        <div className="text-[10px] text-[#2A241D]/40 uppercase tracking-wider mb-2">{s.label}</div>
                        <div className={`font-serif text-xl font-bold ${s.color}`}>{s.value}</div>
                    </motion.div>
                ))}
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-6">
                <h3 className="font-serif text-lg font-bold text-[#2A241D] mb-5">Invoice History</h3>
                <div className="flex flex-col divide-y divide-black/5">
                    {INVOICES.map((inv) => (
                        <div key={inv.id} className="flex items-center gap-4 py-4">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${inv.status === "paid" ? "bg-emerald-50" : inv.status === "due" ? "bg-amber-50" : "bg-black/[0.03]"}`}>
                                <CreditCard size={16} className={inv.status === "paid" ? "text-emerald-500" : inv.status === "due" ? "text-amber-500" : "text-[#2A241D]/30"} />
                            </div>
                            <div className="flex-1">
                                <div className="text-sm font-semibold text-[#2A241D]">{inv.title}</div>
                                <div className="text-[10px] text-[#2A241D]/40">{inv.id} · {inv.milestone} · Due {inv.due}</div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold text-[#2A241D]">₹{(inv.amount / 100000).toFixed(1)}L</span>
                                <StatusBadge status={inv.status} />
                                {inv.status === "due" && (
                                    <button className="bg-[#E08552] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#D4713B] transition-colors">Pay Now</button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function ApprovalsView() {
    const [approvals, setApprovals] = useState(APPROVALS_DATA);
    return (
        <div className="flex flex-col gap-6">
            <div>
                <h2 className="font-serif text-2xl font-bold text-[#2A241D]">Approvals</h2>
                <p className="text-sm text-[#2A241D]/50 mt-1">Review and approve deliverables</p>
            </div>
            {approvals.map((a, i) => (
                <motion.div key={a.id} variants={fadeUp} initial="hidden" animate="visible" custom={i}
                    className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl p-5 flex items-center justify-between gap-4 hover:border-[#E08552]/20 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.type === "Design" ? "bg-purple-50 text-purple-500" : a.type === "Demo" ? "bg-blue-50 text-blue-500" : "bg-emerald-50 text-emerald-500"}`}>
                            {a.type === "Design" ? <Layers size={16} /> : a.type === "Demo" ? <Eye size={16} /> : <FileText size={16} />}
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-[#2A241D]">{a.title}</div>
                            <div className="text-[10px] text-[#2A241D]/40">By {a.requestedBy} · {a.date}</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <StatusBadge status={a.status} />
                        {a.status === "pending" && (
                            <>
                                <button onClick={() => setApprovals((p) => p.map((x) => x.id === a.id ? { ...x, status: "approved" } : x))}
                                    className="border border-emerald-200 bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-emerald-100 transition-colors">
                                    <CheckCircle2 size={12} />Approve
                                </button>
                                <button onClick={() => setApprovals((p) => p.map((x) => x.id === a.id ? { ...x, status: "revision" } : x))}
                                    className="border border-red-200 bg-red-50 text-red-600 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 hover:bg-red-100 transition-colors">
                                    <Edit3 size={12} />Revise
                                </button>
                            </>
                        )}
                    </div>
                </motion.div>
            ))}
        </div>
    );
}

function AdminView() {
    const projects = [
        { name: "TradeWise Pro", client: "Rajesh M", progress: 62, health: "on-track", budget: "₹42L", due: "Apr 30", status: "active" },
        { name: "AstroLearn 2.0", client: "Priya S", progress: 88, health: "on-track", budget: "₹28L", due: "Mar 10", status: "active" },
        { name: "Bioheaven AI", client: "Dr. Kumar", progress: 35, health: "at-risk", budget: "₹18L", due: "May 15", status: "active" },
        { name: "Amriti v2", client: "Dr. Nikita", progress: 100, health: "on-track", budget: "₹12L", due: "Feb 1", status: "completed" },
    ];
    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="font-serif text-2xl font-bold text-[#2A241D]">Admin Overview</h2>
                    <p className="text-sm text-[#2A241D]/50 mt-1">All active projects at a glance</p>
                </div>
                <button className="bg-[#E08552] text-white px-4 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 hover:bg-[#D4713B] transition-colors">
                    <Plus size={14} />New Project
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {[
                    { label: "Active Projects", value: "3", Icon: Activity, color: "text-blue-600" },
                    { label: "Total Revenue", value: "₹1.2Cr", Icon: TrendingUp, color: "text-emerald-600" },
                    { label: "Pending Invoices", value: "₹18.4L", Icon: CreditCard, color: "text-amber-600" },
                    { label: "Approvals Due", value: "2", Icon: AlertCircle, color: "text-[#E08552]" },
                    { label: "Happy Clients", value: "30+", Icon: Star, color: "text-purple-500" },
                ].map((s, i) => (
                    <motion.div key={i} variants={fadeUp} initial="hidden" animate="visible" custom={i}
                        className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl p-4">
                        <s.Icon size={16} className={`${s.color} mb-2`} />
                        <div className={`font-serif text-xl font-bold ${s.color}`}>{s.value}</div>
                        <div className="text-[10px] text-[#2A241D]/40 mt-0.5">{s.label}</div>
                    </motion.div>
                ))}
            </div>
            <div className="bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-6 overflow-x-auto">
                <h3 className="font-serif text-lg font-bold text-[#2A241D] mb-5">All Projects</h3>
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-black/5">
                            {["Project", "Client", "Progress", "Health", "Budget", "Due", "Status"].map((h) => (
                                <th key={h} className="text-left text-[10px] uppercase tracking-wider font-semibold text-[#2A241D]/40 pb-3 px-2">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p, i) => (
                            <tr key={i} className="border-b border-black/[0.03] hover:bg-black/[0.01] transition-colors cursor-pointer">
                                <td className="py-3.5 px-2 text-sm font-semibold text-[#2A241D]">{p.name}</td>
                                <td className="py-3.5 px-2 text-sm text-[#2A241D]/50">{p.client}</td>
                                <td className="py-3.5 px-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-16"><ProgressBar value={p.progress} /></div>
                                        <span className="text-xs text-[#2A241D]/50">{p.progress}%</span>
                                    </div>
                                </td>
                                <td className="py-3.5 px-2">
                                    <div className="flex items-center gap-1.5">
                                        <div className={`w-2 h-2 rounded-full ${p.health === "on-track" ? "bg-emerald-500" : "bg-amber-500"}`} />
                                        <span className={`text-xs ${p.health === "on-track" ? "text-emerald-600" : "text-amber-600"}`}>{p.health}</span>
                                    </div>
                                </td>
                                <td className="py-3.5 px-2 text-sm text-[#2A241D]">{p.budget}</td>
                                <td className="py-3.5 px-2 text-sm text-[#2A241D]/50">{p.due}</td>
                                <td className="py-3.5 px-2"><StatusBadge status={p.status === "completed" ? "done" : "in-progress"} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

/* ─── MAIN DASHBOARD ────────────────────────────────────────── */

const CLIENT_NAV = [
    { id: "overview", label: "Overview", Icon: LayoutDashboard },
    { id: "milestones", label: "Milestones", Icon: CheckSquare },
    { id: "updates", label: "Weekly Updates", Icon: MessageSquare },
    { id: "documents", label: "Documents", Icon: FileText },
    { id: "billing", label: "Billing", Icon: CreditCard },
    { id: "approvals", label: "Approvals", Icon: ThumbsUp },
];

const ADMIN_NAV = [
    { id: "admin", label: "All Projects", Icon: LayoutDashboard },
    { id: "overview", label: "TradeWise Pro", Icon: Package },
    { id: "milestones", label: "Milestones", Icon: CheckSquare },
    { id: "updates", label: "Updates", Icon: MessageSquare },
    { id: "documents", label: "Documents", Icon: FileText },
    { id: "billing", label: "Billing", Icon: CreditCard },
    { id: "approvals", label: "Approvals", Icon: ThumbsUp },
];

export default function DashboardPage() {
    const [tab, setTab] = useState("overview");
    const [role, setRole] = useState<"client" | "admin">("client");
    const [mobileOpen, setMobileOpen] = useState(false);

    const nav = role === "admin" ? ADMIN_NAV : CLIENT_NAV;

    const view = (() => {
        switch (tab) {
            case "admin": return <AdminView />;
            case "milestones": return <MilestonesView />;
            case "updates": return <UpdatesView />;
            case "documents": return <DocumentsView />;
            case "billing": return <BillingView />;
            case "approvals": return <ApprovalsView />;
            default: return <OverviewView />;
        }
    })();

    return (
        <div className="min-h-screen bg-[#F9F8F6] text-[#2A241D] font-sans flex">

            {/* Mobile overlay */}
            {mobileOpen && (
                <div className="fixed inset-0 bg-black/20 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
            )}

            {/* Sidebar */}
            <aside className={`fixed top-0 left-0 z-50 h-screen w-60 bg-[#F9F8F6]/95 backdrop-blur-xl border-r border-black/5 flex flex-col transition-transform duration-300 ${mobileOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                {/* Logo */}
                <div className="p-5 border-b border-black/5">
                    <Link href="/" className="font-serif font-bold text-xl tracking-tighter text-[#2A241D] block mb-4">
                        1000x<span className="italic font-light">Dev</span>
                    </Link>
                    {/* Role Toggle */}
                    <div className="flex bg-black/[0.04] rounded-xl p-1 gap-0.5">
                        <button onClick={() => { setRole("client"); setTab("overview"); }}
                            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${role === "client" ? "bg-[#E08552] text-white shadow-sm" : "text-[#2A241D]/50"}`}>
                            Client
                        </button>
                        <button onClick={() => { setRole("admin"); setTab("admin"); }}
                            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${role === "admin" ? "bg-[#E08552] text-white shadow-sm" : "text-[#2A241D]/50"}`}>
                            Admin
                        </button>
                    </div>
                </div>

                {/* Project info (client only) */}
                {role === "client" && (
                    <div className="mx-3 mt-3 p-3 bg-white/50 rounded-xl border border-black/5">
                        <div className="text-[9px] uppercase tracking-widest font-bold text-[#2A241D]/30 mb-1">Active Project</div>
                        <div className="text-xs font-semibold text-[#2A241D] leading-tight mb-1">{PROJECT.name}</div>
                        <div className="flex items-center gap-1.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-[10px] text-[#2A241D]/40">On Track · {PROJECT.progress}%</span>
                        </div>
                    </div>
                )}

                {/* Nav */}
                <nav className="flex-1 p-3 overflow-y-auto">
                    {nav.map((item) => (
                        <button key={item.id} onClick={() => { setTab(item.id); setMobileOpen(false); }}
                            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-all mb-0.5 ${tab === item.id
                                ? "bg-[#E08552]/10 text-[#E08552]"
                                : "text-[#2A241D]/50 hover:bg-black/[0.03] hover:text-[#2A241D]"
                                }`}>
                            <item.Icon size={16} />
                            {item.label}
                            {item.id === "approvals" && (
                                <span className="ml-auto w-4.5 h-4.5 rounded-full bg-[#E08552] text-white text-[9px] font-bold flex items-center justify-center">1</span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* User */}
                <div className="p-4 border-t border-black/5">
                    <div className="flex items-center gap-2.5">
                        <Avatar initials={role === "client" ? PROJECT.avatar : "AS"} size={32} />
                        <div className="flex-1 min-w-0">
                            <div className="text-xs font-semibold text-[#2A241D] truncate">{role === "client" ? PROJECT.client : "Aryan Singh"}</div>
                            <div className="text-[10px] text-[#2A241D]/40">{role === "client" ? "Client" : "Project Manager"}</div>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 md:ml-60 flex flex-col min-h-screen">
                {/* Top bar */}
                <header className="sticky top-0 z-30 h-14 flex items-center px-5 border-b border-black/5 bg-[#F9F8F6]/80 backdrop-blur-xl">
                    <button className="md:hidden mr-3 text-[#2A241D]/50" onClick={() => setMobileOpen(true)}>
                        <Menu size={20} />
                    </button>
                    <div className="flex-1 flex items-center gap-2 text-xs text-[#2A241D]/40">
                        <span>1000X Portal</span>
                        <ChevronRight size={11} />
                        <span className="text-[#2A241D]/60 font-medium">{nav.find((n) => n.id === tab)?.label || "Dashboard"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button className="relative border border-black/5 rounded-xl p-2 text-[#2A241D]/40 hover:text-[#E08552] hover:border-[#E08552]/30 transition-colors">
                            <Bell size={15} />
                            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#E08552]" />
                        </button>
                        <Link href="/" className="border border-black/5 rounded-xl px-3 py-2 text-xs text-[#2A241D]/40 hover:text-[#E08552] hover:border-[#E08552]/30 transition-colors flex items-center gap-1.5">
                            <Globe size={12} />1000xdev.com
                        </Link>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 p-5 md:p-8 max-w-[1200px]">
                    {view}
                </main>
            </div>
        </div>
    );
}
