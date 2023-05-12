const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js",
  },
  output: {
    filename: "main-[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "images/[name]-[hash][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|ico)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
      },
    ],
  },
};
