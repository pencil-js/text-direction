const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: "./text-direction.js",
    plugins: [
        new UglifyJsPlugin(),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"],
                },
            },
        }],
    },
    output: {
        filename: "dist/text-direction.min.js",
        library: "textDirection",
        libraryTarget: "this",
        libraryExport: "default",
    },
};