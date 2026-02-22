"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
    {
        id: "01",
        title: "Enterprise RAG Pipeline",
        subtext: "Vectorization & LLM Orchestration",
    },
    {
        id: "02",
        title: "Financial Trading Engine",
        subtext: "High-throughput Kafka Streams",
    },
    {
        id: "03",
        title: "High-Density Analytics",
        subtext: "WebGL & Real-time Data Sync",
    }
];

export default function ArchitectureTeardown() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="w-full py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col gap-16">

                {/* Section Header */}
                <div className="flex flex-col gap-4">
                    <h2 className="text-[10px] sm:text-xs font-sans font-semibold tracking-widest text-[#2A241D]/50 uppercase">
                        Anatomy of a Ship
                    </h2>
                    <p className="font-serif text-3xl md:text-4xl text-[#2A241D] max-w-2xl leading-tight">
                        We don't just build beautiful frontends. We engineer the <span className="italic font-light">infrastructure</span> beneath them.
                    </p>
                </div>

                {/* Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">

                    {/* Left Column: The Index (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-12 justify-center">
                        {PROJECTS.map((project, idx) => {
                            const isActive = activeIndex === idx;
                            return (
                                <div
                                    key={project.id}
                                    onMouseEnter={() => setActiveIndex(idx)}
                                    className={`flex gap-6 cursor-pointer transition-all duration-500 ease-out group ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
                                >
                                    <div className={`font-serif text-5xl md:text-6xl font-light transition-colors duration-500 ${isActive ? 'text-[#E08552]' : 'text-[#2A241D]'}`}>
                                        {project.id}
                                    </div>
                                    <div className="flex flex-col justify-center gap-1 mt-2">
                                        <h3 className="font-serif text-2xl md:text-3xl font-medium text-[#2A241D]">
                                            {project.title}
                                        </h3>
                                        <p className="font-sans text-sm md:text-base text-[#1A1A1A]/70">
                                            {project.subtext}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column: The Blueprint Viewer (7 cols) */}
                    <div className="lg:col-span-7 relative">
                        <div className="sticky top-32 w-full aspect-square md:aspect-auto md:h-[600px] rounded-[24px] border border-black/10 bg-white/40 backdrop-blur-sm overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.04)] flex items-center justify-center p-8">

                            <AnimatePresence mode="wait">
                                {activeIndex === 0 && (
                                    <motion.div
                                        key="rag"
                                        initial={{ opacity: 0, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(4px)" }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full flex items-center justify-center relative"
                                    >
                                        {/* CSS Blueprint: RAG Pipeline */}
                                        <div className="flex items-center gap-8 relative z-10 w-full justify-center">
                                            {/* Connector Line */}
                                            <div className="absolute top-1/2 left-10 right-10 h-[1px] bg-black/15 -translate-y-1/2 z-0" />

                                            {/* Nodes */}
                                            <div className="w-24 h-24 bg-white border border-black/10 shadow-sm rounded-lg flex flex-col items-center justify-center gap-2 z-10 relative">
                                                <div className="w-8 h-8 rounded-full border border-[#E08552]/40 border-dashed animate-[spin_10s_linear_infinite]" />
                                                <span className="text-[10px] font-mono text-black/60">DB</span>
                                            </div>

                                            <div className="w-32 h-32 bg-white border border-black/10 shadow-sm rounded-xl flex flex-col items-center justify-center gap-3 z-10 relative">
                                                <div className="grid grid-cols-2 gap-1">
                                                    {[...Array(4)].map((_, i) => (
                                                        <div key={i} className="w-3 h-3 bg-black/5 rounded-sm" />
                                                    ))}
                                                </div>
                                                <span className="text-[10px] font-mono text-black/60">Vector Store</span>
                                            </div>

                                            <div className="w-24 h-24 bg-white border border-black/10 shadow-sm rounded-lg flex flex-col items-center justify-center gap-2 z-10 relative overflow-hidden">
                                                <div className="absolute inset-0 bg-gradient-to-br from-[#E08552]/10 to-transparent" />
                                                <div className="w-6 h-1 bg-black/20 rounded-full" />
                                                <div className="w-4 h-1 bg-black/20 rounded-full" />
                                                <span className="text-[10px] font-mono text-black/60 mt-1">LLM</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeIndex === 1 && (
                                    <motion.div
                                        key="trading"
                                        initial={{ opacity: 0, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(4px)" }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full flex items-center justify-center relative"
                                    >
                                        {/* CSS Blueprint: Radial Kafka Streams */}
                                        <div className="relative w-64 h-64 flex items-center justify-center">
                                            {/* Lines */}
                                            <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-black/10 origin-left -translate-y-1/2 rotate-[30deg]" />
                                            <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-black/10 origin-left -translate-y-1/2 rotate-[150deg]" />
                                            <div className="absolute top-1/2 left-1/2 w-full h-[1px] bg-black/10 origin-left -translate-y-1/2 rotate-[270deg]" />

                                            {/* Center Gateway */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white border-2 border-[#E08552]/30 rounded-full shadow-md z-10 flex items-center justify-center">
                                                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center animate-pulse">
                                                    <span className="text-[10px] font-mono text-black/80">API</span>
                                                </div>
                                            </div>

                                            {/* Peripheral Nodes */}
                                            <div className="absolute top-[80%] right-[-10%] w-16 h-16 bg-white border border-black/10 rounded-md shadow-sm z-10 flex items-center justify-center">
                                                <span className="text-[9px] font-mono text-black/60 text-center leading-tight">Order<br />Book</span>
                                            </div>

                                            <div className="absolute top-[80%] left-[-10%] w-16 h-16 bg-white border border-black/10 rounded-md shadow-sm z-10 flex items-center justify-center">
                                                <span className="text-[9px] font-mono text-black/60">Auth</span>
                                            </div>

                                            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-20 h-16 bg-white border border-black/10 rounded-md shadow-sm z-10 flex items-center justify-center flex-col gap-1">
                                                <div className="w-8 h-[2px] bg-black/20" />
                                                <div className="w-8 h-[2px] bg-black/20" />
                                                <div className="w-8 h-[2px] bg-black/20" />
                                                <span className="text-[9px] font-mono text-black/60 mt-1">Ledger</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeIndex === 2 && (
                                    <motion.div
                                        key="analytics"
                                        initial={{ opacity: 0, filter: "blur(4px)" }}
                                        animate={{ opacity: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, filter: "blur(4px)" }}
                                        transition={{ duration: 0.5 }}
                                        className="w-full h-full flex flex-col items-center justify-center gap-8 relative"
                                    >
                                        {/* CSS Blueprint: High Density Data */}
                                        <div className="w-full max-w-sm flex flex-col gap-4">
                                            {/* Mock Chart */}
                                            <div className="w-full h-32 bg-white border border-black/10 rounded-lg p-4 flex items-end gap-2 shadow-sm">
                                                {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                                                    <div
                                                        key={`bar-${i}`}
                                                        className="w-full bg-black/10 rounded-t-sm transition-all duration-1000"
                                                        style={{ height: `${h}%` }}
                                                    >
                                                        {i === 3 && <div className="w-full h-full bg-[#E08552]/80 rounded-t-sm" />}
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Mock Table */}
                                            <div className="w-full bg-white border border-black/10 rounded-lg p-4 flex flex-col gap-3 shadow-sm">
                                                {[...Array(4)].map((_, r) => (
                                                    <div key={`row-${r}`} className="flex gap-4 items-center">
                                                        <div className="w-4 h-4 rounded-sm bg-black/5" />
                                                        <div className="w-1/3 h-2 bg-black/10 rounded-full" />
                                                        <div className="w-1/4 h-2 bg-black/5 rounded-full" />
                                                        <div className="w-1/5 h-2 bg-black/5 rounded-full ml-auto" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
