const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    context: path.resolve(__dirname, '../src'),
    entry: './main_server.js', // js入口文件
    target: 'node', // 为了不将node.js内置的模块打包进输出文件中
    externals: [nodeExternals()], // 为了不将node_modules下的第三方模块打包进输出文件中
    output: {
        libraryTarget: 'commonjs2', // 为了被node.js编写的http服务调用
        filename: 'bundle_server.js', // 将要在node.js运行的代码输出到bundle_server.js中
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader'],
                exclude: path.resolve(__dirname, 'node_modules')
            },
            {
                test: /\.css/,
                use: ['ignore-loader'] // 忽略css文件
            }
        ]
    },
    devtool: 'source-map'
}
