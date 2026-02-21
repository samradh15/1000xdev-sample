export default function SketchRevealAsset() {
    return (
        <div className="relative w-full max-w-[1000px] mx-auto rounded-xl overflow-hidden shadow-2xl aspect-video border border-black/10 bg-white group cursor-default">
            {/* 
        LAYER 1: The Render (Outer Edges)
        This represents the high-fidelity UI that is "revealed". 
        We use #E08552 (Cream-Orange) and #2A5946 (Deep Green) accents.
      */}
            <div className="absolute inset-0 bg-base p-6 flex flex-col gap-6 font-sans">
                {/* Mock Header (Rendered) */}
                <div className="flex justify-between items-center pb-4 border-b border-black/5">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-[#2A241D] flex items-center justify-center">
                            <div className="w-3 h-3 bg-[#E08552] rounded-sm" />
                        </div>
                        <div className="h-4 w-24 bg-black/10 rounded-sm" />
                    </div>
                    <div className="flex gap-4">
                        <div className="h-8 w-24 rounded-md bg-white border border-black/5 flex items-center justify-center">
                            <div className="h-2 w-12 bg-black/20 rounded-full" />
                        </div>
                        <div className="h-8 w-32 rounded-md bg-[#2A5946] flex items-center justify-center shadow-sm">
                            <div className="h-2 w-16 bg-white/80 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Mock Content Layout (Rendered) */}
                <div className="flex gap-6 flex-1">
                    {/* Sidebar */}
                    <div className="w-48 flex flex-col gap-3 border-r border-black/5 pr-6">
                        <div className="h-8 rounded-md bg-[#E08552]/10 border border-[#E08552]/20 relative overflow-hidden flex items-center px-3">
                            <div className="w-1 h-full bg-[#E08552] absolute left-0 top-0" />
                            <div className="h-2 w-16 bg-[#E08552] rounded-full" />
                        </div>
                        <div className="h-8 rounded-md bg-white hover:bg-black/5 transition-colors flex items-center px-3">
                            <div className="h-2 w-20 bg-black/20 rounded-full" />
                        </div>
                        <div className="h-8 rounded-md bg-white hover:bg-black/5 transition-colors flex items-center px-3">
                            <div className="h-2 w-12 bg-black/20 rounded-full" />
                        </div>
                    </div>

                    {/* Main Area */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="h-6 w-48 bg-[#2A241D] rounded-md mb-2" />
                                <div className="h-3 w-64 bg-black/30 rounded-full" />
                            </div>
                            <div className="flex gap-2">
                                <div className="h-6 w-6 rounded border border-black/10 flex items-center justify-center bg-white" />
                                <div className="h-6 w-6 rounded border border-black/10 flex items-center justify-center bg-white" />
                            </div>
                        </div>

                        {/* Data Grid Rendered */}
                        <div className="flex-1 bg-white rounded-lg border border-black/5 shadow-sm p-4 grid grid-cols-3 gap-4">
                            <div className="col-span-2 rounded-md border border-black/5 bg-[#F4F0EB]/50 p-4 flex flex-col justify-end">
                                <div className="w-full flex items-end gap-2 h-32 opacity-80">
                                    <div className="w-full bg-[#2A5946] rounded-t-sm h-[40%]" />
                                    <div className="w-full bg-[#2A5946] rounded-t-sm h-[60%]" />
                                    <div className="w-full bg-[#2A5946] rounded-t-sm h-[30%]" />
                                    <div className="w-full bg-[#E08552] rounded-t-sm h-[80%]" />
                                    <div className="w-full bg-[#2A5946] rounded-t-sm h-[50%]" />
                                    <div className="w-full bg-[#2A5946] rounded-t-sm h-[70%]" />
                                    <div className="w-full bg-[#2A5946] rounded-t-sm h-[90%]" />
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-4">
                                <div className="flex-1 rounded-md border border-[#E08552]/20 bg-[#E08552]/5 p-4 flex flex-col justify-center gap-2">
                                    <div className="text-[10px] uppercase font-bold tracking-wider text-[#E08552]">System Load</div>
                                    <div className="text-3xl font-light text-[#2A241D]">99.9%</div>
                                </div>
                                <div className="flex-1 rounded-md border border-black/5 bg-white p-4 flex flex-col justify-center gap-2">
                                    <div className="text-[10px] uppercase font-bold tracking-wider text-black/40">Active Nodes</div>
                                    <div className="text-3xl font-light text-[#2A241D]">1,204</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
        LAYER 2: The Sketch (Center)
        This represents the raw wireframe. We apply a radial mask so this layer is 
        visible perfectly in the center, and fades away towards the edges, revealing 
        the rendered Dashboard underneath.
      */}
            <div
                className="absolute inset-0 bg-white p-6 flex flex-col gap-6 font-mono pointer-events-none"
                style={{
                    WebkitMaskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 65%)",
                    maskImage: "radial-gradient(ellipse at center, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 65%)",
                }}
            >
                {/* Mock Header (Sketch) */}
                <div className="flex justify-between items-center pb-4 border-b-2 border-dashed border-black/20">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 flex items-center justify-center border-2 border-black/30 bg-gray-50">
                            <div className="w-3 h-3 border border-black/30" />
                        </div>
                        <div className="h-4 w-24 bg-gray-200" />
                    </div>
                    <div className="flex gap-4">
                        <div className="h-8 w-24 bg-gray-100 border-2 border-black/20 flex items-center justify-center">
                            <div className="h-2 w-12 bg-black/20" />
                        </div>
                        <div className="h-8 w-32 bg-gray-200 border-2 border-black/30 flex items-center justify-center">
                            <div className="h-2 w-16 bg-black/40" />
                        </div>
                    </div>
                </div>

                {/* Mock Content Layout (Sketch) */}
                <div className="flex gap-6 flex-1">
                    {/* Sidebar */}
                    <div className="w-48 flex flex-col gap-3 border-r-2 border-dashed border-black/10 pr-6">
                        <div className="h-8 bg-gray-200 border-2 border-black/30 flex items-center px-3">
                            <div className="h-2 w-16 bg-black/40" />
                        </div>
                        <div className="h-8 bg-gray-100 border border-black/10 flex items-center px-3">
                            <div className="h-2 w-20 bg-black/20" />
                        </div>
                        <div className="h-8 bg-gray-100 border border-black/10 flex items-center px-3">
                            <div className="h-2 w-12 bg-black/20" />
                        </div>
                    </div>

                    {/* Main Area */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <div className="h-6 w-48 bg-gray-300 border border-black/40 mb-2" />
                                <div className="h-3 w-64 bg-gray-200" />
                            </div>
                            <div className="flex gap-2">
                                <div className="h-6 w-6 border-2 border-black/20 bg-gray-50" />
                                <div className="h-6 w-6 border-2 border-black/20 bg-gray-50" />
                            </div>
                        </div>

                        {/* Data Grid Sketch */}
                        <div className="flex-1 border-2 border-black/20 p-4 grid grid-cols-3 gap-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDAsIDAsIDAsIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')]">
                            <div className="col-span-2 border-2 border-black/20 bg-white/80 p-4 flex flex-col justify-end">
                                <div className="w-full flex items-end gap-2 h-32 opacity-50">
                                    <div className="w-full border-2 border-black/40 bg-gray-200 h-[40%]" />
                                    <div className="w-full border-2 border-black/40 bg-gray-200 h-[60%]" />
                                    <div className="w-full border-2 border-black/40 bg-gray-200 h-[30%]" />
                                    <div className="w-full border-2 border-black/80 bg-gray-300 h-[80%]" />
                                    <div className="w-full border-2 border-black/40 bg-gray-200 h-[50%]" />
                                    <div className="w-full border-2 border-black/40 bg-gray-200 h-[70%]" />
                                    <div className="w-full border-2 border-black/40 bg-gray-200 h-[90%]" />
                                </div>
                            </div>
                            <div className="col-span-1 flex flex-col gap-4">
                                <div className="flex-1 border-2 border-black/30 bg-gray-100 p-4 flex flex-col justify-center gap-2">
                                    <div className="h-2 w-16 bg-black/30" />
                                    <div className="h-6 w-24 bg-black/60" />
                                </div>
                                <div className="flex-1 border-2 border-black/20 bg-white p-4 flex flex-col justify-center gap-2">
                                    <div className="h-2 w-20 bg-black/20" />
                                    <div className="h-6 w-20 bg-black/40" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative center scanning line (Optional touch for the "Vizcom" feel) */}
            <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-[#E08552]/40 to-transparent shadow-[0_0_10px_rgba(224,133,82,0.5)] -translate-x-1/2 pointer-events-none" />
        </div>
    );
}
