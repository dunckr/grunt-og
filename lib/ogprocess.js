'use strict';

var OGProcess = function(options) {
    this.data = options.data;
    this.output = '';
    this.getProperties();
};

OGProcess.prototype.getProperties = function() {

    // loop through all lines
    // if == <!-- og:
     //add to block until -->
    this.data.forEach(function(line) {
        console.log(line);
    });
    //console.log(this.data);
    this.output = 'here112312312';
};

module.exports = OGProcess;
