"use client";

import { motion } from "framer-motion";

export default function ThesisBento() {
    return (
        <section className="w-full py-32 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                {/* Left Column: The Thesis (40%) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-2/5 flex flex-col relative"
                >
                    {/* Sticky container */}
                    <div className="sticky top-32 flex flex-col gap-8">
                        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-text leading-[1.1]">
                            Stop building <span className="italic font-light text-[#E08552]">throwaway MVPs.</span>
                        </h2>
                        <p className="font-sans text-lg md:text-xl text-[#1A1A1A]/80 leading-relaxed font-medium">
                            Most AI startups die from technical debt before they reach Series A. We don't build brittle prototypes. We engineer scalable, AI-native infrastructure designed to handle your first million users.
                        </p>
                    </div>
                </motion.div>

                {/* Right Column: The Capabilities Bento (60%) */}
                <div className="w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 (Full Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="md:col-span-2 bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E08552] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group"
                    >
                        <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-text group-hover:text-[#E08552] transition-colors duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="18" cy="5" r="3"></circle>
                                <circle cx="6" cy="12" r="3"></circle>
                                <circle cx="18" cy="19" r="3"></circle>
                                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-text mb-2 font-sans tracking-tight">Agentic Architecture</h3>
                            <p className="text-text/70 font-sans leading-relaxed text-base md:text-lg">
                                Native RAG, LLM orchestration, and deterministic AI pipelines.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2 (Half Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="col-span-1 bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E08552] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group"
                    >
                        <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-text group-hover:text-[#E08552] transition-colors duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="3" y1="9" x2="21" y2="9"></line>
                                <line x1="9" y1="21" x2="9" y2="9"></line>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-text mb-2 font-sans tracking-tight">Enterprise Frontends</h3>
                            <p className="text-text/70 font-sans leading-relaxed text-base">
                                High-density data rendering and buttery 60fps interfaces.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3 (Half Width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        className="col-span-1 bg-white/50 backdrop-blur-sm border border-black/5 rounded-[24px] p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#E08552] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] group"
                    >
                        <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center text-text group-hover:text-[#E08552] transition-colors duration-300">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                                <line x1="6" y1="18" x2="6.01" y2="18"></line>
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-text mb-2 font-sans tracking-tight">Resilient Backends</h3>
                            <p className="text-text/70 font-sans leading-relaxed text-base">
                                Zero-downtime deployments and edge computing.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
