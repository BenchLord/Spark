var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
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

// TODO: causes crashses... :(
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     proxy: 'localhost:3000'
//   });
// });

gulp.task('default', ['start']);
