const helpers = require('./helpers.js');
const path = require('path');

const ProvidePlugin = require('webpack/lib/ProvidePlugin');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');

const ENV = process.env.ENV = process.env.NODE_ENV = 'test';

module.exports = function (options) {
  return {
    devtool: 'inline-source-map',

    resolve: {
      extensions: ['.ts', '.js'],

      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },

    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.ts$/,
          use: 'tslint-loader',
          exclude: [helpers.root('node_modules')]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          use: 'source-map-loader',
          exclude: [
            helpers.root('node_modules/rxjs'),
            helpers.root('node_modules/@angular')
          ]
        },
        {
          test: /\.ts$/,
          use: 'awesome-typescript-loader',
          query: {
            // use inline sourcemaps for "karma-remap-coverage" reporter
            sourceMap: false,
            inlineSourceMap: true,
            compilerOptions: {
              removeComments: true
            }
          },
          exclude: [/\.e2e\.ts$/]
        },
        {
          test: /\.json$/,
          use: 'json-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.css$/,
          use: ['to-string-loader', 'css-loader'],
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.html$/,
          use: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          enforce: 'post',
          test: /\.(js|ts)$/,
          use: 'istanbul-instrumenter-loader',
          include: helpers.root('src'),
          exclude: [
            /\.(e2e|spec)\.ts$/,
            /node_modules/
          ]
        }

      ]
    },

    plugins: [
      new DefinePlugin({
        'ENV': JSON.stringify(ENV),
        'HMR': false,
        'process.env': {
          'ENV': JSON.stringify(ENV),
          'NODE_ENV': JSON.stringify(ENV),
          'HMR': false,
        }
      }),
      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src') // location of your src
      ),
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

    node: {
      global: true,
      process: false,
      crypto: 'empty',
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
