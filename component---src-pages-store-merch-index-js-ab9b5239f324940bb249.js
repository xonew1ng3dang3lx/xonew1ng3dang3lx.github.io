(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0E1F":function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return g}));var r=i("7emQ"),c=i("q1tI"),s=i.n(c),a=i("Wbzz"),n=i("I/Ru"),o=i("0b+E"),p=i("wtQ5"),m=i("dntC"),l=i("510Z"),u=i("JiuF");i("HsLP");function g(){var e=Object(c.useState)(new Date)[0];return Object(c.useEffect)((function(){return function(){var t=(new Date).getMilliseconds()-e.getMilliseconds();o.a.event({category:"TimeOnMerch",variable:"time",value:t,label:"Merch"})}})),s.a.createElement(n.a,null,s.a.createElement(a.StaticQuery,{query:"2515986582",render:function(e){var t=e.merchDataJson,i=t.content.map((function(e){return Object(u.c)({name:e.title,brand:e.type,description:e.title,image:e.photo,price:e.price,priceCurrency:e.currency,url:e.url})}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{title:"TechWaifu's Merchandise Store",metadata:i}),s.a.createElement("div",{className:"MerchStore"},s.a.createElement("h1",null,t.title),s.a.createElement("div",{className:"Subtitle"},t.subtitle),s.a.createElement("div",{className:"MerchLinkContainer"},t.content.map((function(e){return s.a.createElement("div",{className:"MerchLink",key:e.id},s.a.createElement(m.a,{href:e.url,title:e.title},s.a.createElement(l.a,{src:e.photo,alt:e.title}),s.a.createElement("div",{className:"ProductName"},e.title),s.a.createElement("div",{className:"Price"},e.priceText)))})))))},data:r}))}},"7emQ":function(e){e.exports=JSON.parse('{"data":{"merchDataJson":{"title":"Merch Store","subtitle":"All the items are designed by our team. If you enjoy our content please purchase an item to support us!","content":[{"id":"tsmic=maispace-2&pid=2&cid=2122","url":"https://teespring.com/jojo-s-bizarre-adventure-kille?tsmac=store&tsmic=maispace-2&pid=2&cid=2122","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/wj3l0hF5p4rNt4JcpevNx5bqcKQ/480/560.jpg","priceText":"$21.99","currency":"USD","price":"21.99","title":"Jojo\'s Bizarre Adventure Long Killer Queen T-Shirt"},{"id":"tsmic=maispace-2&pid=212&cid=5818","url":"https://teespring.com/jojo-s-bizarre-adventure-kille?tsmac=store&tsmic=maispace-2&pid=212&cid=5818","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/X7_eGkyXJ8NXXV9EGuEopgwjXgM/480/560.jpg","priceText":"$38.99","currency":"USD","price":"21.99","title":"Jojo\'s Bizarre Adventure Long Killer Queen Hoodie"},{"id":"tsmac=store&tsmic=maispace-2&pid=972&cid=103943","url":"https://teespring.com/new-bob-animal-crossing?tsmac=store&tsmic=maispace-2&pid=972&cid=103943","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/Ep8amvd1OjZhXsnRnnO8p2GAjfM/480/560.jpg","priceText":"$14.99","currency":"USD","price":"14.99","title":"Bob Animal Crossing Face Mask"},{"id":"tsmac=store&tsmic=maispace-2&pid=972&cid=103943","url":"https://teespring.com/new-bob-animal-crossing?tsmac=store&tsmic=maispace-2&pid=823&cid=103575","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/6VDXCQ5NO7lvczlCiaNXX3Nrtbc/480/560.jpg","priceText":"$24.99","currency":"USD","price":"24.99","title":"Hi My Name is Bob Animal Crossing T-Shirt"},{"id":"tsmac=store&tsmic=maispace-2&pid=14&cid=2536","url":"https://teespring.com/bob-animal-crossing-shirt?tsmac=store&tsmic=maispace-2&pid=14&cid=2536","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/7RzltgLAspjukWYQbuFbl2ZPXsk/480/560.jpg","priceText":"$21.99","currency":"USD","price":"21.99","title":"Yoga Bob Animal Crossing Tank Top"},{"id":"tsmac=store&tsmic=maispace-2&pid=658&cid=102908","url":"https://teespring.com/new-bob-animal-crossing?tsmac=store&tsmic=maispace-2&pid=658&cid=102908","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/Q3MNQDhBQF54LQL9uyDOyy-YNPk/480/560.jpg","priceText":"$14.99","currency":"USD","price":"14.99","title":"Hi My Name is Bob Animal Crossing Mug"},{"id":"tsmac=store&tsmic=maispace-2&pid=794&cid=103544","url":"https://teespring.com/get-bob-animal-crossing-sticke?tsmac=store&tsmic=maispace-2&pid=794&cid=103544","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/wfLuMSyEPYD22d8z2uS-QNtHrkI/480/560.jpg","priceText":"$3.99","currency":"USD","price":"3.99","title":"Yoga Bob Animal Crossing Sticker"},{"id":"cross_sell=true&cross_sell_format=none&count_cross_sell_products_shown=7&pid=794&cid=103544","url":"https://teespring.com/en-GB/new-bob-animal-crossing-sticke?cross_sell=true&cross_sell_format=none&count_cross_sell_products_shown=7&pid=794&cid=103544","type":"teespring","photo":"https://vangogh.teespring.com/v3/image/8JcktUe5l4LTrXCu4hkoLPJ7bck/480/560.jpg","priceText":"$3.99","currency":"USD","price":"3.99","title":"Yoga Bob 2 Animal Crossing Sticker"}]}}}')},HsLP:function(e,t,i){},dntC:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));var r=i("q1tI"),c=i.n(r),s=i("0b+E");function a(e){return c.a.createElement(s.a.OutboundLink,{eventLabel:e.href,to:e.href,target:"_blank",title:e.title,trackerNames:[e.href]},e.children)}}}]);
//# sourceMappingURL=component---src-pages-store-merch-index-js-ab9b5239f324940bb249.js.map