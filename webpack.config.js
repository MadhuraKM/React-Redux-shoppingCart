const ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
   entry:  APP_DIR + '/main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      contentBase: path.join(__dirname, "src"),
      port: 8282,
      historyApiFallback: true
   },
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['es2015', 'react']
            }
         },
         { 
            test: /\.css$/, 
            loader: "style-loader!css-loader" 
         },
         { 
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
         }
      ]
   },
   plugins: [
    new ExtractTextPlugin('style-new.css')
   ]
}
module.exports = config;