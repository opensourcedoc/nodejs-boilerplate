const gulp = require('gulp');

const concat = require('gulp-concat');
const babel = require('gulp-babel');

const del = require('del');

const gulpif = require('gulp-if');
const isdev = require('isdev');
const uglify = require('gulp-uglify');

const srclist = require('./srclist');

gulp.task('clean', function () {
    return del('dist/**/*', { force: true });
});

gulp.task('build', function () {
    return gulp.src(srclist.list)
        .pipe(concat('app.js'))
        .pipe(babel())
        .pipe(gulpif(!isdev, uglify()))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('clean', 'build'));
