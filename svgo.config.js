module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIDs: false,
          removeUnknownsAndDefaults: false,
          removeUselessDefs: false,
          removeViewBox: false,
        },
      },
    },
  ],
};
