(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(44)},23:function(e,t,a){},24:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(16),c=a.n(r),i=(a(23),a(2)),o=a(3),l=a(5),h=a(4),u=a(7),p=a(6),m=(a(24),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"generateNavigationButtons",value:function(e){for(var t=[],a=0;a<e.length;a++)t.push(s.a.createElement("button",{value:e[a],onClick:this.props.pageNav},e[a]));return s.a.createElement("div",{className:"Navbar"},t)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Banner"},s.a.createElement("div",{className:"Header"},s.a.createElement("div",{className:"Navbar"},this.generateNavigationButtons(this.props.buttons))))}}]),t}(n.Component)),v=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Home"},s.a.createElement("div",{className:"Title"},s.a.createElement("h1",null,"Home")))}}]),t}(n.Component),w=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Search"},s.a.createElement("div",{className:"Title"},s.a.createElement("h1",null,"Search Tweets")),s.a.createElement("div",{className:"Form"},s.a.createElement("input",{type:"text",value:this.props.value,onChange:this.props.onChange}),s.a.createElement("select",{value:this.props.searchType,onChange:this.props.selectSearchType},s.a.createElement("option",{value:"standard"},"Standard"),s.a.createElement("option",{value:"user"},"Username")),s.a.createElement("select",{value:this.props.contentType,onChange:this.props.selectContentType},s.a.createElement("option",{value:"mixed"},"Standard"),s.a.createElement("option",{value:"popular"},"Popular"),s.a.createElement("option",{value:"recent"},"Recent")),s.a.createElement("button",{onClick:this.props.searchTweets},"Find Tweets")),s.a.createElement("div",{className:"SearchResults"},this.props.formatTweet(this.props.tweets)))}}]),t}(n.Component),d=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"AwesomeTweets"},s.a.createElement("div",{className:"Title"},s.a.createElement("h1",null,"Awesome Tweets")),s.a.createElement("div",null,s.a.createElement("button",{onClick:this.props.getTweet},"Listen to the chirping")),s.a.createElement("div",{className:"SearchResults"},this.props.formatTweet(this.props.tweet)))}}]),t}(n.Component),T=a(9),y=a.n(T),b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={view:"Home",searchString:"sitecore",searchType:"content",contentType:"mixed",searchResults:[],awesomeTweets:[]},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.setSearchType=a.setSearchType.bind(Object(u.a)(a)),a.setContentType=a.setContentType.bind(Object(u.a)(a)),a.searchTweets=a.searchTweets.bind(Object(u.a)(a)),a.pageNavigation=a.pageNavigation.bind(Object(u.a)(a)),a.formatTweets=a.formatTweets.bind(Object(u.a)(a)),a.awesomeTweets=a.awesomeTweets.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState({searchString:e.target.value})}},{key:"setSearchType",value:function(e){this.setState({searchType:e.target.value})}},{key:"setContentType",value:function(e){this.setState({contentType:e.target.value})}},{key:"pageNavigation",value:function(e){this.setState({view:e.target.value})}},{key:"searchTweets",value:function(){var e=this;this.setState({searchResults:[]});var t="api/v1/methods/search?"+("searchString="+this.state.searchString)+("&searchType="+this.state.searchType)+("&contentType="+this.state.contentType);y.a.get(t).then(function(t){e.setState({searchResults:t.data.statuses})}).catch(function(e){console.log(e)}),this.setState({searchString:""})}},{key:"awesomeTweets",value:function(){var e=this;y.a.get("api/v1/methods/showcase").then(function(t){e.setState({awesomeTweets:[t.data]})}).catch(function(e){console.log(e)})}},{key:"applyLink",value:function(e){return e.split(" ").map(function(e){return e.includes("http://")||e.includes("https://")?s.a.createElement("a",{href:e},e):e}).reduce(function(e,t){return e.concat(t," ")},[""])}},{key:"formatTweets",value:function(e){var t=this;return e.map(function(e){return s.a.createElement("div",{className:"Tweet",key:e.id},s.a.createElement("h2",null,"By ",e.user.screen_name,", on ",e.created_at),s.a.createElement("h3",null,t.applyLink(e.text)))})}},{key:"currentView",value:function(){return"Search"===this.state.view?s.a.createElement(w,{onChange:this.handleChange,selectSearchType:this.setSearchType,selectContentType:this.setContentType,searchTweets:this.searchTweets,searchType:this.state.searchType,contentType:this.state.contentType,value:this.state.searchString,tweets:this.state.searchResults,formatTweet:this.formatTweets}):"Awesome Tweets"===this.state.view?s.a.createElement(d,{tweet:this.state.awesomeTweets,getTweet:this.awesomeTweets,formatTweet:this.formatTweets}):s.a.createElement(v,null)}},{key:"render",value:function(){return s.a.createElement("div",{className:"Main"},s.a.createElement(m,{pageNav:this.pageNavigation,buttons:["Home","Search","Awesome Tweets"]}),this.currentView())}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.0257f726.chunk.js.map