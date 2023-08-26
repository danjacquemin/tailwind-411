/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    iconFont: {
      mdash: "\u2014",
    },
    fontFamily: {
      sans: ["Roboto Flex", "sans-serif"],
      serif: ["serif"],
    },
    extend: {
      // https://tailwindcss.com/docs/typography-plugin#customizing-the-css
      // +
      // https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js
      typography: (theme) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": "#151515",
            "--tw-prose-bullets": "#151515",
            a: {
              color: "#3182ce",
              "&:hover": {
                color: "#2c5282",
              },
              "&:focus": {
                outline: "2px solid #3182ce",
                borderRadius: "5px",
              },
            },
            h2: {
              marginBottom: "0",
            },
            h3: {
              marginBottom: "0",
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ matchComponents, theme, e }) {
      matchComponents(
        {
          "before-icon": (value) => ({
            "&:before": {
              "font-family": "Icon Font",
              content: `"${value} "`,
            },
          }),
        },
        { values: theme("iconFont") },
      );
    }),
  ],
};
