"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2698],{82549:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(62898);let r=(0,o.Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},28712:function(e,t,n){n.d(t,{Dx:function(){return G},VY:function(){return q},aV:function(){return j},dk:function(){return H},fC:function(){return S},h_:function(){return Y},x8:function(){return J},xz:function(){return U}});var o=n(13428),r=n(2265),l=n(85744),a=n(42210),u=n(56989),i=n(20966),c=n(73763),s=n(79249),f=n(52759),d=n(52730),p=n(85606),g=n(9381),D=n(31244),_=n(73386),m=n(85859),E=n(67256);let v="Dialog",[R,C]=(0,u.b)(v),[h,b]=R(v),M=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...u}=e,i=b("DialogTrigger",n),c=(0,a.e)(t,i.triggerRef);return(0,r.createElement)(g.WV.button,(0,o.Z)({type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":X(i.open)},u,{ref:c,onClick:(0,l.M)(e.onClick,i.onOpenToggle)}))}),O="DialogPortal",[w,Z]=R(O,{forceMount:void 0}),k="DialogOverlay",F=(0,r.forwardRef)((e,t)=>{let n=Z(k,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=b(k,e.__scopeDialog);return u.modal?(0,r.createElement)(p.z,{present:l||u.open},(0,r.createElement)(y,(0,o.Z)({},a,{ref:t}))):null}),y=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=b(k,n);return(0,r.createElement)(_.Z,{as:E.g7,allowPinchZoom:!0,shards:[a.contentRef]},(0,r.createElement)(g.WV.div,(0,o.Z)({"data-state":X(a.open)},l,{ref:t,style:{pointerEvents:"auto",...l.style}})))}),I="DialogContent",P=(0,r.forwardRef)((e,t)=>{let n=Z(I,e.__scopeDialog),{forceMount:l=n.forceMount,...a}=e,u=b(I,e.__scopeDialog);return(0,r.createElement)(p.z,{present:l||u.open},u.modal?(0,r.createElement)(A,(0,o.Z)({},a,{ref:t})):(0,r.createElement)(V,(0,o.Z)({},a,{ref:t})))}),A=(0,r.forwardRef)((e,t)=>{let n=b(I,e.__scopeDialog),u=(0,r.useRef)(null),i=(0,a.e)(t,n.contentRef,u);return(0,r.useEffect)(()=>{let e=u.current;if(e)return(0,m.Ry)(e)},[]),(0,r.createElement)(W,(0,o.Z)({},e,{ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null===(t=n.triggerRef.current)||void 0===t||t.focus()}),onPointerDownOutside:(0,l.M)(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,o=2===t.button||n;o&&e.preventDefault()}),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault())}))}),V=(0,r.forwardRef)((e,t)=>{let n=b(I,e.__scopeDialog),l=(0,r.useRef)(!1),a=(0,r.useRef)(!1);return(0,r.createElement)(W,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var o,r;null===(o=e.onCloseAutoFocus)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current||null===(r=n.triggerRef.current)||void 0===r||r.focus(),t.preventDefault()),l.current=!1,a.current=!1},onInteractOutside:t=>{var o,r;null===(o=e.onInteractOutside)||void 0===o||o.call(e,t),t.defaultPrevented||(l.current=!0,"pointerdown"!==t.detail.originalEvent.type||(a.current=!0));let u=t.target,i=null===(r=n.triggerRef.current)||void 0===r?void 0:r.contains(u);i&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&a.current&&t.preventDefault()}}))}),W=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,trapFocus:l,onOpenAutoFocus:u,onCloseAutoFocus:i,...c}=e,d=b(I,n),p=(0,r.useRef)(null),g=(0,a.e)(t,p);return(0,D.EW)(),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(f.M,{asChild:!0,loop:!0,trapped:l,onMountAutoFocus:u,onUnmountAutoFocus:i},(0,r.createElement)(s.XB,(0,o.Z)({role:"dialog",id:d.contentId,"aria-describedby":d.descriptionId,"aria-labelledby":d.titleId,"data-state":X(d.open)},c,{ref:g,onDismiss:()=>d.onOpenChange(!1)}))),!1)}),T="DialogTitle",x=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=b(T,n);return(0,r.createElement)(g.WV.h2,(0,o.Z)({id:a.titleId},l,{ref:t}))}),z=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...l}=e,a=b("DialogDescription",n);return(0,r.createElement)(g.WV.p,(0,o.Z)({id:a.descriptionId},l,{ref:t}))}),N=(0,r.forwardRef)((e,t)=>{let{__scopeDialog:n,...a}=e,u=b("DialogClose",n);return(0,r.createElement)(g.WV.button,(0,o.Z)({type:"button"},a,{ref:t,onClick:(0,l.M)(e.onClick,()=>u.onOpenChange(!1))}))});function X(e){return e?"open":"closed"}let[B,K]=(0,u.k)("DialogTitleWarning",{contentName:I,titleName:T,docsSlug:"dialog"}),S=e=>{let{__scopeDialog:t,children:n,open:o,defaultOpen:l,onOpenChange:a,modal:u=!0}=e,s=(0,r.useRef)(null),f=(0,r.useRef)(null),[d=!1,p]=(0,c.T)({prop:o,defaultProp:l,onChange:a});return(0,r.createElement)(h,{scope:t,triggerRef:s,contentRef:f,contentId:(0,i.M)(),titleId:(0,i.M)(),descriptionId:(0,i.M)(),open:d,onOpenChange:p,onOpenToggle:(0,r.useCallback)(()=>p(e=>!e),[p]),modal:u},n)},U=M,Y=e=>{let{__scopeDialog:t,forceMount:n,children:o,container:l}=e,a=b(O,t);return(0,r.createElement)(w,{scope:t,forceMount:n},r.Children.map(o,e=>(0,r.createElement)(p.z,{present:n||a.open},(0,r.createElement)(d.h,{asChild:!0,container:l},e))))},j=F,q=P,G=x,H=z,J=N}}]);