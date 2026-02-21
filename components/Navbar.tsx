export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center py-6 px-12 bg-base/50 backdrop-blur-md border-b border-text/5">
            <div className="flex gap-12 text-sm font-medium tracking-wide">
                <a href="#" className="hover:opacity-70 transition-opacity">Platform</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Solutions</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Enterprise</a>

                {/* Minimalist Logo */}
                <div className="font-serif font-bold text-xl px-12 tracking-tighter">
                    1000x<span className="italic font-light">Dev</span>
                </div>

                <a href="#" className="hover:opacity-70 transition-opacity">Resources</a>
                <a href="#" className="hover:opacity-70 transition-opacity">Pricing</a>
                <a href="#" className="hover:opacity-70 transition-opacity font-bold">Log In</a>
            </div>
        </nav>
    );
}
