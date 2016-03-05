var fs = require('fs');

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
    bumpup: {
      file: 'package.json'
    },
    shell: {
      git: {
        command: [
          'git add . --all',
          'git commit -m "' + grunt.option('git_commit_message') + '"',
          'git push'
        ].join('&&')
      },
      npm: {
        command: [
          'npm update easyui'
        ].join('&&')
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
        './lib/**/*.js',
        '.inherits.js',
        '.index.js'
      ],
      tasks: 'browserify'
    }
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', []);

  grunt.registerTask('update', function(packageDirectory) {
    var packageName = packageDirectory.toLowerCase(),
        packageVersion = getPackageVersion(packageDirectory);

    setDependenciesPackageVersion(packageName, packageVersion);
  });

  grunt.registerTask('u', ['update:EasyUI']);
  grunt.registerTask('b', ['update:EasyUI', 'shell:npm', 'copy', 'browserify']);
  grunt.registerTask('w', ['update:EasyUI', 'shell:npm', 'copy', 'browserify', 'watch']);
  grunt.registerTask('g', function() {
    var bumpup_type = grunt.option('bumpup_type') || 'patch';

    grunt.task.run('update:EasyUI');
    grunt.task.run('shell:npm');
    grunt.task.run('copy');
    grunt.task.run('browserify');
    grunt.task.run('bumpup:' + bumpup_type);
    grunt.task.run('shell:git')
  });

  function getPackageVersion(packageDirectory) {
    var packageFilePath = '../' + packageDirectory + '/package.json',
        packageJSON = JSON.parse(fs.readFileSync(packageFilePath, 'utf8')),
        packageVersionJSON = packageJSON["version"],
        packageVersion = packageVersionJSON;  ///

    return packageVersion;
  }

  function setDependenciesPackageVersion(packageName, packageVersion) {
    var packageJSONFileName = 'package.json',
        packageJSON = JSON.parse(fs.readFileSync(packageJSONFileName));

    packageJSON["dependencies"][packageName] = "^" + packageVersion;

    fs.writeFileSync(packageJSONFileName, JSON.stringify(packageJSON, '', '\t', 'utf8')); ///
  }
};
