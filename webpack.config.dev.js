var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const InlineChunkWebpackPlugin = require('html-webpack-inline-chunk-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
		publicPath: '/vue-tiny-lazyload-img/',
    filename: '[name].js'
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
    new CopyWebpackPlugin([
			{ from: './assets', to: './assets' }
    ]),
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
    new InlineChunkWebpackPlugin({
      inlineChunks: ['runtime']
    }),
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
		publicPath: '/vue-tiny-lazyload-img/',
		contentBase: './src',
		historyApiFallback: true,
		open: true,
		openPage: 'vue-tiny-lazyload-img/',
		proxy: {
			'/vue-tiny-lazyload-img': {
				target: "http://localhost:8089",
				bypass: (req) => {
					let view = req.url.replace('/vue-tiny-lazyload-img', '');
					return view;
				}
			}
		}
  }
}

