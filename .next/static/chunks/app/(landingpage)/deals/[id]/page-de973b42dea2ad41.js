(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9199],{93474:function(e,t,s){Promise.resolve().then(s.bind(s,4635))},62022:function(e,t,s){"use strict";var l=s(57437),a=s(16691),r=s.n(a);t.Z=e=>{let{title:t,leftIcon:s,rightIcon:a,handleClick:n,submitting:c,type:i,bgColor:o,textColor:d}=e;return(0,l.jsxs)("button",{type:i||"button",disabled:c||!1,className:"flexCenter gap-3 px-8 py-2 \n        ".concat(d||"text-white"," \n        ").concat(c?"bg-black/50":o||"bg-primary"," rounded-full text-md font-medium max-md:w-full"),onClick:n,children:[s&&(0,l.jsx)(r(),{src:s,width:14,height:14,alt:"left icon"}),t,a&&(0,l.jsx)(r(),{src:a,width:14,height:14,alt:"right icon"})]})}},26679:function(e,t,s){"use strict";var l=s(57437);s(2265),t.Z=e=>{let{text:t,bgColor:s,textColor:a,icon:r,width:n}=e;return(0,l.jsxs)("label",{className:"py-1 px-3 items-center text-center rounded-md ".concat(s," ").concat(n),children:[r,(0,l.jsx)("small",{className:"".concat(a),children:t})]})}},4635:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var l=s(57437),a=s(2265),r=s(16691),n=s.n(r),c=s(62022),i=s(26679),o=s(47356),d=()=>(0,l.jsxs)("div",{className:"container mx-auto  flex flex-col  md:flex-row md:space-x-10 py-12",children:[(0,l.jsx)(n(),{src:o.fc.Image,width:400,height:200,alt:"logo",className:"md:w-1/2 flex "}),(0,l.jsxs)("div",{className:"md:1/2 flex flex-col  justify-between py-4",children:[(0,l.jsx)(i.Z,{bgColor:"bg-secondary",text:"Earn N100 Cashback",textColor:"text-primary",width:"w-2/3 md:w-1/3"}),(0,l.jsxs)("div",{className:"flex items-center md:space-x-4 py-2 ",children:[(0,l.jsx)(n(),{src:o.fc.merchantLogo,width:100,height:100,alt:"logo",className:" "}),(0,l.jsxs)("div",{className:"px-2",children:[(0,l.jsx)("h3",{className:"font-semibold",children:o.fc.merchantName}),(0,l.jsx)("small",{className:"",children:o.fc.merchantEmail})]})]}),(0,l.jsx)("h3",{children:o.fc.text}),(0,l.jsx)("small",{className:"py-2 md:py-0",children:o.fc.subtext}),(0,l.jsxs)("div",{className:"flex items-center space-x-6 py-4",children:[(0,l.jsx)("div",{className:"text-sm",children:(0,l.jsx)(c.Z,{title:"Claim offer"})}),(0,l.jsx)("div",{children:(0,l.jsx)(i.Z,{bgColor:"bg-secondary",text:"Deals end in 30 days",textColor:"text-primary"})})]})]})]}),x=s(61396),m=s.n(x),u=e=>{let{imageSrc:t,text:s,amount:a,link:r}=e;return(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsxs)("div",{className:"",children:[(0,l.jsx)(n(),{src:t,width:350,height:200,alt:"logo",className:" "}),(0,l.jsx)("div",{className:"-mt-10 hidden md:flex md:ml-52  md:absolute",children:(0,l.jsx)(i.Z,{bgColor:"bg-secondary",text:"Earn N100 Cashback",textColor:"text-primary"})})]}),(0,l.jsxs)("div",{className:"p-2",children:[(0,l.jsx)(i.Z,{bgColor:"bg-secondary",text:"Earn N100 Cashback",textColor:"text-primary"}),(0,l.jsxs)("div",{className:"py-2 space-y-2",children:[(0,l.jsx)("p",{children:s}),(0,l.jsxs)("p",{children:["N",a]}),(0,l.jsx)(m(),{href:"/",className:"text-sm underline",children:r})]})]})]})},f=()=>{let[e]=(0,a.useState)(o.Zc),[t,s]=(0,a.useState)("All"),r="All"===t?e:e.filter(e=>e.category===t),n=Array.from(new Set(e.map(e=>e.category)));return(0,l.jsxs)("div",{className:"container mx-auto px-4",children:[(0,l.jsx)(d,{}),(0,l.jsxs)("div",{className:"flex justify-between flex-col",children:[(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{className:"flex justify-between pt-6",children:[(0,l.jsx)("h3",{className:"text-md font-normal",children:"More deals for you"}),(0,l.jsx)("p",{className:"text-sm ",children:"See all"})]}),(0,l.jsxs)("div",{className:"md:flex space-x-4 py-6 hidden",children:[(0,l.jsx)("button",{onClick:()=>s("All"),className:"bg-primary text-xs px-10 py-1 rounded-3xl",children:"All"}),n.map(e=>(0,l.jsx)("button",{onClick:()=>s(e),className:"bg-secondary text-xs md:text-base px-4 md:px-10 py-1 rounded-3xl",children:e},e))]})]}),(0,l.jsx)("div",{className:"container py-6 mx-auto flex lg:hidden md:hidden",children:(0,l.jsxs)("select",{id:"option",name:"option",value:t,onChange:e=>{let t=e.target.value;s(t)},className:"appearance-none bg-secondary text-sm p-2 border border-primary rounded shadow-md w-full md:w-auto",children:[(0,l.jsx)("option",{value:"All",children:"All Categories"}),n.map((e,t)=>(0,l.jsx)("option",{value:e,children:e},t))]})}),(0,l.jsx)("div",{className:"gap-10 grid md:grid-cols-3 overflow-hidden",children:r.map(e=>(0,l.jsx)(u,{imageSrc:e.Image,text:e.text,amount:e.amount,link:e.link},e.id))})]})]})}},1295:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var s in t)Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}(t,{default:function(){return o},unstable_getImgProps:function(){return i}});let l=s(21024),a=s(32301),r=s(27873),n=s(63222),c=l._(s(75033)),i=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,s]of Object.entries(t))void 0===s&&delete t[e];return{props:t}},o=n.Image},30622:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=s(2265),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,c=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var l,r={},o=null,d=null;for(l in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)n.call(t,l)&&!i.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps)void 0===r[l]&&(r[l]=t[l]);return{$$typeof:a,type:e,key:o,ref:d,props:r,_owner:c.current}}t.Fragment=r,t.jsx=o,t.jsxs=o},57437:function(e,t,s){"use strict";e.exports=s(30622)},16691:function(e,t,s){e.exports=s(1295)},61396:function(e,t,s){e.exports=s(46685)}},function(e){e.O(0,[6685,3222,7356,2971,596,1744],function(){return e(e.s=93474)}),_N_E=e.O()}]);