// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass'),
	rename = require("gulp-rename"),
	cleanCSS = require('gulp-clean-css');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(['scss/**/*.scss', 'scss/*.scss', '!scss/variables.scss', '!scss/mixins.scss'])
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

// Minify Our CSS
gulp.task('minify-css', function() {
	return gulp.src(['css/*.css', 'css/modules/*.css'])
  		.pipe(cleanCSS())
  		.pipe(rename({
        	suffix: '.min'
    	}))
    	.pipe(gulp.dest('css/min/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['scss/**/*.scss', 'scss/*.scss', '!scss/variables.scss', '!scss/mixins.scss'], ['sass']);
    gulp.watch('css/*.css', ['minify-css']);
});

// Default Task
gulp.task('dev', ['sass']);