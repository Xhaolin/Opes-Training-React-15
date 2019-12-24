const webpack = require('webpack');
const path = require('path'); 

const PATHS = { 
    app: path.join(__dirname, 'app'), 
    build: path.join(__dirname, 'build')
};


module.exports = {

  mode: 'development',
  entry: PATHS.app + "/index.jsx",
  output: { path: PATHS.build, filename: "bundle.js"},

  devtool: 'eval-source-map',
  
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader"
          }
      },

      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },

      {
        test: /\.css$/,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },

    ]
  }
};