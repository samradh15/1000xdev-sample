"use client";

import { CASE_STUDIES } from "./data";

type Props = { projectType: string; onContinue: () => void; onSkip: () => void; onBack: () => void };

export default function StepProof({ projectType, onContinue, onSkip, onBack }: Props) {
    const study = CASE_STUDIES[projectType] || CASE_STUDIES.web;

    return (
        <div className="flex flex-col items-center px-4 pt-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2A241D] text-center mb-2 tracking-tight">
                We&apos;ve done this before.
            </h2>
            <p className="text-sm text-[#2A241D]/50 text-center mb-8">Here&apos;s a project just like yours.</p>

            {/* Case study card */}
            <div className="w-full max-w-lg bg-white border border-black/[0.06] rounded-[18px] p-7 mb-6">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#C84B31]" />
                    <span className="text-xs font-bold uppercase tracking-widest text-[#C84B31]">Case Study</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#2A241D] mb-4">{study.name}</h3>

                {/* Metrics */}
                <div className="flex gap-3 mb-5">
                    {study.metrics.map((m, i) => (
                        <div key={i} className="flex-1 bg-[#FAF8F5] rounded-xl p-3 text-center">
                            <div className="text-sm font-bold text-[#2A241D]">{m}</div>
                        </div>
                    ))}
                </div>

                {/* Quote */}
                <div className="bg-[#FAF8F5] rounded-xl p-4 border-l-3 border-[#C84B31]" style={{ borderLeftWidth: 3 }}>
                    <p className="text-sm text-[#2A241D]/70 italic leading-relaxed mb-2">&ldquo;{study.quote}&rdquo;</p>
                    <p className="text-xs text-[#2A241D]/40 font-semibold">— {study.quotee}</p>
                </div>
            </div>

            {/* Highlight box */}
            <div className="w-full max-w-lg bg-[#FFF8F0] border border-[#F0D9C8] rounded-xl p-4 mb-8 text-center">
                <p className="text-sm text-[#2A241D]/70">
                    We&apos;ve built similar products for <span className="font-semibold text-[#2A241D]">{study.geo}</span> founders — want to see if we&apos;re a fit?
                </p>
            </div>

            <div className="flex flex-col items-center gap-3 w-full max-w-xs">
                <button
                    onClick={onContinue}
                    className="w-full py-3 rounded-xl font-semibold text-sm bg-[#C84B31] text-white hover:bg-[#B5412A] transition-all cursor-pointer"
                >
                    Yes, let&apos;s see if we&apos;re a fit →
                </button>
                <button onClick={onSkip} className="text-xs text-[#2A241D]/35 hover:text-[#C84B31] transition-colors cursor-pointer">
                    Skip — just send my brief
                </button>
                <button onClick={onBack} className="text-xs text-[#2A241D]/30 hover:text-[#2A241D]/60 transition-colors cursor-pointer mt-1">
                    ← Back
                </button>
            </div>
        </div>
    );
}
