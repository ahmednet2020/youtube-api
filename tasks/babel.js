module.exports = {
    options: {
      sourceMap: false
    },
    dist: {
      files: {
        './dist/cashe.min.js':'./worker/cashe.js'
      }
    }
}