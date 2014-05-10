'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        og: {
          files: ['test/tmp/sample.html']
        },
        mochacli: {
            all: ['test/*Test.js']
        },
        copy: {
            tests: {
                expand: true,
                cwd: 'test/fixtures/',
                src: '**',
                dest: 'test/tmp/'
            }
        },
        clean: {
            tests: ['test/tmp']
        }
    });
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.loadTasks('tasks');
    grunt.registerTask('default', ['test']);
    grunt.registerTask('test', ['clean', 'copy', 'og', 'mochacli']);
};
