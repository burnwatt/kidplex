const path = require('path');

module.exports = {
    context: __dirname,
    entry: './frontend/kidplex.jsx',
    output: {
        path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/env', '@babel/react']
                    }
                },
            },
            {
                // Adding image assets to webpack
                test: /\.(jpg|jpeg|png)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name][md5:hash].[ext]', // Name of bundled asset
                        outputPath: 'webpack-assets/', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
                        publicPath: '/assets/webpack-assets/' // Endpoint asset can be found at on Rails server
                    }
                }
            }
        ]
    },
    devtool: 'source-map'
};