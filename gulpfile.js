const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

//imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const cache =require('gulp-cache');
const avif = require('gulp-avif');


function css(done){

    src('src/SCSS/**/*.scss') //Identificar el archivo SASS
        .pipe(plumber())
        .pipe( sass() ) //compilarlo
        .pipe( dest("build/css") ); //almacenarlo en el disco duro

    done(); //callback que avisa a gulp cuando llegamos a final
}

function imagenes(done){
    const opciones={
        optimizationLevel:3

    }
    src('src/img/**/*.{png,jpg}')
    .pipe(cache (imagemin(opciones)))
    .pipe(dest('build/img'))
    done()
}


function versionWebp(done){

    const opciones={
        quality:50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function versionAvif(done){

    const opciones={
        quality:50
    };

    src('src/img/**/*.{png,jpg}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))
    done();
}

function javascript(done){
    src('src/js/**/*.js')
    .pipe(dest('build/js'));
    done()
}

function dev(done){
    watch("src/SCSS/**/*.scss", css);
    watch("src/SCSS/**/*.js", javascript);
    done();
}
exports.css = css;
exports,js = javascript;
exports.imagenes=imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif=versionAvif;
exports.dev = parallel(imagenes, versionWebp, versionAvif,javascript,dev);