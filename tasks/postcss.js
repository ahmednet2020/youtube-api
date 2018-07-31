module.exports = {
    options: {
      map: true, // inline sourcemaps
      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
      ]
    },
    dist: {
      src: './dist/css/main.min.css'
    }
}