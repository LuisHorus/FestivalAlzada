const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require('gulp-plumber');

function css(done){

    src('src/SCSS/**/*.scss') //Identificar el archivo SASS
        .pipe(plumber())
        .pipe( sass() ) //compilarlo
        .pipe( dest("build/css") ); //almacenarlo en el disco duro

    done(); //callback que avisa a gulp cuando llegamos a final
}
function dev(done){
    watch("src/SCSS/**/*.scss", css);

    done();
}
exports.css = css;
exports.dev = dev;