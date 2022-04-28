const path = require('path');
const reactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: { // 입력
        app: ['./client'],
    },
    module: {
        rules: [
            {
                test: /\.jsx>?/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 1% in KR']
                            },
                            debug: true
                        }]
                        , '@babel/preset-react'
                    ],
                    plugins: [
                        // '@babel/plugin-proposal-class-properties',
                        'react-refresh/babel'
                    ]
                }
            }
        ]
    },
    plugins: [
        new reactRefreshPlugin(),
        new HtmlWebpackPlugin({
            template:"./word-game.html",
            filename:"./index.html"
        })
    ],
    output: { // 출력
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    },
    devServer: { // 개발서버 설정
        // publicPath: '/dist/',
        hot: true
    }
}