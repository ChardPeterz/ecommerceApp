/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-white": "var(--base-white)",
        flowkitblue: "var(--flowkitblue)",
        flowkitcharcoal: "var(--flowkitcharcoal)",
        flowkitgreen: "var(--flowkitgreen)",
        flowkitpurple: "var(--flowkitpurple)",
        flowkitred: "var(--flowkitred)",
        flowkitwhite: "var(--flowkitwhite)",
        "primitives-colors-base-black": "var(--primitives-colors-base-black)",
        "primitives-colors-base-white": "var(--primitives-colors-base-white)",
        "primitives-colors-blue-300": "var(--primitives-colors-blue-300)",
        "primitives-colors-blue-50": "var(--primitives-colors-blue-50)",
        "primitives-colors-blue-500": "var(--primitives-colors-blue-500)",
        "primitives-colors-blue-700": "var(--primitives-colors-blue-700)",
        "primitives-colors-gray-300": "var(--primitives-colors-gray-300)",
        "primitives-colors-gray-500": "var(--primitives-colors-gray-500)",
        "primitives-colors-orange-300": "var(--primitives-colors-orange-300)",
        "primitives-colors-orange-400": "var(--primitives-colors-orange-400)",
        "primitives-colors-orange-50": "var(--primitives-colors-orange-50)",
        "primitives-colors-orange-500": "var(--primitives-colors-orange-500)",
        "primitives-colors-orange-700": "var(--primitives-colors-orange-700)",
        "primitives-colors-red-300": "var(--primitives-colors-red-300)",
        "primitives-colors-red-50": "var(--primitives-colors-red-50)",
        "primitives-colors-red-500": "var(--primitives-colors-red-500)",
        "primitives-colors-red-700": "var(--primitives-colors-red-700)",
        "semantic-colors-border-darker": "var(--semantic-colors-border-darker)",
        "semantic-colors-border-default": "var(--semantic-colors-border-default)",
        "semantic-colors-border-lighter": "var(--semantic-colors-border-lighter)",
        "semantic-colors-surface-subtle": "var(--semantic-colors-surface-subtle)",
        "style-tokens-greyscale-border-default": "var(--style-tokens-greyscale-border-default)",
        "style-tokens-greyscale-surface-default": "var(--style-tokens-greyscale-surface-default)",
        "style-tokens-greyscale-surface-disabled": "var(--style-tokens-greyscale-surface-disabled)",
        "style-tokens-greyscale-text-body": "var(--style-tokens-greyscale-text-body)",
        "style-tokens-greyscale-text-negative": "var(--style-tokens-greyscale-text-negative)",
        "style-tokens-greyscale-text-title": "var(--style-tokens-greyscale-text-title)",
      },
      fontFamily: {
        "body-bold": "var(--body-bold-font-family)",
        "body-regular": "var(--body-regular-font-family)",
        "caption-bold": "var(--caption-bold-font-family)",
        "footnote-bold": "var(--footnote-bold-font-family)",
        "h1-bold": "var(--h1-bold-font-family)",
        "h2-bold": "var(--h2-bold-font-family)",
        "h3-regular": "var(--h3-regular-font-family)",
        "headline-regular": "var(--headline-regular-font-family)",
        "subtitle-regular": "var(--subtitle-regular-font-family)",
      },
      boxShadow: {
        "drop-shadow-xsmall": "var(--drop-shadow-xsmall)",
      },
    },
  },
  plugins: [],
};