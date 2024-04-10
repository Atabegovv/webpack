const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV || 'production',
    entry: './src/script.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        publicPath: './',
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
                use: ['style-loader', 'css-loader'],
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
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
