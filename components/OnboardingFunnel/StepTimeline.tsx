"use client";

import { useState } from "react";
import { TIMELINE_OPTIONS, BUDGET_OPTIONS } from "./data";

type Props = { onContinue: (timeline: string, budget: string) => void; onBack: () => void };

export default function StepTimeline({ onContinue, onBack }: Props) {
    const [timeline, setTimeline] = useState<string | null>(null);
    const [budget, setBudget] = useState<string | null>(null);
    const ready = timeline && budget;

    return (
        <div className="flex flex-col items-center px-4 pt-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A241D] text-center mb-2 tracking-tight">
                Timeline & Budget
            </h2>
            <p className="text-sm text-[#2A241D]/50 text-center mb-8">Quick selections — no text needed.</p>

            {/* Timeline */}
            <div className="w-full max-w-xl mb-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#2A241D]/35 mb-3">When do you need it?</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {TIMELINE_OPTIONS.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setTimeline(t.id)}
                            className={`bg-white border rounded-[14px] p-4 text-center transition-all duration-200 cursor-pointer ${timeline === t.id
                                    ? "border-[#C84B31] shadow-[0_0_0_4px_rgba(200,75,49,0.1)]"
                                    : "border-black/[0.06] hover:border-[#C84B31]/40"
                                }`}
                        >
                            <div className="font-semibold text-sm text-[#2A241D] mb-0.5">{t.label}</div>
                            <div className="text-[10px] text-[#2A241D]/40">{t.desc}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Budget */}
            <div className="w-full max-w-xl mb-6">
                <div className="text-xs font-bold uppercase tracking-widest text-[#2A241D]/35 mb-3">What&apos;s your budget range?</div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {BUDGET_OPTIONS.map((b) => (
                        <button
                            key={b.id}
                            onClick={() => setBudget(b.id)}
                            className={`relative bg-white border rounded-[14px] p-4 text-center transition-all duration-200 cursor-pointer ${budget === b.id
                                    ? "border-[#C84B31] shadow-[0_0_0_4px_rgba(200,75,49,0.1)]"
                                    : "border-black/[0.06] hover:border-[#C84B31]/40"
                                }`}
                        >
                            {b.popular && (
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#C84B31] text-white text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                                    Popular
                                </div>
                            )}
                            <div className="font-semibold text-sm text-[#2A241D] mb-0.5">{b.label}</div>
                            <div className="text-[10px] text-[#2A241D]/40">{b.tag}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Reassurance */}
            <p className="text-[11px] text-[#2A241D]/30 text-center mb-8 max-w-sm">
                Budget is just to match you with the right plan. We&apos;ll never upsell you out of scope.
            </p>

            <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                <button
                    onClick={() => ready && onContinue(timeline!, budget!)}
                    disabled={!ready}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${ready
                            ? "bg-[#C84B31] text-white hover:bg-[#B5412A] cursor-pointer"
                            : "bg-black/5 text-[#2A241D]/30 cursor-not-allowed"
                        }`}
                >
                    Continue →
                </button>
                <button onClick={onBack} className="text-xs text-[#2A241D]/30 hover:text-[#2A241D]/60 transition-colors cursor-pointer mt-1">
                    ← Back
                </button>
            </div>
        </div>
    );
}
