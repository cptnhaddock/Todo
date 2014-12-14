module.exports = function(grunt) {
	grunt.initConfig({

		jshint: {
			// define the files to lint
			files: ['Gruntfile.js', 'app/**/*.js'],

			// configure JSHint (documented at http://www.jshint.com/docs/)
			options: {
				ignores: ['bower_components/**/*.js', 'node_modules/**/*.js'],
				// more options here if you want to override JSHint defaults
				globals: {
					jquery: false,
					require: true,
					console: true,
					module: true
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
            express: {
                files:  [ 'app/**/*.js', 'app/**/*.html', 'app/**/*.css', 'app/**/*.less' ],
                tasks:  [ 'less:development', 'express:dev' ],
                options: {
                    spawn: false
                }
            }
		},

		less: {
            development: {
                options: {
                    paths: ["styles"]
                },
                files: {
                    "styles/css/style.css": "styles/less/style.less"
                }
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true,
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    "styles/css/style.css": "styles/less/style.less"
                }
            }
        },

		express: {
			options: {
				// Override defaults here
			},
			dev: {
				options: {
					script: 'server.js'
				}
			}
		},

		open : {
			dev: {
				path: 'http://localhost:3000/index.html'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('build', [
		'jshint',
        'less',
		'watch'
	]);

	grunt.registerTask('server', [
        'less:development',
		'express:dev',
		'open:dev',
		'watch'
	]);

	grunt.registerTask('default', [
		'jshint',
        'less',
	 	'watch'
	]);
};