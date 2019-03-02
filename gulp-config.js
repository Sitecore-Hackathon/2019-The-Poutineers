module.exports = function () {
    var sitecoreRoot = "C:\\inetpub\\wwwroot\\generic-91.sc";
    var config = {
        websiteRoot: sitecoreRoot,
        sitecoreLibraries: sitecoreRoot + "\\bin",
        solutionName: "Hackathon.ThePoutineers",
        licensePath: sitecoreRoot + "\\App_Data\\license.xml",
        runCleanBuilds: false,
        MSBuildToolsVersion: "auto",
        buildConfiguration: "Debug"
    };
    return config;
};