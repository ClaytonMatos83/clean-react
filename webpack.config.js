const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/main/index.tsx',
    output: {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/public/js',
        filename: 'bundle.js'
    },
    resolve: {
        extension: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.join(__dirname, 'src')
        }
    },
    devServer: {
        contentBase: './public',
        writeToDisk: true,
        historyApiFallback: true
    },
    externals: {
        react: 'react',
        'react-dom': 'ReactDOM'
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}