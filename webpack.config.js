var path = require('path')
var webpack = require('webpack')
var npm = require("./package.json")

const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");
const ASSETS = path.resolve(__dirname, "src/assets");
const ENV = process.env.NODE_ENV || 'production';
const projectName = 'VueTinyLazyloadImg'

module.exports = {
	context: SRC,
  entry: {
    main: './plugin.js'
  },
  output: {
		path: DIST,
    publicPath: '/',
    filename: `${projectName}.dist.js`,
    library: `${projectName}`,
    libraryTarget: 'umd',
    umdNamedDefine: true,
    jsonpFunction: 'WebpackJsonp'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            }),
            scss: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader',
              fallback: 'vue-style-loader'
            }),
            sass: ExtractTextPlugin.extract({
              use: 'css-loader!sass-loader?indentedSyntax',
              fallback: 'vue-style-loader'
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
			{
				test: /\.json$/,
				use: 'json-loader'
			},
			{
				test: /\.(xml|html|txt|md)$/,
				use: 'raw-loader'
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          // Inline files smaller than 10 kB (10240 bytes)
          limit: 10 * 1024,
        }
      },
			{
				test: /\.(svg|woff2?|ttf|eot)(\?.*)?$/i,
				use: ENV === 'production' ? 'file-loader' : 'url-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          // Inline files smaller than 10 kB (10240 bytes)
          limit: 10 * 1024,
          // Remove the quotes from the url
          // (they’re unnecessary in most cases)
          noquotes: true,
        },
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': SRC,
      'assets': ASSETS
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  externals: {
    'vue$': 'vue/dist/vue.esm.js',
  },
  performance: {
    hints: false
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
	devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',
  plugins: ([
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true,
			disable: ENV !== 'production'
    })
	]).concat(ENV === 'production' ? [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.BannerPlugin({
      banner: `${projectName} v.${npm.version}`
    }),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      test: new RegExp(/\.(js|css|html)$/),
      algorithm: 'gzip',
      // threshold: 10240,
      // minRatio: 0.8,
      cache: true
    }),
  ] : []),
}
