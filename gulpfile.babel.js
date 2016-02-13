import elixir from 'laravel-elixir';
import gulp from 'gulp';

elixir.config.assetsPath = 'src/';
elixir.config.publicPath = 'build/';

elixir((mix) => {
    mix.browserify(
        "App.js",
        "build/js/app.js",
        "src/js"
    );

    mix.sass(
        ["app.scss"],
        "build/css/app.css"
    );
});
