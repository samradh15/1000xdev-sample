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
        role: "CTO, PULSEONE FINANCIAL"
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
    },
    {
        quote: "They act as true engineering partners. Our retention doubled because the new frontend feels like a native desktop app.",
        author: "James Holden",
        role: "CEO, OPAQUE SYSTEMS"
    },
    {
        quote: "Unlike any other agency. They refused to build a brittle prototype and instead gave us an enterprise-grade foundation.",
        author: "Amelia Vance",
        role: "HEAD OF ENGINEERING, VORTEX"
    }
];

export default function Testimonials() {
    return (
        <section className="w-full py-32 px-6 relative z-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">

                {/* Left Column: Sticky Header */}
                <div className="lg:col-span-4 lg:sticky lg:top-36 self-start flex flex-col gap-8">
                    <h2 className="text-5xl lg:text-6xl font-serif text-[#2A241D] font-bold tracking-tight leading-[1.05]">
                        Client <br className="hidden lg:block" />
                        testimonials <br className="hidden lg:block" />
                        backing <br className="hidden lg:block" />
                        our engineering <br className="hidden lg:block" />
                        results.
                    </h2>
                    <p className="font-sans text-lg text-[#1A1A1A]/80 font-medium leading-relaxed">
                        Founders who trusted us to build their technical moats.
                    </p>
                </div>

                {/* Right Column: Horizontal Marquee Container */}
                <div
                    className="lg:col-span-8 relative w-full overflow-hidden"
                    style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
                >
                    {/* The Scrolling Track Wrapper */}
                    <div className="flex w-full group overflow-hidden py-4">

                        {/* Track 1 */}
                        <div className="flex shrink-0 animate-marquee items-stretch gap-6 pr-6 group-hover:[animation-play-state:paused]">
                            {TESTIMONIALS.map((testimonial, idx) => (
                                <div
                                    key={`t1-${idx}`}
                                    className="w-[320px] md:w-[420px] shrink-0 bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-start hover:bg-white/80 transition-colors overflow-hidden"
                                >
                                    {/* Video/Image Placeholder Header (as seen in reference) */}
                                    <div className="w-full aspect-video bg-black/5 relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
                                        {/* Play Button Mockup */}
                                        <div className="absolute bottom-4 right-4 bg-[#E08552] rounded-full py-2 px-4 flex items-center gap-2 shadow-sm font-sans text-xs font-bold text-[#F9F8F6]">
                                            Play Video
                                            <div className="w-4 h-4 bg-[#F9F8F6] rounded-full flex items-center justify-center">
                                                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#E08552] border-b-[4px] border-b-transparent ml-0.5" />
                                            </div>
                                        </div>
                                        {/* Placeholder Avatar/Face representation */}
                                        <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 blur-sm absolute" />
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 flex flex-col gap-6 flex-1">
                                        <div>
                                            <h3 className="font-serif text-2xl text-[#2A241D] font-medium mb-1 tracking-tight">
                                                {testimonial.author}
                                            </h3>
                                            <p className="font-mono text-[10px] text-black/50 tracking-[0.2em] uppercase leading-none font-bold">
                                                {testimonial.role}
                                            </p>
                                        </div>

                                        <p className="text-base text-[#1A1A1A]/80 font-sans font-medium leading-relaxed">
                                            "{testimonial.quote.split('. ')[0]}. <span className="bg-[#E08552]/20 px-1 rounded-sm">{testimonial.quote.split('. ')[1]}.</span>"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Track 2 (Duplicate for seamless loop) */}
                        <div className="flex shrink-0 animate-marquee items-stretch gap-6 pr-6 group-hover:[animation-play-state:paused]" aria-hidden="true">
                            {TESTIMONIALS.map((testimonial, idx) => (
                                <div
                                    key={`t2-${idx}`}
                                    className="w-[320px] md:w-[420px] shrink-0 bg-white/50 backdrop-blur-sm border border-black/5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col justify-start hover:bg-white/80 transition-colors overflow-hidden"
                                >
                                    {/* Video/Image Placeholder Header (as seen in reference) */}
                                    <div className="w-full aspect-video bg-black/5 relative overflow-hidden flex items-center justify-center">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply" />
                                        {/* Play Button Mockup */}
                                        <div className="absolute bottom-4 right-4 bg-[#E08552] rounded-full py-2 px-4 flex items-center gap-2 shadow-sm font-sans text-xs font-bold text-[#F9F8F6]">
                                            Play Video
                                            <div className="w-4 h-4 bg-[#F9F8F6] rounded-full flex items-center justify-center">
                                                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#E08552] border-b-[4px] border-b-transparent ml-0.5" />
                                            </div>
                                        </div>
                                        {/* Placeholder Avatar/Face representation */}
                                        <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/40 blur-sm absolute" />
                                    </div>

                                    {/* Content Body */}
                                    <div className="p-8 flex flex-col gap-6 flex-1">
                                        <div>
                                            <h3 className="font-serif text-2xl text-[#2A241D] font-medium mb-1 tracking-tight">
                                                {testimonial.author}
                                            </h3>
                                            <p className="font-mono text-[10px] text-black/50 tracking-[0.2em] uppercase leading-none font-bold">
                                                {testimonial.role}
                                            </p>
                                        </div>

                                        <p className="text-base text-[#1A1A1A]/80 font-sans font-medium leading-relaxed">
                                            "{testimonial.quote.split('. ')[0]}. <span className="bg-[#E08552]/20 px-1 rounded-sm">{testimonial.quote.split('. ')[1]}.</span>"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
