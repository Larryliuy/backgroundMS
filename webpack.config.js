const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = {
    devtool:'eval-source-map',
    entry:{
        app:__dirname + '/src/index.js',
        vendors:['react','react-dom','react-redux','react-router-dom',"redux"]
    },
    output: {
        path: __dirname + "/build",
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new ExtractTextPlugin("style.css"),
        new webpack.optimize.CommonsChunkPlugin({name:'vendors',fileName:'vendors.js'} ),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,  // remove all comments
            },
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader',
                query: {
                    presets: [ 'react','es2015','stage-0'],
                    plugins: ["transform-class-properties",["import", { libraryName: "antd", style: true}]]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use:[
                        {
                            loader: 'css-loader',
                            options:{
                                minimize: true //css压缩
                            }
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css-loader!less-loader')
            }
        ]
    },
    devServer:{
        // contentBase:path.join(__dirname, "build"),
        contentBase:__dirname + "/build",
        historyApiFallback:true,
        hot:true,
        inline:true,
        port:3006,
        // host:'10.1.1.210'
    }
};