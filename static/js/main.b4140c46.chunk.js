(this["webpackJsonpsimple-react"]=this["webpackJsonpsimple-react"]||[]).push([[0],{125:function(e,t){},126:function(e,t){},127:function(e,t){},128:function(e,t){},129:function(e,t){},164:function(e,t,n){},224:function(e,t){},226:function(e,t){},273:function(e,t,n){},275:function(e,t){},276:function(e,t){},277:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(55),a=n.n(r),i=n(7),l=n(4),u=n(93),o=(n(163),n(164),n(1)),j=function(e){var t=Object(u.defaultLayoutPlugin)(),n=Object(c.useState)(null),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(c.useEffect)((function(){e.file||a(null);var t=new FileReader;t.onload=function(){a(t.result)},t.readAsDataURL(e.file)}),[e.file]),Object(o.jsx)("div",{className:e.className+" PreviewPDF",children:Object(o.jsx)(l.Worker,{workerUrl:"https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js",children:r&&Object(o.jsx)(l.Viewer,{fileUrl:r,plugins:[t]})})})},f=n(38),b=n.n(f),d=n(94),O=n(95),h=n.n(O),x=(n(273),function(e){var t=Object(c.useState)(""),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)(18),l=Object(i.a)(a,2),u=l[0],j=l[1];return Object(c.useEffect)((function(){if(e.file){var t=new FileReader;t.onload=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.convertToHtml({arrayBuffer:t.result});case 2:n=e.sent,r(n.value);case 4:case"end":return e.stop()}}),e)}))),t.readAsArrayBuffer(e.file)}else r("")}),[s,e.file]),Object(o.jsxs)("div",{className:e.className+" PreviewDOCX",children:[Object(o.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n\t\t\t\t.PreviewDOCX *:not(.button) { font-size: ".concat(u,"px }\n\t\t\t")}}),Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("div",{className:"button",onClick:function(){return j(u+2)},children:"+"}),Object(o.jsx)("div",{className:"button",onClick:function(){return j(u-2)},children:"\u2212"})]}),Object(o.jsx)("div",{className:"sheet",children:Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:s}})})]})}),m=n(22),v=n.n(m),p=(n(277),function(e){var t=Object(c.useState)({cols:[],rows:[]}),n=Object(i.a)(t,2),s=n[0],r=n[1],a=Object(c.useState)([]),l=Object(i.a)(a,2),u=l[0],j=l[1],f=Object(c.useState)(0),b=Object(i.a)(f,2),d=b[0],O=b[1];Object(c.useEffect)((function(){var t=new FileReader,n=!!t.readAsBinaryString;t.onload=function(e){var t=e.target.result,c=v.a.read(t,{type:n?"binary":"array"});j(c.SheetNames);var s=c.SheetNames[d],a=c.Sheets[s],i=v.a.utils.sheet_to_json(a,{header:1});try{var l=h(a["!ref"]);r({rows:i,cols:l})}catch(u){r({rows:[],cols:[]})}},e.file&&n?t.readAsBinaryString(e.file):t.readAsArrayBuffer(e.file)}),[e.file,d]),Object(c.useEffect)((function(){O(0)}),[e.file]);var h=function(e){for(var t=[],n=v.a.utils.decode_range(e).e.c+1,c=0;c<n;++c)t[c]={name:v.a.utils.encode_col(c),key:c};return t};return Object(o.jsxs)("div",{className:e.className+" PreviewXLSX",children:[Object(o.jsx)("div",{className:"ExcelTable2007-buttons",children:u.map((function(e,t){return Object(o.jsx)("button",{className:"ExcelTable2007-button",onClick:function(){return O(t)},children:e},t)}))}),Object(o.jsx)("table",{className:"ExcelTable2007",children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{className:"heading"}),s.cols.map((function(e){return Object(o.jsx)("th",{children:-1===e.key?"":e.name},e.key)}))]}),s.rows.map((function(e,t){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"heading",children:t},t),s.cols.map((function(t){return Object(o.jsx)("td",{children:e[t.key]},t.key)}))]},t)}))]})})]})});n(278);var y=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(null),a=Object(i.a)(r,2),l=a[0],u=a[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];s(t||null),u(t?t.name.split(".").slice(-1)[0]:null)}})}),"pdf"===l&&Object(o.jsx)(j,{file:n}),("doc"===l||"docx"===l)&&Object(o.jsx)(x,{file:n}),("xls"===l||"xlsx"===l)&&Object(o.jsx)(p,{file:n})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,280)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(y,{})}),document.getElementById("root")),g()},59:function(e,t){},92:function(e,t){}},[[279,1,2]]]);
//# sourceMappingURL=main.b4140c46.chunk.js.map