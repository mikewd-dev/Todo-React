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
    "dark:bg-[url('/assets/bg-desktop-dark.jpg')]",
    "bg-[hsl(210,100%,100%)]",
    "dark:bg-[hsl(235,24%,18%)]",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "400px",
      md: "700px",
      lg: "1100px",
      xl: "1400px",
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