var path = require('path');
var webpack = require('webpack');
var loaders = require('./config/webpack.loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// @NOTE:
// for examples, see https://github.com/alicoding/react-webpack-babel

module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist/public'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    module: {
        loaders
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'css/styles.css', allChunks: true })
    ]
};