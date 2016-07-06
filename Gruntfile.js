module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['javascript/scripts.js']
        },
        // csslint: {
        //     all: ['css/reset.css', 'css/style.css']
        // },
        // cssmin: {
        //     dist: {
        //         files: {
        //             'css/style.min.css': ['css/reset.css', 'css/style.css']
        //         }
        //     }
        // },
        // autoprefixer: {
        //     all: {
        //         src: 'css/style.min.css'
        //     }
        // }
        less: {
            dist: {
                files: {
                    'css/style.min.css': ['less/style.less', 'less/mixins.less']
                }
            },
            options: {
                compress: true
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images/src/',
                    src: ['**/*.{jpg,gif,png}'],
                    dest: 'images/dist/'
                }]
            }
        },
        watch: {
            less: {
                files: ['less/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            js: {
                files: ['javascript/*.js'],
                tasks: ['jshint']
            }
        },
        concat: {
            dist: {
                files: {
                    'javascript/all.js': ['javascript/scripts.js', 'javascript/plugins.js']
                }
            }
        }
    });

    // grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', [
        'jshint', // verifica os erros de digitação no javascript
        // 'csslint', // verifica os erros de digitação no css
        // 'cssmin', // minifica os arquivos
        // 'autoprefixer' // prefixa as classes CSS para vários browsers
        'less',
        'imagemin',
        'concat' // concatena os arquivos js
    ]);
};
