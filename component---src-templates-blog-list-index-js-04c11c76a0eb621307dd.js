(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("510Z"),i=a("vPZ/");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(c.Link,{to:"/"+a.slug},r.a.createElement("div",{className:"ImgContainer"},r.a.createElement(o.a,{src:a.cover_photo+"&isNotExpandable=true",alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("div",{className:"Date"},a.date),r.a.createElement("p",{className:"Excerpt"},t.excerpt),r.a.createElement("div",{className:"AuthorBubbleContainer"},r.a.createElement(i.a,{id:a.author})))))}},Ib09:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"blogListQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),c=a("ugak"),o=a("I/Ru");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(o.a,null,r.a.createElement(c.a,{title:"Recent Posts",data:e,tag:"blogs/all"}))},n}(r.a.Component),s="2152507211"},nhbF:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("HQhv");var n=function(e){return e.toLowerCase().split(" ").join("_").trim()}},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));a("E5k/");var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("0b+E"),i=a("nhbF"),s=a("wtQ5"),l=a("ERfW"),u=a("8hGN"),m=a("JiuF");a("sQCi");function d(e){var t=e.data,a=e.tag,d=e.title,g=Object(n.useState)(new Date)[0];Object(n.useEffect)((function(){return function(){var e=(new Date).getMilliseconds()-g.getMilliseconds();o.a.event({category:"TimeOnBlogList",variable:"time",value:e,label:a})}}));var p=Object.assign({},Object(m.a)(t.edges),{name:"TechWaifu's Blog Posts Related to #"+a}),f=t.edges,E=Object(i.a)(a),v=2===t.pageInfo.currentPage?"/"+E:"/"+E+"/"+(t.pageInfo.currentPage-1),b=1===t.pageInfo.currentPage?""+E:E+"/"+t.pageInfo.currentPage,h=parseInt(f.length/2),N=f.slice(0,h).concat({node:{isAd:!0}}).concat(f.slice(h));return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(s.a,{title:"Recent blog posts for #"+d,keywords:[d],urlPath:"/"+b,metadata:[p]}),r.a.createElement("h1",{className:"Title"},d),N.map((function(e){var t=e.node;return t.isAd?r.a.createElement(u.a,{key:"Ad",type:"billboard"}):r.a.createElement(l.a,{key:t.id,data:t})})),r.a.createElement("div",{className:"PaginationButtonCtr"},t.pageInfo.hasPreviousPage&&r.a.createElement(c.Link,{className:"PaginationButton",to:v},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(c.Link,{className:"PaginationButton Next",to:"/"+E+"/"+(t.pageInfo.currentPage+1)},"Next")),r.a.createElement(u.a,{type:"leaderboard"}))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-04c11c76a0eb621307dd.js.map