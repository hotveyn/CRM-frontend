import{d as J,i as B,aF as bt,m as c,br as ct,b4 as q,aP as ft,A as pt,$ as ut,a0 as Pe,as as vt,p as K,aL as gt,F as ht,O as xt,bb as mt,bm as yt,bB as Ct,B as n,E as l,C as P,D as W,G as St,H as wt,I as Te,bD as ee,z as te,a7 as Pt,J as F,a6 as Tt,L as Rt,a9 as ve,ac as ge,R as X,ad as ae,P as k,ag as Y,av as Lt,be as zt,bN as $t,bj as Bt}from"./index-62384645.js";import{A as Wt}from"./Add-27b36ee1.js";import{c as At,a as he,u as xe,o as _t}from"./cssr-1cbf0123.js";import{u as Et}from"./use-locale-a4cb9846.js";const Vt=he(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[he("&::-webkit-scrollbar",{width:0,height:0})]),kt=J({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const e=B(null);function r(s){!(s.currentTarget.offsetWidth<s.currentTarget.scrollWidth)||s.deltaY===0||(s.currentTarget.scrollLeft+=s.deltaY+s.deltaX,s.preventDefault())}const o=bt();return Vt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:At,ssr:o}),Object.assign({selfRef:e,handleWheel:r},{scrollTo(...s){var m;(m=e.value)===null||m===void 0||m.scrollTo(...s)}})},render(){return c("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}});var Mt=/\s/;function jt(e){for(var r=e.length;r--&&Mt.test(e.charAt(r)););return r}var It=/^\s+/;function Ft(e){return e&&e.slice(0,jt(e)+1).replace(It,"")}var me=0/0,Gt=/^[-+]0x[0-9a-f]+$/i,Ht=/^0b[01]+$/i,Ot=/^0o[0-7]+$/i,Dt=parseInt;function ye(e){if(typeof e=="number")return e;if(ct(e))return me;if(q(e)){var r=typeof e.valueOf=="function"?e.valueOf():e;e=q(r)?r+"":r}if(typeof e!="string")return e===0?e:+e;e=Ft(e);var o=Ht.test(e);return o||Ot.test(e)?Dt(e.slice(2),o?2:8):Gt.test(e)?me:+e}var Nt=function(){return ft.Date.now()};const re=Nt;var Ut="Expected a function",Xt=Math.max,Yt=Math.min;function Kt(e,r,o){var f,s,m,u,p,y,h=0,C=!1,S=!1,x=!0;if(typeof e!="function")throw new TypeError(Ut);r=ye(r)||0,q(o)&&(C=!!o.leading,S="maxWait"in o,m=S?Xt(ye(o.maxWait)||0,r):m,x="trailing"in o?!!o.trailing:x);function g(b){var z=f,M=s;return f=s=void 0,h=b,u=e.apply(M,z),u}function w(b){return h=b,p=setTimeout(A,r),C?g(b):u}function R(b){var z=b-y,M=b-h,I=r-z;return S?Yt(I,m-M):I}function T(b){var z=b-y,M=b-h;return y===void 0||z>=r||z<0||S&&M>=m}function A(){var b=re();if(T(b))return L(b);p=setTimeout(A,R(b))}function L(b){return p=void 0,x&&f?g(b):(f=s=void 0,u)}function _(){p!==void 0&&clearTimeout(p),h=0,f=y=s=p=void 0}function V(){return p===void 0?u:L(re())}function v(){var b=re(),z=T(b);if(f=arguments,s=this,y=b,z){if(p===void 0)return w(y);if(S)return clearTimeout(p),p=setTimeout(A,r),g(y)}return p===void 0&&(p=setTimeout(A,r)),u}return v.cancel=_,v.flush=V,v}var qt="Expected a function";function ne(e,r,o){var f=!0,s=!0;if(typeof e!="function")throw new TypeError(qt);return q(o)&&(f="leading"in o?!!o.leading:f,s="trailing"in o?!!o.trailing:s),Kt(e,r,{leading:f,maxWait:r,trailing:s})}const Jt={tabFontSizeSmall:"14px",tabFontSizeMedium:"14px",tabFontSizeLarge:"16px",tabGapSmallLine:"36px",tabGapMediumLine:"36px",tabGapLargeLine:"36px",tabGapSmallLineVertical:"8px",tabGapMediumLineVertical:"8px",tabGapLargeLineVertical:"8px",tabPaddingSmallLine:"6px 0",tabPaddingMediumLine:"10px 0",tabPaddingLargeLine:"14px 0",tabPaddingVerticalSmallLine:"6px 12px",tabPaddingVerticalMediumLine:"8px 16px",tabPaddingVerticalLargeLine:"10px 20px",tabGapSmallBar:"36px",tabGapMediumBar:"36px",tabGapLargeBar:"36px",tabGapSmallBarVertical:"8px",tabGapMediumBarVertical:"8px",tabGapLargeBarVertical:"8px",tabPaddingSmallBar:"4px 0",tabPaddingMediumBar:"6px 0",tabPaddingLargeBar:"10px 0",tabPaddingVerticalSmallBar:"6px 12px",tabPaddingVerticalMediumBar:"8px 16px",tabPaddingVerticalLargeBar:"10px 20px",tabGapSmallCard:"4px",tabGapMediumCard:"4px",tabGapLargeCard:"4px",tabGapSmallCardVertical:"4px",tabGapMediumCardVertical:"4px",tabGapLargeCardVertical:"4px",tabPaddingSmallCard:"8px 16px",tabPaddingMediumCard:"10px 20px",tabPaddingLargeCard:"12px 24px",tabPaddingSmallSegment:"4px 0",tabPaddingMediumSegment:"6px 0",tabPaddingLargeSegment:"8px 0",tabPaddingVerticalLargeSegment:"0 8px",tabPaddingVerticalSmallCard:"8px 12px",tabPaddingVerticalMediumCard:"10px 16px",tabPaddingVerticalLargeCard:"12px 20px",tabPaddingVerticalSmallSegment:"0 4px",tabPaddingVerticalMediumSegment:"0 6px",tabGapSmallSegment:"0",tabGapMediumSegment:"0",tabGapLargeSegment:"0",tabGapSmallSegmentVertical:"0",tabGapMediumSegmentVertical:"0",tabGapLargeSegmentVertical:"0",panePaddingSmall:"8px 0 0 0",panePaddingMedium:"12px 0 0 0",panePaddingLarge:"16px 0 0 0",closeSize:"18px",closeIconSize:"14px"},Qt=e=>{const{textColor2:r,primaryColor:o,textColorDisabled:f,closeIconColor:s,closeIconColorHover:m,closeIconColorPressed:u,closeColorHover:p,closeColorPressed:y,tabColor:h,baseColor:C,dividerColor:S,fontWeight:x,textColor1:g,borderRadius:w,fontSize:R,fontWeightStrong:T}=e;return Object.assign(Object.assign({},Jt),{colorSegment:h,tabFontSizeCard:R,tabTextColorLine:g,tabTextColorActiveLine:o,tabTextColorHoverLine:o,tabTextColorDisabledLine:f,tabTextColorSegment:g,tabTextColorActiveSegment:r,tabTextColorHoverSegment:r,tabTextColorDisabledSegment:f,tabTextColorBar:g,tabTextColorActiveBar:o,tabTextColorHoverBar:o,tabTextColorDisabledBar:f,tabTextColorCard:g,tabTextColorHoverCard:g,tabTextColorActiveCard:o,tabTextColorDisabledCard:f,barColor:o,closeIconColor:s,closeIconColorHover:m,closeIconColorPressed:u,closeColorHover:p,closeColorPressed:y,closeBorderRadius:w,tabColor:h,tabColorSegment:C,tabBorderColor:S,tabFontWeightActive:x,tabFontWeight:x,tabBorderRadius:w,paneTextColor:r,fontWeightStrong:T})},Zt={name:"Tabs",common:pt,self:Qt},ea=Zt,le=ut("n-tabs"),Re={tab:[String,Number,Object,Function],name:{type:[String,Number],required:!0},disabled:Boolean,displayDirective:{type:String,default:"if"},closable:{type:Boolean,default:void 0},tabProps:Object,label:[String,Number,Object,Function]},sa=J({__TAB_PANE__:!0,name:"TabPane",alias:["TabPanel"],props:Re,setup(e){const r=Pe(le,null);return r||vt("tab-pane","`n-tab-pane` must be placed inside `n-tabs`."),{style:r.paneStyleRef,class:r.paneClassRef,mergedClsPrefix:r.mergedClsPrefixRef}},render(){return c("div",{class:[`${this.mergedClsPrefix}-tab-pane`,this.class],style:this.style},this.$slots)}}),ta=Object.assign({internalLeftPadded:Boolean,internalAddable:Boolean,internalCreatedByPane:Boolean},Ct(Re,["displayDirective"])),ie=J({__TAB__:!0,inheritAttrs:!1,name:"Tab",props:ta,setup(e){const{mergedClsPrefixRef:r,valueRef:o,typeRef:f,closableRef:s,tabStyleRef:m,tabChangeIdRef:u,onBeforeLeaveRef:p,triggerRef:y,handleAdd:h,activateTab:C,handleClose:S}=Pe(le);return{trigger:y,mergedClosable:K(()=>{if(e.internalAddable)return!1;const{closable:x}=e;return x===void 0?s.value:x}),style:m,clsPrefix:r,value:o,type:f,handleClose(x){x.stopPropagation(),!e.disabled&&S(e.name)},activateTab(){if(e.disabled)return;if(e.internalAddable){h();return}const{name:x}=e,g=++u.id;if(x!==o.value){const{value:w}=p;w?Promise.resolve(w(e.name,o.value)).then(R=>{R&&u.id===g&&C(x)}):C(x)}}}},render(){const{internalAddable:e,clsPrefix:r,name:o,disabled:f,label:s,tab:m,value:u,mergedClosable:p,style:y,trigger:h,$slots:{default:C}}=this,S=s??m;return c("div",{class:`${r}-tabs-tab-wrapper`},this.internalLeftPadded?c("div",{class:`${r}-tabs-tab-pad`}):null,c("div",Object.assign({key:o,"data-name":o,"data-disabled":f?!0:void 0},gt({class:[`${r}-tabs-tab`,u===o&&`${r}-tabs-tab--active`,f&&`${r}-tabs-tab--disabled`,p&&`${r}-tabs-tab--closable`,e&&`${r}-tabs-tab--addable`],onClick:h==="click"?this.activateTab:void 0,onMouseenter:h==="hover"?this.activateTab:void 0,style:e?void 0:y},this.internalCreatedByPane?this.tabProps||{}:this.$attrs)),c("span",{class:`${r}-tabs-tab__label`},e?c(ht,null,c("div",{class:`${r}-tabs-tab__height-placeholder`}," "),c(xt,{clsPrefix:r},{default:()=>c(Wt,null)})):C?C():typeof S=="object"?S:mt(S??o)),p&&this.type==="card"?c(yt,{clsPrefix:r,class:`${r}-tabs-tab__close`,onClick:this.handleClose,disabled:f}):null))}}),aa=n("tabs",`
 box-sizing: border-box;
 width: 100%;
 display: flex;
 flex-direction: column;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
`,[l("segment-type",[n("tabs-rail",[P("&.transition-disabled","color: red;",[n("tabs-tab",`
 transition: none;
 `)])])]),l("top",[n("tab-pane",`
 padding: var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left);
 `)]),l("left",[n("tab-pane",`
 padding: var(--n-pane-padding-right) var(--n-pane-padding-bottom) var(--n-pane-padding-left) var(--n-pane-padding-top);
 `)]),l("left, right",`
 flex-direction: row;
 `,[n("tabs-bar",`
 width: 2px;
 right: 0;
 transition:
 top .2s var(--n-bezier),
 max-height .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 padding: var(--n-tab-padding-vertical); 
 `)]),l("right",`
 flex-direction: row-reverse;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-left) var(--n-pane-padding-top) var(--n-pane-padding-right) var(--n-pane-padding-bottom);
 `),n("tabs-bar",`
 left: 0;
 `)]),l("bottom",`
 flex-direction: column-reverse;
 justify-content: flex-end;
 `,[n("tab-pane",`
 padding: var(--n-pane-padding-bottom) var(--n-pane-padding-right) var(--n-pane-padding-top) var(--n-pane-padding-left);
 `),n("tabs-bar",`
 top: 0;
 `)]),n("tabs-rail",`
 padding: 3px;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 background-color: var(--n-color-segment);
 transition: background-color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `,[n("tabs-tab-wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[n("tabs-tab",`
 overflow: hidden;
 border-radius: var(--n-tab-border-radius);
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `,[l("active",`
 font-weight: var(--n-font-weight-strong);
 color: var(--n-tab-text-color-active);
 background-color: var(--n-tab-color-segment);
 box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .08);
 `),P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])])]),l("flex",[n("tabs-nav",{width:"100%"},[n("tabs-wrapper",{width:"100%"},[n("tabs-tab",{marginRight:0})])])]),n("tabs-nav",`
 box-sizing: border-box;
 line-height: 1.5;
 display: flex;
 transition: border-color .3s var(--n-bezier);
 `,[W("prefix, suffix",`
 display: flex;
 align-items: center;
 `),W("prefix","padding-right: 16px;"),W("suffix","padding-left: 16px;")]),l("top, bottom",[n("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 bottom: 0;
 left: 0;
 width: 20px;
 `),P("&::after",`
 top: 0;
 bottom: 0;
 right: 0;
 width: 20px;
 `),l("shadow-start",[P("&::before",`
 box-shadow: inset 10px 0 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[P("&::after",`
 box-shadow: inset -10px 0 8px -8px rgba(0, 0, 0, .12);
 `)])])]),l("left, right",[n("tabs-nav-scroll-wrapper",[P("&::before",`
 top: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),P("&::after",`
 bottom: 0;
 left: 0;
 right: 0;
 height: 20px;
 `),l("shadow-start",[P("&::before",`
 box-shadow: inset 0 10px 8px -8px rgba(0, 0, 0, .12);
 `)]),l("shadow-end",[P("&::after",`
 box-shadow: inset 0 -10px 8px -8px rgba(0, 0, 0, .12);
 `)])])]),n("tabs-nav-scroll-wrapper",`
 flex: 1;
 position: relative;
 overflow: hidden;
 `,[n("tabs-nav-y-scroll",`
 height: 100%;
 width: 100%;
 overflow-y: auto; 
 scrollbar-width: none;
 `,[P("&::-webkit-scrollbar",`
 width: 0;
 height: 0;
 `)]),P("&::before, &::after",`
 transition: box-shadow .3s var(--n-bezier);
 pointer-events: none;
 content: "";
 position: absolute;
 z-index: 1;
 `)]),n("tabs-nav-scroll-content",`
 display: flex;
 position: relative;
 min-width: 100%;
 width: fit-content;
 box-sizing: border-box;
 `),n("tabs-wrapper",`
 display: inline-flex;
 flex-wrap: nowrap;
 position: relative;
 `),n("tabs-tab-wrapper",`
 display: flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 flex-grow: 0;
 `),n("tabs-tab",`
 cursor: pointer;
 white-space: nowrap;
 flex-wrap: nowrap;
 display: inline-flex;
 align-items: center;
 color: var(--n-tab-text-color);
 font-size: var(--n-tab-font-size);
 background-clip: padding-box;
 padding: var(--n-tab-padding);
 transition:
 box-shadow .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `,[l("disabled",{cursor:"not-allowed"}),W("close",`
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `),W("label",`
 display: flex;
 align-items: center;
 `)]),n("tabs-bar",`
 position: absolute;
 bottom: 0;
 height: 2px;
 border-radius: 1px;
 background-color: var(--n-bar-color);
 transition:
 left .2s var(--n-bezier),
 max-width .2s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `,[P("&.transition-disabled",`
 transition: none;
 `),l("disabled",`
 background-color: var(--n-tab-text-color-disabled)
 `)]),n("tabs-pane-wrapper",`
 position: relative;
 overflow: hidden;
 transition: max-height .2s var(--n-bezier);
 `),n("tab-pane",`
 color: var(--n-pane-text-color);
 width: 100%;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .2s var(--n-bezier);
 left: 0;
 right: 0;
 top: 0;
 `,[P("&.next-transition-leave-active, &.prev-transition-leave-active, &.next-transition-enter-active, &.prev-transition-enter-active",`
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .2s var(--n-bezier),
 opacity .2s var(--n-bezier);
 `),P("&.next-transition-leave-active, &.prev-transition-leave-active",`
 position: absolute;
 `),P("&.next-transition-enter-from, &.prev-transition-leave-to",`
 transform: translateX(32px);
 opacity: 0;
 `),P("&.next-transition-leave-to, &.prev-transition-enter-from",`
 transform: translateX(-32px);
 opacity: 0;
 `),P("&.next-transition-leave-from, &.next-transition-enter-to, &.prev-transition-leave-from, &.prev-transition-enter-to",`
 transform: translateX(0);
 opacity: 1;
 `)]),n("tabs-tab-pad",`
 box-sizing: border-box;
 width: var(--n-tab-gap);
 flex-grow: 0;
 flex-shrink: 0;
 `),l("line-type, bar-type",[n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 box-sizing: border-box;
 vertical-align: bottom;
 `,[P("&:hover",{color:"var(--n-tab-text-color-hover)"}),l("active",`
 color: var(--n-tab-text-color-active);
 font-weight: var(--n-tab-font-weight-active);
 `),l("disabled",{color:"var(--n-tab-text-color-disabled)"})])]),n("tabs-nav",[l("line-type",[l("top",[W("prefix, suffix",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 bottom: -1px;
 `)]),l("left",[W("prefix, suffix",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-right: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 right: -1px;
 `)]),l("right",[W("prefix, suffix",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-left: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 left: -1px;
 `)]),l("bottom",[W("prefix, suffix",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-nav-scroll-content",`
 border-top: 1px solid var(--n-tab-border-color);
 `),n("tabs-bar",`
 top: -1px;
 `)]),W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-nav-scroll-content",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-bar",`
 border-radius: 0;
 `)]),l("card-type",[W("prefix, suffix",`
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-pad",`
 flex-grow: 1;
 transition: border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-tab-border-color);
 `),n("tabs-tab-pad",`
 transition: border-color .3s var(--n-bezier);
 `),n("tabs-tab",`
 font-weight: var(--n-tab-font-weight);
 border: 1px solid var(--n-tab-border-color);
 background-color: var(--n-tab-color);
 box-sizing: border-box;
 position: relative;
 vertical-align: bottom;
 display: flex;
 justify-content: space-between;
 font-size: var(--n-tab-font-size);
 color: var(--n-tab-text-color);
 `,[l("addable",`
 padding-left: 8px;
 padding-right: 8px;
 font-size: 16px;
 `,[W("height-placeholder",`
 width: 0;
 font-size: var(--n-tab-font-size);
 `),St("disabled",[P("&:hover",`
 color: var(--n-tab-text-color-hover);
 `)])]),l("closable","padding-right: 8px;"),l("active",`
 background-color: #0000;
 font-weight: var(--n-tab-font-weight-active);
 color: var(--n-tab-text-color-active);
 `),l("disabled","color: var(--n-tab-text-color-disabled);")]),n("tabs-scroll-padding","border-bottom: 1px solid var(--n-tab-border-color);")]),l("left, right",[n("tabs-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-wrapper",`
 flex-direction: column;
 `,[n("tabs-tab-pad",`
 height: var(--n-tab-gap-vertical);
 width: 100%;
 `)])])]),l("top",[l("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-top-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-bottom: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-bottom: 1px solid var(--n-tab-border-color);
 `)])]),l("left",[l("card-type",[n("tabs-tab",`
 border-top-left-radius: var(--n-tab-border-radius);
 border-bottom-left-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-right: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-right: 1px solid var(--n-tab-border-color);
 `)])]),l("right",[l("card-type",[n("tabs-tab",`
 border-top-right-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-left: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-left: 1px solid var(--n-tab-border-color);
 `)])]),l("bottom",[l("card-type",[n("tabs-tab",`
 border-bottom-left-radius: var(--n-tab-border-radius);
 border-bottom-right-radius: var(--n-tab-border-radius);
 `,[l("active",`
 border-top: 1px solid #0000;
 `)]),n("tabs-tab-pad",`
 border-top: 1px solid var(--n-tab-border-color);
 `)])])])]),ra=Object.assign(Object.assign({},Te.props),{value:[String,Number],defaultValue:[String,Number],trigger:{type:String,default:"click"},type:{type:String,default:"bar"},closable:Boolean,justifyContent:String,size:{type:String,default:"medium"},placement:{type:String,default:"top"},tabStyle:[String,Object],barWidth:Number,paneClass:String,paneStyle:[String,Object],paneWrapperClass:String,paneWrapperStyle:[String,Object],addable:[Boolean,Object],tabsPadding:{type:Number,default:0},animated:Boolean,onBeforeLeave:Function,onAdd:Function,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onClose:[Function,Array],labelSize:String,activeName:[String,Number],onActiveNameChange:[Function,Array]}),da=J({name:"Tabs",props:ra,setup(e,{slots:r}){var o,f,s,m;const{mergedClsPrefixRef:u,inlineThemeDisabled:p}=wt(e),y=Te("Tabs","-tabs",aa,ea,e,u),h=B(null),C=B(null),S=B(null),x=B(null),g=B(null),w=B(!0),R=B(!0),T=xe(e,["labelSize","size"]),A=xe(e,["activeName","value"]),L=B((f=(o=A.value)!==null&&o!==void 0?o:e.defaultValue)!==null&&f!==void 0?f:r.default?(m=(s=ee(r.default())[0])===null||s===void 0?void 0:s.props)===null||m===void 0?void 0:m.name:null),_=Et(A,L),V={id:0},v=K(()=>{if(!(!e.justifyContent||e.type==="card"))return{display:"flex",justifyContent:e.justifyContent}});te(_,()=>{V.id=0,I(),se()});function b(){var t;const{value:a}=_;return a===null?null:(t=h.value)===null||t===void 0?void 0:t.querySelector(`[data-name="${a}"]`)}function z(t){if(e.type==="card")return;const{value:a}=C;if(a&&t){const i=`${u.value}-tabs-bar--disabled`,{barWidth:d,placement:$}=e;if(t.dataset.disabled==="true"?a.classList.add(i):a.classList.remove(i),["top","bottom"].includes($)){if(M(["top","maxHeight","height"]),typeof d=="number"&&t.offsetWidth>=d){const E=Math.floor((t.offsetWidth-d)/2)+t.offsetLeft;a.style.left=`${E}px`,a.style.maxWidth=`${d}px`}else a.style.left=`${t.offsetLeft}px`,a.style.maxWidth=`${t.offsetWidth}px`;a.style.width="8192px",a.offsetWidth}else{if(M(["left","maxWidth","width"]),typeof d=="number"&&t.offsetHeight>=d){const E=Math.floor((t.offsetHeight-d)/2)+t.offsetTop;a.style.top=`${E}px`,a.style.maxHeight=`${d}px`}else a.style.top=`${t.offsetTop}px`,a.style.maxHeight=`${t.offsetHeight}px`;a.style.height="8192px",a.offsetHeight}}}function M(t){const{value:a}=C;if(a)for(const i of t)a.style[i]=""}function I(){if(e.type==="card")return;const t=b();t&&z(t)}function se(t){var a;const i=(a=g.value)===null||a===void 0?void 0:a.$el;if(!i)return;const d=b();if(!d)return;const{scrollLeft:$,offsetWidth:E}=i,{offsetLeft:H,offsetWidth:N}=d;$>H?i.scrollTo({top:0,left:H,behavior:"smooth"}):H+N>$+E&&i.scrollTo({top:0,left:H+N-E,behavior:"smooth"})}const O=B(null);let Q=0,j=null;function Le(t){const a=O.value;if(a){Q=t.getBoundingClientRect().height;const i=`${Q}px`,d=()=>{a.style.height=i,a.style.maxHeight=i};j?(d(),j(),j=null):j=d}}function ze(t){const a=O.value;if(a){const i=t.getBoundingClientRect().height,d=()=>{document.body.offsetHeight,a.style.maxHeight=`${i}px`,a.style.height=`${Math.max(Q,i)}px`};j?(j(),j=null,d()):j=d}}function $e(){const t=O.value;t&&(t.style.maxHeight="",t.style.height="")}const de={value:[]},be=B("next");function Be(t){const a=_.value;let i="next";for(const d of de.value){if(d===a)break;if(d===t){i="prev";break}}be.value=i,We(t)}function We(t){const{onActiveNameChange:a,onUpdateValue:i,"onUpdate:value":d}=e;a&&X(a,t),i&&X(i,t),d&&X(d,t),L.value=t}function Ae(t){const{onClose:a}=e;a&&X(a,t)}function ce(){const{value:t}=C;if(!t)return;const a="transition-disabled";t.classList.add(a),I(),t.classList.remove(a)}let fe=0;function _e(t){var a;if(t.contentRect.width===0&&t.contentRect.height===0||fe===t.contentRect.width)return;fe=t.contentRect.width;const{type:i}=e;(i==="line"||i==="bar")&&ce(),i!=="segment"&&Z((a=g.value)===null||a===void 0?void 0:a.$el)}const Ee=ne(_e,64);te([()=>e.justifyContent,()=>e.size],()=>{ae(()=>{const{type:t}=e;(t==="line"||t==="bar")&&ce()})});const D=B(!1);function Ve(t){var a;const{target:i,contentRect:{width:d}}=t,$=i.parentElement.offsetWidth;if(!D.value)$<d&&(D.value=!0);else{const{value:E}=x;if(!E)return;$-d>E.$el.offsetWidth&&(D.value=!1)}Z((a=g.value)===null||a===void 0?void 0:a.$el)}const ke=ne(Ve,64);function Me(){const{onAdd:t}=e;t&&t(),ae(()=>{const a=b(),{value:i}=g;!a||!i||i.scrollTo({left:a.offsetLeft,top:0,behavior:"smooth"})})}function Z(t){if(!t)return;const{placement:a}=e;if(a==="top"||a==="bottom"){const{scrollLeft:i,scrollWidth:d,offsetWidth:$}=t;w.value=i<=0,R.value=i+$>=d}else{const{scrollTop:i,scrollHeight:d,offsetHeight:$}=t;w.value=i<=0,R.value=i+$>=d}}const je=ne(t=>{Z(t.target)},64);Pt(le,{triggerRef:F(e,"trigger"),tabStyleRef:F(e,"tabStyle"),paneClassRef:F(e,"paneClass"),paneStyleRef:F(e,"paneStyle"),mergedClsPrefixRef:u,typeRef:F(e,"type"),closableRef:F(e,"closable"),valueRef:_,tabChangeIdRef:V,onBeforeLeaveRef:F(e,"onBeforeLeave"),activateTab:Be,handleClose:Ae,handleAdd:Me}),_t(()=>{I(),se()}),Tt(()=>{const{value:t}=S;if(!t)return;const{value:a}=u,i=`${a}-tabs-nav-scroll-wrapper--shadow-start`,d=`${a}-tabs-nav-scroll-wrapper--shadow-end`;w.value?t.classList.remove(i):t.classList.add(i),R.value?t.classList.remove(d):t.classList.add(d)});const pe=B(null);te(_,()=>{if(e.type==="segment"){const t=pe.value;t&&ae(()=>{t.classList.add("transition-disabled"),t.offsetWidth,t.classList.remove("transition-disabled")})}});const Ie={syncBarPosition:()=>{I()}},ue=K(()=>{const{value:t}=T,{type:a}=e,i={card:"Card",bar:"Bar",line:"Line",segment:"Segment"}[a],d=`${t}${i}`,{self:{barColor:$,closeIconColor:E,closeIconColorHover:H,closeIconColorPressed:N,tabColor:Fe,tabBorderColor:Ge,paneTextColor:He,tabFontWeight:Oe,tabBorderRadius:De,tabFontWeightActive:Ne,colorSegment:Ue,fontWeightStrong:Xe,tabColorSegment:Ye,closeSize:Ke,closeIconSize:qe,closeColorHover:Je,closeColorPressed:Qe,closeBorderRadius:Ze,[k("panePadding",t)]:U,[k("tabPadding",d)]:et,[k("tabPaddingVertical",d)]:tt,[k("tabGap",d)]:at,[k("tabGap",`${d}Vertical`)]:rt,[k("tabTextColor",a)]:nt,[k("tabTextColorActive",a)]:ot,[k("tabTextColorHover",a)]:it,[k("tabTextColorDisabled",a)]:lt,[k("tabFontSize",t)]:st},common:{cubicBezierEaseInOut:dt}}=y.value;return{"--n-bezier":dt,"--n-color-segment":Ue,"--n-bar-color":$,"--n-tab-font-size":st,"--n-tab-text-color":nt,"--n-tab-text-color-active":ot,"--n-tab-text-color-disabled":lt,"--n-tab-text-color-hover":it,"--n-pane-text-color":He,"--n-tab-border-color":Ge,"--n-tab-border-radius":De,"--n-close-size":Ke,"--n-close-icon-size":qe,"--n-close-color-hover":Je,"--n-close-color-pressed":Qe,"--n-close-border-radius":Ze,"--n-close-icon-color":E,"--n-close-icon-color-hover":H,"--n-close-icon-color-pressed":N,"--n-tab-color":Fe,"--n-tab-font-weight":Oe,"--n-tab-font-weight-active":Ne,"--n-tab-padding":et,"--n-tab-padding-vertical":tt,"--n-tab-gap":at,"--n-tab-gap-vertical":rt,"--n-pane-padding-left":Y(U,"left"),"--n-pane-padding-right":Y(U,"right"),"--n-pane-padding-top":Y(U,"top"),"--n-pane-padding-bottom":Y(U,"bottom"),"--n-font-weight-strong":Xe,"--n-tab-color-segment":Ye}}),G=p?Rt("tabs",K(()=>`${T.value[0]}${e.type[0]}`),ue,e):void 0;return Object.assign({mergedClsPrefix:u,mergedValue:_,renderedNames:new Set,tabsRailElRef:pe,tabsPaneWrapperRef:O,tabsElRef:h,barElRef:C,addTabInstRef:x,xScrollInstRef:g,scrollWrapperElRef:S,addTabFixed:D,tabWrapperStyle:v,handleNavResize:Ee,mergedSize:T,handleScroll:je,handleTabsResize:ke,cssVars:p?void 0:ue,themeClass:G==null?void 0:G.themeClass,animationDirection:be,renderNameListRef:de,onAnimationBeforeLeave:Le,onAnimationEnter:ze,onAnimationAfterEnter:$e,onRender:G==null?void 0:G.onRender},Ie)},render(){const{mergedClsPrefix:e,type:r,placement:o,addTabFixed:f,addable:s,mergedSize:m,renderNameListRef:u,onRender:p,paneWrapperClass:y,paneWrapperStyle:h,$slots:{default:C,prefix:S,suffix:x}}=this;p==null||p();const g=C?ee(C()).filter(v=>v.type.__TAB_PANE__===!0):[],w=C?ee(C()).filter(v=>v.type.__TAB__===!0):[],R=!w.length,T=r==="card",A=r==="segment",L=!T&&!A&&this.justifyContent;u.value=[];const _=()=>{const v=c("div",{style:this.tabWrapperStyle,class:[`${e}-tabs-wrapper`]},L?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}),R?g.map((b,z)=>(u.value.push(b.props.name),oe(c(ie,Object.assign({},b.props,{internalCreatedByPane:!0,internalLeftPadded:z!==0&&(!L||L==="center"||L==="start"||L==="end")}),b.children?{default:b.children.tab}:void 0)))):w.map((b,z)=>(u.value.push(b.props.name),oe(z!==0&&!L?we(b):b))),!f&&s&&T?Se(s,(R?g.length:w.length)!==0):null,L?null:c("div",{class:`${e}-tabs-scroll-padding`,style:{width:`${this.tabsPadding}px`}}));return c("div",{ref:"tabsElRef",class:`${e}-tabs-nav-scroll-content`},T&&s?c(ge,{onResize:this.handleTabsResize},{default:()=>v}):v,T?c("div",{class:`${e}-tabs-pad`}):null,T?null:c("div",{ref:"barElRef",class:`${e}-tabs-bar`}))},V=A?"top":o;return c("div",{class:[`${e}-tabs`,this.themeClass,`${e}-tabs--${r}-type`,`${e}-tabs--${m}-size`,L&&`${e}-tabs--flex`,`${e}-tabs--${V}`],style:this.cssVars},c("div",{class:[`${e}-tabs-nav--${r}-type`,`${e}-tabs-nav--${V}`,`${e}-tabs-nav`]},ve(S,v=>v&&c("div",{class:`${e}-tabs-nav__prefix`},v)),A?c("div",{class:`${e}-tabs-rail`,ref:"tabsRailElRef"},R?g.map((v,b)=>(u.value.push(v.props.name),c(ie,Object.assign({},v.props,{internalCreatedByPane:!0,internalLeftPadded:b!==0}),v.children?{default:v.children.tab}:void 0))):w.map((v,b)=>(u.value.push(v.props.name),b===0?v:we(v)))):c(ge,{onResize:this.handleNavResize},{default:()=>c("div",{class:`${e}-tabs-nav-scroll-wrapper`,ref:"scrollWrapperElRef"},["top","bottom"].includes(V)?c(kt,{ref:"xScrollInstRef",onScroll:this.handleScroll},{default:_}):c("div",{class:`${e}-tabs-nav-y-scroll`,onScroll:this.handleScroll},_()))}),f&&s&&T?Se(s,!0):null,ve(x,v=>v&&c("div",{class:`${e}-tabs-nav__suffix`},v))),R&&(this.animated&&(V==="top"||V==="bottom")?c("div",{ref:"tabsPaneWrapperRef",style:h,class:[`${e}-tabs-pane-wrapper`,y]},Ce(g,this.mergedValue,this.renderedNames,this.onAnimationBeforeLeave,this.onAnimationEnter,this.onAnimationAfterEnter,this.animationDirection)):Ce(g,this.mergedValue,this.renderedNames)))}});function Ce(e,r,o,f,s,m,u){const p=[];return e.forEach(y=>{const{name:h,displayDirective:C,"display-directive":S}=y.props,x=w=>C===w||S===w,g=r===h;if(y.key!==void 0&&(y.key=h),g||x("show")||x("show:lazy")&&o.has(h)){o.has(h)||o.add(h);const w=!x("if");p.push(w?Lt(y,[[zt,g]]):y)}}),u?c($t,{name:`${u}-transition`,onBeforeLeave:f,onEnter:s,onAfterEnter:m},{default:()=>p}):p}function Se(e,r){return c(ie,{ref:"addTabInstRef",key:"__addable",name:"__addable",internalCreatedByPane:!0,internalAddable:!0,internalLeftPadded:r,disabled:typeof e=="object"&&e.disabled})}function we(e){const r=Bt(e);return r.props?r.props.internalLeftPadded=!0:r.props={internalLeftPadded:!0},r}function oe(e){return Array.isArray(e.dynamicProps)?e.dynamicProps.includes("internalLeftPadded")||e.dynamicProps.push("internalLeftPadded"):e.dynamicProps=["internalLeftPadded"],e}export{sa as N,da as a};
