'use strict';

var OGProcess = function(options) {
    this.data = options.data;
    this.output = '';
    this.process();
};

OGProcess.prototype.process = function() {
    var lines = this.data.split('\n');
    var parsed = this.parse(lines);
    this.output = this.format(parsed);
};

OGProcess.prototype.format = function(properties) {
    var objects = JSON.parse('{' + properties.join(' ') + '}');
    var temp = [];

    for (var key in objects) {
        switch (key) {
            case 'title':
                temp.push('<meta property="og:title" content="' + objects[key] +  '"/>');
                temp.push('<meta itemprop="name" content="' + objects[key] + '">');
                temp.push('<meta name="twitter:title" content="' + objects[key] + '">');
                break;
            case 'type':
                temp.push('<meta property="og:type" content="' + objects[key] +  '"/>');
                break;
            case 'url':
                temp.push('<meta property="og:url" content="' + objects[key] + '"/>');
                break;
            case 'image':
                temp.push('<meta property="og:image" content="' + objects[key] + '"/>');
                temp.push('<meta itemprop="image" content="' + objects[key] + '">');
                temp.push('<meta name="twitter:image:src" content="' + objects[key] + '">');
                break;
            case 'description':
                temp.push('<meta property="og:description" content="' + objects[key] + '"/>');
                temp.push('<meta itemprop="description" content="' + objects[key] + '"/>');
                temp.push('<meta name="twitter:description" content="' + objects[key] + '"/>');
                break;
        }
    }
   return temp.join(' ');
};

OGProcess.prototype.parse = function(lines) {
    var properties = [],
        insideBlock = false;

    lines.forEach(function(line) {
        if (line.match(/-->/)) {
            insideBlock = false;
            return properties;
        }
        if (insideBlock) {
            properties.push(line);
        }
        if (line.match(/<!-- og:/)) {
            insideBlock = true;
        }
    });
    return properties;
};

module.exports = OGProcess;
