import Image from "next/image";

export default function SketchRevealAsset() {
    return (
        <div className="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl aspect-video border border-black/10">
            {/* Base Layer: Color Render */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-color-placeholder.png"
                    alt="Color Render"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Top Layer: Blueprint Sketch with Radial Mask */}
            <div
                className="absolute inset-0"
                style={{
                    WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                }}
            >
                <Image
                    src="/hero-sketch-placeholder.png"
                    alt="Blueprint Sketch"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}
