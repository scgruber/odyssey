module.exports = function (grunt)
{
  // Project configuration.
  grunt.initConfig({
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 7997,
          base: 'build'
        }
      }
    },

    watch: {
      jsx: {
        files: ['source/javascript/**/*.jsx', 'source/javascript/**/*.js'],
        tasks: ['browserify']
      },
      html: {
        files: ['source/index.html'],
        tasks: ['copy:index']
      }
    },

    browserify: {
      build: {
        files: {
          'build/main.js': ['source/javascript/main.jsx']
        },
        options: {
          transform: ['reactify']
        }
      }
    },

    copy: {
      index: {
        nonull: true,
        src: 'source/index.html',
        dest: 'build/index.html'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['browserify', 'copy']);
  grunt.registerTask('default', ['connect', 'build', 'watch']);
};
