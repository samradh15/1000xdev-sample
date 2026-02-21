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
            className={`absolute bg-white border border-black/5 rounded-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-2 z-20 ${className}`}
        >
            {children}
        </div>
    );
}
