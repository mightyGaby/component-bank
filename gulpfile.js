// Include gulp
var gulp = require('gulp');

// Gulp Plugins
var sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	cleanCSS = require('gulp-clean-css'),
    jade = require('gulp-jade');

// Compile Sass
gulp.task('sass', function() {
    return gulp.src(['scss/**/*.scss', 'scss/*.scss', '!scss/variables.scss', '!scss/mixins.scss'])
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Minify CSS
gulp.task('minify-css', function() {
	return gulp.src(['css/*.css', 'css/modules/*.css'])
  		.pipe(cleanCSS())
  		.pipe(rename({
        	suffix: '.min'
    	}))
    	.pipe(gulp.dest('prod/css/min/'));
});

// Jade templates
gulp.task('jade', function() {
    return gulp.src(['templates/*.jade', 'templates/**/*.jade'])
        .pipe(jade())
        .pipe(gulp.dest('prod'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['scss/**/*.scss', 'scss/*.scss', '!scss/variables.scss', '!scss/mixins.scss', 'templates/*.jade', 'templates/**/*.jade'], ['sass', 'jade']);
    gulp.watch('css/*.css', ['minify-css']);
});

// Default Task
gulp.task('dev', ['sass']);