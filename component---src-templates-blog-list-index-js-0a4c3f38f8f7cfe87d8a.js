(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8hGN":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),c=a("EV5P");function i(e){var t=e.type;Object(c.a)();return"leaderboard"===t?r.a.createElement("div",{className:"AdsContainer",id:"138821154"}):"blog-content"===t?r.a.createElement("div",{className:"AdsContainer",id:"188970836"}):"billboard"===t?r.a.createElement("div",{className:"AdsContainer",id:"426407765"}):null}},ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),i=a("510Z"),o=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(c.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"ImgContainer"},r.a.createElement(i.a,{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt),r.a.createElement("div",{className:"AuthorBubbleContainer"},r.a.createElement(o.a,{id:a.author})))))}},Ib09:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o})),a.d(t,"blogListQuery",(function(){return l}));var n=a("q1tI"),r=a.n(n),c=a("ugak"),i=a("I/Ru");var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(i.a,{adsData:[{id:"426407765",size:"970x250",id2:"426407765",isMobile:!1}]},r.a.createElement(c.a,{title:"Recent Posts",data:e,tag:"blogs/all"}))},n}(r.a.Component),l="389948774"},YoZY:function(e,t,a){},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("91GP");var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),i=a("0b+E"),o=a("wtQ5"),l=a("ERfW"),s=a("8hGN"),u=a("JiuF");a("sQCi");function m(e){var t=e.data,a=e.tag,m=e.title,d=Object(n.useState)(new Date)[0];Object(n.useEffect)((function(){return function(){var e=(new Date).getMilliseconds()-d.getMilliseconds();i.a.timing({category:"TimeOnBlogList",variable:"time",value:e,label:a})}}));var f=Object.assign({},Object(u.a)(t.edges),{name:"TechWaifu's Blog Posts Related to #"+a}),g=t.edges,p=2===t.pageInfo.currentPage?"/"+a:"/"+a+"/"+(t.pageInfo.currentPage-1),v=1===t.pageInfo.currentPage?""+a:a+"/"+t.pageInfo.currentPage,E=parseInt(g.length/2),b=g.slice(0,E).concat({node:{isAd:!0}}).concat(g.slice(E));return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(o.a,{title:"Recent blog posts for #"+m,keywords:[m],urlPath:v,metadata:JSON.stringify(f)}),r.a.createElement("h1",{className:"Title"},m),b.map((function(e){var t=e.node;return t.isAd?r.a.createElement(s.a,{type:"billboard"}):r.a.createElement(l.a,{key:t.id,data:t})})),r.a.createElement("div",{className:"PaginationButtonCtr"},t.pageInfo.hasPreviousPage&&r.a.createElement(c.Link,{className:"PaginationButton",to:p},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(c.Link,{className:"PaginationButton Next",to:"/"+a+"/"+(t.pageInfo.currentPage+1)},"Next")))}},"vPZ/":function(e,t,a){"use strict";a("f3/d");var n=a("q1tI"),r=a.n(n),c=a("510Z"),i=a("SoFZ");a("YoZY");t.a=function(e){var t=e.id,a=i.a[t]||null;if(!a)return null;var n=a.name||"",o=a.picture||"";return r.a.createElement("div",{className:"AuthorInfo"},r.a.createElement("div",{className:"AuthorBubbleImageContainer"},r.a.createElement(c.a,{className:"AuthorBubble",src:o,alt:n})),r.a.createElement("div",{className:"AuthorTitle"},"By ",n))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-0a4c3f38f8f7cfe87d8a.js.map