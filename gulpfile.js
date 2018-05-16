var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    rename = require('gulp-rename'),
    gulpMinifyCssNames = require('gulp-minify-css-names'),
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

var path = {
    app : {
        css: "app/css/",
    },
    dist: {
        css: "css/",
    }
}

gulp.task('css', function(){
    gulp.src([
        'bootstrap-4.1.1/dist/css/bootstrap.min.css',
        'fonts/font-awesome-4.7.0/css/font-awesome.min.css',
        'css/reset.css',
        'css/style.css',
        'css/mobile-575.css',
        'css/mobile-767.css',
        'css/mobile-991.css'
    ])
        // .pipe(plumber())
        .pipe(autoprefixer({
            browsers: [
                'last 2 version',
                'Chrome >= 20',
                'Firefox >= 20',
                'Opera >= 12',
                'Android 2.3',
                'Android >= 4',
                'iOS >= 6',
                'Safari >= 6',
                'Explorer >= 8'
            ],
            cascade: false
        }))
        .pipe(concatCss("master.css"))
        .pipe(gulpMinifyCssNames())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(path.dist.css))
        // .pipe(browserSync.stream({once: true}));
});

gulp.task('default', ['browser-sync']);
