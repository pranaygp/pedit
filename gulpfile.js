const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');

var babelOptions = {
	presets: ['es2015']
};

gulp.task('build', ['build-src', 'build-specs']);

gulp.task('build-src', function() {
	return gulp.src('./src/pedit.js')
		.pipe(babel(babelOptions))
		.pipe(gulp.dest('./dist'))
		.pipe(rename('pedit.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist'));
});

gulp.task('build-specs', function() {
	return gulp.src('./specs/peditSpecs.js')
		.pipe(babel(babelOptions))
		.pipe(gulp.dest('./dist/specs'))
		.pipe(rename('peditSpecs.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/specs'));
});
