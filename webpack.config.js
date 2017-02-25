
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {

    //define entry point
    entry: './src/scrip1.js',

    //define output point
    output: {
        path: './distr',
        filename: 'bundle.js'
    },


     module:  {
       rules: [
           {test: /\.scss$/, use:ExtractTextPlugin.extract({
                             fallbackLoader:'style-loader',
                             loader: ['css-loader','sass-loader'],
                             publicPath:'/distr'
              // ['style-loader','css-loader','sass-loader']
         })}
       ]
     },  


    plugins: [
            new HtmlWebpackPlugin({
            title: 'Portfolio111',
            template: './src/index.html',
            }),
         
             new ExtractTextPlugin({
             filename: "app.css",
             disable: false,
             allChunks: true
        })



   ]
     
}
