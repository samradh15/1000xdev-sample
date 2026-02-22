"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-[100] flex items-center justify-center py-6 px-12 bg-[#F9F8F6]/90 backdrop-blur-xl border-b border-[#2A241D]/10 shadow-[0_4px_32px_rgba(0,0,0,0.02)]"
        >
            <div className="flex gap-12 text-sm font-medium tracking-wide">
                <a href="#" className="hover:opacity-70 transition-opacity">Platform</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Solutions</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Enterprise</a>

                {/* Minimalist Logo */}
                <div className="font-serif font-bold text-xl px-12 tracking-tighter">
                    1000x<span className="italic font-light">Dev</span>
                </div>

                <a href="#" className="hover:opacity-70 transition-opacity">Resources</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
                <a href="#" className="hover:opacity-70 transition-opacity font-bold">Log In</a>
            </div>
        </motion.nav>
    );
}
