"use client";

import React from 'react';

export default function ContactSection() {
    return (
        <section className="w-full py-32 px-6 relative z-10 bg-[#F9F8F6] border-t border-black/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

                {/* Left Column */}
                <div className="lg:col-span-6 flex flex-col justify-center h-full gap-8 lg:pr-12">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-6xl lg:text-7xl font-serif text-[#2A241D] leading-[1.05] tracking-tight">
                            Talk to us <br className="hidden lg:block" />
                            to build your <br className="hidden lg:block" />
                            technical moat.
                        </h2>
                        <a
                            href="mailto:founders@1000xdev.com"
                            className="flex items-center gap-3 text-lg font-sans font-medium hover:text-[#E08552] transition-colors w-fit text-[#1A1A1A]/80 mt-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            founders@1000xdev.com
                        </a>
                    </div>
                </div>

                {/* Right Column: Calendly Mockup */}
                <div className="lg:col-span-6 w-full flex justify-end">
                    <div className="w-full max-w-[480px] bg-white rounded-2xl border border-black/5 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 relative overflow-hidden flex flex-col items-center">

                        {/* Powered By Calendly Badge */}
                        <div className="absolute -right-[50px] top-[24px] bg-[#666a73] text-white text-[8px] uppercase tracking-widest font-bold py-1.5 w-48 text-center rotate-45 transform origin-center shadow-sm flex flex-col leading-tight">
                            <span className="text-[6px] opacity-70">Powered by</span>
                            Calendly
                        </div>

                        <h3 className="font-sans text-xl font-bold text-[#1A1A1A] mb-8 mt-4 tracking-tight">
                            Select a Day
                        </h3>

                        <div className="flex items-center gap-6 mb-8 w-full justify-center">
                            <button className="w-8 h-8 rounded-full border border-transparent flex items-center justify-center text-black/30 hover:bg-black/5 transition-colors">
                                <span className="text-xl font-sans mt-[-2px]">&lsaquo;</span>
                            </button>
                            <span className="font-sans font-medium text-[15px] text-[#1A1A1A] w-32 text-center">February 2026</span>
                            <button className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-100 transition-colors">
                                <span className="text-xl font-sans mt-[-2px]">&rsaquo;</span>
                            </button>
                        </div>

                        {/* Calendar Grid */}
                        <div className="w-full flex flex-col gap-4">
                            <div className="grid grid-cols-7 text-center font-sans text-[10px] font-bold text-black/40 tracking-wider uppercase mb-2">
                                <div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
                            </div>
                            <div className="grid grid-cols-7 gap-y-4 text-center font-sans text-sm font-medium">
                                {/* Week 1 */}
                                <div />
                                <div />
                                <div />
                                <div />
                                <div />
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">
                                    1
                                </div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">
                                    2
                                </div>

                                {/* Week 2 */}
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">3</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">4</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">5</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">6</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">7</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">8</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">9</div>

                                {/* Week 3 */}
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">10</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">11</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">12</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">13</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">14</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">15</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">16</div>

                                {/* Week 4 */}
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">17</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">18</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">19</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">20</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">
                                    21
                                </div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors relative">
                                    22
                                    <div className="absolute w-1 h-1 bg-[#1A1A1A]/30 rounded-full bottom-1" />
                                </div>
                                <div className="text-[#1A1A1A] font-bold bg-blue-50/50 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors relative">
                                    23
                                </div>

                                {/* Week 5 (Active simulated selected week) */}
                                <div className="text-[#1A1A1A] font-bold bg-blue-50/50 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">24</div>
                                <div className="text-[#1A1A1A] font-bold bg-blue-50/50 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">25</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">26</div>
                                <div className="text-black/60 w-10 h-10 mx-auto flex flex-col items-center justify-center hover:bg-blue-50 hover:text-blue-600 rounded-full cursor-pointer transition-colors">27</div>
                                <div className="text-blue-600 font-bold w-10 h-10 mx-auto flex flex-col items-center justify-center bg-blue-50 rounded-full cursor-pointer border-[1.5px] border-blue-600">
                                    28
                                </div>
                                <div className="text-black/30 w-10 h-10 mx-auto flex flex-col items-center justify-center rounded-full">1</div>
                                <div className="text-black/30 w-10 h-10 mx-auto flex flex-col items-center justify-center rounded-full">2</div>
                            </div>
                        </div>

                        {/* Timezone */}
                        <div className="w-full text-left mt-8 flex flex-col gap-1.5 pb-4">
                            <span className="font-sans text-[11px] font-bold text-[#1A1A1A] tracking-wide">Time zone</span>
                            <div className="flex items-center gap-1.5 text-[13px] text-[#1A1A1A] font-sans cursor-pointer hover:underline underline-offset-4 decoration-black/20 font-medium">
                                <span className="opacity-70 text-base mb-0.5">🌍</span>
                                India Standard Time (11:26pm) <span className="text-[10px] ml-1 opacity-50">▼</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
