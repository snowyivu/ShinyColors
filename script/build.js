const babel = require('rollup-plugin-babel')
const { version } = require('../package.json')
const json = require('rollup-plugin-json')
const resolve = require('rollup-plugin-node-resolve')
const cmjs = require('rollup-plugin-commonjs')
const path = require('path')
require('dotenv').config({ path: path.resolve(process.cwd(), 'env.txt') })
const banner = `// ==UserScript==
// @name         ShinyColorsEng
// @namespace    https://github.com/snowyivu/ShinyColors
// @version      ${version}
// @description  For questions or submitting translations https://github.com/snowyivu/ShinyColors
// @icon         https://shinycolors.enza.fun/icon_192x192.png
// @author       biuuu
// @match        https://shinycolors.enza.fun/*
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @connect      api.interpreter.caiyunai.com
// @connect      translate.google.com
// @connect      fanyi.baidu.com
// @updateURL    https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js
// @downloadURL  https://github.com/snowyivu/ShinyColors/raw/gh-pages/ShinyColors.user.js
// @supportURL   https://github.com/snowyivu/ShinyColors/issues
// ==/UserScript==`
module.exports = {
  input: 'src/main.js',
  plugins: [
    resolve({ preferBuiltins: false }),
    cmjs({ ignore: ['stream'] }),
    json(),
    babel({
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env', {
        modules: false,
        targets: 'last 3 iOS versions'
      }]]
    })
  ],
  output: {
    file: './dist/ShinyColors.user.js',
    format: 'iife',
    name: 'shinycolors_eng',
    banner: banner,
    intro: `const ENVIRONMENT = "${process.env.BUILD === 'development' ? 'development' : ''}";
    const DATA_URL = '${process.env.DATA_URL ? process.env.DATA_URL : ''}';
    const DEV = ${process.env.DEV ? true : false};
    const SHOW_UPDATE_TEXT = ${process.env.TEXT ? true : false};
    const COLLECT_CARD_RATE = ${process.env.CARD ? true : false};`
  }
};
