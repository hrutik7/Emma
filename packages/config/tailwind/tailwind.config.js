module.exports = require("@Emma/configs/tailwind/tailwind.config");

module.exports = {
    content: [
      "../../packages/ui/**/*.{js,ts,jsx,tsx}",
      "./**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
  };