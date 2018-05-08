var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    plumber = require('gulp-plumber');

    // Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        notify: false
    });
   gulp.watch("index.html").on('change', browserSync.reload);
   gulp.watch("js/**/*.js").on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync']);