module.exports = function(grunt) {
  grunt.initConfig({
    ngtemplates:  {
      app:        {
        src:      '**/*.html',
        dest:     'libs/templates.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-templates');
};
