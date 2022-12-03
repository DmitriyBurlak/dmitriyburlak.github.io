const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
require('babel-polyfill');

if (process.env.API)
  console.log(`==> Proxying /api requests to ${process.env.API}`)

module.exports = {
    entry: {
        main: ['babel-polyfill', "./src/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'public'),
        },
        open: true,
        compress: true,
        port: 9900,
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, './tsconfig.json'),
                            appendTsSuffixTo: [/\.vue$/]
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.(sass|css|scss)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.vue'],
        alias: {
            "@": path.resolve(__dirname, './src'),
            // "~libs": path.resolve(__dirname, "..", "..", "app/javascript/lib"),
        },
    },
    plugins: [
        new VueLoaderPlugin(),
        new DefinePlugin({
            __VUE_OPTIONS_API__: true,
            __VUE_PROD_DEVTOOLS__: true,
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
    ]
};