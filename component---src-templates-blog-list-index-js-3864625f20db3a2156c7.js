(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ERfW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("Wbzz");a("u8TT");t.a=function(e){var t=e.data,a=t.frontmatter;return r.a.createElement("article",{className:"ArticleCard"},r.a.createElement(o.a,{to:"/"+a.slug},r.a.createElement("div",{className:"imgContainer"},r.a.createElement("img",{src:a.cover_photo,alt:a.title})),r.a.createElement("div",{className:"TextContainer"},r.a.createElement("div",{className:"Title"},a.title),r.a.createElement("p",{className:"Excerpt"},t.excerpt))))}},Ib09:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return i})),a.d(t,"blogListQuery",(function(){return s}));var n=a("q1tI"),r=a.n(n),o=a("ugak"),c=a("I/Ru");var i=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.allMarkdownRemark;return r.a.createElement(c.a,null,r.a.createElement(o.a,{title:"Recent Posts",data:e,tag:"blogs/all"}))},n}(r.a.Component),s="389948774"},sQCi:function(e,t,a){},u8TT:function(e,t,a){},ugak:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("OG14");var n=a("q1tI"),r=a.n(n),o=a("Wbzz"),c=a("0b+E"),i=a("wtQ5"),s=a("ERfW");a("sQCi");var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var u=n.prototype;return u.componentDidMount=function(){c.a.initialize("UA-88285026-2"),c.a.pageview(window.location.pathname+window.location.search)},u.render=function(){var e=this.props,t=e.data,a=e.tag,n=e.title,c=t.edges,u=2===t.pageInfo.currentPage?"/"+a:"/"+a+"/"+(t.pageInfo.currentPage-1),l=1===t.pageInfo.currentPage?""+a:a+"/"+t.pageInfo.currentPage;return r.a.createElement("section",{className:"BlogListPage"},r.a.createElement(i.a,{title:this.props.title,keywords:[n],urlPath:l}),r.a.createElement("h1",{className:"Title"},n),c.map((function(e){var t=e.node;return r.a.createElement(s.a,{key:t.id,data:t})})),t.pageInfo.hasPreviousPage&&r.a.createElement(o.a,{to:u},"Prev"),t.pageInfo.hasNextPage&&r.a.createElement(o.a,{to:"/"+a+"/"+(t.pageInfo.currentPage+1)},"Next"))},n}(r.a.Component)}}]);
//# sourceMappingURL=component---src-templates-blog-list-index-js-3864625f20db3a2156c7.js.map