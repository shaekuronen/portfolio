
/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jshint: {
      all: [
        'Gruntfile.js',
        'dev/js/site/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },

    responsive_images: {
      resize_images: {
        options: {
          quality: 100,
          sizes: [
            {
              width: 360,
              height: 202
            },
            {
              width: 540,
              height: 304
            },
            {
              width: 720,
              height: 405
            }
          ]
        },
        files: [{
          expand: true,
          src: ['source/images/projects/toyota_rav4_ev/900x506/*.jpg'],
          custom_dest: 'source/images/projects/toyota_rav4_ev/{%= width %}x{%= height %}/'
        }]
      }
    },

  });

  // these plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-responsive-images');

  // RESIZE IMAGES
  grunt.registerTask('resizeImages', [
    'responsive_images'
  ]);
  // END RESIZE IMAGES

};
