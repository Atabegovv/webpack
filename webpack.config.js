const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlInlineScriptWebpackPlugin = require('html-inline-script-webpack-plugin');

const mode = process.env.NODE_ENV || 'production';

module.exports = {
    mode: mode,
    entry: {
        main: './src/script.tsx',
        initColorScheme: './src/colorSchemeInit.ts',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.svg$/,
                type: 'asset/resource',
            },
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        runtimeChunk: mode === 'production' ? false : 'single',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new HtmlInlineScriptWebpackPlugin([/initColorScheme\..+\.js$/]),
        new MiniCssExtractPlugin({
            filename: 'bundle.[contenthash].css',
        }),
        new EslintWebpackPlugin({
            files: '{**/*,*}.{js,jsx,ts,tsx}',
        }),
        new StylelintWebpackPlugin({
            files: '{**/*,*}.{css,scss,sass}',
        }),
    ],
    devServer: {
        open: true,
        historyApiFallback: true,
    },
};
