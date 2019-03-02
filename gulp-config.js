module.exports = function () {
    var sitecoreRoot = "c:\\inetpub\\wwwroot\\schackathon.sc";
    var config = {
        websiteRoot: sitecoreRoot,
        sitecoreLibraries: sitecoreRoot + "\\bin",
        solutionName: "Hackathon.ThePoutineers",
        licensePath: sitecoreRoot + "\\App_Data\\license.xml",
        runCleanBuilds: false,
        MSBuildToolsVersion: "auto",
        buildConfiguration: "Debug",
    };
    return config;
};