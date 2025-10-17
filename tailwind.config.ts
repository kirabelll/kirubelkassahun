import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const rotateXUtilities: Record<string, any> = {};
      const rotateYUtilities: Record<string, any> = {};
      const rotateZUtilities: Record<string, any> = {};
      const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
      // Generate rotate-x utilities
      rotateValues.forEach((value) => {
        rotateXUtilities[`.rotate-x-${value}`] = {
          "--tw-rotate-x": `${value}deg`,
          transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`
            .replace(/\\s+/g, " ")
            .trim(),
        };
        if (value !== 0) {
          rotateXUtilities[`.-rotate-x-${value}`] = {
            "--tw-rotate-x": `-${value}deg`,
            transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`
              .replace(/\\s+/g, " ")
              .trim(),
          };
        }
      });
      // Generate rotate-y utilities
      rotateValues.forEach((value) => {
        rotateYUtilities[`.rotate-y-${value}`] = {
          "--tw-rotate-y": `${value}deg`,
          transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`
            .replace(/\\s+/g, " ")
            .trim(),
        };
        if (value !== 0) {
          rotateYUtilities[`.-rotate-y-${value}`] = {
            "--tw-rotate-y": `-${value}deg`,
            transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`
              .replace(/\\s+/g, " ")
              .trim(),
          };
        }
      });
      // Generate rotate-z utilities
      rotateValues.forEach((value) => {
        rotateZUtilities[`.rotate-z-${value}`] = {
          "--tw-rotate-z": `${value}deg`,
          transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`
            .replace(/\\s+/g, " ")
            .trim(),
        };
        if (value !== 0) {
          rotateZUtilities[`.-rotate-z-${value}`] = {
            "--tw-rotate-z": `-${value}deg`,
            transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`
              .replace(/\\s+/g, " ")
              .trim(),
          };
        }
      });
      // Perspective utilities
      const perspectiveUtilities = {
        ".perspective-none": { perspective: "none" },
        ".perspective-dramatic": { perspective: "100px" },
        ".perspective-near": { perspective: "300px" },
        ".perspective-normal": { perspective: "500px" },
        ".perspective-midrange": { perspective: "800px" },
        ".perspective-distant": { perspective: "1200px" },
      };
      // Transform style utilities
      const transformStyleUtilities = {
        ".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
        ".transform-style-flat": { "transform-style": "flat" },
      };
      addUtilities({
        ...rotateXUtilities,
        ...rotateYUtilities,
        ...rotateZUtilities,
        ...perspectiveUtilities,
        ...transformStyleUtilities,
      });
    },
  ],
};

export default config;
