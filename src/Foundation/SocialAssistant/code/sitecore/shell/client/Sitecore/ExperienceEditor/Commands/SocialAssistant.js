﻿define(["sitecore", "/-/speak/v1/ExperienceEditor/ExperienceEditor.js", "jquery", ], function (Sitecore, ExperienceEditor, $) {
    Sitecore.Commands.SocialAssistant =
        {
            canExecute: function (context) {
                // Determines whether command is disabled or enabled.
                return true;
            },
            execute: function (context) {
                var dialogWidth = '805px;';
                var dialogHeight = '650px;';

                var dialogFeatures = "dialogMinHeight: " + dialogHeight + "dialogMinWidth: " + dialogWidth;
                ExperienceEditor.Dialogs.showModalDialog('http://generic-91.sc/api/sitecore/Twitter/GetSearchResults?query=schackathon', 'Sitecore Social Assistant', dialogFeatures, null, function (result) {
                    
                });
            }
        };
});