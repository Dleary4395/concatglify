var dest = "./dist";
var src = "./src";

module.exports = {
  concatJS: {
    src: src + '/**',
    dest: src + '/'
  },
  uglify: {
    src: src + '/scripts.js',
    dest: dest + '/'
  }
}