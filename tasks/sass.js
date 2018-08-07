const sass = require('node-sass');
module.exports = {
    options: {
        implementation: sass,
        sourceMap: true,
        outputStyle:"compressed"
    },
    dist: {
        files: {
            './dist/css/main.min.css': './src/sass/main.scss'
        }
    }
}