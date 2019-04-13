'use strict';
const fs = require('fs');
const path = require('path');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const html = require('html-webpack-plugin');
const babel = require('./webpack/babel');
const extractCSS = require('./webpack/css.extract');
const files = require('./webpack/files');
const progressBar = require('progress-bar-webpack-plugin');
const PATHS = {
  source: path.join(__dirname, 'source'),
  build: path.join(__dirname, 'dist')
};

const generateHtmlPlugins = (templateDir) =>{
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));

  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];

    return new html({
      inject: false,
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`)
    })
  })
};

const htmlPlugins = generateHtmlPlugins(`${PATHS.source}/pages`);



const common = merge([
  {
    entry: {
      'index': PATHS.source + '/index.js',
    },
    output: {
      path: PATHS.build,
      filename: 'assets/js/[name].js'
    },
    devtool: '#cheap-module-source-map',
    plugins: [
      new progressBar()
    ].concat(htmlPlugins)
  },
  babel(),
  files()
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      extractCSS()
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devserver(),
      sass()
    ]);
  }
};