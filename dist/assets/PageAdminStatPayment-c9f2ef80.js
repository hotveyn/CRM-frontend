import{u as w}from"./stat.service-5be55f2b.js";import{v as h,d as S,c,a as e,o as m,i as u,p as f,k,z as N,f as P,g as v,w as b,h as y,b as D,_ as x}from"./index-febb9171.js";import{a as C}from"./departments.store-87494bd6.js";import{N as q,a as B}from"./Skeleton-539b4266.js";import{N as A}from"./Divider-1a5ba554.js";import{N as I}from"./DatePicker-751494f8.js";import"./Suffix-04a49060.js";import"./use-locale-07b54378.js";import"./get-slot-1efb97e5.js";import"./Select-479ae167.js";import"./cssr-ece96bea.js";import"./Empty-0a7cc83a.js";import"./ChevronRight-0a7d7edd.js";import"./Forward-b57e1042.js";import"./Input-e98dee29.js";const M=w(),O=h("stat-payment",{state:()=>({stat:[]}),actions:{async request(s,t){this.stat=await M.getPaymentStat(s,t)}}}),T=S({__name:"TablePayment",props:{tableData:{},departmentColumns:{}},setup(s){const t=s,a=n();function n(){return[{title:"",key:"employee_name"},...t.departmentColumns,{title:"Сумма",key:"sum",sorter:"default"}]}return(o,p)=>(m(),c(e(q),{"single-line":!1,data:o.tableData,columns:e(a),bordered:!0},null,8,["data","columns"]))}}),V={class:"admin-stat-payment"},z={class:"date-range",style:{"margin-bottom":"30px"}},$={class:"admin-stat-payment__table"},E=S({__name:"PageAdminStatPayment",setup(s){const t=u([]),a=O(),n=C(),o=u(!0),p=Date.now()-26784e5,r=u([p,Date.now()]),d=f(()=>new Date(r.value[0]).toISOString()),l=f(()=>new Date(r.value[1]).toISOString());return k(async()=>{await a.request(d.value,l.value),await n.request(),t.value=n.departments.map(i=>({title:i.name,key:`${i.id}.sum`,sorter:"default"})),o.value=!1}),N(l,async()=>{await a.request(d.value,l.value)}),(i,_)=>(m(),P("div",V,[v(e(A),{"title-placement":"left"},{default:b(()=>[D("Оплата")]),_:1}),y("div",z,[v(e(I),{value:r.value,"onUpdate:value":_[0]||(_[0]=g=>r.value=g),type:"daterange"},null,8,["value"])]),y("div",$,[o.value?(m(),c(e(B),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(m(),c(T,{key:1,"table-data":e(a).stat,"department-columns":t.value},null,8,["table-data","department-columns"]))])]))}});const et=x(E,[["__scopeId","data-v-2028afee"]]);export{et as default};
