(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8hGN":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("EV5P");function c(e){var t=e.type;return Object(i.a)()<=728?r.a.createElement("div",{className:"AdsContainer",id:"188970836"}):"leaderboard"===t?r.a.createElement("div",{className:"AdsContainer",id:"138821154"}):"blog-content"===t?r.a.createElement("div",{className:"AdsContainer",id:"188970836"}):"billboard"===t?r.a.createElement("div",{className:"AdsContainer",id:"426407765"}):null}},ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),c=a("510Z"),o=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(i.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"ImgContainer"},r.a.createElement(c.a,{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt),r.a.createElement("div",{className:"AuthorBubbleContainer"},r.a.createElement(o.a,{id:a.author})))))}},YoZY:function(e,t,a){},jDkr:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return o})),a.d(t,"blogListQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),i=a("ugak"),c=a("I/Ru");var o=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(c.a,{adsData:[{id:"426407765",size:"970x250",id2:"426407765",isMobile:!1},{id:"188970836",size:"300x250",id2:"188970836",isMobile:!0}]},r.a.createElement(i.a,{title:""+this.props.pageContext.tag,data:e,tag:"blogs/"+this.props.pageContext.tag}))},n}(r.a.Component),s="1210854636"},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("91GP");var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),c=a("0b+E"),o=a("wtQ5"),s=a("ERfW"),l=a("8hGN"),u=a("JiuF");a("sQCi");function d(e){var t=e.data,a=e.tag,d=e.title,m=Object(n.useState)(new Date)[0];Object(n.useEffect)((function(){return function(){var e=(new Date).getMilliseconds()-m.getMilliseconds();c.a.timing({category:"TimeOnBlogList",variable:"time",value:e,label:a})}}));var g=Object.assign({},Object(u.a)(t.edges),{name:"TechWaifu's Blog Posts Related to #"+a}),p=t.edges,f=2===t.pageInfo.currentPage?"/"+a:"/"+a+"/"+(t.pageInfo.currentPage-1),v=1===t.pageInfo.currentPage?""+a:a+"/"+t.pageInfo.currentPage,E=parseInt(p.length/2),b=p.slice(0,E).concat({node:{isAd:!0}}).concat(p.slice(E));return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(o.a,{title:"Recent blog posts for #"+d,keywords:[d],urlPath:v,metadata:JSON.stringify(g)}),r.a.createElement("h1",{className:"Title"},d),b.map((function(e){var t=e.node;return t.isAd?r.a.createElement(l.a,{type:"billboard"}):r.a.createElement(s.a,{key:t.id,data:t})})),r.a.createElement("div",{className:"PaginationButtonCtr"},t.pageInfo.hasPreviousPage&&r.a.createElement(i.Link,{className:"PaginationButton",to:f},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(i.Link,{className:"PaginationButton Next",to:"/"+a+"/"+(t.pageInfo.currentPage+1)},"Next")))}},"vPZ/":function(e,t,a){"use strict";a("f3/d");var n=a("q1tI"),r=a.n(n),i=a("510Z"),c=a("SoFZ");a("YoZY");t.a=function(e){var t=e.id,a=c.a[t]||null;if(!a)return null;var n=a.name||"",o=a.picture||"";return r.a.createElement("div",{className:"AuthorInfo"},r.a.createElement("div",{className:"AuthorBubbleImageContainer"},r.a.createElement(i.a,{className:"AuthorBubble",src:o,alt:n})),r.a.createElement("div",{className:"AuthorTitle"},"By ",n))}}}]);
//# sourceMappingURL=component---src-templates-tagged-blog-list-index-js-0964b8e4eb8be505469e.js.map