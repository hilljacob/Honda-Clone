var gulp = require('gulp');
var concat = require("gulp-concat");
var annotate = require("gulp-ng-annotate");
var scss = require("gulp-sass");
var nodemon = require('gulp-nodemon');

var paths = {
    jsSource: ['public/app/**/*.js'],
    scssSource: ['public/app/**/*.scss'],
    server: ['server/index.js']
};

gulp.task('serve', function() {
    nodemon({
        'script': paths.server
    });
});

gulp.task('scss', function() {
    gulp.src(paths.scssSource)
        .pipe(scss())
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('js', function() {
    gulp.src(paths.jsSource)
        .pipe(annotate())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function() {
    gulp.watch(paths.jsSource, ['js']);
    gulp.watch(paths.scssSource, ['scss']);
});

gulp.task('default', ['js', 'scss', 'watch', 'serve']);
