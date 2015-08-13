var dest = "./dist";
var src = "./src";

module.exports = {
  concatJS: {
    src: src + '/**',
    dest: dest + '/'
  },
  uglify: {
    src: dest + '/scripts.js',
    dest: dest + '/'
  }
}