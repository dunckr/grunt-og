var path = require('path');
var grunt = require('grunt');
var expect = require('chai').expect;

grunt.task.init([]);
grunt.config.init({});

describe('og', function () {

  var file,
      lorem;

  beforeEach(function() {
    grunt.config.init();
    grunt.config('og', {
      html: 'spec/fixtures/index.html'
    });
    grunt.task.run('og');
    grunt.task.start();
    file = grunt.file.read(path.join(__dirname,'fixtures/sample.html'));
  });

  describe('title', function() {
      it('standard', function() {
        expect(file).to.contain('<meta property="og:title" content="Page Title"/>');
      });
      it('google', function() {
        expect(file).to.contain('<meta itemprop="name" content="Page Title">');
      });
      it('twitter', function() {
        expect(file).to.contain('<meta name="twitter:title" content="Page Title">');
      });
  });

  describe('type', function() {
      it('standard', function() {
        expect(file).to.contain('<meta property="og:type" content="Type of page"/>');
      });
  });

  describe('url', function() {
      it('standard', function() {
        expect(file).to.contain('<meta property="og:url" content="http://www.example.com"/>');
      });
  });

  describe('image', function() {
    it('standard', function() {
      expect(file).to.contain('<meta property="og:image" content="http://example.com/image.jpg"/>');
    });
    it('google', function() {
      expect(file).to.contain('<meta itemprop="image" content="http://example.com/image.jpg">');
    });
    it('twitter', function() {
      expect(file).to.contain('<meta name="twitter:image:src" content="http://example.com/image.jpg">');
    });
  });

  describe('description', function() {
    beforeEach(function() {
      lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, quaerat, harum, recusandae veritatis iste distinctio autem nulla fugiat culpa laudantium quis ullam ipsam rerum accusamus vel! Voluptatum quam libero beatae!';
    })
    it('standard', function() {
      expect(file).to.contain('<meta property="og:description" content="' + lorem + '"/>');
    });
    it('google', function() {
      expect(file).to.contain('<meta itemprop="description" content="' + lorem + '"/>');
    });
    it('twitter', function() {
      expect(file).to.contain('<meta name="twitter:description" content="' + lorem + '"/>');
    });
  });

});
