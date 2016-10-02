/*!
 * by Henrique Arthur <hnrq.art@gmail.com>
 */

 var gulp = require('gulp');

 var gulpif         = require('gulp-if');
 var chmod          = require('gulp-chmod');
 var concat         = require('gulp-concat');
 var filter         = require('gulp-filter');
 var order          = require("gulp-order");
 var replace        = require('gulp-replace');
 var livereload     = require('gulp-livereload');
 var notify         = require("gulp-notify");
 var imagemin       = require('gulp-imagemin');
 var sass           = require('gulp-sass');
 var uglify         = require('gulp-uglify');
 var util           = require('gulp-util');
 var cssnano        = require('gulp-cssnano');
 var watch          = require('gulp-watch');
 var changed        = require('gulp-changed');
 var sprity         = require('sprity');
 var pngquant       = require('imagemin-pngquant');
 var mainBowerFiles = require('main-bower-files');
 var runSequence    = require('run-sequence');
 var argv           = require('yargs').argv;
 var del            = require('del');

 var paths = {
 	src: {
 		fonts: 'src/fonts/**/*.{eot,ttf,woff,woff2}',
 		images: 'src/images/**/*.{png,jpg,jpeg,gif,bmp}',
 		scripts: 'src/js/**/*.js',
 		pluginsCSS: ['src/plugins-css/**/*.css', 'semantic/dist/semantic.css'],
 		pluginsJS: ['src/plugins-js/**/*.js', 'semantic/dist/semantic.js'],
 		pluginsIMG: 'src/plugins-images/**/*.{png,jpg,jpeg,gif,bmp}',
 		scss: 'src/scss/**/*.scss',
 		sprites: 'src/sprites/**/*.png'
 	},
 	srcFolder: {
 		fonts: 'src/fonts',
 		images: 'src/images',
 		scripts: 'src/js',
 		pluginsCSS: 'src/plugins-css',
 		pluginsJS: 'src/plugins-js',
 		pluginsIMG: 'src/plugins-images',
 		scss: 'src/scss',
 		sprites: 'src/sprites'
 	},
 	dist: {
 		fonts: 'assets/fonts',
 		images: 'assets/images',
 		scripts: 'assets/js',
 		css: 'assets/css'
 	}
 };

 /* Clean */
 gulp.task('clean', function() {
 	return del([paths.dist.fonts, paths.dist.images, paths.dist.scripts, paths.dist.css, paths.srcFolder.scss + '/_sprites.scss']);
 });

 /* Bower plugins and plugins CSS/JS/Images */

 /* Overrides Bower */
 var mainBowerFiles_options = {
 	overrides: {
 		'fancybox': {
 			main: [
 			'source/jquery.fancybox.js',
 			'source/jquery.fancybox.css',
 			'source/*.png',
 			'source/*.gif'
 			]
 		},
 		'tipsy': {
 			main: [
 			'src/stylesheets/tipsy.css',
 			'src/javascripts/jquery.tipsy.js',
 			'src/images/tipsy.gif'
 			]
 		},
 		'jquery-slimscroll': {
 			main: [
 			'jquery.slimscroll.js'
 			]
 		},
 		'jQuery.Marquee': {
 			main: [
 			'jquery.marquee.js'
 			]
 		},
 		'jquery-snowfall': {
 			main: [
 			'src/snowfall.jquery.js'
 			]
 		},
 		'truncate': {
 			main: [
 			'dist/truncate.js'
 			]
 		},
 		'materialize': {
 			main: [
 			'bin/materialize.css',
 			'bin/materialize.js' ,
 			'fonts/roboto/Roboto-Bold.eot',
 			'fonts/roboto/Roboto-Bold.ttf',
 			'fonts/roboto/Roboto-Bold.woff',
 			'fonts/roboto/Roboto-Bold.woff2',
 			'fonts/roboto/Roboto-Light.eot',
 			'fonts/roboto/Roboto-Light.ttf',
 			'fonts/roboto/Roboto-Light.woff',
 			'fonts/roboto/Roboto-Light.woff2',
 			'fonts/roboto/Roboto-Medium.eot',
 			'fonts/roboto/Roboto-Medium.ttf',
 			'fonts/roboto/Roboto-Medium.woff',
 			'fonts/roboto/Roboto-Medium.woff2',
 			'fonts/roboto/Roboto-Regular.eot',
 			'fonts/roboto/Roboto-Regular.ttf',
 			'fonts/roboto/Roboto-Regular.woff',
 			'fonts/roboto/Roboto-Regular.woff2',
 			'fonts/roboto/Roboto-Thin.eot',
 			'fonts/roboto/Roboto-Thin.ttf',
 			'fonts/roboto/Roboto-Thin.woff',
 			'fonts/roboto/Roboto-Thin.woff2'
 			]
 		}
 	}
 };

 gulp.task('build:pluginsCSS', function() {
 	var filterCSS = filter('**/*.css');

 	return gulp.src(mainBowerFiles(mainBowerFiles_options).concat(paths.src.pluginsCSS))
 	.pipe(filterCSS)
 	.pipe(concat('vendor.css'))
 	.pipe(replace('url(\'blank.gif\')', 'url(\'../images/blank.gif\')'))
 	.pipe(replace('url(\'fancybox_sprite.png\')', 'url(\'../images/fancybox_sprite.png\')'))
 	.pipe(replace('url(\'fancybox_loading.gif\')', 'url(\'../images/fancybox_loading.gif\')'))
 	.pipe(replace('url(\'fancybox_overlay.png\')', 'url(\'../images/fancybox_overlay.png\')'))
 	.pipe(replace('url(\'fancybox_sprite@2x.png\')', 'url(\'../images/fancybox_sprite@2x.png\')'))
 	.pipe(replace('url(\'fancybox_loading@2x.gif\')', 'url(\'../images/fancybox_loading@2x.gif\')'))
 	.pipe(replace('themes/default/assets/', '../../semantic/dist/themes/default/assets/'))
 	.pipe(chmod(644))
 	.pipe(gulpif(argv.production, cssnano({removeAllButFirst: true, zindex: false})))
 	.pipe(gulp.dest(paths.dist.css))
 	.pipe(livereload())
 	.pipe(notify({ title: 'Gulp', message: "build:pluginsCSS finished" }));
 });

 gulp.task('build:pluginsJS', function() {
 	var filterJS = filter('**/*.js');

 	return gulp.src(mainBowerFiles(mainBowerFiles_options).concat(paths.src.pluginsJS))
 	.pipe(filterJS)
 	.pipe(order(['jquery.js', '*']))
 	.pipe(concat('vendor.js'))
 	.pipe(chmod(644))
 	.pipe(gulpif(argv.production, uglify({ preserveComments: 'some' }).on('error', util.log)))
 	.pipe(gulp.dest(paths.dist.scripts))
 	.pipe(livereload())
 	.pipe(notify({ title: 'Gulp', message: "build:pluginsJS finished", onLast: true }));
 });

 gulp.task('build:pluginsIMG', function() {
 	var filterIMG = filter('**/*.{png,jpg,jpeg,gif,bmp}');

 	return gulp.src(mainBowerFiles(mainBowerFiles_options).concat(paths.src.pluginsIMG))
 	.pipe(filterIMG)
 	.pipe(gulpif(argv.production, imagemin({progressive: true, svgoPlugins: [{removeViewBox: false}], use: [pngquant()] })))
 	.pipe(chmod(644))
 	.pipe(gulp.dest(paths.dist.images))
 	.pipe(livereload())
 	.pipe(notify({ title: 'Gulp', message: "build:pluginsIMG finished", onLast: true }));
 });

 /* SCSS */
 gulp.task('build:scss', function() {
 	return gulp.src(paths.src.scss)
 	.pipe(gulpif(argv.production, sass({outputStyle: 'compressed'}).on('error', sass.logError), sass({outputStyle: 'expanded'}).on('error', sass.logError)))
 	.pipe(gulp.dest(paths.dist.css))
 	.pipe(livereload())
 	.pipe(notify({ title: 'Gulp', message: "build:scss finished", onLast: true }));
 });

 /* Javascript */
 gulp.task('build:js', function() {
 	return gulp.src(paths.src.scripts)
 	.pipe(changed(paths.dist.scripts))
 	.pipe(chmod(644))
 	.pipe(gulpif(argv.production, uglify({ preserveComments: 'some' }).on('error', util.log)))
 	.pipe(gulp.dest(paths.dist.scripts))
 	.pipe(livereload())
 	.pipe(notify({ title: 'Gulp', message: "build:js finished", onLast: true }));
 });

 /* Fonts */
 gulp.task('build:fonts', function() {
 	var filterFonts = filter('**/*.{eot,ttf,woff,woff2}', { restore: true });
 	var files = mainBowerFiles(mainBowerFiles_options);
 	files.push(paths.src.fonts);

 	return gulp.src(files)
 	.pipe(filterFonts)
 	.pipe(chmod(644))
 	.pipe(gulp.dest(paths.dist.fonts))
 	.pipe(livereload())
 	.pipe(notify({ title: 'Gulp', message: "build:fonts finished", onLast: true }));
 });

 /* Sprites */
 gulp.task('build:sprites', function(cb) {
 	return sprity.src({
 		out: paths.dist.images,
 		src: paths.src.sprites,
 		style: '_sprites.scss',
 		processor: 'sass',
 		split: true
 	}).on('error', function (err) {
 		console.log(err.toString());
 		cb();
 	})
 	.pipe(gulpif('*.png', gulp.dest(paths.dist.images), gulp.dest(paths.srcFolder.scss)))
 	.pipe(notify({ title: 'Gulp', message: "build:sprites finished", onLast: true }));
 });

 /* Images */
 gulp.task('build:images', function() {
 	return gulp.src(paths.src.images)
 	.pipe(changed(paths.dist.images))
 	.pipe(gulpif(argv.production, imagemin({progressive: true, svgoPlugins: [{removeViewBox: false}], use: [pngquant()] })))
 	.pipe(chmod(644))
 	.pipe(gulp.dest(paths.dist.images))
 	.pipe(livereload())
 	.pipe(notify({ title: 'Gulp', message: "build:images finished", onLast: true }));
 });

 /* Watch */
 gulp.task('watch', function(cb) {
 	if(argv.production) {
 		cb();
 	} else {
 		watch(paths.src.scripts, function() {
 			gulp.start('build:js');
 		});

 		watch(paths.src.scss, function() {
 			gulp.start('build:scss');
 		});

 		watch(paths.src.images, function() {
 			gulp.start('build:images');
 		});

 		watch(paths.src.sprites, function() {
 			gulp.start('build:sprites');
 		});

 		watch(paths.src.fonts, function() {
 			gulp.start('build:fonts');
 		});

 		livereload.listen();
 	}
 });

 gulp.task('default', function(callback) {
 	runSequence(
 		'clean',
 		['build:sprites', 'build:images'],
 		['build:pluginsCSS', 'build:pluginsJS', 'build:pluginsIMG', 'build:scss', 'build:js', 'build:fonts'],
 		'watch',
 		callback
 		);
 });