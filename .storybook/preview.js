import "../src/main.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "dark",
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
  options: {
    storySort: {
      method: "alphabetical",
      order: ["Elements", "Modules", "Sections", "Pages"],
      includeName: true,
    },
  },
};
