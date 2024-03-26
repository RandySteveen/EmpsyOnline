"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[441],{441:(kt,Q,p)=>{p.r(Q),p.d(Q,{ion_modal:()=>gt});var S=p(467),h=p(9081),M=p(2885),G=p(5938),u=p(5638),nt=p(7838),$=p(4929),b=p(8438),l=p(4133),E=p(333),z=p(1497),L=p(8436),N=p(1622),f=p(3503),dt=p(3351),lt=p(405),X=p(8476),F=(p(9457),p(4379),p(8221),function(t){return t.Dark="DARK",t.Light="LIGHT",t.Default="DEFAULT",t}(F||{}));const V={getEngine(){const t=(0,b.g)();if(null!=t&&t.isPluginAvailable("StatusBar"))return t.Plugins.StatusBar},supportsDefaultStatusBarStyle(){const t=(0,b.g)();return!(null==t||!t.PluginHeaders)},setStyle(t){const e=this.getEngine();e&&e.setStyle(t)},getStyle:(t=(0,S.A)(function*(){const e=this.getEngine();if(!e)return F.Default;const{style:n}=yield e.getInfo();return n}),function(){return t.apply(this,arguments)})},ot=(t,e)=>{if(1===e)return 0;const n=1/(1-e);return t*n+-e*n},ct=()=>{!X.w||X.w.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:F.Dark})},rt=(t=F.Default)=>{!X.w||X.w.innerWidth>=768||!V.supportsDefaultStatusBarStyle()||V.setStyle({style:t})},pt=function(){var t=(0,S.A)(function*(e,n){"function"!=typeof e.canDismiss||!(yield e.canDismiss(void 0,l.G))||(n.isRunning()?n.onFinish(()=>{e.dismiss(void 0,"handler")},{oneTimeCallback:!0}):e.dismiss(void 0,"handler"))});return function(n,o){return t.apply(this,arguments)}}(),it=t=>.00255275*2.71828**(-14.9619*t)-1.00255*2.71828**(-.0380968*t)+1,ht=(t,e)=>(0,u.l)(400,t/Math.abs(1.1*e),500),ft=t=>{const{currentBreakpoint:e,backdropBreakpoint:n}=t,o=void 0===n||n<e,i=o?`calc(var(--backdrop-opacity) * ${e})`:"0",r=(0,f.c)("backdropAnimation").fromTo("opacity",0,i);return o&&r.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:`translateY(${100-100*e}%)`}]),backdropAnimation:r}},ut=t=>{const{currentBreakpoint:e,backdropBreakpoint:n}=t,o=`calc(var(--backdrop-opacity) * ${ot(e,n)})`,i=[{offset:0,opacity:o},{offset:1,opacity:0}],r=[{offset:0,opacity:o},{offset:n,opacity:0},{offset:1,opacity:0}],s=(0,f.c)("backdropAnimation").keyframes(0!==n?r:i);return{wrapperAnimation:(0,f.c)("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:`translateY(${100-100*e}%)`},{offset:1,opacity:1,transform:"translateY(100%)"}]),backdropAnimation:s}},mt=(t,e)=>{const{presentingEl:n,currentBreakpoint:o}=e,i=(0,u.g)(t),{wrapperAnimation:r,backdropAnimation:s}=void 0!==o?ft(e):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(100vh)","translateY(0vh)")};s.addElement(i.querySelector("ion-backdrop")),r.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const a=(0,f.c)("entering-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(r);if(n){const d=window.innerWidth<768,v="ION-MODAL"===n.tagName&&void 0!==n.presentingElement,k=(0,u.g)(n),A=(0,f.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),x=document.body;if(d){const w=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",_=`translateY(${v?"-10px":w}) scale(0.93)`;A.afterStyles({transform:_}).beforeAddWrite(()=>x.style.setProperty("background-color","black")).addElement(n).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:_,borderRadius:"10px 10px 0 0"}]),a.addAnimation(A)}else if(a.addAnimation(s),v){const y=`translateY(-10px) scale(${v?.93:1})`;A.afterStyles({transform:y}).addElement(k.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:y}]);const c=(0,f.c)().afterStyles({transform:y}).addElement(k.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:y}]);a.addAnimation([A,c])}else r.fromTo("opacity","0","1")}else a.addAnimation(s);return a},bt=(t,e,n=500)=>{const{presentingEl:o,currentBreakpoint:i}=e,r=(0,u.g)(t),{wrapperAnimation:s,backdropAnimation:a}=void 0!==i?ut(e):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().fromTo("transform","translateY(0vh)","translateY(100vh)")};a.addElement(r.querySelector("ion-backdrop")),s.addElement(r.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});const d=(0,f.c)("leaving-base").addElement(t).easing("cubic-bezier(0.32,0.72,0,1)").duration(n).addAnimation(s);if(o){const v=window.innerWidth<768,k="ION-MODAL"===o.tagName&&void 0!==o.presentingElement,A=(0,u.g)(o),x=(0,f.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(y=>{1===y&&(o.style.setProperty("overflow",""),Array.from(w.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter(_=>void 0!==_.presentingElement).length<=1&&w.style.setProperty("background-color",""))}),w=document.body;if(v){const y=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",j=`translateY(${k?"-10px":y}) scale(0.93)`;x.addElement(o).keyframes([{offset:0,filter:"contrast(0.85)",transform:j,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),d.addAnimation(x)}else if(d.addAnimation(a),k){const c=`translateY(-10px) scale(${k?.93:1})`;x.addElement(A.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:c},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);const _=(0,f.c)().addElement(A.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:c},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);d.addAnimation([x,_])}else s.fromTo("opacity","1","0")}else d.addAnimation(a);return d},Et=(t,e)=>{const{currentBreakpoint:n}=e,o=(0,u.g)(t),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?ft(e):{backdropAnimation:(0,f.c)().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,f.c)().addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,i])},St=(t,e)=>{const{currentBreakpoint:n}=e,o=(0,u.g)(t),{wrapperAnimation:i,backdropAnimation:r}=void 0!==n?ut(e):{backdropAnimation:(0,f.c)().fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation:(0,f.c)().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}])};return r.addElement(o.querySelector("ion-backdrop")),i.addElement(o.querySelector(".modal-wrapper")),(0,f.c)().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,i])},gt=class{constructor(t){(0,h.r)(this,t),this.didPresent=(0,h.d)(this,"ionModalDidPresent",7),this.willPresent=(0,h.d)(this,"ionModalWillPresent",7),this.willDismiss=(0,h.d)(this,"ionModalWillDismiss",7),this.didDismiss=(0,h.d)(this,"ionModalDidDismiss",7),this.ionBreakpointDidChange=(0,h.d)(this,"ionBreakpointDidChange",7),this.didPresentShorthand=(0,h.d)(this,"didPresent",7),this.willPresentShorthand=(0,h.d)(this,"willPresent",7),this.willDismissShorthand=(0,h.d)(this,"willDismiss",7),this.didDismissShorthand=(0,h.d)(this,"didDismiss",7),this.ionMount=(0,h.d)(this,"ionMount",7),this.lockController=(0,nt.c)(),this.triggerController=(0,l.e)(),this.coreDelegate=(0,G.C)(),this.isSheetModal=!1,this.inheritedAttributes={},this.inline=!1,this.gestureAnimationDismissing=!1,this.onHandleClick=()=>{const{sheetTransition:e,handleBehavior:n}=this;"cycle"!==n||void 0!==e||this.moveToNextBreakpoint()},this.onBackdropTap=()=>{const{sheetTransition:e}=this;void 0===e&&this.dismiss(void 0,l.B)},this.onLifecycle=e=>{const n=this.usersElement,o=Mt[e.type];if(n&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});n.dispatchEvent(i)}},this.presented=!1,this.hasController=!1,this.overlayIndex=void 0,this.delegate=void 0,this.keyboardClose=!0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.breakpoints=void 0,this.initialBreakpoint=void 0,this.backdropBreakpoint=0,this.handle=void 0,this.handleBehavior="none",this.component=void 0,this.componentProps=void 0,this.cssClass=void 0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.presentingElement=void 0,this.htmlAttributes=void 0,this.isOpen=!1,this.trigger=void 0,this.keepContentsMounted=!1,this.canDismiss=!0}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}triggerChanged(){const{trigger:t,el:e,triggerController:n}=this;t&&n.addClickListener(e,t)}breakpointsChanged(t){void 0!==t&&(this.sortedBreakpoints=t.sort((e,n)=>e-n))}connectedCallback(){const{el:t}=this;(0,l.j)(t),this.triggerChanged()}disconnectedCallback(){this.triggerController.removeClickListener()}componentWillLoad(){const{breakpoints:t,initialBreakpoint:e,el:n,htmlAttributes:o}=this,i=this.isSheetModal=void 0!==t&&void 0!==e,r=["aria-label","role"];this.inheritedAttributes=(0,u.k)(n,r),void 0!==o&&r.forEach(s=>{o[s]&&(this.inheritedAttributes=Object.assign(Object.assign({},this.inheritedAttributes),{[s]:o[s]}),delete o[s])}),i&&(this.currentBreakpoint=this.initialBreakpoint),void 0!==t&&void 0!==e&&!t.includes(e)&&(0,$.p)("Your breakpoints array must include the initialBreakpoint value."),(0,l.k)(n)}componentDidLoad(){!0===this.isOpen&&(0,u.r)(()=>this.present()),this.breakpointsChanged(this.breakpoints),this.triggerChanged()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const n=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:n,delegate:this.workingDelegate=n?this.delegate||this.coreDelegate:this.delegate}}checkCanDismiss(t,e){var n=this;return(0,S.A)(function*(){const{canDismiss:o}=n;return"function"==typeof o?o(t,e):o})()}present(){var t=this;return(0,S.A)(function*(){const e=yield t.lockController.lock();if(t.presented)return void e();const{presentingElement:n,el:o}=t;t.currentBreakpoint=t.initialBreakpoint;const{inline:i,delegate:r}=t.getDelegate(!0);t.ionMount.emit(),t.usersElement=yield(0,G.a)(r,o,t.component,["ion-page"],t.componentProps,i),(0,u.m)(o)?yield(0,z.e)(t.usersElement):t.keepContentsMounted||(yield(0,z.w)()),(0,h.w)(()=>t.el.classList.add("show-modal"));const s=void 0!==n;s&&"ios"===(0,L.b)(t)&&(t.statusBarStyle=yield V.getStyle(),ct()),yield(0,l.f)(t,"modalEnter",mt,Et,{presentingEl:n,currentBreakpoint:t.initialBreakpoint,backdropBreakpoint:t.backdropBreakpoint}),typeof window<"u"&&(t.keyboardOpenCallback=()=>{t.gesture&&(t.gesture.enable(!1),(0,u.r)(()=>{t.gesture&&t.gesture.enable(!0)}))},window.addEventListener(N.KEYBOARD_DID_OPEN,t.keyboardOpenCallback)),t.isSheetModal?t.initSheetGesture():s&&t.initSwipeToClose(),e()})()}initSwipeToClose(){var e,t=this;if("ios"!==(0,L.b)(this))return;const{el:n}=this,o=this.leaveAnimation||L.c.get("modalLeave",bt),i=this.animation=o(n,{presentingEl:this.presentingElement});if(!(0,M.a)(n))return void(0,M.p)(n);const s=null!==(e=this.statusBarStyle)&&void 0!==e?e:F.Default;this.gesture=((t,e,n,o)=>{const r=t.offsetHeight;let s=!1,a=!1,d=null,v=null,A=!0,x=0;const Z=(0,lt.createGesture)({el:t,gestureName:"modalSwipeToClose",gesturePriority:l.O,direction:"y",threshold:10,canStart:g=>{const m=g.event.target;return null===m||!m.closest||(d=(0,M.f)(m),d?(v=(0,M.i)(d)?(0,u.g)(d).querySelector(".inner-scroll"):d,!d.querySelector("ion-refresher")&&0===v.scrollTop):null===m.closest("ion-footer"))},onStart:g=>{const{deltaY:m}=g;A=!d||!(0,M.i)(d)||d.scrollY,a=void 0!==t.canDismiss&&!0!==t.canDismiss,m>0&&d&&(0,M.d)(d),e.progressStart(!0,s?1:0)},onMove:g=>{const{deltaY:m}=g;m>0&&d&&(0,M.d)(d);const B=g.deltaY/r,P=B>=0&&a,O=P?.2:.9999,U=P?it(B/O):B,C=(0,u.l)(1e-4,U,O);e.progressStep(C),C>=.5&&x<.5?rt(n):C<.5&&x>=.5&&ct(),x=C},onEnd:g=>{const m=g.velocityY,B=g.deltaY/r,P=B>=0&&a,O=P?.2:.9999,U=P?it(B/O):B,C=(0,u.l)(1e-4,U,O),R=!P&&(g.deltaY+1e3*m)/r>=.5;let J=R?-.001:.001;R?(e.easing("cubic-bezier(0.32, 0.72, 0, 1)"),J+=(0,dt.g)([0,0],[.32,.72],[0,1],[1,1],C)[0]):(e.easing("cubic-bezier(1, 0, 0.68, 0.28)"),J+=(0,dt.g)([0,0],[1,0],[.68,.28],[1,1],C)[0]);const tt=ht(R?B*r:(1-C)*r,m);s=R,Z.enable(!1),d&&(0,M.r)(d,A),e.onFinish(()=>{R||Z.enable(!0)}).progressEnd(R?1:0,J,tt),P&&C>O/4?pt(t,e):R&&o()}});return Z})(n,i,s,()=>{this.gestureAnimationDismissing=!0,rt(this.statusBarStyle),this.animation.onFinish((0,S.A)(function*(){yield t.dismiss(void 0,l.G),t.gestureAnimationDismissing=!1}))}),this.gesture.enable(!0)}initSheetGesture(){const{wrapperEl:t,initialBreakpoint:e,backdropBreakpoint:n}=this;if(!t||void 0===e)return;const o=this.enterAnimation||L.c.get("modalEnter",mt),i=this.animation=o(this.el,{presentingEl:this.presentingElement,currentBreakpoint:e,backdropBreakpoint:n});i.progressStart(!0,1);const{gesture:r,moveSheetToBreakpoint:s}=((t,e,n,o,i,r,s=[],a,d,v)=>{const x={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:0!==i?[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-i,opacity:0},{offset:1,opacity:0}]:[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}]},w=t.querySelector("ion-content"),y=n.clientHeight;let c=o,_=0,j=!1;const g=r.childAnimations.find(D=>"wrapperAnimation"===D.id),m=r.childAnimations.find(D=>"backdropAnimation"===D.id),B=s[s.length-1],P=s[0],O=()=>{t.style.setProperty("pointer-events","auto"),e.style.setProperty("pointer-events","auto"),t.classList.remove("ion-disable-focus-trap")},U=()=>{t.style.setProperty("pointer-events","none"),e.style.setProperty("pointer-events","none"),t.classList.add("ion-disable-focus-trap")};g&&m&&(g.keyframes([...x.WRAPPER_KEYFRAMES]),m.keyframes([...x.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-c),c>i?O():U()),w&&c!==B&&(w.scrollY=!1);const tt=D=>{const{breakpoint:W,canDismiss:T,breakpointOffset:Y,animated:H}=D,K=T&&0===W,I=K?c:W,yt=0!==I;return c=0,g&&m&&(g.keyframes([{offset:0,transform:`translateY(${100*Y}%)`},{offset:1,transform:`translateY(${100*(1-I)}%)`}]),m.keyframes([{offset:0,opacity:`calc(var(--backdrop-opacity) * ${ot(1-Y,i)})`},{offset:1,opacity:`calc(var(--backdrop-opacity) * ${ot(I,i)})`}]),r.progressStep(0)),et.enable(!1),K?pt(t,r):yt||d(),new Promise(at=>{r.onFinish(()=>{yt?g&&m?(0,u.r)(()=>{g.keyframes([...x.WRAPPER_KEYFRAMES]),m.keyframes([...x.BACKDROP_KEYFRAMES]),r.progressStart(!0,1-I),c=I,v(c),w&&c===s[s.length-1]&&(w.scrollY=!0),c>i?O():U(),et.enable(!0),at()}):(et.enable(!0),at()):at()},{oneTimeCallback:!0}).progressEnd(1,0,H?500:0)})},et=(0,lt.createGesture)({el:n,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:D=>{const W=D.event.target.closest("ion-content");return c=a(),!(1===c&&W)},onStart:()=>{j=void 0!==t.canDismiss&&!0!==t.canDismiss&&0===P,w&&(w.scrollY=!1),(0,u.r)(()=>{t.focus()}),r.progressStart(!0,1-c)},onMove:D=>{const T=s.length>1?1-s[1]:void 0,Y=1-c+D.deltaY/y,H=void 0!==T&&Y>=T&&j,K=H?.95:.9999,I=H&&void 0!==T?T+it((Y-T)/(K-T)):Y;_=(0,u.l)(1e-4,I,K),r.progressStep(_)},onEnd:D=>{const Y=c-(D.deltaY+350*D.velocityY)/y,H=s.reduce((K,I)=>Math.abs(I-Y)<Math.abs(K-Y)?I:K);tt({breakpoint:H,breakpointOffset:_,canDismiss:j,animated:!0})}});return{gesture:et,moveSheetToBreakpoint:tt}})(this.el,this.backdropEl,t,e,n,i,this.sortedBreakpoints,()=>{var a;return null!==(a=this.currentBreakpoint)&&void 0!==a?a:0},()=>this.sheetOnDismiss(),a=>{this.currentBreakpoint!==a&&(this.currentBreakpoint=a,this.ionBreakpointDidChange.emit({breakpoint:a}))});this.gesture=r,this.moveSheetToBreakpoint=s,this.gesture.enable(!0)}sheetOnDismiss(){var t=this;this.gestureAnimationDismissing=!0,this.animation.onFinish((0,S.A)(function*(){t.currentBreakpoint=0,t.ionBreakpointDidChange.emit({breakpoint:t.currentBreakpoint}),yield t.dismiss(void 0,l.G),t.gestureAnimationDismissing=!1}))}dismiss(t,e){var n=this;return(0,S.A)(function*(){var o;if(n.gestureAnimationDismissing&&e!==l.G)return!1;const i=yield n.lockController.lock();if("handler"!==e&&!(yield n.checkCanDismiss(t,e)))return i(),!1;const{presentingElement:r}=n;void 0!==r&&"ios"===(0,L.b)(n)&&rt(n.statusBarStyle),typeof window<"u"&&n.keyboardOpenCallback&&(window.removeEventListener(N.KEYBOARD_DID_OPEN,n.keyboardOpenCallback),n.keyboardOpenCallback=void 0);const a=yield(0,l.g)(n,t,e,"modalLeave",bt,St,{presentingEl:r,currentBreakpoint:null!==(o=n.currentBreakpoint)&&void 0!==o?o:n.initialBreakpoint,backdropBreakpoint:n.backdropBreakpoint});if(a){const{delegate:d}=n.getDelegate();yield(0,G.d)(d,n.usersElement),(0,h.w)(()=>n.el.classList.remove("show-modal")),n.animation&&n.animation.destroy(),n.gesture&&n.gesture.destroy()}return n.currentBreakpoint=void 0,n.animation=void 0,i(),a})()}onDidDismiss(){return(0,l.h)(this.el,"ionModalDidDismiss")}onWillDismiss(){return(0,l.h)(this.el,"ionModalWillDismiss")}setCurrentBreakpoint(t){var e=this;return(0,S.A)(function*(){if(!e.isSheetModal)return void(0,$.p)("setCurrentBreakpoint is only supported on sheet modals.");if(!e.breakpoints.includes(t))return void(0,$.p)(`Attempted to set invalid breakpoint value ${t}. Please double check that the breakpoint value is part of your defined breakpoints.`);const{currentBreakpoint:n,moveSheetToBreakpoint:o,canDismiss:i,breakpoints:r,animated:s}=e;n!==t&&o&&(e.sheetTransition=o({breakpoint:t,breakpointOffset:1-n,canDismiss:void 0!==i&&!0!==i&&0===r[0],animated:s}),yield e.sheetTransition,e.sheetTransition=void 0)})()}getCurrentBreakpoint(){var t=this;return(0,S.A)(function*(){return t.currentBreakpoint})()}moveToNextBreakpoint(){var t=this;return(0,S.A)(function*(){const{breakpoints:e,currentBreakpoint:n}=t;if(!e||null==n)return!1;const o=e.filter(a=>0!==a),r=(o.indexOf(n)+1)%o.length,s=o[r];return yield t.setCurrentBreakpoint(s),!0})()}render(){const{handle:t,isSheetModal:e,presentingElement:n,htmlAttributes:o,handleBehavior:i,inheritedAttributes:r}=this,s=!1!==t&&e,a=(0,L.b)(this),d=void 0!==n&&"ios"===a,v="cycle"===i;return(0,h.h)(h.H,Object.assign({key:"856aa156d687382cbd4a7ee47f553b96105fcf7d","no-router":!0,tabindex:"-1"},o,{style:{zIndex:`${2e4+this.overlayIndex}`},class:Object.assign({[a]:!0,"modal-default":!d&&!e,"modal-card":d,"modal-sheet":e,"overlay-hidden":!0},(0,E.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,h.h)("ion-backdrop",{key:"98205df704505f77c4878cd0b92598c1525b1a85",ref:k=>this.backdropEl=k,visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),"ios"===a&&(0,h.h)("div",{class:"modal-shadow"}),(0,h.h)("div",Object.assign({key:"412e76909a459f80bdd3c311d88407890c9aed4f",role:"dialog"},r,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:k=>this.wrapperEl=k}),s&&(0,h.h)("button",{class:"modal-handle",tabIndex:v?0:-1,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:v?this.onHandleClick:void 0,part:"handle"}),(0,h.h)("slot",{key:"3e532328bc1eeb1d1213f9b3c098e89b77590620"})))}get el(){return(0,h.f)(this)}static get watchers(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}}},Mt={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};var t;gt.style={ios:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet:dir(rtl)) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}',md:':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}'}},333:(kt,Q,p)=>{p.d(Q,{c:()=>M,g:()=>u,h:()=>h,o:()=>$});var S=p(467);const h=(b,l)=>null!==l.closest(b),M=(b,l)=>"string"==typeof b&&b.length>0?Object.assign({"ion-color":!0,[`ion-color-${b}`]:!0},l):l,u=b=>{const l={};return(b=>void 0!==b?(Array.isArray(b)?b:b.split(" ")).filter(E=>null!=E).map(E=>E.trim()).filter(E=>""!==E):[])(b).forEach(E=>l[E]=!0),l},nt=/^[a-z][a-z0-9+\-.]*:/,$=function(){var b=(0,S.A)(function*(l,E,z,L){if(null!=l&&"#"!==l[0]&&!nt.test(l)){const N=document.querySelector("ion-router");if(N)return null!=E&&E.preventDefault(),N.push(l,z,L)}return!1});return function(E,z,L,N){return b.apply(this,arguments)}}()}}]);