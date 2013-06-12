'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
      dist: {
        src: [
          'src/game.js',
          'src/main.js',
          'src/title_scene.js',
          'src/main_scene.js',
          'src/end_scene.js'
        ],
        dest: 'dist/main.js'
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['concat'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
};
