"use client";

import React from 'react';

export default function ProjectShowcase() {
    return (
        <section className="w-full py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative">

                {/* Left Column: Sticky Marketing (lg:col-span-5) */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col gap-8">
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#2A241D] leading-[1.1]">
                        Proof of Work: Infrastructure that scales.
                    </h2>
                    <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/70 leading-relaxed font-medium">
                        We don't just paint beautiful screens. We engineer resilient, AI-native products designed to handle your first million users.
                    </p>

                    <ul className="flex flex-col gap-4 mt-2">
                        {[
                            "AI & LLM Orchestration",
                            "Enterprise SaaS",
                            "High-Density Data Frontends"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#E08552]" />
                                <span className="font-sans text-base md:text-lg text-[#2A241D] opacity-90 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="mt-8 bg-[#E08552] text-white px-8 py-4 rounded-full font-sans font-semibold tracking-wide hover:bg-[#c97444] transition-colors w-max hover:-translate-y-0.5 duration-300 shadow-md">
                        View All Projects
                    </button>
                </div>

                {/* Right Column: Scrolling Projects (lg:col-span-7) */}
                <div className="lg:col-span-7 flex flex-col gap-16">

                    {/* Project 1: RelAI */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-black/5 relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-4 md:p-8 flex items-center justify-center">
                            {/* CSS UI Mock: Chat Interface */}
                            <div className="w-full max-w-sm bg-white border border-black/10 rounded-lg shadow-sm overflow-hidden flex flex-col h-full opacity-90">
                                <div className="h-10 border-b border-black/5 flex items-center px-4 gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-400" />
                                    <div className="w-2 h-2 rounded-full bg-yellow-400" />
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                </div>
                                <div className="p-4 flex flex-col gap-4 flex-1">
                                    <div className="w-3/4 h-8 bg-black/5 rounded-md self-start" />
                                    <div className="w-2/3 h-12 bg-[#E08552]/10 rounded-md self-end border border-[#E08552]/20" />
                                    <div className="w-full h-8 bg-black/5 rounded-md self-start" />
                                </div>
                                <div className="p-4 border-t border-black/5">
                                    <div className="w-full h-10 border border-black/10 rounded-full bg-black/5" />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-[#2A241D]">Project RelAI</h3>
                            <span className="font-sans text-xs font-bold tracking-widest text-[#2A241D]/50 uppercase">AI SAAS</span>
                        </div>
                    </div>

                    {/* Project 2: PulseOne Dashboard */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-black/5 relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-4 md:p-8 flex items-center justify-center">
                            {/* CSS UI Mock: Fintech Dashboard */}
                            <div className="w-full max-w-lg bg-white border border-black/10 rounded-lg shadow-sm p-4 flex flex-col gap-4 opacity-90 h-full">
                                <div className="flex justify-between items-end border-b border-black/5 pb-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="w-16 h-3 bg-black/10 rounded-sm" />
                                        <div className="w-32 h-6 bg-black/80 rounded-sm" />
                                    </div>
                                    <div className="w-20 h-8 bg-[#2A5946]/10 rounded-md border border-[#2A5946]/20" />
                                </div>
                                <div className="flex gap-4 flex-1">
                                    <div className="w-1/3 flex flex-col gap-2">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className="flex-1 bg-black/5 rounded-md" />
                                        ))}
                                    </div>
                                    <div className="w-2/3 bg-black/5 rounded-md flex items-end justify-between p-4 px-6 relative overflow-hidden">
                                        {/* Chart Bars */}
                                        {[40, 60, 45, 80, 55, 90, 75].map((h, i) => (
                                            <div key={i} className="w-4 bg-black/20 rounded-t-sm" style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-[#2A241D]">PulseOne Dashboard</h3>
                            <span className="font-sans text-xs font-bold tracking-widest text-[#2A241D]/50 uppercase">FINTECH</span>
                        </div>
                    </div>

                    {/* Project 3: Nexus Core Engine */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-[#2A241D] relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-4 md:p-8 flex items-center justify-center">
                            {/* CSS UI Mock: Industrial Node Graph */}
                            <div className="relative w-full h-full flex items-center justify-center opacity-80">
                                {/* Lines */}
                                <div className="absolute top-1/2 left-1/4 right-1/4 h-[1px] bg-white/20 -translate-y-1/2" />
                                <div className="absolute top-1/4 bottom-1/4 left-1/2 w-[1px] bg-white/20 -translate-x-1/2" />

                                {/* Nodes */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/10 border border-white/20 rounded-md flex items-center justify-center backdrop-blur-md">
                                    <div className="w-6 h-6 bg-[#E08552] rounded-sm animate-pulse" />
                                </div>
                                <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/10 rounded-full" />
                                <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/10 rounded-full" />
                                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/5 border border-white/10 rounded-lg" />
                                <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-white/5 border border-white/10 rounded-lg" />
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-[#2A241D]">Nexus Core Engine</h3>
                            <span className="font-sans text-xs font-bold tracking-widest text-[#2A241D]/50 uppercase">INFRASTRUCTURE</span>
                        </div>
                    </div>

                    {/* Project 4: Lumiere Analytics */}
                    <div className="flex flex-col gap-4 group cursor-pointer">
                        <div className="w-full aspect-video md:aspect-[4/3] rounded-xl overflow-hidden bg-black/5 relative transition-transform duration-500 group-hover:scale-[1.02] border border-black/5 shadow-sm p-4 md:p-8 flex items-center justify-center">
                            {/* CSS UI Mock: Minimal Data Table */}
                            <div className="w-full max-w-lg bg-white border border-black/10 rounded-lg shadow-sm p-1 opacity-90">
                                <div className="flex flex-col gap-[1px] bg-black/5">
                                    {/* Header */}
                                    <div className="flex items-center p-3 bg-white gap-4 border-b border-black/5">
                                        <div className="w-4 h-4 rounded-sm border border-black/20" />
                                        <div className="w-1/4 h-2 rounded-full bg-black/20" />
                                        <div className="w-1/4 h-2 rounded-full bg-black/10" />
                                        <div className="w-1/4 h-2 rounded-full bg-black/10" />
                                    </div>
                                    {/* Rows */}
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="flex items-center p-3 bg-white gap-4 hover:bg-black/5 transition-colors">
                                            <div className="w-4 h-4 rounded-sm border border-black/10" />
                                            <div className="w-1/4 h-2 rounded-full bg-black/40" />
                                            <div className="w-1/4 h-2 rounded-full bg-black/10" />
                                            <div className="w-1/4 h-2 rounded-full bg-black/10" />
                                            <div className="flex -space-x-2 ml-auto">
                                                <div className="w-6 h-6 rounded-full bg-black/10 border border-white" />
                                                <div className="w-6 h-6 rounded-full bg-black/20 border border-white" />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center px-2">
                            <h3 className="font-sans text-xl md:text-2xl font-bold text-[#2A241D]">Lumiere Analytics</h3>
                            <span className="font-sans text-xs font-bold tracking-widest text-[#2A241D]/50 uppercase">DATA VISUALIZATION</span>
                        </div>
                    </div>

                    {/* The End CTA */}
                    <div className="w-full mt-8 p-8 border border-black/10 rounded-xl bg-white/40 backdrop-blur-sm flex items-center justify-between group cursor-pointer hover:border-[#E08552] transition-colors duration-300">
                        <span className="font-sans text-xl font-medium text-[#2A241D]">Explore the full project archive</span>
                        <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-[#E08552] group-hover:text-white transition-colors">
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
