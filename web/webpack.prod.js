const helpers = require('./helpers.js');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const IgnorePlugin = require('webpack/lib/IgnorePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const WebpackMd5Hash = require('webpack-md5-hash');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: false
});

module.exports = function (env) {
  return webpackMerge(commonConfig({env: ENV}), {

    devtool: 'source-map',

    output: {
      path: helpers.root('dist'),

      filename: '[name].[chunkhash].bundle.js',

      sourceMapFilename: '[name].[chunkhash].bundle.map',

      chunkFilename: '[id].[chunkhash].chunk.js'
    },

    plugins: [
      new WebpackMd5Hash(),

      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
          'HMR': METADATA.HMR,
        }
      }),

      new UglifyJsPlugin({
        beautify: false,
        mangle: {
          screw_ie8: true,
          keep_fnames: true
        },
        compress: {
          screw_ie8: true
        },
        comments: false
      }),

      new NormalModuleReplacementPlugin(
        /angular2-hmr/,
        helpers.root('angular2-hmr-prod.js')
      ),

      new LoaderOptionsPlugin({
        debug: false,

        options: {
          tslint: {
            emitErrors: true,
            failOnHint: true,
            resourcePath: 'src'
          },

          htmlLoader: {
            minimize: true,
            removeAttributeQuotes: false,
            caseSensitive: true,
            customAttrSurround: [
              [/#/, /(?:)/],
              [/\*/, /(?:)/],
              [/\[?\(?/, /(?:)/]
            ],
            customAttrAssign: [/\)?\]?=/]
          },

        }
      }),
    ],

    node: {
      global: true,
      crypto: 'empty',
      process: false,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  });
}
