(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5917],{65481:function(e,t,n){Promise.resolve().then(n.t.bind(n,46685,23)),Promise.resolve().then(n.t.bind(n,63222,23)),Promise.resolve().then(n.bind(n,43692))},43692:function(e,t,n){"use strict";n.r(t),n.d(t,{Tabs:function(){return I},TabsContent:function(){return S},TabsList:function(){return _},TabsTrigger:function(){return A}});var r=n(57437),o=n(2265),u=n(13428),i=n(85744),a=n(56989),l=n(44356),c=n(85606),s=n(9381),f=n(65400),d=n(73763),m=n(20966);let v="Tabs",[p,b]=(0,a.b)(v,[l.Pc]),g=(0,l.Pc)(),[h,E]=p(v),w=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,onValueChange:i,defaultValue:a,orientation:l="horizontal",dir:c,activationMode:v="automatic",...p}=e,b=(0,f.gm)(c),[g,E]=(0,d.T)({prop:r,onChange:i,defaultProp:a});return(0,o.createElement)(h,{scope:n,baseId:(0,m.M)(),value:g,onValueChange:E,orientation:l,dir:b,activationMode:v},(0,o.createElement)(s.WV.div,(0,u.Z)({dir:b,"data-orientation":l},p,{ref:t})))}),M=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,loop:r=!0,...i}=e,a=E("TabsList",n),c=g(n);return(0,o.createElement)(l.fC,(0,u.Z)({asChild:!0},c,{orientation:a.orientation,dir:a.dir,loop:r}),(0,o.createElement)(s.WV.div,(0,u.Z)({role:"tablist","aria-orientation":a.orientation},i,{ref:t})))}),N=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,disabled:a=!1,...c}=e,f=E("TabsTrigger",n),d=g(n),m=C(f.baseId,r),v=y(f.baseId,r),p=r===f.value;return(0,o.createElement)(l.ck,(0,u.Z)({asChild:!0},d,{focusable:!a,active:p}),(0,o.createElement)(s.WV.button,(0,u.Z)({type:"button",role:"tab","aria-selected":p,"aria-controls":v,"data-state":p?"active":"inactive","data-disabled":a?"":void 0,disabled:a,id:m},c,{ref:t,onMouseDown:(0,i.M)(e.onMouseDown,e=>{a||0!==e.button||!1!==e.ctrlKey?e.preventDefault():f.onValueChange(r)}),onKeyDown:(0,i.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&f.onValueChange(r)}),onFocus:(0,i.M)(e.onFocus,()=>{let e="manual"!==f.activationMode;p||a||!e||f.onValueChange(r)})})))}),T=(0,o.forwardRef)((e,t)=>{let{__scopeTabs:n,value:r,forceMount:i,children:a,...l}=e,f=E("TabsContent",n),d=C(f.baseId,r),m=y(f.baseId,r),v=r===f.value,p=(0,o.useRef)(v);return(0,o.useEffect)(()=>{let e=requestAnimationFrame(()=>p.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,o.createElement)(c.z,{present:i||v},({present:n})=>(0,o.createElement)(s.WV.div,(0,u.Z)({"data-state":v?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:m,tabIndex:0},l,{ref:t,style:{...e.style,animationDuration:p.current?"0s":void 0}}),n&&a))});function C(e,t){return`${e}-trigger-${t}`}function y(e,t){return`${e}-content-${t}`}var R=n(70306);let I=w,_=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(M,{ref:t,className:(0,R.cn)("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",n),...o})});_.displayName=M.displayName;let A=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(N,{ref:t,className:(0,R.cn)("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground  data-[state=active]:shadow-sm",n),...o})});A.displayName=N.displayName;let S=o.forwardRef((e,t)=>{let{className:n,...o}=e;return(0,r.jsx)(T,{ref:t,className:(0,R.cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",n),...o})});S.displayName=T.displayName},70306:function(e,t,n){"use strict";n.d(t,{cn:function(){return u}});var r=n(57042),o=n(23986);function u(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,o.m)((0,r.W)(t))}},85744:function(e,t,n){"use strict";function r(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(null==e||e(r),!1===n||!r.defaultPrevented)return null==t?void 0:t(r)}}n.d(t,{M:function(){return r}})},27733:function(e,t,n){"use strict";n.d(t,{B:function(){return a}});var r=n(2265),o=n(56989),u=n(42210),i=n(67256);function a(e){let t=e+"CollectionProvider",[n,a]=(0,o.b)(t),[l,c]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=e+"CollectionSlot",f=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,a=c(s,n),l=(0,u.e)(t,a.collectionRef);return r.createElement(i.g7,{ref:l},o)}),d=e+"CollectionItemSlot",m="data-radix-collection-item",v=r.forwardRef((e,t)=>{let{scope:n,children:o,...a}=e,l=r.useRef(null),s=(0,u.e)(t,l),f=c(d,n);return r.useEffect(()=>(f.itemMap.set(l,{ref:l,...a}),()=>void f.itemMap.delete(l))),r.createElement(i.g7,{[m]:"",ref:s},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(l,{scope:t,itemMap:u,collectionRef:o},n)},Slot:f,ItemSlot:v},function(t){let n=c(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${m}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},a]}},56989:function(e,t,n){"use strict";n.d(t,{b:function(){return u},k:function(){return o}});var r=n(2265);function o(e,t){let n=(0,r.createContext)(t);function o(e){let{children:t,...o}=e,u=(0,r.useMemo)(()=>o,Object.values(o));return(0,r.createElement)(n.Provider,{value:u},t)}return o.displayName=e+"Provider",[o,function(o){let u=(0,r.useContext)(n);if(u)return u;if(void 0!==t)return t;throw Error(`\`${o}\` must be used within \`${e}\``)}]}function u(e,t=[]){let n=[],o=()=>{let t=n.map(e=>(0,r.createContext)(e));return function(n){let o=(null==n?void 0:n[e])||t;return(0,r.useMemo)(()=>({[`__scope${e}`]:{...n,[e]:o}}),[n,o])}};return o.scopeName=e,[function(t,o){let u=(0,r.createContext)(o),i=n.length;function a(t){let{scope:n,children:o,...a}=t,l=(null==n?void 0:n[e][i])||u,c=(0,r.useMemo)(()=>a,Object.values(a));return(0,r.createElement)(l.Provider,{value:c},o)}return n=[...n,o],a.displayName=t+"Provider",[a,function(n,a){let l=(null==a?void 0:a[e][i])||u,c=(0,r.useContext)(l);if(c)return c;if(void 0!==o)return o;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e),u=o[`__scope${r}`];return{...t,...u}},{});return(0,r.useMemo)(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}(o,...t)]}},65400:function(e,t,n){"use strict";n.d(t,{gm:function(){return u}});var r=n(2265);let o=(0,r.createContext)(void 0);function u(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},20966:function(e,t,n){"use strict";n.d(t,{M:function(){return l}});var r,o=n(2265),u=n(51030);let i=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),a=0;function l(e){let[t,n]=o.useState(i());return(0,u.b)(()=>{e||n(e=>null!=e?e:String(a++))},[e]),e||(t?`radix-${t}`:"")}},85606:function(e,t,n){"use strict";n.d(t,{z:function(){return a}});var r=n(2265),o=n(54887),u=n(42210),i=n(51030);let a=e=>{let{present:t,children:n}=e,a=function(e){var t;let[n,u]=(0,r.useState)(),a=(0,r.useRef)({}),c=(0,r.useRef)(e),s=(0,r.useRef)("none"),f=e?"mounted":"unmounted",[d,m]=(t={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},(0,r.useReducer)((e,n)=>{let r=t[e][n];return null!=r?r:e},f));return(0,r.useEffect)(()=>{let e=l(a.current);s.current="mounted"===d?e:"none"},[d]),(0,i.b)(()=>{let t=a.current,n=c.current,r=n!==e;if(r){let r=s.current,o=l(t);e?m("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?m("UNMOUNT"):n&&r!==o?m("ANIMATION_OUT"):m("UNMOUNT"),c.current=e}},[e,m]),(0,i.b)(()=>{if(n){let e=e=>{let t=l(a.current),r=t.includes(e.animationName);e.target===n&&r&&(0,o.flushSync)(()=>m("ANIMATION_END"))},t=e=>{e.target===n&&(s.current=l(a.current))};return n.addEventListener("animationstart",t),n.addEventListener("animationcancel",e),n.addEventListener("animationend",e),()=>{n.removeEventListener("animationstart",t),n.removeEventListener("animationcancel",e),n.removeEventListener("animationend",e)}}m("ANIMATION_END")},[n,m]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:(0,r.useCallback)(e=>{e&&(a.current=getComputedStyle(e)),u(e)},[])}}(t),c="function"==typeof n?n({present:a.isPresent}):r.Children.only(n),s=(0,u.e)(a.ref,c.ref),f="function"==typeof n;return f||a.isPresent?(0,r.cloneElement)(c,{ref:s}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}a.displayName="Presence"},44356:function(e,t,n){"use strict";n.d(t,{Pc:function(){return M},ck:function(){return S},fC:function(){return A}});var r=n(13428),o=n(2265),u=n(85744),i=n(27733),a=n(42210),l=n(56989),c=n(20966),s=n(9381),f=n(16459),d=n(73763),m=n(65400);let v="rovingFocusGroup.onEntryFocus",p={bubbles:!1,cancelable:!0},b="RovingFocusGroup",[g,h,E]=(0,i.B)(b),[w,M]=(0,l.b)(b,[E]),[N,T]=w(b),C=(0,o.forwardRef)((e,t)=>(0,o.createElement)(g.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(g.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(y,(0,r.Z)({},e,{ref:t}))))),y=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:i,loop:l=!1,dir:c,currentTabStopId:b,defaultCurrentTabStopId:g,onCurrentTabStopIdChange:E,onEntryFocus:w,...M}=e,T=(0,o.useRef)(null),C=(0,a.e)(t,T),y=(0,m.gm)(c),[R=null,I]=(0,d.T)({prop:b,defaultProp:g,onChange:E}),[A,S]=(0,o.useState)(!1),x=(0,f.W)(w),P=h(n),F=(0,o.useRef)(!1),[k,D]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=T.current;if(e)return e.addEventListener(v,x),()=>e.removeEventListener(v,x)},[x]),(0,o.createElement)(N,{scope:n,orientation:i,dir:y,loop:l,currentTabStopId:R,onItemFocus:(0,o.useCallback)(e=>I(e),[I]),onItemShiftTab:(0,o.useCallback)(()=>S(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>D(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>D(e=>e-1),[])},(0,o.createElement)(s.WV.div,(0,r.Z)({tabIndex:A||0===k?-1:0,"data-orientation":i},M,{ref:C,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{F.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!F.current;if(e.target===e.currentTarget&&t&&!A){let t=new CustomEvent(v,p);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=P().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===R),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);_(o)}}F.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>S(!1))})))}),R=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:i=!0,active:a=!1,tabStopId:l,...f}=e,d=(0,c.M)(),m=l||d,v=T("RovingFocusGroupItem",n),p=v.currentTabStopId===m,b=h(n),{onFocusableItemAdd:E,onFocusableItemRemove:w}=v;return(0,o.useEffect)(()=>{if(i)return E(),()=>w()},[i,E,w]),(0,o.createElement)(g.ItemSlot,{scope:n,id:m,focusable:i,active:a},(0,o.createElement)(s.WV.span,(0,r.Z)({tabIndex:p?0:-1,"data-orientation":v.orientation},f,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{i?v.onItemFocus(m):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>v.onItemFocus(m)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return I[o]}(e,v.orientation,v.dir);if(void 0!==t){e.preventDefault();let o=b().filter(e=>e.focusable),u=o.map(e=>e.ref.current);if("last"===t)u.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&u.reverse();let o=u.indexOf(e.currentTarget);u=v.loop?(n=u,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):u.slice(o+1)}setTimeout(()=>_(u))}})})))}),I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function _(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let A=C,S=R},16459:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(2265);function o(e){let t=(0,r.useRef)(e);return(0,r.useEffect)(()=>{t.current=e}),(0,r.useMemo)(()=>(...e)=>{var n;return null===(n=t.current)||void 0===n?void 0:n.call(t,...e)},[])}},73763:function(e,t,n){"use strict";n.d(t,{T:function(){return u}});var r=n(2265),o=n(16459);function u({prop:e,defaultProp:t,onChange:n=()=>{}}){let[u,i]=function({defaultProp:e,onChange:t}){let n=(0,r.useState)(e),[u]=n,i=(0,r.useRef)(u),a=(0,o.W)(t);return(0,r.useEffect)(()=>{i.current!==u&&(a(u),i.current=u)},[u,i,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,l=a?e:u,c=(0,o.W)(n),s=(0,r.useCallback)(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&c(n)}else i(t)},[a,e,i,c]);return[l,s]}},51030:function(e,t,n){"use strict";n.d(t,{b:function(){return o}});var r=n(2265);let o=(null==globalThis?void 0:globalThis.document)?r.useLayoutEffect:()=>{}}},function(e){e.O(0,[6685,3222,5526,2971,596,1744],function(){return e(e.s=65481)}),_N_E=e.O()}]);