(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),c=a("510Z"),i=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(o.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"ImgContainer"},r.a.createElement(c.a,{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt),r.a.createElement("div",{className:"AuthorBubbleContainer"},r.a.createElement(i.a,{id:a.author})))))}},YoZY:function(e,t,a){},jDkr:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"blogListQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("ugak"),c=a("I/Ru");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:""+this.props.pageContext.tag,data:e,tag:"blogs/"+this.props.pageContext.tag}))},n}(r.a.Component),s="1210854636"},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("91GP");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),c=a("0b+E"),i=a("wtQ5"),s=a("ERfW"),l=a("JiuF");a("sQCi");function u(e){var t=e.data,a=e.tag,u=e.title,m=Object(n.useState)(new Date)[0];Object(n.useEffect)((function(){return function(){var e=(new Date).getMilliseconds()-m.getMilliseconds();c.a.timing({category:"TimeOnBlogList",variable:"time",value:e,label:a})}}));var g=Object.assign({},Object(l.a)(t.edges),{name:"TechWaifu's Blog Posts Related to #"+a}),p=t.edges,f=2===t.pageInfo.currentPage?"/"+a:"/"+a+"/"+(t.pageInfo.currentPage-1),d=1===t.pageInfo.currentPage?""+a:a+"/"+t.pageInfo.currentPage;return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(i.a,{title:"Recent blog posts for #"+u,keywords:[u],urlPath:d,metadata:JSON.stringify(g)}),r.a.createElement("h1",{className:"Title"},u),p.map((function(e){var t=e.node;return r.a.createElement(s.a,{key:t.id,data:t})})),r.a.createElement("div",{className:"PaginationButtonCtr"},t.pageInfo.hasPreviousPage&&r.a.createElement(o.Link,{className:"PaginationButton",to:f},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(o.Link,{className:"PaginationButton Next",to:"/"+a+"/"+(t.pageInfo.currentPage+1)},"Next")))}},"vPZ/":function(e,t,a){"use strict";a("f3/d");var n=a("q1tI"),r=a.n(n),o=a("510Z"),c=a("SoFZ");a("YoZY");t.a=function(e){var t=e.id,a=c.a[t]||null;if(!a)return null;var n=a.name||"",i=a.picture||"";return r.a.createElement("div",{className:"AuthorInfo"},r.a.createElement("div",{className:"AuthorBubbleImageContainer"},r.a.createElement(o.a,{className:"AuthorBubble",src:i,alt:n})),r.a.createElement("div",{className:"AuthorTitle"},"By ",n))}}}]);
//# sourceMappingURL=component---src-templates-tagged-blog-list-index-js-7352ca55eaf89b2394a6.js.map