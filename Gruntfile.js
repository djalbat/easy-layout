var fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: "inline",
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: './es6/',
          src: ['**/*.js'],
          dest: './lib/'
        }]
      }
    },
    browserify: {
      dist: {
        options: {
          browserifyOptions: {
            debug: true,
            standalone: 'easyUILayout'
          }
        },
        src: ['./index.js'],
        dest: './dist/easyui-layout.js'
      }
    },
    bumpup: {
      file: 'package.json'
    },
    devUpdate: {
      main: {
        options: {
          updateType: 'force',
          reportUpdated: true,
          semver: true,
          packages: {
            dependencies: true,
            devDependencies: false
          }
        }
      }
    },
    copy: {
      main: {
        files: [
          {src: './node_modules/easyui/dist/easyui.js', dest: './docs/lib/easyui.js'}
        ]
      }
    },
    watch: {
      files: [
        './es6/**/*.js',
        './index.js'
      ],
      tasks: ['babel', 'browserify']
    }
  });

  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-dev-update');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('b', ['devUpdate', 'copy', 'babel', 'browserify']);
  grunt.registerTask('w', ['devUpdate', 'copy', 'babel', 'browserify', 'watch']);
  grunt.registerTask('v', function() {
    var type = grunt.option('type') || 'patch';

    grunt.task.run('bumpup:' + type);
  });
};
