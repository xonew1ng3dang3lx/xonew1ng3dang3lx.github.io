(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{"/o9f":function(e,t,a){},"0ZUC":function(e,t,a){},"4Daz":function(e,t,a){"use strict";a.r(t);var r=a("RXBc");t.default=r.default},ERfW:function(e,t,a){"use strict";var r=a("q1tI"),o=a.n(r),n=a("Wbzz"),i=a("510Z"),c=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return o.a.createElement("article",{className:"ArticleCard"},o.a.createElement(n.Link,{to:"/"+a.slug},o.a.createElement("div",{className:"ImgContainer"},o.a.createElement(i.a,{src:a.cover_photo,alt:a.title})),o.a.createElement("div",{className:"TextContainer"},o.a.createElement("div",{className:"Title"},a.title),o.a.createElement("div",{className:"Date"},a.date),o.a.createElement("p",{className:"Excerpt"},t.excerpt),o.a.createElement("div",{className:"AuthorBubbleContainer"},o.a.createElement(c.a,{id:a.author})))))}},M8cU:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return y}));var r=a("h9WB"),o=a("q1tI"),n=a.n(o),i=a("Wbzz"),c=a("ERfW"),s=(a("s7NA"),function(e){var t=e.to;return n.a.createElement(i.Link,{className:"ViewMoreLink",to:t},"View More")}),l=a("8hGN"),d=(a("/o9f"),function(e){var t=e.data,a=e.hasAds,r=e.tag,o=e.title;if(0===t.length)return null;var i=t;if(a){var d=parseInt(t.length/2);i=t.slice(0,d).concat({node:{isAd:!0}}).concat(t.slice(d))}return n.a.createElement("section",{className:"features"},n.a.createElement("h3",{className:"features-title"},o),n.a.createElement("ul",{className:"features-list"},i.map((function(e){var t=e.node;return t.isAd?n.a.createElement("li",{key:"ads"},n.a.createElement(l.a,{type:"billboard"})):n.a.createElement("li",{key:t.id},n.a.createElement(c.a,{data:t}))}))),n.a.createElement(s,{to:"/"+r}))}),u=a("I/Ru"),m=a("0b+E"),f=a("wtQ5"),g=a("510Z"),h=a("vPZ/"),b=(a("M8cU"),function(e){var t=e.data.frontmatter;return n.a.createElement(i.Link,{to:"/"+t.slug,className:"BigHeadlineCard"},n.a.createElement("div",{className:"imgContainer"},n.a.createElement(g.a,{src:t.cover_photo,alt:t.title})),n.a.createElement("div",{className:"descriptionContainer"},n.a.createElement("div",{className:"title"},t.title),n.a.createElement("div",{className:"AuthorBubbleContainer"},n.a.createElement(h.a,{id:t.author})),n.a.createElement("div",{className:"date"},t.date)))}),p=(a("rcA6"),function(e){var t=e.data.frontmatter;return n.a.createElement(i.Link,{className:"SmallHeadlineCard",to:"/"+t.slug},n.a.createElement("div",{className:"imgContainer"},n.a.createElement(g.a,{src:t.cover_photo,alt:t.title})),n.a.createElement("div",{className:"descriptionContainer"},n.a.createElement("div",{className:"title"},t.title),n.a.createElement("div",{className:"AuthorBubbleContainer"},n.a.createElement(h.a,{id:t.author})),n.a.createElement("div",{className:"date"},t.date)))}),v=(a("0ZUC"),function(e){var t=e.data;return n.a.createElement("section",{className:"headlines"},t.map((function(e,t){var a=e.node;return 0===t?n.a.createElement(b,{key:a.id,data:a}):n.a.createElement(p,{key:a.id,data:a})})))}),w=a("JiuF");a("bN3s");function y(){var e=Object(o.useState)(new Date)[0];return Object(o.useEffect)((function(){return function(){var t=(new Date).getMilliseconds()-e.getMilliseconds();m.a.event({category:"TimeOnHome",variable:"time",value:t,label:"Home"})}})),n.a.createElement(u.a,null,n.a.createElement(i.StaticQuery,{query:"37290487",render:function(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{title:"TechWaifu - Most Recent Blog Posts",metadata:[Object(w.a)(e.recent.edges)]}),n.a.createElement("section",{className:"Homepage"},n.a.createElement(v,{data:e.recent.edges.slice(0,5)}),n.a.createElement(d,{hasAds:!0,data:e.recent.edges.slice(5),title:"The Latest",tag:"blogs/all"}),n.a.createElement(l.a,{type:"leaderboard"})))},data:r}))}},bN3s:function(e,t,a){},h9WB:function(e){e.exports=JSON.parse('{"data":{"recent":{"edges":[{"node":{"id":"ee4889c3-77f4-5188-a27d-d9c07490b701","excerpt":"While I started studying Computer Science, I always wondered if working in the real world would be as difficult as college. I struggled to…","frontmatter":{"author":"awang","slug":"difference-between-studying-computer-science-working-software-engineer-df3bb680","title":"Programming in School vs Working as a Software Engineer","date":"July 29, 2020","modified_date":null,"cover_photo":"/blogImages/school_vs_work/cover.jpg"}}},{"node":{"id":"b6bfabd7-a7ec-56ba-8584-ce69192e30f0","excerpt":"The Leica CL (not to be confused with the 1973 Leica CL) is an APS-C camera that was released in 2017. It uses the L-mount which features…","frontmatter":{"author":"awang","slug":"leica-cl-worth-3000-in-2020-9cbf32a8","title":"Is the Leica CL still worth $3000 in 2020?","date":"July 27, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/leica_cl/cover.jpg"}}},{"node":{"id":"5aaf154d-a88c-52c8-a858-066f789f52de","excerpt":"Majority of us have probably felt burned out ever since Covid-19 happened. Unfortunate events have happened where teams have become smaller…","frontmatter":{"author":"mai","slug":"impact-of-burnout-1673a494","title":"The Impact of Burnout","date":"July 26, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/burnout/cover.jpg"}}},{"node":{"id":"8ba586a3-a185-50f4-bcb0-998e1f326e34","excerpt":"Most modern services and clients communicate with REST with JSON as a data interchange format. JSON is easy to read and most programming…","frontmatter":{"author":"awang","slug":"why-use-remote-procedure-calls-RPC-over-JSON-fbb4ae56","title":"Why Remote Procedure Calls (RPC) Are Better than REST","date":"July 25, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/grpc/cover.jpg"}}},{"node":{"id":"cf3f1ebb-51c1-5732-8529-25b2f6707bfc","excerpt":"1. Autopilot is Impressive, but it\'s Still a Work in Progress I was excited about the concept of just sitting in my car and letting my car…","frontmatter":{"author":"awang","slug":"things-wish-knew-before-buying-tesla-model-3-91515f9c","title":"Things I wish I knew Before Buying a Tesla Model 3","date":"July 23, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/model_3/cover.jpg"}}},{"node":{"id":"f8bb9273-e722-5fed-8e7b-60f18ec1b2e3","excerpt":"I still remember applying to Facebook every year and getting rejected and how bad I flunked my interview with Google during my senior year…","frontmatter":{"author":"awang","slug":"how-i-got-multiple-fang-offers-e0a87898","title":"How I Landed Offers from Facebook, Google, Uber, & Microsoft as a Software Engineer","date":"July 21, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/fang_offers/cover.jpg"}}},{"node":{"id":"9605b4ca-ca72-56bc-be49-074f297d987f","excerpt":"Back as a freshman I wasn\'t sure what courses I should take. There\'s a bunch of required major courses and college requirements to graduate…","frontmatter":{"author":"awang","slug":"four-year-plan-ucsd-computer-science-major-45a6bc11","title":"My Four Year Plan at UCSD as a Computer Science Major","date":"July 19, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/four_year_plan_ucsd/cover.jpg"}}},{"node":{"id":"82ea6395-82c9-59ce-a1a3-a25850ea9fbe","excerpt":"Why should I work for a company when I can enjoy my summer break? Well internships provide first hand exposure to working in the real world…","frontmatter":{"author":"awang","slug":"guide-computer-science-internship-and-expectations-2e2358ef","title":"Guide to Landing Your Computer Science Internship and What to Expect","date":"July 18, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/internship_guide/cover.jpg"}}},{"node":{"id":"4bf783b7-5d81-5f57-8d0c-6923849bda1e","excerpt":"1. Parking is a Competitive Sport Gilman There are a couple of parking lots at UCSD. You\'ll also need to pay for a permit every quarter to…","frontmatter":{"author":"awang","slug":"interesting-things-wish-knew-before-going-ucsd-5ee2265f","title":"Interesting Things I Wish I Knew Before Going to UCSD","date":"July 16, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/ucsd_interesting_things/cover.jpg"}}},{"node":{"id":"198511bb-0dbe-5257-a622-1db3d17c9bb2","excerpt":"Computer Engineering is Different from Computer Science ECE 35 At UCSD, we have two different majors related to Computer Science. Computer…","frontmatter":{"author":"awang","slug":"things-wish-knew-before-going-ucsd-computer-science-major-5ee2265f","title":"Things I Wish I Knew Before Going to UCSD as a Computer Science Major","date":"July 14, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/interesting_ucsd_comp_sci/cover.jpg"}}},{"node":{"id":"3454c013-283e-50d8-b5d5-184b36cfc498","excerpt":"What is Structured Data? Ever wondered why some search results on Google have extra bits of information like pricing, ratings, and other…","frontmatter":{"author":"awang","slug":"what-is-structured-data-and-why-do-i-need-it-a3f06898","title":"What is Structured Data and Why do I need it?","date":"July 13, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/structured_data/cover.png"}}},{"node":{"id":"89993239-3838-5f9d-a765-819d3c7782d3","excerpt":"When I first started my career, I had a starting salary of 100k, a 10% targeted bonus, and a 8k worth of stocks a year. When people hear…","frontmatter":{"author":"awang","slug":"why-even-software-engineers-silicon-valley-cannot-afford-home-bay-area-8037ceb2","title":"Why Even Software Engineers in Silicon Valley Cannot Afford a Home in the Bay Area","date":"July 12, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/bay_area_homes/cover.jpg"}}},{"node":{"id":"f5c54880-2aeb-55c3-948f-2e6f0b0d4b7b","excerpt":"2020 has been an eventful year from the wildfires to the Covid-19. One effect of Covid-19 has been the rise of remote work. This has been…","frontmatter":{"author":"awang","slug":"is-working-from-home-the-future-cd2e7615","title":"Is Working from Home the Future?","date":"July 11, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/wfh_future/cover.jpg"}}},{"node":{"id":"4ed4a369-ddc4-5c5a-acdb-1c63a20161ae","excerpt":"Back when I first got my Sony Alpha a7ii there weren\'t that many lens to choose from, but now there\'s an adundance of lens to use ranging…","frontmatter":{"author":"awang","slug":"my-top-3-e-mount-lens-for-shooting-portraits-a1ee7bdb","title":"My Top 3 E-Mount Lens for Shooting Portraits","date":"July 9, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/top_emount/cover.jpg"}}},{"node":{"id":"f6ac2d95-fb32-588b-9722-1fe0249c643e","excerpt":"I believe one of the most important things to consider when designing a website is its accessibility. Designing a website to be universally…","frontmatter":{"author":"awang","slug":"how-make-your-website-accessible-e77547a0","title":"How to make your website accessible","date":"July 7, 2020","modified_date":"July 30, 2020","cover_photo":"/blogImages/accessibility/cover.jpg"}}}]}}}')},rcA6:function(e,t,a){},s7NA:function(e,t,a){},u8TT:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-404-index-js-c930db220a070c97831c.js.map