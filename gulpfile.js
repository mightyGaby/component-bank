// Include gulp
var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	 cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    jade = require('gulp-jade');


gulp.task('copyfiles', function() {
    gulp.src('dev/img/**/*.{png,jpg,jpeg,svg}')
    .pipe(gulp.dest('prod/img'));
});

// Compile Sass
gulp.task('sass', function() {
    return gulp.src(['dev/scss/**/*.scss', 'dev/scss/*.scss', '!dev/scss/variables.scss', '!dev/scss/mixins.scss'])
        .pipe(sass())
        .pipe(gulp.dest('dev/css'));
});

// Minify CSS
gulp.task('minify-css', function() {
	return gulp.src(['dev/css/*.css', 'dev/css/modules/*.css'])
	.pipe(cleanCSS())
	.pipe(rename({
	   suffix: '.min'
	}))
	.pipe(gulp.dest('prod/css/min/'));
});

// Minify JS
gulp.task('compress', function (cb) {
    pump([
        gulp.src('dev/js/*.js'),
        uglify(),
        gulp.dest('prod/js/min/')
    ],
    cb
    );
});

// Jade templates
gulp.task('jade', function() {
    return gulp.src(['dev/templates/*.jade', 'dev/templates/**/*.jade'])
    .pipe(jade())
    .pipe(gulp.dest('prod'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['dev/scss/**/*.scss', 'dev/scss/*.scss', 'dev/!scss/variables.scss', 'dev/!scss/mixins.scss'], ['sass']);
    gulp.watch('dev/css/*.css', ['minify-css']);
    gulp.watch('dev/js/*.js', ['compress']);
    gulp.watch(['dev/templates/*.jade', 'dev/templates/**/*.jade'], ['jade']);
    gulp.watch('dev/img/**/*.{png,jpg,jpeg,svg}', ['copyfiles']);
});

// Default Task
gulp.task('dev', ['sass']);
