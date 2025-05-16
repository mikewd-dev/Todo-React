const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.{html,js}",
  ],
  safelist: [
    "dark",
    "dark:bg-custom-image-dark",
    "bg-custom-image-light",
    "bg-primary",
    "dark:bg-secondary",
    "text-black",
    "dark:text-white",
    "bg-[url('/assets/bg-desktop-light.jpg')]",
    "bg-mobile-[url('/assets/bg-mobile-light.jpg')]",
    "dark:bg-[url('/assets/bg-desktop-dark.jpg')]",
    "dark:bg-mobile-[url('/assets/bg-mobile-dark.jpg')]",
    "bg-[hsl(210,100%,100%)]",
    "dark:bg-[hsl(235,24%,18%)]",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        custom: ['"Josefin Sans"', 'sans-serif'],
      },
      fontSize: {
        '18px': '18px',
        '14px': '14px',
      },
      fontWeight: {
        'normal-size': '400',
        'bold-size': '900',
      },
      width: {
        '90vw': '90vw',
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;