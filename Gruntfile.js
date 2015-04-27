'use strict';

module.exports = function (grunt) {
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-watch');


var pkg = grunt.file.readJSON("package.json");

require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: pkg,
		/*
			Clean the Www folder
		*/
		
		/*
		Watch file changes and re-build immedialty !
		*/
		watch: {
			scripts: {
			    files: ['*.css','*.js','*.html'],
			    tasks: ['default'],
			    options: {
			      spawn: false,
			      livereload: true
			    },
			}
		},
		/*
		Server local
		*/
		connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.',
                    hostname: '0.0.0.0',
                    keepalive: true
                }
            },
        },

       
	});

 

	grunt.registerTask('default', ['watch']);
    grunt.registerTask('server', [ 'default','connect:server']);
	//grunt.registerTask('start', [ 'build','watch']);

};