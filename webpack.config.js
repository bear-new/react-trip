const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = {
    title: 'react-trip',
    filename: 'index.html',
    template: 'template.html',
    inject: true // true|body|head|false，四种值，默认为true,true和body相同,是将js注入到body结束标签前,head将打包的js文件放在head结束前,false是不注入，这时得要手工在html中加js
}

module.exports = {
    entry: './src/main',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            utils: path.resolve(__dirname, 'src/utils')
        }
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/, 
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(pcss|css)$/,
                use: [
                    'style-loader',
                    { 
                        loader: 'css-loader', 
                        options: {
                            modules: true, 
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        } 
                    },
                    {
                        loader: 'postcss-loader',
                        options: {         // 如果没有options这个选项将会报错 No PostCSS Config found
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({browsers: ['last 10 versions']}), // CSS浏览器兼容
                                require('cssnano')(), // 压缩css
                                require('postcss-nested')(), // css嵌套
                                require('uncss') // 移除无用css
                            ],
                        }

                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
        new webpack.optimize.ModuleConcatenationPlugin()
    ], 
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
    }
};
