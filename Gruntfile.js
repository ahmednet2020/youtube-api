const browserify = require('./tasks/browserify');
const uglify = require('./tasks/uglify');
const clean = require('./tasks/clean');
const postcss = require('./tasks/postcss');
const sass = require('./tasks/sass');
const watch = require('./tasks/watch');
const babel = require('./tasks/babel');
'use strict';  
module.exports = function(grunt) {
  //load all grunt plugin
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify,
    uglify,
    clean,
    postcss,
    sass,
    babel,
    watch
})
  //run Tasks
  grunt.registerTask('default', ['clean','browserify','sass','postcss','watch']);
  //build Tasks
  grunt.registerTask('build', ['clean','browserify','sass','postcss','uglify']);
};