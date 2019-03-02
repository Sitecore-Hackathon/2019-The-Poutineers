define(["sitecore"], function (Sitecore) {
    Sitecore.Commands.SocialAssist =
        {
            canExecute: function (context) {
                // Determines whether command is disabled or enabled.
                return true;
            },
            execute: function (context) {
                alert("Hello world!");
            }
        };
});