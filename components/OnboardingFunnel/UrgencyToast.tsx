"use client";

import { useEffect, useState } from "react";

export default function UrgencyToast() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!dismissed) setVisible(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, [dismissed]);

    if (dismissed || !visible) return null;

    return (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[10000] animate-[slideUp_0.3s_ease]">
            <div className="bg-[#2A241D] text-white rounded-full px-5 py-2.5 flex items-center gap-3 shadow-2xl text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C84B31] animate-pulse flex-shrink-0" />
                <span>2 spots left this month · 1 inquiry in last 3 hours</span>
                <button
                    onClick={() => { setDismissed(true); setVisible(false); }}
                    className="ml-1 text-white/40 hover:text-white transition-colors cursor-pointer"
                >
                    ✕
                </button>
            </div>
            <style>{`@keyframes slideUp { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }`}</style>
        </div>
    );
}
