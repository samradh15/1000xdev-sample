"use client";

import { useState } from "react";

export default function DemoBanner() {
    const [visible, setVisible] = useState(true);
    if (!visible) return null;

    return (
        <div className="bg-[#FFF8F0] border-b border-[#F0D9C8] px-5 py-3 flex items-center justify-between gap-4">
            <p className="text-xs md:text-sm text-[#2A241D]/70 flex-1">
                <span className="mr-1">👆</span>
                You&apos;re viewing a live demo of your project dashboard. Every 1000X client gets this experience.
            </p>
            <button
                onClick={() => setVisible(false)}
                className="text-[#2A241D]/30 hover:text-[#2A241D] transition-colors cursor-pointer text-sm flex-shrink-0"
            >
                ✕
            </button>
        </div>
    );
}
