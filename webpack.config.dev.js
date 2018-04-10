var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const SRC = path.resolve(__dirname, "src");
const DIST = path.resolve(__dirname, "dist");
const ASSETS = path.resolve(__dirname, "src/assets");
const ENV = process.env.NODE_ENV || 'production';

module.exports = {
	context: SRC,
  entry: {
    main: './main.js'
  },
  output: {
		path: DIST,
		publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
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
            // scss: 'vue-style-loader!css-loader!sass-loader',
            // sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
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
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
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
    }),
		new HtmlWebpackPlugin({
      template: './index.ejs',
      // excludeChunks: ['runtime'],
			minify: {
        collapseBooleanAttributes: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        trimCustomFragments: true
      }
    })
	]).concat(ENV === 'production' ? [
    new webpack.HashedModuleIdsPlugin(),
    // split vendor js into its own file
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf('node_modules') >= 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime',

      // minChunks: Infinity means that no app modules
      // will be included into this chunk
      minChunks: Infinity,
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
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

  devServer: {
		port: process.env.PORT || 8089,
		host: 'localhost',
		publicPath: '/',
		contentBase: './src',
		historyApiFallback: true,
		open: true
  }
}

