import SketchRevealAsset from "./SketchRevealAsset";
import FloatingCard from "./FloatingCard";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6">
            <div className="max-w-4xl text-center flex flex-col items-center gap-6 mb-16 z-10">
                <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight text-text leading-[1.1]">
                    We turn raw ideas into <span className="italic font-light">shipped</span> infrastructure.
                </h1>
                <p className="font-sans text-lg md:text-xl text-text/70 max-w-2xl font-medium">
                    Infrastructure-grade engineering for AI-native startups.
                </p>
            </div>

            <div className="relative w-full max-w-5xl">
                <SketchRevealAsset />

                {/* Left Floating Card: Vertically centered, protruding 50% left */}
                <FloatingCard className="top-1/2 -translate-y-1/2 -left-8 md:-left-24 w-64 hidden xl:flex animate-[bounce_10s_infinite]">
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-2 h-2 rounded-full bg-[#E08552]" />
                            <span className="text-sm font-semibold text-text">Shipped to Prod</span>
                        </div>
                        <span className="text-xs text-text/60 leading-relaxed font-sans">
                            Sign up for automatic deployments of your core infrastructure, saving you engineering weeks.
                        </span>
                    </div>
                </FloatingCard>

                {/* Right Floating Card: Lower 20%, protruding 50% right */}
                <FloatingCard className="bottom-[10%] -translate-y-0 -right-8 md:-right-24 w-56 hidden xl:flex animate-[bounce_8s_infinite_reverse]">
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold text-text/50 font-sans tracking-wide">Live Output</span>
                        <div className="flex border-b border-black/5 pb-3">
                            <span className="text-lg font-serif text-text leading-tight font-medium">Terminal<br />Deployment</span>
                        </div>
                        <code className="text-[10px] text-text/80 font-mono mt-2 bg-[#F4F0EB]/50 p-2 rounded-md">
                            &gt; target edge<br />
                            &gt; deploying... 100%<br />
                        </code>
                    </div>
                </FloatingCard>
            </div>
        </section>
    );
}
