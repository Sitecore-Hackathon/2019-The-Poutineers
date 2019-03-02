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

        public TwitterController(ITwitterService twitterService)
        {
            //_twitterService = twitterService;

            //TODO: Handle DI
            _twitterService = new TwitterService(new TwitterClientInfo() { ConsumerKey = "", ConsumerSecret = "" });
        }

        public JsonResult GetSearchResults(string query)
        {
            var results = _twitterService.Search(new SearchOptions() { Q = query });

            return Json(results, JsonRequestBehavior.AllowGet);
        }
    }
}