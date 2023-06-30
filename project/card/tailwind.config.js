/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "woltcom-shark-12": "rgba(32, 33, 37, 0.12)",
        "woltcom-shark-64": "rgba(32, 33, 37, 0.64)",
        "woltcom-shark-28": "rgba(32, 33, 37, 0.28)",
        "woltcom-green": "#1fc70a",
        "woltcom-shark": "#202125",
        "woltcom-cerulean": "#009de0",
        "woltcom-nero": "#fff",
        crimson: "#ee032b",
        gray: {
          "100": "#1b1c1d",
          "200": "#0f0e0c",
          "300": "#0e0d0b",
          "400": "rgba(255, 255, 255, 0.1)",
        },
        antiquewhite: "#e8dcc2",
        burlywood: "#e4c590",
        darkgray: "#a6a6a6",
        black: "#000",
      },
      fontFamily: {
        "woltcom-roboto-regular-12": "Roboto",
        oswald: "Oswald",
        "dm-sans": "'DM Sans'",
        forum: "Forum",
      },
      borderRadius: {
        "31xl": "50px",
        xl: "20px",
        "61xl": "80px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      smi: "13px",
      lg: "18px",
      mid: "17px",
      "2xs": "11px",
      "3xs": "10px",
      mini: "15px",
      "9xl": "28px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
