"use client";

import { useState } from "react";
import { PROJECT_TYPES } from "./data";

type Props = { onContinue: (type: string) => void; onSkip: () => void; onBack: () => void };

export default function StepProjectType({ onContinue, onSkip, onBack }: Props) {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <div className="flex flex-col items-center px-4 pt-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A241D] text-center mb-2 tracking-tight">
                What are you building?
            </h2>
            <p className="text-sm text-[#2A241D]/50 text-center mb-8">Pick the closest match — we&apos;ll tailor everything from here.</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-xl mb-8">
                {PROJECT_TYPES.map((pt) => (
                    <button
                        key={pt.id}
                        onClick={() => setSelected(pt.id)}
                        className={`relative bg-white border rounded-[14px] p-5 text-left transition-all duration-200 cursor-pointer ${selected === pt.id
                                ? "border-[#C84B31] shadow-[0_0_0_4px_rgba(200,75,49,0.1)]"
                                : "border-black/[0.06] hover:border-[#C84B31]/40"
                            }`}
                    >
                        {selected === pt.id && (
                            <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[#C84B31] flex items-center justify-center">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                        )}
                        <div className="text-2xl mb-2">{pt.icon}</div>
                        <div className="font-semibold text-sm text-[#2A241D] mb-0.5">{pt.label}</div>
                        <div className="text-[11px] text-[#2A241D]/40">{pt.desc}</div>
                    </button>
                ))}
            </div>

            <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                <button
                    onClick={() => selected && onContinue(selected)}
                    disabled={!selected}
                    className={`w-full py-3 rounded-xl font-semibold text-sm transition-all ${selected
                            ? "bg-[#C84B31] text-white hover:bg-[#B5412A] cursor-pointer"
                            : "bg-black/5 text-[#2A241D]/30 cursor-not-allowed"
                        }`}
                >
                    Continue → See what we&apos;ve built
                </button>
                <button onClick={onSkip} className="text-xs text-[#2A241D]/35 hover:text-[#C84B31] transition-colors cursor-pointer">
                    Skip — show me all case studies
                </button>
                <button onClick={onBack} className="text-xs text-[#2A241D]/30 hover:text-[#2A241D]/60 transition-colors cursor-pointer mt-1">
                    ← Back
                </button>
            </div>
        </div>
    );
}
