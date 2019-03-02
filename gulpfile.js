var gulp = require("gulp");
var path = require("path");
var msbuild = require("gulp-msbuild");
var debug = require("gulp-debug");
var nugetRestore = require("gulp-nuget-restore");
var fs = require("fs");
var gulpUtils = require("gulp-util");
var exec = require("child_process").exec;
var merge = require("merge-stream");
var runSequence = require("run-sequence");
var spawn = require('child_process').spawn;
var Twitter = require('twitter-node-client').Twitter;

var $ = require('gulp-load-plugins')({ lazy: true });
var utils = require('./build/utils.js');
var unicorn = require('./build/unicorn.js');

var config;
if (fs.existsSync("./gulp-config.user.js")) {
    config = require("./gulp-config.user.js")();
} else {
    config = require("./gulp-config.js")();
}

var twitterConfig = {
    "consumerKey": "nwYnKBCMF82RMZusKiQtWHbjY",
    "consumerSecret": "0Zx7ZYpppsMI9oHFnMtvsL3DfHTxVtYi294wV5I4jzY5glnr9X",
    "accessToken": "38680590-V9USM3bbvhXKVZK8dPgGe7oMO5PagjgZk83yBT5DO",
    "accessTokenSecret": "xGTLDAV5zblZZlRBlQnB1cApIAo3FrVPBWKYtr2A5OHxG",
    "callBackUrl": "http://localhost:3000/"
}

module.exports.config = config;


// Default Task
gulp.task('default', ['__task:PublishProjects', '__task:DeployUnicorn'], function () { });

///////////////////////////////////////
//    Build the Solution
///////////////////////////////////////
gulp.task("__task:build-solution", function () {
    var targets = ["Build"];

    return gulp.src("./" + config.solutionName + ".sln")
        .pipe(debug({ title: "NuGet restore:" }))
        .pipe(nugetRestore())
        .pipe(debug({ title: "Building solution:" }))
        .pipe(msbuild({
            targets: targets,
            configuration: config.buildConfiguration,
            logCommand: false,
            verbosity: "minimal",
            stdout: true,
            errorOnFail: true,
            maxcpucount: 0,
            toolsVersion: config.MSBuildToolsVersion
        }));
});

gulp.task('test', function (callback) {
    var twitter = new Twitter(twitterConfig);

    twitter.getSearch({'q':'#schackathon','count': 10});


    
    
});

///////////////////////////////////////
//    Publish All Projects
///////////////////////////////////////
gulp.task("__task:PublishProjects", function (callback) {
    return runSequence(
        "__task:build-solution",
        "publish-foundation",
        "publish-feature",
        "publish-project", callback);
});

///////////////////////////////////////
//    Deploy Unicorn Files
///////////////////////////////////////
gulp.task("__task:DeployUnicorn", function (callback) {
    var options = {};

    options.siteHostName = utils.GetSiteUrl();
    options.authenticationConfigFile = config.websiteRoot + "/App_Config/Include/Unicorn/Unicorn.SharedSecret.config";

    unicorn(function() { return callback }, options);
});

gulp.task("publish-foundation", function () {
    return utils.CleanProjectFiles("Foundation"),
        utils.PublishProjects("./src/Foundation");
});

gulp.task("publish-feature", function () {
    return utils.CleanProjectFiles("Feature"),
        utils.PublishProjects("./src/Feature");
});

gulp.task("publish-project", function () {
    return utils.CleanProjectFiles("Project"),
        utils.PublishProjects("./src/Project");
});