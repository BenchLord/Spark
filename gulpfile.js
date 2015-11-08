var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  less = require('gulp-less'),
  path = require('path'),
  browserSync = require('browser-sync').create();

gulp.task('start', function() {
  nodemon({
    script: 'app/server.js',
    ext: 'js html',
    env: {
      'NODE_ENV': 'development'
    }
  });
});

gulp.task('less', function() {
  return gulp.src('app/public/styles/**/*.less')
    .pipe(less({
      // paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('app/public/styles/build'));
});

// TODO: causes crashses... :(
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     proxy: 'localhost:3000'
//   });
// });

gulp.task('default', ['start', 'less']);
