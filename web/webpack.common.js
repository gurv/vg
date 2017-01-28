const webpack = require('webpack');
const helpers = require('./helpers.js');

const AssetsPlugin = require('assets-webpack-plugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const HMR = helpers.hasProcessFlag('hot');
const METADATA = {
  title: 'VG',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
  isProd = options.env === 'production';
  return {
    entry: {
      'polyfills': './src/polyfills.browser.ts',
      'vendor': './src/vendor.browser.ts',
      'main': './src/main.browser.ts'
    },

    resolve: {
      extensions: ['.ts', '.js', '.json'],
      modules: [helpers.root('src'), 'node_modules'],
    },

    module: {
      rules: [
        {
          test: /\.ts$/,
          loaders: [
            '@angularclass/hmr-loader?pretty=' + !isProd + '&prod=' + isProd,
            'awesome-typescript-loader',
            'angular2-template-loader'
          ],
          exclude: [/\.(spec|e2e)\.ts$/]
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          loaders: ['to-string-loader', 'css-loader']
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: ['raw-loader', 'sass-loader']
        },
        {
          test: /\.html$/,
          loader: 'raw-loader',
          exclude: [helpers.root('src/index.html')]
        },
        {
          test: /\.(jpg|png|gif)$/,
          loader: 'file'
        },
      ],
    },

    plugins: [
      new AssetsPlugin({
        path: helpers.root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
      }),

      new ForkCheckerPlugin(),

      new CommonsChunkPlugin({
        name: ['polyfills', 'vendor'].reverse()
      }),

      new ContextReplacementPlugin(
        /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
        helpers.root('src') // location of your src
      ),

      new CopyWebpackPlugin([{
        from: 'src/assets',
        to: 'assets',
      }, {
        from: 'src/meta',
      },]),

      new HtmlWebpackPlugin({
        template: 'src/index.html',
        title: METADATA.title,
        chunksSortMode: 'dependency',
        metadata: METADATA,
        inject: 'head'
      }),

      new ScriptExtHtmlWebpackPlugin({
        defaultAttribute: 'defer'
      }),

      new HtmlElementsPlugin({
        headTags: require('./head-config.common')
      }),

      new LoaderOptionsPlugin({}),

    ],

    node: {
      global: true,
      crypto: 'empty',
      process: true,
      module: false,
      clearImmediate: false,
      setImmediate: false
    }
  };
}
