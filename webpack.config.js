const path = require('path');
const webpack = require('webpack');


module.exports = {
    entry: '/src/js/script.js',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ['style-loader, css-loader'],
            },
        ],
    },

};