"use client";

import React from 'react';

export default function ProjectShowcase() {
    return (
        <section className="w-full py-32 px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative items-start max-w-7xl mx-auto w-full">

                {/* Left Column: Sticky Marketing */}
                <div className="lg:col-span-5 sticky top-32 self-start h-fit flex flex-col gap-8">
                    <h2 className="text-6xl font-serif text-[#2A241D]">
                        Proof of Work: Infrastructure that scales.
                    </h2>
                    <p className="text-lg text-[#1A1A1A]/80 font-sans">
                        We don't just paint beautiful screens. We engineer resilient, AI-native products designed to handle your first million users.
                    </p>

                    <ul className="flex flex-col gap-4 mt-2">
                        {[
                            "Audience says hell yes I need this",
                            "Investors say take my damn money",
                            "Scalable infrastructure from Day 1"
                        ].map((item, idx) => (
                            <li key={idx} className="flex flex-row items-center gap-4">
                                <div className="w-2 h-2 shrink-0 rounded-full bg-[#E08552]" />
                                <span className="font-sans text-lg text-[#2A241D] font-medium leading-snug">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="bg-[#E08552] text-[#2A241D] rounded-none px-8 py-4 font-bold w-fit">
                        View All Projects
                    </button>
                </div>

                {/* Right Column: Dynamic Project Grid */}
                <div className="lg:col-span-7 flex flex-col gap-12">

                    {/* CSS Grid for the 5 cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">

                        {/* Card 1: Full Width (2 columns) */}
                        <div className="md:col-span-2 flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-video md:aspect-[21/9] rounded-lg overflow-hidden bg-black/5 relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-4 md:p-8 flex items-center justify-center">
                                {/* CSS UI Mock: RelAI Chat Interface */}
                                <div className="w-full max-w-2xl bg-white border border-black/10 rounded-md shadow-sm overflow-hidden flex flex-col h-full opacity-90">
                                    <div className="h-10 border-b border-black/5 flex items-center px-4 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400" />
                                        <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                        <div className="ml-4 w-32 h-2 bg-black/5 rounded-full" />
                                    </div>
                                    <div className="p-6 flex flex-col gap-6 flex-1">
                                        <div className="w-3/4 h-10 bg-black/5 rounded-md self-start" />
                                        <div className="w-2/3 h-16 bg-[#E08552]/10 rounded-md self-end border border-[#E08552]/20" />
                                        <div className="w-full h-10 bg-black/5 rounded-md self-start" />
                                    </div>
                                    <div className="p-4 border-t border-black/5">
                                        <div className="w-full h-12 border border-black/10 rounded-md bg-black/5" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start font-sans">
                                <h3 className="text-xl font-bold text-[#2A241D]">Project RelAI</h3>
                                <span className="text-[10px] font-bold tracking-widest text-[#2A241D]/50 uppercase mt-1">AI SAAS</span>
                            </div>
                        </div>

                        {/* Card 2: Half Width (1 column) */}
                        <div className="md:col-span-1 flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-black/5 relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-6 flex flex-col justify-end">
                                {/* CSS UI Mock: PulseOne Finances */}
                                <div className="w-full bg-white border border-black/10 rounded-md shadow-sm p-4 flex flex-col gap-4 opacity-90 h-48 relative overflow-hidden">
                                    <div className="flex justify-between items-end border-b border-black/5 pb-3">
                                        <div className="flex flex-col gap-1">
                                            <div className="w-10 h-2 bg-black/10 rounded-sm" />
                                            <div className="w-24 h-5 bg-black/80 rounded-sm" />
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between gap-2 px-2">
                                        {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                                            <div key={i} className="w-full bg-black/10 rounded-t-sm" style={{ height: `${h}%` }}>
                                                {i === 5 && <div className="w-full h-full bg-[#E08552]/80 rounded-t-sm" />}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start font-sans">
                                <h3 className="text-lg font-bold text-[#2A241D]">PulseOne</h3>
                                <span className="text-[10px] font-bold tracking-widest text-[#2A241D]/50 uppercase mt-1">FINTECH</span>
                            </div>
                        </div>

                        {/* Card 3: Half Width (1 column) */}
                        <div className="md:col-span-1 flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-[#2A241D] relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-6 flex flex-col items-center justify-center">
                                {/* CSS UI Mock: Nexus Core Engine */}
                                <div className="relative w-full h-full flex items-center justify-center opacity-80">
                                    <div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-white/20 -translate-y-1/2" />
                                    <div className="absolute top-1/4 bottom-1/4 left-1/2 w-[1px] bg-white/20 -translate-x-1/2" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 border border-white/20 rounded-md flex items-center justify-center backdrop-blur-md z-10">
                                        <div className="w-6 h-6 bg-[#E08552] rounded-sm animate-pulse" />
                                    </div>
                                    <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/5 border border-white/10 rounded-full" />
                                    <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/5 border border-white/10 rounded-full" />
                                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white/5 border border-white/10 rounded-sm" />
                                    <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-8 h-8 bg-white/5 border border-white/10 rounded-sm" />
                                </div>
                            </div>
                            <div className="flex justify-between items-start font-sans">
                                <h3 className="text-lg font-bold text-[#2A241D]">Nexus Engine</h3>
                                <span className="text-[10px] font-bold tracking-widest text-[#2A241D]/50 uppercase mt-1">INFRASTRUCTURE</span>
                            </div>
                        </div>

                        {/* Card 4: Half Width (1 column) */}
                        <div className="md:col-span-1 flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-black/5 relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-6 flex items-center justify-center">
                                {/* CSS UI Mock: Lumiere Table */}
                                <div className="w-full bg-white border border-black/10 rounded-md shadow-sm p-1 opacity-90 h-48 flex flex-col">
                                    <div className="flex flex-col gap-[1px] bg-black/5 flex-1 p-[1px]">
                                        <div className="flex items-center p-2 bg-white gap-3 border-b border-black/5">
                                            <div className="w-3 h-3 rounded-sm border border-black/20" />
                                            <div className="w-1/3 h-1.5 rounded-full bg-black/20" />
                                            <div className="w-1/4 h-1.5 rounded-full bg-black/10" />
                                        </div>
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="flex items-center p-2 bg-white gap-3 flex-1 hover:bg-black/5 transition-colors">
                                                <div className="w-3 h-3 rounded-sm border border-black/10" />
                                                <div className="w-1/3 h-1.5 rounded-full bg-black/40" />
                                                <div className="w-1/4 h-1.5 rounded-full bg-black/10" />
                                                <div className="flex -space-x-2 ml-auto">
                                                    <div className="w-4 h-4 rounded-full bg-black/10 border border-white" />
                                                    <div className="w-4 h-4 rounded-full bg-black/20 border border-white" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start font-sans">
                                <h3 className="text-lg font-bold text-[#2A241D]">Lumiere</h3>
                                <span className="text-[10px] font-bold tracking-widest text-[#2A241D]/50 uppercase mt-1">DATA</span>
                            </div>
                        </div>

                        {/* Card 5: Half Width (1 column) */}
                        <div className="md:col-span-1 flex flex-col gap-4 group cursor-pointer">
                            <div className="w-full aspect-square md:aspect-[4/3] rounded-lg overflow-hidden bg-black/5 relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-6 flex items-center justify-center">
                                {/* CSS UI Mock: Aura SDK Code Editor */}
                                <div className="w-full bg-[#1A1A1A] border border-black/10 rounded-md shadow-sm overflow-hidden flex flex-col h-48">
                                    <div className="h-6 border-b border-white/10 flex items-center px-3 gap-1.5">
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                    </div>
                                    <div className="p-4 flex flex-col gap-3 font-mono">
                                        <div className="flex gap-2"><div className="w-8 h-2 bg-[#E08552]/80 rounded-sm" /><div className="w-16 h-2 bg-white/40 rounded-sm" /></div>
                                        <div className="flex gap-2 ml-4"><div className="w-12 h-2 bg-white/20 rounded-sm" /><div className="w-24 h-2 bg-[#4CAF50]/60 rounded-sm" /></div>
                                        <div className="flex gap-2 ml-4"><div className="w-6 h-2 bg-white/20 rounded-sm" /><div className="w-20 h-2 bg-[#2196F3]/60 rounded-sm" /></div>
                                        <div className="flex gap-2 ml-8"><div className="w-32 h-2 bg-white/40 rounded-sm" /></div>
                                        <div className="flex gap-2 ml-4"><div className="w-4 h-2 bg-white/20 rounded-sm" /></div>
                                        <div className="flex gap-2"><div className="w-4 h-2 bg-white/20 rounded-sm" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start font-sans">
                                <h3 className="text-lg font-bold text-[#2A241D]">Aura SDK</h3>
                                <span className="text-[10px] font-bold tracking-widest text-[#2A241D]/50 uppercase mt-1">DEVELOPER</span>
                            </div>
                        </div>

                    </div>

                    {/* The End CTA */}
                    <div className="w-full mt-4 p-8 border border-[#2A241D]/10 rounded-lg bg-white/40 backdrop-blur-sm flex items-center justify-between group cursor-pointer hover:border-[#E08552] hover:bg-white/60 transition-all duration-300 shadow-sm">
                        <span className="font-sans text-lg md:text-xl font-medium text-[#2A241D]">Explore the full project archive</span>
                        <div className="w-10 h-10 rounded-md bg-black/5 flex items-center justify-center group-hover:bg-[#E08552] group-hover:text-white transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
