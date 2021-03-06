'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var foreach = require('gulp-foreach');
var msbuild = require('gulp-msbuild');
var debug = require('gulp-debug');
var config = require('../gulp-config.js')();
var xml2js = require('xml2js');
var fs = require('fs');
var Utils = {};

Utils.CleanConfigs = function (location, layerName) {
    // Update to Include any custom configs
    var filesToDelete = [
        location.concat('/', layerName, '/') + "*"
    ];

    console.log("Removing " + filesToDelete + " Dlls");

    return gulp.src(filesToDelete, { read: false})
        .pipe(clean({force: true }));
}

Utils.CleanProjectFiles = function (layerName) {

    // Clean Project Files

}

Utils.GetSiteUrl = function () {
    var publishFile = Utils.GetPublishSettingsFile();

    try {
        var configuration = Utils.GetConfiguration(publishFile);

        return configuration.Project.PropertyGroup[0].publishUrl[0];
    } catch (error) {
        error.message = "Could not get the site Url."
        throw(error);
    }
}

Utils.GetPublishSettingsFile = function() {
    if (fs.exists("./publishsettingsdebug.targets.user"))
        return "./publishsettingsdebug.targets.user";
        
    return "./publishsettingsdebug.targets";
}

Utils.GetConfiguration = function(path) {
    var data = fs.readFileSync(path);

    var parser = new xml2js.Parser();
    var content;

    parser.parseString(data, function(err, result) {
        if (err !== null) throw err;
            content = result;
    });

    return content;
}

Utils.PublishProjects = function (location, dest) {
    dest = dest || config.websiteRoot;
    var targets = ["Build"];
    const projLocation = `${location}/**/code/*.csproj`;

    console.log(`publish to ${dest} folder`);
    console.log(`files: ${projLocation}`);
    
    return gulp.src([projLocation])
        .pipe(foreach(function (stream, file) {
            return stream
                .pipe(debug({ title: "Building project:"}))
                .pipe(msbuild({
                    targets: targets,
                    configuration: config.buildConfiguration,
                    logCommand: false,
                    verbosity: "minimal",
                    stdout: true,
                    errorOnFail: true,
                    maxcpucount: 0,
                    toolsVersion: config.MSBuildToolsVersion,
                    properties: {
                        DeployOnBuild: 'true',
                        DeployDefaultTarget: 'WebPublish',
                        WebPublishMethod: 'FileSystem',
                        DeleteExistingFiles: 'false',
                        publishUrl: dest,
                        _FindDependencies: 'false'
                    }
                }));
        }));
};

module.exports = Utils;