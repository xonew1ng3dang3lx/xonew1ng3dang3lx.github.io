(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("510Z");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(c.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"imgContainer"},r.a.createElement(o.a,{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt))))}},Ib09:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"blogListQuery",(function(){return l}));var n=a("q1tI"),r=a.n(n),c=a("ugak"),o=a("I/Ru");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Recent Posts",data:e,tag:"blogs/all"}))},n}(r.a.Component),l="389948774"},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("0b+E"),i=a("wtQ5"),l=a("ERfW");a("sQCi");function s(e){var t=e.data,a=e.tag,s=e.title,u=Object(n.useState)(new Date)[0];Object(n.useEffect)((function(){return function(){var e=(new Date).getMilliseconds()-u.getMilliseconds();o.a.timing({category:"TimeOnBlogList",variable:"time",value:e,label:a})}}));var m=t.edges,g=2===t.pageInfo.currentPage?"/"+a:"/"+a+"/"+(t.pageInfo.currentPage-1),p=1===t.pageInfo.currentPage?""+a:a+"/"+t.pageInfo.currentPage;return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(i.a,{title:"Recent blog posts for #"+s,keywords:[s],urlPath:p}),r.a.createElement("h1",{className:"Title"},s),m.map((function(e){var t=e.node;return r.a.createElement(l.a,{key:t.id,data:t})})),r.a.createElement("div",{className:"PaginationButtonCtr"},t.pageInfo.hasPreviousPage&&r.a.createElement(c.Link,{className:"PaginationButton",to:g},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(c.Link,{className:"PaginationButton Next",to:"/"+a+"/"+(t.pageInfo.currentPage+1)},"Next")))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-6d5da29ad73b06115c48.js.map