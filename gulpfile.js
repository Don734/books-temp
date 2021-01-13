const { src, dest, series } = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const jsmin = require('gulp-jsmin');
const imagemin = require('gulp-imagemin');

function html() {
    return src('./src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./dist'))
}

function css() {
    return src('./src/assets/css/*.css')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(dest('./dist/assets/css'))
}

function js() {
    return src('./src/assets/js/*.js')
        .pipe(jsmin())
        .pipe(dest('./dist/assets/js'))
}

function image() {
    return src('./src/assets/img/**/*')
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 75, progressive: true })
        ]))
        .pipe(dest('./dist/assets/img'))
}

function copyFont() {
    return src('./src/assets/css/fonts/**/*.*')
        .pipe(dest('./dist/assets/css/fonts/'))
}

exports.html = html;
exports.css = css;
exports.js = js;
exports.image = image;
exports.default = series(html, css, js, image, copyFont);