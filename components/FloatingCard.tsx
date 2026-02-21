import { ReactNode } from "react";

export default function FloatingCard({
    children,
    className,
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <div
            className={`absolute bg-white/90 backdrop-blur-md border border-black/5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-4 flex flex-col gap-2 ${className}`}
        >
            {children}
        </div>
    );
}
