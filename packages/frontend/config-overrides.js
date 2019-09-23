/* eslint-disable filenames/match-regex */
/* eslint-disable no-param-reassign */

const shortId = require('shortid');
const {
  addBabelPlugins,
  addWebpackAlias,
  disableEsLint,
  override
} = require('customize-cra');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const appPaths = {
  appIndexJs: require.resolve('./src/index.js'),
  appIndexHtml: require.resolve('./public/index.html')
};

const mainEntryKey = `main.${shortId.generate()}`;

const modify = modifierFn => config => {
  modifierFn(config);

  return config;
};

module.exports = override(
  disableEsLint(),
  addBabelPlugins(
    ['babel-plugin-lodash'],
    [
      'babel-plugin-styled-components',
      { fileName: false, ssr: false, pure: true, minify: false }
    ],
    ['babel-plugin-idx']
  ),
  addWebpackAlias({
    'lodash-es': 'lodash'
  }),
  modify(config => {
    config.entry = {
      [mainEntryKey]: appPaths.appIndexJs
    };
  }),
  modify(config => {
    const htmlPluginInst = config.plugins.shift();
    const HtmlWebpackPlugin = htmlPluginInst.constructor;

    config.plugins.unshift(
      new HtmlWebpackPlugin({
        hunks: [mainEntryKey],
        filename: 'index.html',
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        },
        inject: true,
        template: appPaths.appIndexHtml
      })
    );

    config.plugins.push(
      new LodashModuleReplacementPlugin({
        shorthands: true,
        cloning: true,
        currying: true,
        caching: true,
        collections: true,
        memoizing: true,
        coercions: true,
        flattening: true,
        paths: true,
        placeholders: true
      })
    );
  })
);
