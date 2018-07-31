module.exports = {
    js: {
	    files: './src/**/*.js',
	    tasks: ['clean:js', 'browserify', 'uglify'],
	    options: {
	      debounceDelay: 250,
	    },
	},
	css:{

		files: './src/sass/**/*.scss',
	    tasks: ['clean:css','sass', 'postcss'],
	    options: {
	      debounceDelay: 250,
	    },
	}
}

