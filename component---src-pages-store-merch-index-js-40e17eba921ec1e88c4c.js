(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0E1F":function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return d}));var a=r("7emQ"),n=r("q1tI"),i=r.n(n),c=r("Wbzz"),l=r("I/Ru"),o=r("0b+E"),s=r("wtQ5"),u=r("dntC"),m=r("510Z"),p=r("JiuF");r("HsLP");function d(){var e=Object(n.useState)(new Date)[0];return Object(n.useEffect)((function(){return function(){var t=(new Date).getMilliseconds()-e.getMilliseconds();o.a.event({category:"TimeOnMerch",variable:"time",value:t,label:"Merch"})}})),i.a.createElement(l.a,null,i.a.createElement(c.StaticQuery,{query:"2515986582",render:function(e){var t=e.merchDataJson,r={"@context":"http://schema.org","@graph":t.content.map((function(e){return Object(p.c)({name:e.title,brand:e.type,description:e.title,image:e.photo,price:e.price,priceCurrency:e.currency,url:e.url})}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:"TechWaifu's Merchandise Store",metadata:JSON.stringify(r)}),i.a.createElement("div",{className:"MerchStore"},i.a.createElement("h1",null,t.title),i.a.createElement("div",{className:"Subtitle"},t.subtitle),i.a.createElement("div",{className:"MerchLinkContainer"},t.content.map((function(e){return i.a.createElement("div",{className:"MerchLink",key:e.id},i.a.createElement(u.a,{href:e.url,title:e.title},i.a.createElement(m.a,{src:e.photo,alt:e.title}),i.a.createElement("div",{className:"ProductName"},e.title),i.a.createElement("div",{className:"Price"},e.priceText)))})))))},data:a}))}},"7emQ":function(e){e.exports=JSON.parse('{"data":{"merchDataJson":{"title":"Merch Store","subtitle":"All the items are designed by our team. If you enjoy our content please purchase an item to support us!","content":[{"id":"tsmic=maispace-2&pid=2&cid=2122","url":"https://teespring.com/jojo-s-bizarre-adventure-kille?tsmac=store&tsmic=maispace-2&pid=2&cid=2122","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/wj3l0hF5p4rNt4JcpevNx5bqcKQ/480/560.jpg","priceText":"$21.99","currency":"USD","price":"21.99","title":"Jojo\'s Bizarre Adventure Long Killer Queen T-Shirt"},{"id":"tsmic=maispace-2&pid=212&cid=5818","url":"https://teespring.com/jojo-s-bizarre-adventure-kille?tsmac=store&tsmic=maispace-2&pid=212&cid=5818","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/X7_eGkyXJ8NXXV9EGuEopgwjXgM/480/560.jpg","priceText":"$38.99","currency":"USD","price":"21.99","title":"Jojo\'s Bizarre Adventure Long Killer Queen Hoodie"}]}}}')},HsLP:function(e,t,r){},dntC:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("q1tI"),n=r.n(a),i=r("0b+E");function c(e){return n.a.createElement(i.a.OutboundLink,{eventLabel:e.href,to:e.href,target:"_blank",title:e.title,trackerNames:[e.href]},e.children)}}}]);
//# sourceMappingURL=component---src-pages-store-merch-index-js-40e17eba921ec1e88c4c.js.map