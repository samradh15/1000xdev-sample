"use client";

export default function FloatingCta() {
    return (
        <div className="fixed bottom-6 right-6 z-50 w-72 bg-white border border-black/5 rounded-2xl p-5 shadow-[0_12px_48px_rgba(0,0,0,0.08)]">
            <h4 className="font-serif text-base font-bold text-[#2A241D] mb-1">Ready to make this yours?</h4>
            <p className="text-xs text-[#2A241D]/40 mb-4">Start your project with a free consultation.</p>
            <div className="flex flex-col gap-2">
                <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#C84B31] text-white text-sm font-semibold py-2.5 rounded-xl text-center hover:bg-[#B5412A] transition-colors"
                >
                    Chat on WhatsApp →
                </a>
                <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black/10 text-[#2A241D] text-sm font-medium py-2.5 rounded-xl text-center hover:border-[#C84B31]/30 hover:text-[#C84B31] transition-colors"
                >
                    Book Free Call
                </a>
            </div>
        </div>
    );
}
