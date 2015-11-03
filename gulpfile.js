var gulp    = require('gulp'),
    connect = require('gulp-connect');

gulp.task('connect-dev', function() {
    connect.server({
        root: __dirname,
        port: 1337,
        fallback: 'views/index.html'
    })
});

gulp.task('default', ['connect-dev']);