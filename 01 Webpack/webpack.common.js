const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        visitor: path.join(__dirname, 'src', "visitor.js"),
        admin: path.join(__dirname, 'src', "admin.js")
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
            {
                test: /\.s?css$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                enforce: "pre",
                exclude: /node_modules/,
                loader: "eslint-loader",
                options: {
                    failOnError: true
                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyPlugin([
            {
                from: 'src/visitor.html',
                to: 'visitor.html',
                force: true,
            },
            {
                from: 'src/admin.html',
                to: 'admin.html',
                force: true,
            }
        ]),
        new HtmlWebpackPlugin()
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    }
};
