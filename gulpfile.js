const { parallel, src, dest } = require('gulp');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');

function copyJs() {
    return src('./src/js/**/*.js')
        .pipe(concat('script.js'))        
        .pipe(dest('./dist/js'));
}

function copyCss(cb) {
    return src('./src/css/style.css')
        .pipe(concat('app.css'))
        .pipe(dest('./dist/css'))
}

function copyVendorCss(cb) {
    return src(['./src/css/normalize.css', 
                './src/css/sceleton.css',
                './src/css/dark.css'])
        .pipe(concat('vendor.css'))
        .pipe(dest('./dist/css'))
}

function copyHtml() {
  return  src('./src/index.html').pipe(dest('./dist'))
}
   


function minJs() {
    return src('./src/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(dest('./dist/js'));
}

function minCss() {
  return src('./src/css/style.css')
      .pipe(concat('app.css'))
      .pipe(cssnano())
      .pipe(dest('./dist/css'))
}

function minVendorCss() {
    return src(['./src/css/normalize.css', 
                './src/css/sceleton.css',
                './src/css/dark.css'])        
        .pipe(concat('vendor.css'))
        .pipe(cssnano())
        .pipe(dest('./dist/css'))
}

module.exports = {   
    build: parallel(copyHtml, copyJs, copyVendorCss, copyCss),
    minify: parallel(minJs, minCss, minVendorCss),
}
