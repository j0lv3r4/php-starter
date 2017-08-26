const mix = require('laravel-mix').mix;

mix.sass(
    './source/scss/style.scss',
    './public/assets/css/style.css',
);

mix.js(
    './source/js/scripts.js',
    './public/assets/js/scripts.js',
);

mix.browserSync({
    proxy: {
        target: 'localhost:4000',
    },
    files: [
      './public/assets/css/*.css',
      './public/assets/js/*.js',
      './public/**/*.php',
    ],
    logLevel: 'debug',
});
