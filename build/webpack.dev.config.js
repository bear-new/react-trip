const path = require('path');
const webpack = require('webpack');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

const HtmlWebpackPluginConfig = {
    title: 'react-trip',
    filename: 'index.html',
    template: './build/template.html',
    // true|body|head|false，四种值，默认为true
    // true和body相同,是将js注入到body结束标签前
    // head将打包的js文件放在head结束前
    // false是不注入，这时得要手工在html中加js
    inject: true
}

const webpackConfig = {
    context: path.resolve(__dirname, '../'),
    entry: [
        'react-hot-loader/patch',
        './src/main'
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            utils: 'src/utils'
        }
    },
    // externals: {
    //     // key是我们 import 的包名，value 是CDN为我们提供的全局变量名
    //     // 所以最后 webpack 会把一个静态资源编译成：module.export.react = window.React
    //     "react": "React",
    //     // "react-dom": "ReactDOM",
    //     // "react-router-dom": "ReactRouterDOM"
    // },
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                use: 'happypack/loader?id=jsx',
                include: path.resolve(__dirname, '../src')
                // exclude: '/node_modules/'
            },
            {
                test: /\.(pcss|css)$/,
                use: [
                    'cache-loader',
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[chunkhash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {         // 如果没有options这个选项将会报错 No PostCSS Config found
                            ident: 'postcss',
                            plugins: [
                                require('autoprefixer')({ browsers: ['last 10 versions'] }), // CSS浏览器兼容
                                require('cssnano')(), // 压缩css
                                require('postcss-nested')() // css嵌套
                            ],
                        }

                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(HtmlWebpackPluginConfig),
        // new webpack.optimize.ModuleConcatenationPlugin(),
        new HappyPack({
            id: 'jsx',
            threads: 4,
            loaders: ['babel-loader?cacheDirectory']
        }),
        new webpack.HotModuleReplacementPlugin(),
        new ProgressBarPlugin(),
        new ServiceWorkerWebpackPlugin({
            entry: path.join(__dirname, 'sw.js')
        })
        // new WebpackParallelUglifyPlugin({
        //     uglifyJS: {
        //         output: {
        //             beautify: false, //不需要格式化
        //             comments: false //不保留注释
        //         },
        //         compress: {
        //             warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
        //             // drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
        //             collapse_vars: true, // 内嵌定义了但是只用到一次的变量
        //             reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
        //         }
        //     }
        //     // 有兴趣可以探究一下使用uglifyES
        // })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        // compress: true,
        host: '0.0.0.0',
        port: 9000,
        hot: true,
        https: true
    },
    devtool: 'source-map'
};


module.exports = smp.wrap(webpackConfig);
