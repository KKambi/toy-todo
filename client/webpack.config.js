const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        index: './src/index.entry.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),  //산출물이 위치할 경로
        filename: '[name].bundle.js'
    },
    rules: [
        {
            test: /\.sass$/,
            use: [
                MiniCssExtractPlugin.loader,
                // Creates `style` nodes from JS strings
                'style-loader',
                // Compiles Sass to CSS
                'sass-loader'
            ],
        },
    ],
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new MiniCssExtractPlugin()
    ]
};