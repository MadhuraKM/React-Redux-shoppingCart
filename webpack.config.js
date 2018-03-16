const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
   entry: './main.js',
   output: {
      path:'/',
      filename: 'index.js',
   },
   devServer: {
      inline: true,
      port: 8282
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