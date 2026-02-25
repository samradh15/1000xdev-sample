"use client";

import { useState } from "react";
import StepWelcome from "./StepWelcome";
import StepProjectType from "./StepProjectType";
import StepProof from "./StepProof";
import StepTimeline from "./StepTimeline";
import StepContact from "./StepContact";
import StepSuccess from "./StepSuccess";
import UrgencyToast from "./UrgencyToast";
import type { FunnelData } from "./data";

type Props = { onClose: () => void };

const TOTAL_STEPS = 5; // 0-based: 0=welcome, 1=type, 2=proof, 3=timeline, 4=contact, then success

export default function OnboardingFunnel({ onClose }: Props) {
    const [step, setStep] = useState(0);
    const [animDir, setAnimDir] = useState<"forward" | "back">("forward");
    const [transitioning, setTransitioning] = useState(false);

    const [intent, setIntent] = useState("");
    const [projectType, setProjectType] = useState("");
    const [timeline, setTimeline] = useState("");
    const [budget, setBudget] = useState("");
    const [contact, setContact] = useState({ name: "", email: "", phone: "", company: "", brief: "" });
    const [submitted, setSubmitted] = useState(false);

    function goTo(next: number, dir: "forward" | "back" = "forward") {
        setAnimDir(dir);
        setTransitioning(true);
        setTimeout(() => {
            setStep(next);
            setTransitioning(false);
        }, 200);
    }

    function handleSubmit(data: { name: string; email: string; phone: string; company: string; brief: string }) {
        setContact(data);
        setSubmitted(true);
    }

    const funnelData: FunnelData = {
        intent, projectType, timeline, budget,
        name: contact.name, email: contact.email, phone: contact.phone, company: contact.company, brief: contact.brief,
    };

    // Step progress (0-based steps map to progress %)
    const progressPct = submitted ? 100 : Math.round((step / TOTAL_STEPS) * 100);

    const stepContent = (() => {
        if (submitted) return <StepSuccess data={funnelData} />;

        switch (step) {
            case 0:
                return <StepWelcome onSelect={(i) => { setIntent(i); goTo(1); }} />;
            case 1:
                return (
                    <StepProjectType
                        onContinue={(t) => { setProjectType(t); goTo(2); }}
                        onSkip={() => { setProjectType("web"); goTo(2); }}
                        onBack={() => goTo(0, "back")}
                    />
                );
            case 2:
                return (
                    <StepProof
                        projectType={projectType}
                        onContinue={() => goTo(3)}
                        onSkip={() => goTo(4)}
                        onBack={() => goTo(1, "back")}
                    />
                );
            case 3:
                return (
                    <StepTimeline
                        onContinue={(t, b) => { setTimeline(t); setBudget(b); goTo(4); }}
                        onBack={() => goTo(2, "back")}
                    />
                );
            case 4:
                return (
                    <StepContact
                        projectType={projectType}
                        timeline={timeline}
                        budget={budget}
                        onSubmit={handleSubmit}
                        onBack={() => goTo(3, "back")}
                    />
                );
            default:
                return null;
        }
    })();

    return (
        <div className="fixed inset-0 z-[9999] bg-[#FAF8F5] overflow-y-auto">
            {/* Header: progress bar + dots + close */}
            {!submitted && (
                <div className="sticky top-0 z-10 bg-[#FAF8F5]">
                    {/* Progress bar */}
                    <div className="h-[3px] bg-black/5 w-full">
                        <div
                            className="h-full bg-[#C84B31] transition-all duration-500"
                            style={{ width: `${progressPct}%` }}
                        />
                    </div>

                    <div className="flex items-center justify-between px-5 py-3">
                        {/* Step dots */}
                        <div className="flex items-center gap-2">
                            {Array.from({ length: TOTAL_STEPS + 1 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i < step ? "bg-[#C84B31]" :
                                            i === step ? "bg-[#C84B31] scale-125 shadow-[0_0_0_3px_rgba(200,75,49,0.15)]" :
                                                "bg-black/10"
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Close button */}
                        <button
                            onClick={onClose}
                            className="text-[#2A241D]/30 hover:text-[#2A241D] transition-colors cursor-pointer text-xl leading-none"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}

            {/* Step content with slide animation */}
            <div
                className="transition-all duration-200"
                style={{
                    opacity: transitioning ? 0 : 1,
                    transform: transitioning
                        ? `translateY(${animDir === "forward" ? "24px" : "-24px"})`
                        : "translateY(0)",
                }}
            >
                {stepContent}
            </div>

            {/* Urgency toast */}
            {!submitted && <UrgencyToast />}
        </div>
    );
}
