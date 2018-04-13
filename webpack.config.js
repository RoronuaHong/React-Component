const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");

const template = "./src/index.html";

const config = {
    mode: "development",
    devtool: 'cheap-eval-source-map',
    entry: {
        main: "./src/index.js",
        vendor: [
            "react",
            "react-dom",
            "redux",
            "react-redux",
            "react-router-dom"
        ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            limit: 10,
                            name: "img/[name].[ext]?[hash]"
                        }
                    }
                ]
            }
        ]
    },
    // optimization: {
    //     runtimeChunk: 'single',
    //     splitChunks: {
    //         chunks: 'all',
    //         cacheGroups: {
    //             default: {
    //                 priority: 1,
    //                 enforce: true
    //             },
    //             vendors: {
    //                 priority: 2,
    //                 test: /[\\/]node_modules[\\/]/,
    //                 name: 'vendors',
    //                 enforce: true,
    //                 chunks: 'all'
    //             }
    //         }
    //     }
    // },
    plugins: [
        // new UglifyJSPlugin(),
        new HtmlWebpackPlugin({
            template: template,
            filename: 'index.html',
            chunks: ["vendor", "main"],
            hash: true,
            title: "React Component"
        }),
        new ExtractTextPlugin({
            filename: 'main.[hash].css',
            allChunks: true,
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        port: "7777",
        inline: true,   //实时刷新
        hot: true,
        compress: true,
        historyApiFallback: {
            index: '/pa/index.html'
        },
        proxy: {

        }
    },
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    }
}

module.exports = config;
