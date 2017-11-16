const mix = require('laravel-mix').mix;

mix.sass(
    './source/scss/style.scss',
    './public/assets/css/style.css',
);

// https://laracasts.com/discuss/channels/elixir/laravel-mix-issue-popperjs-dependency-cannot-be-found-by-boostrap-4-beta
mix.autoload({
  jquery: ['$', 'window.jQuery', 'jQuery'],
  'popper.js/dist/umd/popper.js': ['Popper'],
});

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
