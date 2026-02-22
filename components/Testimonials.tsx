"use client";

import React from 'react';

// Premium placeholder data for the testimonials
const TESTIMONIALS = [
    {
        quote: "1000xDev didn't just build our MVP; they engineered an infrastructure that scaled effortlessly to our first 100k users. Pure elite talent.",
        author: "Sarah Chen",
        role: "FOUNDER & CEO, NEXUS"
    },
    {
        quote: "We brought them a broken codebase and three days to fix it. They shipped a completely rewritten, buttery smooth frontend by Tuesday.",
        author: "Marcus Wright",
        role: "CTO, PULSEONE FINANICAL"
    },
    {
        quote: "Their team operates like a tier-1 technical moat. The agentic architecture they designed saved us over six months of R&D.",
        author: "Elena Rodriguez",
        role: "VP PRODUCT, RELAI"
    },
    {
        quote: "Uncompromising quality. The interface feels like enterprise software, but the speed of delivery felt like a two-person hackathon.",
        author: "David Kim",
        role: "CO-FOUNDER, LUMIERE DATA"
    }
];

export default function Testimonials() {
    return (
        <section className="w-full py-32 px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto w-full relative">

                {/* Left Column: Sticky Header */}
                <div className="lg:col-span-5 sticky top-32 self-start h-fit flex flex-col gap-6">
                    <h2 className="text-5xl lg:text-6xl font-serif text-[#2A241D] font-bold tracking-tight leading-[1.05]">
                        Client testimonials <br className="hidden lg:block" />
                        backing our <br className="hidden lg:block" />
                        engineering results.
                    </h2>
                    <p className="font-sans text-lg text-[#1A1A1A]/80 font-medium leading-relaxed">
                        Founders who trusted us to build their technical moats.
                    </p>
                </div>

                {/* Right Column: Infinite Vertical Marquee */}
                <div
                    className="lg:col-span-7 h-[600px] overflow-hidden relative"
                    style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
                >
                    <div className="flex flex-col gap-6 animate-marquee-vertical hover:[animation-play-state:paused] pb-6">

                        {/* 
                            We render the array twice to create the seamless CSS loop. 
                            When the first set scrolls exactly 50% out of view (transform: translateY(-50%)), 
                            the animation instantly resets to 0%, making the second duplicated set appear exactly where it started. 
                        */}
                        {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, idx) => (
                            <div
                                key={idx}
                                className="bg-white/40 backdrop-blur-sm border border-black/5 rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-6 group hover:bg-white/60 transition-colors"
                            >
                                <p className="text-lg text-[#1A1A1A] font-sans font-medium leading-relaxed">
                                    "{testimonial.quote}"
                                </p>

                                <div className="flex flex-row items-center gap-4 mt-auto">
                                    <div className="w-10 h-10 rounded-full bg-black/10 border border-black/5 shrink-0 overflow-hidden relative group-hover:border-[#E08552] transition-colors" />
                                    <div className="flex flex-col flex-1 shrink-0 overflow-hidden">
                                        <span className="font-sans font-bold text-sm text-[#2A241D] leading-none mb-1">
                                            {testimonial.author}
                                        </span>
                                        <span className="font-sans text-xs text-black/50 tracking-widest uppercase truncate leading-none">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}
