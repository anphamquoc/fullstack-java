module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
