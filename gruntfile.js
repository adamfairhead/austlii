module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {   
      dist: {
        src: [
          'js/libs/jquery.min.js',
          'js/libs/jquery.form-validator.min.js',
          'js/libs/jquery.ba-throttle-debounce.js',
          'js/libs/security.js',
          'js/layout/*.js'
        ],
        dest: 'js/production.js',
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/production.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    watch: {
      scripts: {
        files: ['js/layout/*.js'],
        tasks: ['default'],
        options: {
          atBegin: true,
          spawn: false,
        },
      },
    },

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['concat', 'uglify']);
};
