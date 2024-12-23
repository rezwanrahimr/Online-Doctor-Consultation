import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
        'work-sans': ['var(--font-work-sans)', 'sans-serif'],
        'geist-sans': ['var(--font-geist-sans)', 'sans-serif'],
        'geist-mono': ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        "color-primary": "#00A6FB",
        "color-secondary": "#2AC28E",
        "color-third": "#E0F5FF",
        "color-deepblue": "#4589F4",
        "para-color": "#5C728E",
        "color-black": "#031D36",
        "color-white": "#ffffff",
        "color-check-up": "#F7588D",
        "color-report": "#FFC422",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'service-3': "url('./images/breadcrumb_bg.jpg')", // Update path if needed
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
