'use strict';

module.exports = function(grunt) {
    grunt.registerMultiTask('og', 'add open graph metadata', function() {

        var OGProcess = require('../lib/ogprocess');

        this.files.forEach( function( file ) {
            file.src.forEach( function( src ) {
                if ( grunt.file.isFile( src ) ) {
                    var og = new OGProcess( { data: grunt.file.read( src ) } );
                    grunt.file.write( src, og.output );
                }
            });
        });
    });
};
