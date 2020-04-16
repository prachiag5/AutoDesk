// @flow

const path = require( 'path' );
const Dotenv = require( 'dotenv-webpack' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    app: [
      '@babel/polyfill',
      'react-hot-loader/patch',
      './src/index',
    ],
  },
  output: {
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    inline: true,
    hot: true,
    publicPath: '/',
    historyApiFallback: true,
    contentBase: 'public',
    overlay: {
      errors: true,
      warnings: true,
    },
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loaders: [ 'babel-loader' ],
        exclude: /node_modules/,
        include: path.resolve( __dirname, './src' ),
      },
      // css
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
      // less
      {
        test: /\.less$/,
        use: [ 'style-loader', 'less-loader' ],
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin( {
      inject: true,
      template: path.resolve( __dirname, './public/index.html' ),
    } ),
  ],
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
};
