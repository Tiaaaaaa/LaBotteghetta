const PATH = require('path');
const WEBPACK = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(md|gltf)$/,
        use: 'raw-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|mp4|webm)$/,
        use: ['file-loader'],
      },
    ],
  },

  resolve: {
    //loading THREE dependencies
    alias: {
      'three-orbitcontrols': PATH.join(
        __dirname,
        'node_modules/three/examples/js/controls/OrbitControls.js',
      ),
      'three-orientation-controls': PATH.join(
        __dirname,
        'node_modules/three/examples/js/controls/DeviceOrientationControls.js',
      ),
      'three-gltfloader': PATH.join(
        __dirname,
        'node_modules/three/examples/js/loaders/GLTFLoader.js',
      ),

    },
    extensions: ['*', '.js', '.jsx'],
  },


  entry: './src/app.js',

  output: {
    path: PATH.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATH.join(process.cwd(), 'src'),
    compress: true,
    port: 8080
  },
  plugins: [new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './src/index.html'
  })]
};
