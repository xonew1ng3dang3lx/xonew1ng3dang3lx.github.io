(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{"/o9f":function(e,t,a){},"0ZUC":function(e,t,a){},"4Daz":function(e,t,a){"use strict";a.r(t);var o=a("RXBc");t.default=o.default},ERfW:function(e,t,a){"use strict";var o=a("q1tI"),r=a.n(o),n=a("Wbzz"),i=a("510Z"),c=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(n.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"ImgContainer"},r.a.createElement(i.a,{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt),r.a.createElement("div",{className:"AuthorBubbleContainer"},r.a.createElement(c.a,{id:a.author})))))}},M8cU:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"View",(function(){return y})),a.d(t,"default",(function(){return E}));var o=a("h9WB"),r=a("q1tI"),n=a.n(r),i=a("Wbzz"),c=a("0b+E"),s=a("ERfW"),d=(a("s7NA"),function(e){var t=e.to;return n.a.createElement(i.Link,{className:"ViewMoreLink",to:t},"View More")}),l=a("8hGN"),u=(a("/o9f"),function(e){var t=e.data,a=e.hasAds,o=e.tag,r=e.title;if(0===t.length)return null;var i=t;if(a){var c=parseInt(t.length/2);i=t.slice(0,c).concat({node:{isAd:!0}}).concat(t.slice(c))}return n.a.createElement("section",{className:"features"},r&&n.a.createElement("h2",{className:"features-title"},r),n.a.createElement("ul",{className:"features-list"},i.map((function(e){var t=e.node;return t.isAd?n.a.createElement("li",{key:"ads"},n.a.createElement(l.a,{type:"billboard"})):n.a.createElement("li",{key:t.id},n.a.createElement(s.a,{data:t}))}))),n.a.createElement(d,{to:"/"+o}))}),m=a("I/Ru"),g=a("wtQ5"),h=a("510Z"),f=a("vPZ/"),p=(a("M8cU"),function(e){var t=e.data.frontmatter;return n.a.createElement(i.Link,{to:"/"+t.slug,className:"BigHeadlineCard"},n.a.createElement("div",{className:"imgContainer"},n.a.createElement(h.a,{src:t.cover_photo,alt:t.title})),n.a.createElement("div",{className:"descriptionContainer"},n.a.createElement("div",{className:"title"},t.title),n.a.createElement("div",{className:"AuthorBubbleContainer"},n.a.createElement(f.a,{id:t.author})),n.a.createElement("div",{className:"date"},t.date)))}),b=(a("rcA6"),function(e){var t=e.data.frontmatter;return n.a.createElement(i.Link,{className:"SmallHeadlineCard",to:"/"+t.slug},n.a.createElement("div",{className:"imgContainer"},n.a.createElement(h.a,{src:t.cover_photo,alt:t.title})),n.a.createElement("div",{className:"descriptionContainer"},n.a.createElement("div",{className:"title"},t.title),n.a.createElement("div",{className:"AuthorBubbleContainer"},n.a.createElement(f.a,{id:t.author})),n.a.createElement("div",{className:"date"},t.date)))}),w=(a("0ZUC"),function(e){var t=e.data;return n.a.createElement("section",{className:"headlines"},t.map((function(e,t){var a=e.node;return 0===t?n.a.createElement(p,{key:a.id,data:a}):n.a.createElement(b,{key:a.id,data:a})})))}),v=a("JiuF");a("bN3s");function y(e){var t=e.data;return n.a.createElement(m.a,null,n.a.createElement(n.a.Fragment,null,n.a.createElement(g.a,{title:"TechWaifu - Most Recent Blog Posts",metadata:[Object(v.a)(t.recent.edges)]}),n.a.createElement("section",{className:"Homepage"},n.a.createElement("h1",{className:"HomePageTitle"},"Most Recent Blogs"),n.a.createElement(w,{data:t.recent.edges.slice(0,5)}),n.a.createElement(u,{hasAds:!0,data:t.recent.edges.slice(5),title:"The Latest",tag:"blogs/all"}),n.a.createElement(l.a,{type:"leaderboard"}))))}function E(){var e=Object(r.useState)(new Date)[0];return Object(r.useEffect)((function(){return function(){var t=(new Date).getMilliseconds()-e.getMilliseconds();c.a.event({category:"TimeOnHome",variable:"time",value:t,label:"Home"})}})),n.a.createElement(i.StaticQuery,{query:"37290487",render:function(e){return n.a.createElement(y,{data:e})},data:o})}},bN3s:function(e,t,a){},h9WB:function(e){e.exports=JSON.parse('{"data":{"recent":{"edges":[{"node":{"id":"7fa09880-ad9d-5581-9de4-698d85ca5a2e","excerpt":"The Zeiss Batis 85mm was my first e-mount lens and it\'s still one of my favorite lens ever. The 85mm focal length is a classic for portrait…","frontmatter":{"author":"awang","slug":"zeiss-batis-85-samples-a1ee7bdb","title":"Zeiss Batis 85mm Review: Ultimate Bokeh Lens with Sample Images","date":"August 5, 2020","modified_date":"August 5, 2020","cover_photo":"/blogImages/top_emount/cover.jpg?width=1455&height=1073"}}},{"node":{"id":"609d828f-98b9-58dd-b023-2013107a2dcd","excerpt":"My 2013 Apple Macbook Pro\'s battery started to get worse in 2020 so I started looking for a replacement laptop. I ended up picking up an HP…","frontmatter":{"author":"awang","slug":"ultimate-guide-coding-on-chromebook-bb405513","title":"Setting Up Java, Python, Node, React, and Angular on a Chromebook","date":"August 4, 2020","modified_date":null,"cover_photo":"/blogImages/chromebook_coding/cover.JPG?width=1742&height=1306"}}},{"node":{"id":"2e9aa42c-d7fb-5cc5-b09a-2a2141a2eb52","excerpt":"If you find yourself stuck in choosing what college degree to pursue, then don’t worry, you are not alone. Many of us do not know what we…","frontmatter":{"author":"mai","slug":"choosing-college-major-688412f1","title":"Retrospect: Choosing The Perfect College Major","date":"August 3, 2020","modified_date":null,"cover_photo":"/blogImages/pick_major/cover.jpeg?width=1200&height=628"}}},{"node":{"id":"13c07b96-79e1-597a-a552-57580e8bad63","excerpt":"It was my first day on the job and I had totaled eight hours of chugging coffee, banging my head at the keyboard for the fifth time, and…","frontmatter":{"author":"awang","slug":"importance-of-code-quality-impact-of-tech-debt-1fb19358","title":"The Importance of Code Quality and the Impact of Technical Debt","date":"August 2, 2020","modified_date":null,"cover_photo":"/blogImages/tech_debt/cover.jpg?width=1450&height=1087"}}},{"node":{"id":"ee4889c3-77f4-5188-a27d-d9c07490b701","excerpt":"While I started studying Computer Science, I always wondered if working in the real world would be as difficult as college. I struggled to…","frontmatter":{"author":"awang","slug":"difference-between-studying-computer-science-working-software-engineer-df3bb680","title":"Programming in School vs Working as a Software Engineer","date":"July 29, 2020","modified_date":null,"cover_photo":"/blogImages/school_vs_work/cover.jpg?width=1676&height=1257"}}},{"node":{"id":"b6bfabd7-a7ec-56ba-8584-ce69192e30f0","excerpt":"The Leica CL (not to be confused with the 1973 Leica CL) is an APS-C camera that was released in 2017. It uses the L-mount which features…","frontmatter":{"author":"awang","slug":"leica-cl-worth-3000-in-2020-9cbf32a8","title":"Is the Leica CL still worth $3000 in 2020?","date":"July 27, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/leica_cl/cover.jpg?width=1024&height=705"}}},{"node":{"id":"5aaf154d-a88c-52c8-a858-066f789f52de","excerpt":"Majority of us have probably felt burned out ever since Covid-19 happened. Unfortunate events have happened where teams have become smaller…","frontmatter":{"author":"mai","slug":"impact-of-burnout-1673a494","title":"The Impact of Burnout","date":"July 26, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/burnout/cover.jpg?width=1024&height=536"}}},{"node":{"id":"8ba586a3-a185-50f4-bcb0-998e1f326e34","excerpt":"Most modern services and clients communicate with REST with JSON as a data interchange format. JSON is easy to read and most programming…","frontmatter":{"author":"awang","slug":"why-use-remote-procedure-calls-RPC-over-JSON-fbb4ae56","title":"Why Remote Procedure Calls (RPC) Are Better than REST","date":"July 25, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/grpc/cover.jpg?width=400&height=400"}}},{"node":{"id":"cf3f1ebb-51c1-5732-8529-25b2f6707bfc","excerpt":"1. Autopilot is Impressive, but it\'s Still a Work in Progress I was excited about the concept of just sitting in my car and letting my car…","frontmatter":{"author":"awang","slug":"things-wish-knew-before-buying-tesla-model-3-91515f9c","title":"Things I wish I knew Before Buying a Tesla Model 3","date":"July 23, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/model_3/cover.jpg?width=1024&height=768"}}},{"node":{"id":"f8bb9273-e722-5fed-8e7b-60f18ec1b2e3","excerpt":"I still remember applying to Facebook every year and getting rejected and how bad I flunked my interview with Google during my senior year…","frontmatter":{"author":"awang","slug":"how-i-got-multiple-fang-offers-e0a87898","title":"How I Landed Offers from Facebook, Google, Uber, & Microsoft as a Software Engineer","date":"July 21, 2020","modified_date":"August 4, 2020","cover_photo":"/blogImages/fang_offers/cover.jpg?width=1024&height=768"}}},{"node":{"id":"9605b4ca-ca72-56bc-be49-074f297d987f","excerpt":"Back as a freshman I wasn\'t sure what courses I should take. There\'s a bunch of required major courses and college requirements to graduate…","frontmatter":{"author":"awang","slug":"four-year-plan-ucsd-computer-science-major-45a6bc11","title":"My Four Year Plan at UCSD as a Computer Science Major","date":"July 19, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/four_year_plan_ucsd/cover.jpg?width=1024&height=719"}}},{"node":{"id":"82ea6395-82c9-59ce-a1a3-a25850ea9fbe","excerpt":"Why should I work for a company when I can enjoy my summer break? Well internships provide first hand exposure to working in the real world…","frontmatter":{"author":"awang","slug":"guide-computer-science-internship-and-expectations-2e2358ef","title":"Guide to Landing Your Computer Science Internship and What to Expect","date":"July 18, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/internship_guide/cover.jpg?width=1024&height=768"}}},{"node":{"id":"4bf783b7-5d81-5f57-8d0c-6923849bda1e","excerpt":"1. Parking is a Competitive Sport Gilman There are a couple of parking lots at UCSD. You\'ll also need to pay for a permit every quarter to…","frontmatter":{"author":"awang","slug":"interesting-things-wish-knew-before-going-ucsd-5ee2265f","title":"Interesting Things I Wish I Knew Before Going to UCSD","date":"July 16, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/ucsd_interesting_things/cover.jpg?width=3264&height=2448"}}},{"node":{"id":"198511bb-0dbe-5257-a622-1db3d17c9bb2","excerpt":"Computer Engineering is Different from Computer Science ECE 35 At UCSD, we have two different majors related to Computer Science. Computer…","frontmatter":{"author":"awang","slug":"things-wish-knew-before-going-ucsd-computer-science-major-5ee2265f","title":"Things I Wish I Knew Before Going to UCSD as a Computer Science Major","date":"July 14, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/interesting_ucsd_comp_sci/cover.jpg?width=1024&height=683"}}},{"node":{"id":"3454c013-283e-50d8-b5d5-184b36cfc498","excerpt":"What is Structured Data? Ever wondered why some search results on Google have extra bits of information like pricing, ratings, and other…","frontmatter":{"author":"awang","slug":"what-is-structured-data-and-why-do-i-need-it-a3f06898","title":"What is Structured Data and Why do I need it?","date":"July 13, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/structured_data/cover.png?width=981&height=327"}}}]}}}')},rcA6:function(e,t,a){},s7NA:function(e,t,a){},u8TT:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-404-index-js-f69f1a7971dd9b417bee.js.map