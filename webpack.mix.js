let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
  processCssUrls: false,
});

mix.sass('resources/assets/sass/website.scss', 'public/css')
	.js('resources/assets/js/app.js', 'public/js')

  
	.combine([
        './public/libs/jquery.parallax-scroll/js/jquery-2.1.3.min.js',
        './public/libs/jquery.parallax-scroll/js/jquery.parallax-scroll.js',
        './resources/assets/js/scripts/skrollr.min.js',
		'./resources/assets/js/scripts/zepto.min.js',
		'./resources/assets/js/scripts/imagesloaded.pkgd.min.js',
		'./resources/assets/js/scripts/jpreloader.js',
		'./resources/assets/js/scripts/jquery.nicescroll.min.js',
		'./resources/assets/js/scripts/jquery.easing.1.3.js',
		'./resources/assets/js/scripts/demo.js'
	],'public/js/complements.min.js');