var jsp = require("./lib/parse-js");
var pro = require("./lib/process");

/**
 * Just a simple one-call compressor
 *
 * @param {string} source
 * @return {string} build
 */
function compress(source) {
  var ast = jsp.parse(source);

  ast = pro.ast_mangle(ast);
  ast = pro.ast_squeeze(ast);

  return pro.gen_code(ast);
}

exports.parser   = jsp;
exports.uglify   = pro;
exports.compress = compress;