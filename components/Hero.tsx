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

                {/* Floating Depth Cards */}
                <FloatingCard className="top-10 -left-12 max-w-[200px] hidden md:flex animate-[bounce_6s_infinite]">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-xs font-semibold text-text">Shipped to Prod</span>
                    </div>
                    <span className="text-[10px] text-text/60 font-mono">1000xdev-core-v2</span>
                </FloatingCard>

                <FloatingCard className="-bottom-8 -right-8 max-w-[240px] hidden md:flex animate-[bounce_8s_infinite_reverse]">
                    <div className="flex border-b border-black/5 pb-2 mb-1">
                        <span className="text-[10px] font-mono text-text/50">Terminal</span>
                    </div>
                    <code className="text-xs text-text/80 font-mono">
                        $ npx deploy --target edge<br />
            > deploying... 100%<br />
            > live on global edge
                    </code>
                </FloatingCard>
            </div>
        </section>
    );
}
