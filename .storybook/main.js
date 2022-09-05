module.exports = {
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
    {
      name: "storypug",
      options: {
        loaderOptions: {
          root: "../src/components",
        },
      },
    },
  ],
  framework: "@storybook/html",
  staticDirs: ["../src/assets"],
  stories: [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
};
