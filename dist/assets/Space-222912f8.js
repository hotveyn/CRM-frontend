import{by as B,d as C,H as G,I as v,a8 as R,p as j,bD as E,m as x,P,bP as I,aK as b}from"./index-febb9171.js";import{g as L}from"./get-slot-1efb97e5.js";const M={gapSmall:"4px 8px",gapMedium:"8px 12px",gapLarge:"12px 16px"},T=()=>M,A={name:"Space",self:T},D=A;let h;const H=()=>{if(!B)return!0;if(h===void 0){const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.rowGap="1px",e.appendChild(document.createElement("div")),e.appendChild(document.createElement("div")),document.body.appendChild(e);const n=e.scrollHeight===1;return document.body.removeChild(e),h=n}return h},N=Object.assign(Object.assign({},v.props),{align:String,justify:{type:String,default:"start"},inline:Boolean,vertical:Boolean,size:{type:[String,Number,Array],default:"medium"},wrapItem:{type:Boolean,default:!0},itemStyle:[String,Object],wrap:{type:Boolean,default:!0},internalUseGap:{type:Boolean,default:void 0}}),F=C({name:"Space",props:N,setup(e){const{mergedClsPrefixRef:n,mergedRtlRef:u}=G(e),a=v("Space","-space",void 0,D,e,n),g=R("Space",u,n);return{useGap:H(),rtlEnabled:g,mergedClsPrefix:n,margin:j(()=>{const{size:t}=e;if(Array.isArray(t))return{horizontal:t[0],vertical:t[1]};if(typeof t=="number")return{horizontal:t,vertical:t};const{self:{[P("gap",t)]:f}}=a.value,{row:l,col:p}=I(f);return{horizontal:b(p),vertical:b(l)}})}},render(){const{vertical:e,align:n,inline:u,justify:a,itemStyle:g,margin:t,wrap:f,mergedClsPrefix:l,rtlEnabled:p,useGap:o,wrapItem:S,internalUseGap:w}=this,c=E(L(this));if(!c.length)return null;const y=`${t.horizontal}px`,m=`${t.horizontal/2}px`,$=`${t.vertical}px`,i=`${t.vertical/2}px`,s=c.length-1,d=a.startsWith("space-");return x("div",{role:"none",class:[`${l}-space`,p&&`${l}-space--rtl`],style:{display:u?"inline-flex":"flex",flexDirection:e?"column":"row",justifyContent:["start","end"].includes(a)?"flex-"+a:a,flexWrap:!f||e?"nowrap":"wrap",marginTop:o||e?"":`-${i}`,marginBottom:o||e?"":`-${i}`,alignItems:n,gap:o?`${t.vertical}px ${t.horizontal}px`:""}},!S&&(o||w)?c:c.map((z,r)=>x("div",{role:"none",style:[g,{maxWidth:"100%"},o?"":e?{marginBottom:r!==s?$:""}:p?{marginLeft:d?a==="space-between"&&r===s?"":m:r!==s?y:"",marginRight:d?a==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}:{marginRight:d?a==="space-between"&&r===s?"":m:r!==s?y:"",marginLeft:d?a==="space-between"&&r===0?"":m:"",paddingTop:i,paddingBottom:i}]},z)))}});export{F as N};
