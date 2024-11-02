const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point for the app
  output: {
    path: path.resolve(__dirname, 'build'),  // Output to 'build' directory
    filename: 'bundle.js',
    publicPath: '/',        // Serve from root
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    // Use Babel for JS and JSX files
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,         // Load and inject CSS files
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',  // Generate HTML file with injected JS
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,  // Enable client-side routing
    compress: true,
    port: 8080,
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
