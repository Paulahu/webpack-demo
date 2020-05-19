const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: 'webpack_demo',
                template: 'src/assets/index.html'
            }
        )],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
               'file-loader',  //把文件变成文件路径
             ],
           },
            {
                test: /\.styl$/,
                loader:['style-loader','css-loader','stylus-loader'] // 把stylus变成css
            },
            {
                test: /\.less$/,
                loader:['style-loader','css-loader','less-loader']  // 把less变成css
            },
            {
                test: /\.scss$/i,
                use: [
                    'style-loader',  // 把css变成js （引入链接）
                    'css-loader',   // 把css变成style标签
                    {
                        loader: "sass-loader",  // 把sass变成css
                        options: {
                            implementation:require('dart-sass')
                        }
                    },
                ],
            },
        ],
    },
}