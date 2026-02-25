"use client";

import { useState } from "react";
import { PROJECT_TYPES, TIMELINE_OPTIONS, BUDGET_OPTIONS } from "./data";

type Props = {
    projectType: string;
    timeline: string;
    budget: string;
    onSubmit: (data: { name: string; email: string; phone: string; company: string; brief: string }) => void;
    onBack: () => void;
};

export default function StepContact({ projectType, timeline, budget, onSubmit, onBack }: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [brief, setBrief] = useState("");

    const ptLabel = PROJECT_TYPES.find((p) => p.id === projectType)?.label || projectType;
    const tlLabel = TIMELINE_OPTIONS.find((t) => t.id === timeline)?.label || timeline;
    const bgLabel = BUDGET_OPTIONS.find((b) => b.id === budget)?.label || budget;

    const valid = name.trim() && email.trim();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!valid) return;
        onSubmit({ name: name.trim(), email: email.trim(), phone: phone.trim(), company: company.trim(), brief: brief.trim() });
    }

    return (
        <div className="flex flex-col items-center px-4 pt-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A241D] text-center mb-2 tracking-tight">
                Almost there.
            </h2>
            <p className="text-sm text-[#2A241D]/50 text-center mb-6">Tell us how to reach you.</p>

            {/* Summary card */}
            <div className="w-full max-w-md bg-[#FAF8F5] border border-black/[0.04] rounded-xl p-4 mb-6 flex gap-4 flex-wrap text-xs">
                <div><span className="text-[#2A241D]/35">Project:</span> <span className="font-semibold text-[#2A241D]">{ptLabel}</span></div>
                <div><span className="text-[#2A241D]/35">Timeline:</span> <span className="font-semibold text-[#2A241D]">{tlLabel}</span></div>
                <div><span className="text-[#2A241D]/35">Budget:</span> <span className="font-semibold text-[#2A241D]">{bgLabel}</span></div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3 mb-6">
                <div className="grid grid-cols-2 gap-3">
                    <input
                        type="text" placeholder="Name *" value={name} onChange={(e) => setName(e.target.value)}
                        className="col-span-1 bg-white border border-black/[0.06] rounded-xl px-4 py-3 text-sm text-[#2A241D] placeholder:text-[#2A241D]/25 outline-none focus:border-[#C84B31]/40 transition-colors"
                    />
                    <input
                        type="email" placeholder="Email *" value={email} onChange={(e) => setEmail(e.target.value)}
                        className="col-span-1 bg-white border border-black/[0.06] rounded-xl px-4 py-3 text-sm text-[#2A241D] placeholder:text-[#2A241D]/25 outline-none focus:border-[#C84B31]/40 transition-colors"
                    />
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <input
                        type="tel" placeholder="WhatsApp / Phone" value={phone} onChange={(e) => setPhone(e.target.value)}
                        className="col-span-1 bg-white border border-black/[0.06] rounded-xl px-4 py-3 text-sm text-[#2A241D] placeholder:text-[#2A241D]/25 outline-none focus:border-[#C84B31]/40 transition-colors"
                    />
                    <input
                        type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)}
                        className="col-span-1 bg-white border border-black/[0.06] rounded-xl px-4 py-3 text-sm text-[#2A241D] placeholder:text-[#2A241D]/25 outline-none focus:border-[#C84B31]/40 transition-colors"
                    />
                </div>
                <textarea
                    placeholder="Brief (optional) — tell us about your project..."
                    value={brief} onChange={(e) => setBrief(e.target.value)}
                    rows={3}
                    className="bg-white border border-black/[0.06] rounded-xl px-4 py-3 text-sm text-[#2A241D] placeholder:text-[#2A241D]/25 outline-none focus:border-[#C84B31]/40 transition-colors resize-none"
                />

                <button
                    type="submit"
                    disabled={!valid}
                    className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all mt-1 ${valid
                            ? "bg-[#C84B31] text-white hover:bg-[#B5412A] cursor-pointer"
                            : "bg-black/5 text-[#2A241D]/30 cursor-not-allowed"
                        }`}
                >
                    🚀 Get My Free Project Brief + Book a Call
                </button>
            </form>

            {/* Trust signals */}
            <div className="flex items-center gap-5 mb-6 text-[11px] text-[#2A241D]/35">
                <span>✓ No spam, ever</span>
                <span>✓ NDA available</span>
                <span>✓ Reply in 2hrs</span>
            </div>

            <button onClick={onBack} className="text-xs text-[#2A241D]/30 hover:text-[#2A241D]/60 transition-colors cursor-pointer">
                ← Back
            </button>
        </div>
    );
}
