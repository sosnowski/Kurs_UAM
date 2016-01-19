/*global require, __dirname*/
var gulp = require('gulp'),
    karmaServ = require('karma').Server;

gulp.task('test', function (done) {
    new karmaServ({
        configFile: __dirname + '/karma.config.js',
        singleRun: true
    }, done).start();
});
