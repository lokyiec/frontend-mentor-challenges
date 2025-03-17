import presetWind3 from "@unocss/preset-wind3";
import { defineConfig, presetWebFonts } from "unocss";

export default defineConfig({
  theme: {
    breakpoints: {
      md: '768px',
      lg: '1440px',
    },
    colors: {
      red: "#FC4747",
      "dark-blue": "#10141E",
      "semi-dark-blue": "#161D2F",
      "greyish-blue": "#5A698F",
      "pure-white": "#FFFFFF",
    },
    fontFamily: {
      outfit: 'Outfit, sans-serif',
    },
  },
  shortcuts: [
    {
      'heading-1': 'font-outfit font-light text-[32px] leading-tight',
      'heading-2': 'font-outfit font-normal text-[24px] leading-tight',
      'heading-3': 'font-outfit font-medium text-[20px] leading-tight',
      'body-m': 'font-outfit font-light text-[18px] leading-tight',
      'body-s': 'font-outfit font-light text-[16px] leading-tight',
    },
  ],
  presets: [
    presetWind3(),
    presetWebFonts({
      provider: "google",
      fonts: {
        outfit: [
          {
            name: "Outfit",
            weights: ["300", "400", "500"],
          },
        ],
      },
    }),
  ],
  preflights: [
    {
      getCSS: ({ theme }) => `
        html, body, #__nuxt {
          background: ${theme.colors["dark-blue"]};
          color: ${theme.colors["pure-white"]};
          font-family: ${theme.fontFamily.outfit};
        }
      `,
    },
  ],
});
