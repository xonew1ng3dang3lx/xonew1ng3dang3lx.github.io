(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("510Z"),i=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(c.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"ImgContainer"},r.a.createElement(o.a,{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt),r.a.createElement("div",{className:"AuthorBubbleContainer"},r.a.createElement(i.a,{id:a.author})))))}},Ib09:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"blogListQuery",(function(){return l}));var n=a("q1tI"),r=a.n(n),c=a("ugak"),o=a("I/Ru");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Recent Posts",data:e,tag:"blogs/all"}))},n}(r.a.Component),l="389948774"},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("91GP");var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("0b+E"),i=a("wtQ5"),l=a("ERfW"),s=a("8hGN"),u=a("JiuF");a("sQCi");function m(e){var t=e.data,a=e.tag,m=e.title,g=Object(n.useState)(new Date)[0];Object(n.useEffect)((function(){return function(){var e=(new Date).getMilliseconds()-g.getMilliseconds();o.a.event({category:"TimeOnBlogList",variable:"time",value:e,label:a})}}));var d=Object.assign({},Object(u.a)(t.edges),{name:"TechWaifu's Blog Posts Related to #"+a}),p=t.edges,f=2===t.pageInfo.currentPage?"/"+a:"/"+a+"/"+(t.pageInfo.currentPage-1),E=1===t.pageInfo.currentPage?""+a:a+"/"+t.pageInfo.currentPage,v=parseInt(p.length/2),b=p.slice(0,v).concat({node:{isAd:!0}}).concat(p.slice(v));return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(i.a,{title:"Recent blog posts for #"+m,keywords:[m],urlPath:E,metadata:JSON.stringify(d)}),r.a.createElement("h1",{className:"Title"},m),b.map((function(e){var t=e.node;return t.isAd?r.a.createElement(s.a,{type:"billboard"}):r.a.createElement(l.a,{key:t.id,data:t})})),r.a.createElement("div",{className:"PaginationButtonCtr"},t.pageInfo.hasPreviousPage&&r.a.createElement(c.Link,{className:"PaginationButton",to:f},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(c.Link,{className:"PaginationButton Next",to:"/"+a+"/"+(t.pageInfo.currentPage+1)},"Next")),r.a.createElement(s.a,{type:"leaderboard"}))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-a918035b676f06557b69.js.map