"use client";

import React from 'react';

const ChatGPTIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.8">
        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.998-2.9001 6.0557 6.0557 0 0 0-.7478-7.073zm-9.022 12.108a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-2.1466zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.0993 3.8558L12.5967 8.3828a.0757.0757 0 0 1-.0378-.052V2.7482a4.504 4.504 0 0 1 5.8716 4.3502v5.823a.7664.7664 0 0 1-.3879.6765l-4.8303 2.7865h-.0047l2.02-1.1686a.071.071 0 0 0 .038-.052v-5.5826zm-2.0438-6.117a4.4708 4.4708 0 0 1 2.8954 1.0503l-.1419.0804-4.783 2.7582a.7712.7712 0 0 1-.7805 0L7.8436 6.1542V3.8218a.0804.0804 0 0 1 .0332-.0615l4.8018-2.7865A4.4992 4.4992 0 0 1 16.3963 5.6344zm-7.9175 4.125a.861.861 0 0 1-.4305-.75v-3.3685l2.02-1.1686a.071.071 0 0 1 .071 0l4.8304 2.7866a.861.861 0 0 1 .4304.75v3.3685l-2.02 1.1685a.071.071 0 0 1-.071 0L8.4788 9.7594z" />
    </svg>
);

const AnthropicIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.8">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 15h-2v-4h-2v4H7V9h8v8zm-2-6h-2V9h2v2z" />
    </svg>
);


const PerplexityIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
    </svg>
);


export default function Footer() {
    return (
        <footer className="w-full relative z-10 px-6 max-w-7xl mx-auto flex flex-col mt-24">

            {/* 1. Main Link Grid */}
            <div className="pt-32 pb-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-16">

                {/* Brand / Newsletter col */}
                <div className="col-span-2 lg:col-span-2 flex flex-col pr-8">
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] mb-6 font-sans">
                        STAY UPDATED
                    </h4>
                    <p className="font-mono text-sm opacity-80 text-[#2A241D] mb-6 leading-relaxed">
                        GET THE LATEST ENGINEERING PRIMITIVES AND INFRASTRUCTURE INSIGHTS DIRECTLY IN YOUR INBOX.
                    </p>
                    <div className="flex w-full mt-auto border-b border-[#2A241D]/20 pb-2 focus-within:border-[#E08552] transition-colors">
                        <input
                            type="email"
                            placeholder="EMAIL ADDRESS"
                            className="bg-transparent outline-none w-full font-mono text-sm uppercase placeholder:text-[#2A241D]/30 text-[#2A241D]"
                        />
                        <button className="text-xs font-mono font-bold tracking-widest text-[#2A241D] hover:text-[#E08552] transition-colors">
                            SUBSCRIBE
                        </button>
                    </div>
                </div>

                {/* Projects */}
                <div className="col-span-1 flex flex-col">
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] mb-6 font-sans">
                        PROJECTS
                    </h4>
                    <div className="flex flex-col gap-3 font-mono text-sm opacity-80 text-[#2A241D] uppercase">
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">RelAI Network</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">PulseOne Finance</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Nexus Architect</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Lumiere Data</a>
                    </div>
                </div>

                {/* Company */}
                <div className="col-span-1 flex flex-col">
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] mb-6 font-sans">
                        COMPANY
                    </h4>
                    <div className="flex flex-col gap-3 font-mono text-sm opacity-80 text-[#2A241D] uppercase">
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Manifesto</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Engineers</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Playbook</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Careers</a>
                    </div>
                </div>

                {/* Resources */}
                <div className="col-span-1 flex flex-col">
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] mb-6 font-sans">
                        RESOURCES
                    </h4>
                    <div className="flex flex-col gap-3 font-mono text-sm opacity-80 text-[#2A241D] uppercase">
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Open Source</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Components</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Documentation</a>
                        <a href="#" className="hover:opacity-100 hover:text-[#E08552] transition-colors w-fit">Github</a>
                    </div>
                </div>

                {/* Contact */}
                <div className="col-span-1 flex flex-col">
                    <h4 className="text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] mb-6 font-sans">
                        CONTACT
                    </h4>
                    <div className="flex flex-col gap-3 font-mono text-sm opacity-80 text-[#2A241D] uppercase">
                        <a href="mailto:hello@1000x.dev" className="hover:opacity-100 hover:text-[#E08552] transition-colors flex items-center gap-1 w-fit group">
                            HELLO@1000X.DEV
                            <span className="text-[#E08552] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all font-sans">↗</span>
                        </a>
                        <span className="opacity-50 mt-4">MADHYA PRADESH, INDIA</span>
                    </div>
                </div>

            </div>

            {/* 2. The "Ask AI" Flex */}
            <div className="border-t border-[#2A241D]/10 pt-8 pb-8 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-6">
                    <span className="text-xs uppercase tracking-widest font-bold text-[#2A241D] opacity-70">
                        ASK AI FOR A SUMMARY OF 1000XDEV.
                    </span>
                    <div className="flex items-center gap-4 text-[#2A241D]/60 hover:text-[#2A241D] transition-colors">
                        <a href="#" className="hover:text-[#E08552] transition-colors hover:scale-110 transform"><ChatGPTIcon /></a>
                        <a href="#" className="hover:text-[#E08552] transition-colors hover:scale-110 transform"><AnthropicIcon /></a>
                        <a href="#" className="hover:text-[#E08552] transition-colors hover:scale-110 transform"><PerplexityIcon /></a>
                    </div>
                </div>
            </div>

            {/* 3. Sub-Footer Categories */}
            <div className="border-t border-[#2A241D]/10 pt-6 pb-6 hidden md:flex items-center justify-between">
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] hover:opacity-100 cursor-pointer transition-opacity">SOLUTIONS</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] hover:opacity-100 cursor-pointer transition-opacity">INFRASTRUCTURE</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] hover:opacity-100 cursor-pointer transition-opacity">INDUSTRIES</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold opacity-40 text-[#2A241D] hover:opacity-100 cursor-pointer transition-opacity">LOCATION</span>
            </div>

            {/* 4. Copyright Row */}
            <div className="border-t border-[#2A241D]/10 pt-6 pb-16 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs opacity-50 text-[#2A241D]">
                <span>© 1000XDEV 2026</span>
                <span>ENGINEERED BY 1000XDEV</span>
                <span>LAST UPDATED ON: TODAY</span>
            </div>

            {/* 5. The Massive Brand Anchor */}
            <div className="w-full flex items-center justify-center pb-8 overflow-hidden select-none pointer-events-none">
                <h1 className="text-[14vw] leading-none tracking-tighter font-serif text-[#2A241D] text-center w-full">
                    1000xDev
                </h1>
            </div>

        </footer>
    );
}
