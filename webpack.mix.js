let mix = require('laravel-mix');

mix.setPublicPath('./\/');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

function mixScripts(){

    mix.js('js/main.js', 'dist');

}


function mixStyles() {
    mix.styles([
        './node_modules/vuesax/dist/vuesax.css',
    ], 'dist/vendor.css');
}


mixStyles();

mixScripts();