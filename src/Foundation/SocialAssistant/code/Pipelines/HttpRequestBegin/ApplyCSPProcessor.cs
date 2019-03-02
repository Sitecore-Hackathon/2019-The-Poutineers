using Sitecore.Pipelines.HttpRequest;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hackathon.Foundation.SocialAssistant.Pipelines.HttpRequestBegin
{
    public class ApplyCSPProcessor : HttpRequestProcessor
    {
        public override void Process(HttpRequestArgs args)
        {
            //args.HttpContext.Response.Headers.Add("Content-Security-Policy", "frame-src twitter.com");
        }
    }
}