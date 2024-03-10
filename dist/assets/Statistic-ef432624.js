import{A as S,B as r,D as c,d as T,H as _,I as v,a8 as R,p as $,L as F,m as a,a9 as u}from"./index-62384645.js";const w=s=>{const{textColor2:t,textColor3:l,fontSize:n,fontWeight:i}=s;return{labelFontSize:n,labelFontWeight:i,valueFontWeight:i,valueFontSize:"24px",labelTextColor:l,valuePrefixTextColor:t,valueSuffixTextColor:t,valueTextColor:t}},N={name:"Statistic",common:S,self:w},P=N,W=r("statistic",[c("label",`
 font-weight: var(--n-label-font-weight);
 transition: .3s color var(--n-bezier);
 font-size: var(--n-label-font-size);
 color: var(--n-label-text-color);
 `),r("statistic-value",`
 margin-top: 4px;
 font-weight: var(--n-value-font-weight);
 `,[c("prefix",`
 margin: 0 4px 0 0;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-prefix-text-color);
 `,[r("icon",{verticalAlign:"-0.125em"})]),c("content",`
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-text-color);
 `),c("suffix",`
 margin: 0 0 0 4px;
 font-size: var(--n-value-font-size);
 transition: .3s color var(--n-bezier);
 color: var(--n-value-suffix-text-color);
 `,[r("icon",{verticalAlign:"-0.125em"})])])]),E=Object.assign(Object.assign({},v.props),{tabularNums:Boolean,label:String,value:[String,Number]}),L=T({name:"Statistic",props:E,setup(s){const{mergedClsPrefixRef:t,inlineThemeDisabled:l,mergedRtlRef:n}=_(s),i=v("Statistic","-statistic",W,P,s,t),f=R("Statistic",n,t),e=$(()=>{const{self:{labelFontWeight:x,valueFontSize:m,valueFontWeight:b,valuePrefixTextColor:d,labelTextColor:h,valueSuffixTextColor:g,valueTextColor:p,labelFontSize:z},common:{cubicBezierEaseInOut:C}}=i.value;return{"--n-bezier":C,"--n-label-font-size":z,"--n-label-font-weight":x,"--n-label-text-color":h,"--n-value-font-weight":b,"--n-value-font-size":m,"--n-value-prefix-text-color":d,"--n-value-suffix-text-color":g,"--n-value-text-color":p}}),o=l?F("statistic",void 0,e,s):void 0;return{rtlEnabled:f,mergedClsPrefix:t,cssVars:l?void 0:e,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var s;const{mergedClsPrefix:t,$slots:{default:l,label:n,prefix:i,suffix:f}}=this;return(s=this.onRender)===null||s===void 0||s.call(this),a("div",{class:[`${t}-statistic`,this.themeClass,this.rtlEnabled&&`${t}-statistic--rtl`],style:this.cssVars},u(n,e=>a("div",{class:`${t}-statistic__label`},this.label||e)),a("div",{class:`${t}-statistic-value`,style:{fontVariantNumeric:this.tabularNums?"tabular-nums":""}},u(i,e=>e&&a("span",{class:`${t}-statistic-value__prefix`},e)),this.value!==void 0?a("span",{class:`${t}-statistic-value__content`},this.value):u(l,e=>e&&a("span",{class:`${t}-statistic-value__content`},e)),u(f,e=>e&&a("span",{class:`${t}-statistic-value__suffix`},e))))}});export{L as N};
