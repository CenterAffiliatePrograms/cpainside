var gulp = require('gulp'),
	nib = require('nib'),
	stylus = require('gulp-stylus'),
	autoprefixer = require('gulp-autoprefixer'),
	notify = require("gulp-notify"),
	plumber = require('gulp-plumber'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssmin = require('gulp-cssmin');

gulp.task('stylus', function() {
	return gulp.src(['./src/stylus/*.styl'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(stylus({
			use: nib(),
			compress: false,
		}))
		.pipe(autoprefixer({
			browsers: ['last 15 versions'],
		}))
		.pipe(cssmin())
		.pipe(gulp.dest('./bundle/css'))
		.pipe(notify('Stylus SUCCESS'));
});

gulp.task('js', function() {
	return gulp.src(['./src/js/functions.js', './src/js/app.js'])
		.pipe(plumber({
			errorHandler: notify.onError()
		}))
		.pipe(concat('app.min.js'))
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(uglify({
			mangle: false,
		}))
		.pipe(gulp.dest('./bundle/js'))
		.pipe(notify('JS SUCCESS'));
});

gulp.task('watch', function() {
	gulp.watch(['./src/stylus/*.styl', './src/stylus/inc/*.styl'], ['stylus']);
	gulp.watch(['./src/js/functions.js', './src/js/app.js'], ['js']);
});