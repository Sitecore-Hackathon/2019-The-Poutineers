# Documentation

## Summary

**Category:** Best enhancement to the Sitecore Admin (XP) UI for Content Editors & Marketers

## Pre-requisites

The Social Assistant can run on the latest versions of Sitecore, and has been tested against:

- Sitecore 9.1 XP, XM

### Software Pre-requisites

- NPM 6.8+
- Node 9.11+
- Python 2.7
- Python Server

### Service Pre-requisites

- Twitter Developer Account

## Installation

### Solution

To install the solution to start making changes to the implementation, follow the steps below.

1. Clone the repository to your computer.
2. Update the configuration to match your environment.

`{Root}\src\Foundation\Serialization\App_Config\Include\Environment.config`
```xml
<?xml version="1.0"?>
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/" xmlns:role="http://www.sitecore.net/xmlconfig/role/">
    <sitecore>
        <sc.variable name="sourceFolder" value="[PathToSrcCode]\src" />
    </sitecore>
</configuration>
```

`{Root}\gulp-config.js`
```javascript
module.exports = function () {
    var sitecoreRoot = "[SitecoreWebsitePath]";
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
```

`{Root}\publishsettingsdebug.target`
```xml
<Project ToolsVersion="4.0" xmlns="http://schemas.microsoft.com/developer/msbuild/2003">
    <PropertyGroup>
        <publishUrl>[SitecoreUrl]</publishUrl>
        <ExcludeFilesFromDeployment>packages.config</ExcludeFilesFromDeployment>
    </PropertyGroup>
    <Import Project="./publishsettingsdebug.targets.user" Condition="exists('./publishsettingsdebug.targets.user')" /> 
</Project>
```

3. Make sure you have Sitecore 9.0+ (preferably 9.1 for the Hackathon judges :)) installed in your local environment.

4. Run a Node Package Manager install in the root of your source code in command prompt.

```npm install```

5. Open up Task Manager and run the default gulp task, you can optionally also run the following command in a command prompt:

```gulp```

6. Go to your sitecore instance.

7. Login at http(s)://instance.sc/sitecore

8. Go to http(s)://instance.sc/unicorn.aspx?verb=sync to Sync all Sitecore items.

9. Setup Python Server.. [Python Installation](/documentation/python.md)

10. You should now be all set to start making changes to your repository.  Any future changes, just run the default gulp command to publish changes to your Sitecore instance.

### Package Installation

To install the latest stable package, go to the releases tab and download the latest zip or go to [sc.package](/sc.package/) directory.

1. Go into your instance of Sitecore and install the package, in the Package Installation Wizard.  [Learn More](https://youtu.be/1Jt2fMhTYQg)

2. You should now be all set to go.  Read the configuration section to learn more about configuring

## Configuration

> TODO:  List how to configure the connect to the Twitter Feed

## Usage

To get started using the tool, is that first you must understand that it runs within the Sitecore Experience Editor.  When you are on the Sitecore Experience Editor you can go to the `Experience` tab to see the Social Assistant Button.

![Social Assistant Button](https://i.imgur.com/DMINWDp.png)

Once you click on the button, it will trigger a modal popup which will allow you to search for specific twitter handles or twitter usernames.  With this data you can then understand what social activities are going on for your twitter handles while editing your content.

## Video

[Watch Video Presentation](https://youtu.be/2CQo5_zg0EE)


