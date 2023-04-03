const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let mode = "development";
if (process.env.NODE_ENV === "production") {
    mode = "production";
}

console.log("mode", mode);

module.exports = {
    mode: mode,
    entry: {
        app: "./src/js/app.js",
        sliders: "./src/js/sliders.js",
        sliders2: "./src/js/sliders-v9.js",
    },
    ignoreWarnings: [
        {
            module: /module2\.js\?[34]/,
        },
        {
            module: /[13]/,
            message: /homepage/,
        },
        /warning from compiler/,
        (warning) => true,
    ],
    devServer: {
        port: 9000,
        compress: true,
        static: ["dist"],
        client: {
            overlay: false,
          },
    },
    output: {
        filename: "[name].js",
        assetModuleFilename: "assets/images/[name][ext][query]",
        clean: true,
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/pages/index/index.html",
            inject: "body",
            chunks: ["app", "sliders"],
            // chunks: ["index", "sliders", "fancybox"],
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/air-park/air-park.html",
            inject: "body",
            chunks: ["app", "sliders", "sliders2"],
            // chunks: ["index", "sliders", "fancybox"],
            filename: "air-park.html",
        }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/news/news.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "news.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/contacts/contacts.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "contacts.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/single-news/single-news.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "single-news.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/games/games.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "games.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/info-pages/club-rules.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "club-rules.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/info-pages/partnership.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "partnership.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/our-arenas/our-arenas.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "our-arenas.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/our-arenas/arena.html",
        //     inject: "body",
        //     chunks: ["index", "sliders"],
        //     filename: "arena.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/our-arenas/club.html",
        //     inject: "body",
        //     chunks: ["index", "sliders"],
        //     filename: "club.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/about-company/about-company.html",
        //     inject: "body",
        //     chunks: ["index", "sliders", "fancybox"],
        //     filename: "about-company.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/prices/prices.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "prices.html",
        // }),
        // new HtmlWebpackPlugin({
        //     template: "./src/pages/error/error.html",
        //     inject: "body",
        //     chunks: ["index"],
        //     filename: "error.html",
        // }),
        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    minimize: {
                        collapseWhitespace: false,
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    mode === "development"
                        ? "style-loader"
                        : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            // Options
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(gif|svg|png|jpg|jpeg|mp4)$/i,
                type: "asset/resource",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|)$/i,
                type: "asset/resource",
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
};
