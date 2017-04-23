module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			compile: {
				files: {
					'css/index.css': 'css/index.less'
				}
			},
			yuicompress: {
				files: {
					'css/index.css': 'css/index.css'
				},
				options: {
					yuicompress: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['css/*.less'],
				tasks: ['less']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['less', 'watch']);
};