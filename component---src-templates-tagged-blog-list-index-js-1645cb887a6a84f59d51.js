(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),c=a("UUyv");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(o.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"imgContainer"},r.a.createElement(c.LazyLoadImage,{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt))))}},jDkr:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"blogListQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("ugak"),c=a("I/Ru");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:""+this.props.pageContext.tag,data:e,tag:this.props.pageContext.tag}))},n}(r.a.Component),s="1210854636"},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),c=a("0b+E"),i=a("wtQ5"),s=a("ERfW");a("sQCi");function l(e){var t=e.data,a=e.tag,l=e.title,u=Object(n.useState)(new Date)[0];Object(n.useEffect)((function(){return function(){var e=(new Date).getMilliseconds()-u.getMilliseconds();c.a.timing({category:"TimeOnBlogList",variable:"time",value:e,label:a})}}));var g=t.edges,m=2===t.pageInfo.currentPage?"/"+a:"/"+a+"/"+(t.pageInfo.currentPage-1),p=1===t.pageInfo.currentPage?""+a:a+"/"+t.pageInfo.currentPage;return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(i.a,{title:l,keywords:[l],urlPath:p}),r.a.createElement("h1",{className:"Title"},l),g.map((function(e){var t=e.node;return r.a.createElement(s.a,{key:t.id,data:t})})),r.a.createElement("div",{className:"PaginationButtonCtr"},t.pageInfo.hasPreviousPage&&r.a.createElement(o.Link,{className:"PaginationButton",to:m},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(o.Link,{className:"PaginationButton Next",to:"/"+a+"/"+(t.pageInfo.currentPage+1)},"Next")))}}}]);
//# sourceMappingURL=component---src-templates-tagged-blog-list-index-js-1645cb887a6a84f59d51.js.map