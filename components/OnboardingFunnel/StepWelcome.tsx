"use client";

import { INTENTS, SOCIAL_STATS } from "./data";

type Props = { onSelect: (intent: string) => void };

export default function StepWelcome({ onSelect }: Props) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#2A241D] text-center mb-3 tracking-tight">
                Let&apos;s build something <span className="italic font-light text-[#C84B31]">extraordinary.</span>
            </h1>
            <p className="text-[#2A241D]/50 text-center mb-10 text-sm md:text-base max-w-md">
                Tell us where you are, and we&apos;ll show you what&apos;s possible.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mb-14">
                {INTENTS.map((intent) => (
                    <button
                        key={intent.id}
                        onClick={() => onSelect(intent.id)}
                        className="bg-white border border-black/[0.06] rounded-[14px] p-6 text-left hover:border-[#C84B31] hover:shadow-[0_0_0_4px_rgba(200,75,49,0.08)] transition-all duration-200 group cursor-pointer"
                    >
                        <div className="text-3xl mb-3">{intent.emoji}</div>
                        <div className="font-semibold text-[#2A241D] text-sm mb-1 group-hover:text-[#C84B31] transition-colors">
                            {intent.title}
                        </div>
                        <div className="text-xs text-[#2A241D]/45">{intent.desc}</div>
                    </button>
                ))}
            </div>

            {/* Social proof strip */}
            <div className="flex items-center gap-6 md:gap-10">
                {SOCIAL_STATS.map((s, i) => (
                    <div key={i} className="text-center">
                        <div className="font-serif text-xl md:text-2xl font-bold text-[#2A241D]">{s.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-[#2A241D]/35 font-semibold">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
