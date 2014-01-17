module.exports = function (grunt) {
    grunt.initConfig(
        {
            copy: {
                main: {
                    files: [
                        {
                            expand: true,
                            src: [
                                'bower_components/angular/angular.js'
                            ],
                            flatten: true,
                            dest: 'src/lib'
                        }
                    ]
                }
            }
        });


    // Load tasks so we can use them
    grunt.loadNpmTasks('grunt-contrib-copy');

};
