# Documentation

## Summary

**Category:** Best enhancement to the Sitecore Admin (XP) UI for Content Editors & Marketers

## Pre-requisites

The Social Assistant can run on any of the latest versions of Sitecore, and has been tested against:

- Sitecore 9.1 XP, XM

### Software Pre-requisites

- NPM?
- Node?

### Service Pre-requisites

- Twitter

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

6. Should be all set to start making changes to your repository.  Any future changes, just run the default gulp command to publish changes to your Sitecore instance.

### Package Installation

To install the latest stable package, go to the releases tab and download the latest zip or go to [sc.package](/sc.package/) directory.

## Configuration

> TODO:  List how to configure the connect to the Twitter Feed

## Usage

> TODO: How do you use the tool

## Video




<details>
  <summary>Original Requirements!</summary>
  
## Summary


What is the purpose of your module? What problem does it solve and how does it do that?

## Pre-requisites

Does your module rely on other Sitecore modules or frameworks?

- List any dependencies
- Or other modules that must be installed
- Or services that must be enabled/configured

## Installation

Provide detailed instructions on how to install the module, and include screenshots where necessary.

1. Use the Sitecore Installation wizard to install the [package](#link-to-package)
2. ???
3. Profit

## Configuration

How do you configure your module once it is installed? Are there items that need to be updated with settings, or maybe config files need to have keys updated?

Remember you are using Markdown, you can provide code samples too:

```xml
<?xml version="1.0"?>
<!--
  Purpose: Configuration settings for my hackathon module
-->
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
  <sitecore>
    <settings>
      <setting name="MyModule.Setting" value="Hackathon" />
    </settings>
  </sitecore>
</configuration>
```

## Usage

Provide documentation  about your module, how do the users use your module, where are things located, what do icons mean, are there any secret shortcuts etc.

Please include screenshots where necessary. You can add images to the `./images` folder and then link to them from your documentation:

![Hackathon Logo](images/hackathon.png?raw=true "Hackathon Logo")

You can embed images of different formats too:

![Deal With It](images/deal-with-it.gif?raw=true "Deal With It")

And you can embed external images too:

![Random](https://placeimg.com/480/240/any "Random")

## Video

Please provide a video highlighing your Hackathon module submission and provide a link to the video. Either a [direct link](https://www.youtube.com/watch?v=EpNhxW4pNKk) to the video, upload it to this documentation folder or maybe upload it to Youtube...

[![Sitecore Hackathon Video Embedding Alt Text](https://img.youtube.com/vi/EpNhxW4pNKk/0.jpg)](https://www.youtube.com/watch?v=EpNhxW4pNKk)


</details>

