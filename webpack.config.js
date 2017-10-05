var path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');


module.exports = {
    devtool: 'source-map',
    entry: {
        index: path.join(__dirname,'/src/index.jsx'),
        vendor: path.join(__dirname,'/src/vendor.js')
    },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: '[name].bundle.js',
        publicPath: 'http://localhost/'
    },
    resolve: {
        extensions : ['.js', '.jsx']
    },
    plugins: [
        new ExtractTextWebpackPlugin('style.css'),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, '/public/index.html'),
			inject: 'body',
			filename: 'index.html'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
          })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['babel-loader']
            },
            {
				test: /\.css$/,
				use: ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use: 'css-loader'
                })
            },
            {
				test: /\.scss$/,
				use: ExtractTextWebpackPlugin.extract(['css-loader', 'sass-loader'])
            },
            { test:  /\.(jpg|png|svg)$/, use: [ "file-loader" ] },
            { 
                test:  /\.(jpg|png|svg)$/, 
                include : path.join(__dirname, 'assets'),
                use: [ "url-loader?limit=30000&name=images/[name].[ext]" ] 
            },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
        ]
    },
    devServer: {
        host: 'localhost',
        port: 80,
        hot: true,
        historyApiFallback: true
    }
}