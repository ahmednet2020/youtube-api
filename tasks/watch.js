module.exports = {
    js: {
	    files: './src/**/*.js',
	    tasks: ['clean:js', 'browserify'],
	    options: {
	      debounceDelay: 250,
	    },
	},
	worker:
	{
		files: './worker/cashe.js',
	    tasks: ['babel'],
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

