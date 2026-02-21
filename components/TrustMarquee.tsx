"use client";

import React from 'react';
import { motion } from "framer-motion";

const LOGOS = ["NEXUS", "AURA", "VERTEX", "QUANTUM", "STRATOS", "LUMIERE"];

export default function TrustMarquee() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full py-24 relative z-10"
        >
            <div className="max-w-7xl mx-auto px-6 mb-12">
                <h2 className="text-center text-[10px] sm:text-xs font-sans font-semibold tracking-widest text-[#2A241D]/50 uppercase">
                    Trusted by ambitious founders
                </h2>
            </div>

            <div
                className="relative flex flex-col gap-10 overflow-hidden"
                style={{
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >

                {/* Row 1: Moving Right (Reverse Keyframes: -100% to 0) */}
                <div className="flex w-full">
                    <div className="flex shrink-0 animate-marquee-reverse min-w-full justify-around items-center gap-16 pr-16">
                        {LOGOS.map((logo, i) => (
                            <span key={`r1-a-${i}`} className="text-3xl sm:text-4xl font-bold tracking-wider text-black opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none">
                                {logo}
                            </span>
                        ))}
                    </div>
                    <div aria-hidden="true" className="flex shrink-0 animate-marquee-reverse min-w-full justify-around items-center gap-16 pr-16">
                        {LOGOS.map((logo, i) => (
                            <span key={`r1-b-${i}`} className="text-3xl sm:text-4xl font-bold tracking-wider text-black opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Row 2: Moving Left (Normal Keyframes: 0 to -100%) */}
                {/* We reverse the array so the second row looks a bit different */}
                <div className="flex w-full">
                    <div className="flex shrink-0 animate-marquee min-w-full justify-around items-center gap-16 pr-16">
                        {[...LOGOS].reverse().map((logo, i) => (
                            <span key={`r2-a-${i}`} className="text-3xl sm:text-4xl font-bold tracking-wider text-black opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none">
                                {logo}
                            </span>
                        ))}
                    </div>
                    <div aria-hidden="true" className="flex shrink-0 animate-marquee min-w-full justify-around items-center gap-16 pr-16">
                        {[...LOGOS].reverse().map((logo, i) => (
                            <span key={`r2-b-${i}`} className="text-3xl sm:text-4xl font-bold tracking-wider text-black opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-default select-none">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </motion.section>
    );
}
