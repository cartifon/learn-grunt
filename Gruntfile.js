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
        concat: {
            dist: {
                files: {
                    'javascript/all.js': ['javascript/scripts.js', 'javascript/plugins.js']
                }
            }
        }
    });

    // grunt.loadNpmTasks('grunt-autoprefixer');
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
        'concat' // concatena os arquivos js
    ]);
};
