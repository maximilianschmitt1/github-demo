'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('copy-html', function() {
	return gulp
		.src('app/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('copy-css', function() {
	return gulp
		.src('app/*.css')
		.pipe(gulp.dest('dist'));
});

gulp.task('copy-images', function() {
	return gulp
		.src('app/images/*')
		.pipe(gulp.dest('dist/images'));
});

gulp.task('browserify', function() {
	return browserify('./app/scripts/main')
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['copy-html', 'copy-images', 'copy-css', 'browserify']);