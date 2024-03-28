const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: "Childhoods",
            myPageHeader: "Hello World",
            template: "./src/index.html",
            filename: "./dist/index.html", //relative to root of the application
        }),
    ],
};
