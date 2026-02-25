"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { buildDemoQueryString, type FunnelData } from "./data";

type Props = { data: FunnelData };

export default function StepSuccess({ data }: Props) {
    const router = useRouter();
    const [phase, setPhase] = useState<"check" | "text" | "transition">("check");
    const firstName = data.name.split(" ")[0] || "there";

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("text"), 500);
        const t2 = setTimeout(() => setPhase("transition"), 1500);
        const t3 = setTimeout(() => {
            router.push(`/dashboard?${buildDemoQueryString(data)}`);
        }, 2200);
        return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }, [data, router]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
            <div
                className="transition-all duration-500"
                style={{
                    opacity: phase === "transition" ? 0 : 1,
                    transform: phase === "transition" ? "scale(0.9)" : "scale(1)",
                }}
            >
                {/* Animated checkmark */}
                <div className="w-20 h-20 rounded-full bg-[#C84B31]/10 flex items-center justify-center mx-auto mb-6">
                    <div
                        className="w-12 h-12 rounded-full bg-[#C84B31] flex items-center justify-center transition-all duration-500"
                        style={{
                            transform: phase === "check" ? "scale(0)" : "scale(1)",
                            opacity: phase === "check" ? 0 : 1,
                        }}
                    >
                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                            <path d="M2 8L7.5 13.5L18 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>

                <h2
                    className="font-serif text-2xl md:text-3xl font-bold text-[#2A241D] text-center mb-2 tracking-tight transition-all duration-500"
                    style={{
                        opacity: phase === "check" ? 0 : 1,
                        transform: phase === "check" ? "translateY(10px)" : "translateY(0)",
                    }}
                >
                    Your brief is on its way, {firstName}.
                </h2>
                <p
                    className="text-sm text-[#2A241D]/50 text-center transition-all duration-500"
                    style={{
                        opacity: phase === "check" ? 0 : 1,
                        transform: phase === "check" ? "translateY(10px)" : "translateY(0)",
                    }}
                >
                    Setting up your project dashboard...
                </p>
            </div>
        </div>
    );
}
