/**
 * rollup plugin
 * @author yutent<yutent.io@gmail.com>
 * @date 2020/08/11 15:46:57
 */

var minify = require('terser').minify

function uglify(options = {}) {
  // force sourcemap creation
  var opt = Object.assign({ sourceMap: true }, options)

  return {
    name: 'uglify',
    renderChunk(code) {
      var result = minify(code, opt)
      if (result.error) {
        console.error(result.error)
        throw result.error
      }
      return result
    }
  }
}

module.exports = uglify
