module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            domop : {
                src: ['src/js/vinci.js'],
                dest: 'dest/js/vinci.js'
            },
            css : {
                src: ['src/css/base.css', 'src/css/skeleton.css', 'src/css/vinci.css', 'src/css/animate.css', 'src/css/layout.css'],
                dest: 'dest/css/vinci.css'
            }
        },
        uglify : {
            build : {
                src : 'dest/js/vinci.js',
                dest : 'dest/js/vinci.min.js'
            }
        },
        cssmin: {
            css: {
                src: 'dest/css/vinci.css',
                dest: 'dest/css/vinci.min.css'
            }
        },
        copy: {
            html: {
                src: 'src/index.html',
                dest: 'dest/index.html'
            },
            img: {
                expand: true,
                cwd: 'src/img',
                src: '**',
                dest: 'dest/img/'
            }
        },
    });


    grunt.loadNpmTasks('grunt-css');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'copy']);
};
