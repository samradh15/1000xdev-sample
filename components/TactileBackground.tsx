export default function TactileBackground() {
    return (
        <>
            <div
                className="fixed inset-0 z-[-2] w-screen h-screen bg-base pointer-events-none"
            />

            {/* Grid Layer */}
            <div
                className="fixed inset-0 z-[-1] w-screen h-screen pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: `
            linear-gradient(to right, #1A1A1A 1px, transparent 1px),
            linear-gradient(to bottom, #1A1A1A 1px, transparent 1px)
          `,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Noise Layer */}
            <div className="fixed inset-0 z-[0] w-screen h-screen pointer-events-none mix-blend-multiply opacity-[0.04]">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <filter id="tactileNoise">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.8"
                            numOctaves="4"
                            stitchTiles="stitch"
                        />
                        {/* ColorMatrix to desaturate the noise slightly so it feels like paper lint */}
                        <feColorMatrix type="saturate" values="0" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#tactileNoise)" />
                </svg>
            </div>
        </>
    );
}
