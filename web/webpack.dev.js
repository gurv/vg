const helpers = require('./helpers.js');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const NamedModulesPlugin = require('webpack/lib/NamedModulesPlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
const HMR = helpers.hasProcessFlag('hot');
const METADATA = webpackMerge(commonConfig({env: ENV}).metadata, {
  host: HOST,
  port: PORT,
  ENV: ENV,
  HMR: HMR
});

module.exports = function (options) {
  return webpackMerge(commonConfig({env: ENV}), {

    devtool: 'cheap-module-source-map',

    output: {
      path: helpers.root('dist'),

      filename: '[name].bundle.js',

      sourceMapFilename: '[name].map',

      chunkFilename: '[id].chunk.js',

      library: 'ac_[name]',
      libraryTarget: 'var',
    },

    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(METADATA.ENV),
        'HMR': METADATA.HMR,
        'process.env': {
          'ENV': JSON.stringify(METADATA.ENV),
          'NODE_ENV': JSON.stringify(METADATA.ENV),
          'HMR': METADATA.HMR,
        }
      }),

      new NamedModulesPlugin(),

      new LoaderOptionsPlugin({
        debug: true,
        options: {
          tslint: {
            emitErrors: false,
            failOnHint: false,
            resourcePath: 'src'
          },
        }
      }),
    ],

    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      historyApiFallback: true,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      outputPath: helpers.root('dist'),
/*
      headers: { "Access-Control-Allow-Origin": "*" },
 target: 'http://localhost:3000/',
 */
/*
      proxy: {
        'scripts/': {
          target: 'http://www.cbr.ru/',
          secure: false,
          changeOrigin: true/!*,
           router: {
           'http://www.cbr.ru': 'http://www.cbr.ru'
           }*!/
        }
      }
*/
      proxy: {
        '/scripts': {
          target: 'http://www.cbr.ru/',
          secure: false,
          changeOrigin: true
        }
      }
    },

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }

  });
}
