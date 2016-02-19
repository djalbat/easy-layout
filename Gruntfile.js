module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      options: {
        browserifyOptions: {
          debug: true,
          standalone: 'easyui-layout'
        }
      },
      build: {
        src: './index.js',
        dest: 'dist/easyui-layout.js'
      }
    },
    watch: {
      files: './lib/*.js',
      tasks: 'browserify'
    },
    shell: {
      git: {
        command: [
          'git add . --all',
          'git commit -m "' + grunt.option('commit_message') + '"',
          'git push'
        ].join('&&')
      },
      npm: {
        command: [
          'npm install ../EasyUI'
        ].join('&&')
      }
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);
  grunt.registerTask('git', ['shell:npm', 'browserify', 'shell:git']);
};
