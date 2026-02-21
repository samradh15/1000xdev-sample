import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                base: "#F9F8F6",
                text: "#1A1A1A",
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-newsreader)"],
            },
        },
    },
    plugins: [],
};
export default config;
