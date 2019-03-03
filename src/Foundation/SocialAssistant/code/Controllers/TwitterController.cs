using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using TweetSharp;

namespace Hackathon.Foundation.SocialAssistant.Controllers
{
    public class TwitterController : Controller
    {
        private readonly ITwitterService _twitterService;

        public TwitterController()
        {
            //_twitterService = twitterService;

            //TODO: Handle DI
            _twitterService = new TwitterService(new TwitterClientInfo() { ConsumerKey = "s86tTKVJvxHVqMgPRIxMmAoku", ConsumerSecret = "r6wAOLp96P0TzPaXbIs6YzTshxeSni2YYYA8OGebAYFzY72Mus" });
        }

        [HttpGet]
        public ActionResult GetSearchResults(string query)
        {
            OAuthRequestToken requestToken = _twitterService.GetRequestToken();

            _twitterService.AuthenticateWith("796903847738404864-Mr5l9qUYaZVxChJsOxCjjUo6m2U9vlR", "0TPcZ1cp0EObV0GGRpApcC6133MRMJBGcnLvYbpuwaQ3D");

            var results = _twitterService.Search(new SearchOptions() { Q = query, Resulttype = TwitterSearchResultType.Popular, Count = 20 });

            return View(results);
        }
    }
}