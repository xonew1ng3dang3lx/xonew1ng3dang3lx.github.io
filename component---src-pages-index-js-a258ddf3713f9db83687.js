(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/o9f":function(e,t,a){},"0ZUC":function(e,t,a){},ERfW:function(e,t,a){"use strict";var o=a("q1tI"),r=a.n(o),n=a("Wbzz"),i=a("510Z"),s=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(n.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"ImgContainer"},r.a.createElement(i.a,{src:a.cover_photo+"&isNotExpandable=true",alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt),r.a.createElement("div",{className:"AuthorBubbleContainer"},r.a.createElement(s.a,{id:a.author})))))}},M8cU:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"View",(function(){return y})),a.d(t,"default",(function(){return E}));var o=a("h9WB"),r=a("q1tI"),n=a.n(r),i=a("Wbzz"),s=a("0b+E"),c=a("ERfW"),l=(a("s7NA"),function(e){var t=e.to;return n.a.createElement(i.Link,{className:"ViewMoreLink",to:t},"View More")}),d=a("8hGN"),u=(a("/o9f"),function(e){var t=e.data,a=e.hasAds,o=e.tag,r=e.title;if(0===t.length)return null;var i=t;if(a){var s=parseInt(t.length/2);i=t.slice(0,s).concat({node:{isAd:!0}}).concat(t.slice(s))}return n.a.createElement("section",{className:"features"},r&&n.a.createElement("h2",{className:"features-title"},r),n.a.createElement("ul",{className:"features-list"},i.map((function(e){var t=e.node;return t.isAd?n.a.createElement("li",{key:"ads"},n.a.createElement(d.a,{type:"billboard"})):n.a.createElement("li",{key:t.id},n.a.createElement(c.a,{data:t}))}))),n.a.createElement(l,{to:"/"+o}))}),m=a("I/Ru"),h=a("wtQ5"),g=a("510Z"),p=a("vPZ/"),f=(a("M8cU"),function(e){var t=e.data.frontmatter;return n.a.createElement(i.Link,{to:"/"+t.slug,className:"BigHeadlineCard"},n.a.createElement("div",{className:"imgContainer"},n.a.createElement(g.a,{src:t.cover_photo,alt:t.title})),n.a.createElement("div",{className:"descriptionContainer"},n.a.createElement("div",{className:"title"},t.title),n.a.createElement("div",{className:"date"},t.date),n.a.createElement("div",{className:"AuthorBubbleContainer"},n.a.createElement(p.a,{id:t.author}))))}),b=(a("rcA6"),function(e){var t=e.data.frontmatter;return n.a.createElement(i.Link,{className:"SmallHeadlineCard",to:"/"+t.slug},n.a.createElement("div",{className:"imgContainer"},n.a.createElement(g.a,{src:t.cover_photo,alt:t.title})),n.a.createElement("div",{className:"descriptionContainer"},n.a.createElement("div",{className:"title"},t.title),n.a.createElement("div",{className:"date"},t.date),n.a.createElement("div",{className:"AuthorBubbleContainer"},n.a.createElement(p.a,{id:t.author}))))}),v=(a("0ZUC"),function(e){var t=e.data;return n.a.createElement("section",{className:"headlines"},t.map((function(e,t){var a=e.node;return 0===t?n.a.createElement(f,{key:a.id,data:a}):n.a.createElement(b,{key:a.id,data:a})})))}),w=a("JiuF");a("bN3s");function y(e){var t=e.data;return n.a.createElement(m.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{title:"TechWaifu - Most Recent Blog Posts",metadata:[Object(w.a)(t.recent.edges)]}),n.a.createElement("section",{className:"Homepage"},n.a.createElement("h1",{className:"HomePageTitle"},"Most Recent Blogs"),n.a.createElement(v,{data:t.recent.edges.slice(0,5)}),n.a.createElement(u,{hasAds:!0,data:t.recent.edges.slice(5),title:"The Latest",tag:"blogs/all"}),n.a.createElement(d.a,{type:"leaderboard"}))))}function E(){var e=Object(r.useState)(new Date)[0];return Object(r.useEffect)((function(){return function(){var t=(new Date).getMilliseconds()-e.getMilliseconds();s.a.event({category:"TimeOnHome",variable:"time",value:t,label:"Home"})}})),n.a.createElement(i.StaticQuery,{query:"37290487",render:function(e){return n.a.createElement(y,{data:e})},data:o})}},bN3s:function(e,t,a){},h9WB:function(e){e.exports=JSON.parse('{"data":{"recent":{"edges":[{"node":{"id":"75b6c1c3-e6f6-5c1a-acd6-80d711b14de9","excerpt":"Back in the day, websites were primarily rendered server side. This made it easy for bots to crawl and extract content from the page without…","frontmatter":{"author":"awang","slug":"blog/client-side-rendered-crawler-e08c0320","title":"Building a Crawler for a Client-side Rendered Web App","date":"August 15, 2020","modified_date":null,"cover_photo":"/blogImages/crawler/cover.jpg?width=692&height=496&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"480b5aaf-269f-5a04-ac2b-f8d821c5aa12","excerpt":"Ever wanted the power to increase the resolution of images like in those cop shows? Well now you can with Pixelmator Pro using the ML Super…","frontmatter":{"author":"awang","slug":"blog/machine-learning-photos-46a2d49c","title":"Machine Learning to Increase Photo Resolution with Pixelmator Pro","date":"August 11, 2020","modified_date":null,"cover_photo":"/blogImages/ml_images/cover.jpg?width=1500&height=822&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"6c65e848-d45e-5941-b832-aa7c8e088862","excerpt":"Developing Android Apps on a Chromebook haven\'t been easier in 2020. I tested this out on a HP x2 Chromebook, but I would recommend a better…","frontmatter":{"author":"awang","slug":"android-development-on-chromebook-2020-5734ed1a","title":"How to Develop Android Apps on a Chromebook in 2020","date":"August 9, 2020","modified_date":null,"cover_photo":"/blogImages/mobile_dev_on_chromebook/cover.jpg?width=2400&height=1600&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"bc398a1d-4f3a-51b5-a621-1ac3709129a6","excerpt":"Having trouble choosing a Chromebook as your primary development machine? With so many laptops and ChromeOS devices on the market today…","frontmatter":{"author":"awang","slug":"recommended-chromebooks-for-programming-2020-5734ed1a","title":"The Best Chromebooks for Programming in 2020","date":"August 6, 2020","modified_date":"August 8, 2020","cover_photo":"/blogImages/recommended_chromebooks/acer_chromebook_spin.jpg?width=960&height=631&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"7fa09880-ad9d-5581-9de4-698d85ca5a2e","excerpt":"The Zeiss Batis 85mm was my first e-mount lens and it\'s still one of my favorite lens ever. The 85mm focal length is a classic for portrait…","frontmatter":{"author":"awang","slug":"zeiss-batis-85-samples-a1ee7bdb","title":"Zeiss Batis 85mm Review: Ultimate Bokeh Lens with Sample Images","date":"August 5, 2020","modified_date":"August 5, 2020","cover_photo":"/blogImages/zeiss_batis_85/cover.jpg?width=1455&height=1073&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"609d828f-98b9-58dd-b023-2013107a2dcd","excerpt":"My 2013 Apple Macbook Pro\'s battery started to get worse in 2020 so I started looking for a replacement laptop. I ended up picking up an HP…","frontmatter":{"author":"awang","slug":"ultimate-guide-coding-on-chromebook-bb405513","title":"Setting Up Java, Python, Node, React, and Angular on a Chromebook","date":"August 4, 2020","modified_date":null,"cover_photo":"/blogImages/chromebook_coding/cover-2.jpg?width=1742&height=1306&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"2e9aa42c-d7fb-5cc5-b09a-2a2141a2eb52","excerpt":"If you find yourself stuck in choosing what college degree to pursue, then don’t worry, you are not alone. Many of us do not know what we…","frontmatter":{"author":"mai","slug":"choosing-college-major-688412f1","title":"Retrospect: Choosing The Perfect College Major","date":"August 3, 2020","modified_date":null,"cover_photo":"/blogImages/pick_major/cover-low.jpeg?width=1200&height=628"}}},{"node":{"id":"13c07b96-79e1-597a-a552-57580e8bad63","excerpt":"It was my first day on the job and I had totaled eight hours of chugging coffee, banging my head at the keyboard for the fifth time, and…","frontmatter":{"author":"awang","slug":"importance-of-code-quality-impact-of-tech-debt-1fb19358","title":"The Importance of Code Quality and the Impact of Technical Debt","date":"August 2, 2020","modified_date":null,"cover_photo":"/blogImages/tech_debt/cover.jpg?width=1450&height=1087&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"ee4889c3-77f4-5188-a27d-d9c07490b701","excerpt":"While I started studying Computer Science, I always wondered if working in the real world would be as difficult as college. I struggled to…","frontmatter":{"author":"awang","slug":"difference-between-studying-computer-science-working-software-engineer-df3bb680","title":"Programming in School vs Working as a Software Engineer","date":"July 29, 2020","modified_date":null,"cover_photo":"/blogImages/school_vs_work/cover.jpg?width=1676&height=1257&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"b6bfabd7-a7ec-56ba-8584-ce69192e30f0","excerpt":"The Leica CL (not to be confused with the 1973 Leica CL) is an APS-C camera that was released in 2017. It uses the L-mount which features…","frontmatter":{"author":"awang","slug":"leica-cl-worth-3000-in-2020-9cbf32a8","title":"Is the Leica CL still worth $3000 in 2020?","date":"July 27, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/leica_cl/cover.jpg?width=1024&height=705&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"5aaf154d-a88c-52c8-a858-066f789f52de","excerpt":"Majority of us have probably felt burned out ever since Covid-19 happened. Unfortunate events have happened where teams have become smaller…","frontmatter":{"author":"mai","slug":"impact-of-burnout-1673a494","title":"The Impact of Burnout","date":"July 26, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/burnout/cover.jpg?width=1024&height=536"}}},{"node":{"id":"8ba586a3-a185-50f4-bcb0-998e1f326e34","excerpt":"Most modern services and clients communicate with REST with JSON as a data interchange format. JSON is easy to read and most programming…","frontmatter":{"author":"awang","slug":"why-use-remote-procedure-calls-RPC-over-JSON-fbb4ae56","title":"Why Remote Procedure Calls (RPC) Are Better than REST","date":"July 25, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/grpc/cover.jpg?width=400&height=400"}}},{"node":{"id":"cf3f1ebb-51c1-5732-8529-25b2f6707bfc","excerpt":"1. Autopilot is Impressive, but it\'s Still a Work in Progress I was excited about the concept of just sitting in my car and letting my car…","frontmatter":{"author":"awang","slug":"things-wish-knew-before-buying-tesla-model-3-91515f9c","title":"Things I wish I knew Before Buying a Tesla Model 3","date":"July 23, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/model_3/cover.jpg?width=1024&height=768"}}},{"node":{"id":"f8bb9273-e722-5fed-8e7b-60f18ec1b2e3","excerpt":"I still remember applying to Facebook every year and getting rejected and how bad I flunked my interview with Google during my senior year…","frontmatter":{"author":"awang","slug":"how-i-got-multiple-fang-offers-e0a87898","title":"How I Landed Offers from Facebook, Google, Uber, & Microsoft as a Software Engineer","date":"July 21, 2020","modified_date":"August 4, 2020","cover_photo":"/blogImages/fang_offers/cover.jpg?width=1024&height=768&isResponsive=true&supportsWebp=true"}}},{"node":{"id":"9605b4ca-ca72-56bc-be49-074f297d987f","excerpt":"Back as a freshman I wasn\'t sure what courses I should take. There\'s a bunch of required major courses and college requirements to graduate…","frontmatter":{"author":"awang","slug":"four-year-plan-ucsd-computer-science-major-45a6bc11","title":"My Four Year Plan at UCSD as a Computer Science Major","date":"July 19, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/four_year_plan_ucsd/cover.jpg?width=1024&height=719&isResponsive=true&supportsWebp=true"}}}]}}}')},rcA6:function(e,t,a){},s7NA:function(e,t,a){},u8TT:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-a258ddf3713f9db83687.js.map