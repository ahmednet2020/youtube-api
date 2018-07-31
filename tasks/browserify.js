module.exports = {
    dist: {
    files: {
      './dist/js/main.min.js': ['./src/**/*.js']
    },
    options: {
      transform: ['babelify']
    }
  }
}