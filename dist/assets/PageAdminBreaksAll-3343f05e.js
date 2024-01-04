import{d as k,c as _,a as e,o as f,m as b,N as g,i as v,j as S,k as w,w as d,g as s,b as C,l as x,n as B,f as D,q as F,s as U}from"./index-febb9171.js";import{N as q,a as R}from"./Skeleton-539b4266.js";import{u as N}from"./breaks.store-198523e5.js";import{a as z}from"./departments.store-87494bd6.js";import{N as M}from"./Input-e98dee29.js";import{N as y,a as V}from"./FormItem-c4985c2b.js";import{N as I}from"./Select-479ae167.js";import{N as T}from"./Divider-1a5ba554.js";import"./Suffix-04a49060.js";import"./use-locale-07b54378.js";import"./get-slot-1efb97e5.js";import"./ChevronRight-0a7d7edd.js";import"./Forward-b57e1042.js";import"./Empty-0a7cc83a.js";import"./cssr-ece96bea.js";const $=k({__name:"TableBreak",props:{tableData:{}},emits:["remove","change"],setup(c,{emit:i}){const r=t({change:a=>{i("change",a)},remove:a=>{i("remove",a)}});function t(a){return[{title:"Название",key:"name",sorter:"default"},{title:"Отвечающий отдел",key:"department.name",sorter:"default"},{title:"Действия",key:"actions",render(l){return[b(g,{type:"default",size:"small",style:{marginRight:"6px"},onClick:()=>a.change(l.id)},{default:()=>"Изменить"}),b(g,{type:"error",size:"small",style:{marginRight:"6px"},onClick:()=>a.remove(l.id)},{default:()=>"Удалить"})]}}]}return(a,l)=>(f(),_(e(q),{"single-line":!1,data:a.tableData,columns:e(r),pagination:{pageSize:30},bordered:!0},null,8,["data","columns"]))}});function A(c){const i={name:{required:!0,message:"Введите название брака"},department_id:{required:!0,message:"Выбирите отдел ответственный за этот брак"}},r=v([]),t=S({name:"",department_id:null});return w(async()=>{const a=z();await a.request(),a.departments.forEach(o=>{r.value.push({label:o.name,value:o.id})});const m=N().findById(c);t.name=m==null?void 0:m.name,t.department_id=Number(m.department_id)}),{rules:i,formValues:t,options:r}}const E=k({__name:"FormBreakUpdate",props:{id:{}},emits:["changed"],setup(c,{emit:i}){const r=c,t=N(),a=v(),{rules:l,options:m,formValues:o}=A(r.id);function u(){var p;(p=a.value)==null||p.validate(async n=>{n||(await t.update(r.id,o),i("changed"))})}return(p,n)=>(f(),_(e(V),{ref_key:"breakCreateFormRef",ref:a,rules:e(l),model:e(o),class:"break-create-form"},{default:d(()=>[s(e(y),{label:"Название брака",path:"name"},{default:d(()=>[s(e(M),{value:e(o).name,"onUpdate:value":n[0]||(n[0]=h=>e(o).name=h),placeholder:""},null,8,["value"])]),_:1}),s(e(y),{label:"Ответственный отдел",path:"department_id"},{default:d(()=>[s(e(I),{value:e(o).department_id,"onUpdate:value":n[1]||(n[1]=h=>e(o).department_id=h),placeholder:"",options:e(m),remote:""},null,8,["value","options"])]),_:1}),s(e(g),{type:"primary",onClick:n[2]||(n[2]=x(h=>u(),["prevent"]))},{default:d(()=>[C(" Поменять ")]),_:1})]),_:1},8,["rules","model"]))}}),j={class:"admin-departments-all"},re=k({__name:"PageAdminBreaksAll",setup(c){const i=B(),r=N(),t=S({isShow:!1,id:NaN}),a=v(!0);function l(u){t.isShow=!0,t.id=u}function m(){t.isShow=!1}function o(u){i.confirm(()=>{r.remove(u)})}return w(async()=>{await r.request(),a.value=!1}),(u,p)=>(f(),D("div",j,[s(e(T),{"title-placement":"left"},{default:d(()=>[C("Все виды браков")]),_:1}),a.value?(f(),_(e(R),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(f(),_($,{key:1,"table-data":e(r).breaks,onChange:l,onRemove:o},null,8,["table-data"])),s(e(U),{show:t.isShow,"onUpdate:show":p[0]||(p[0]=n=>t.isShow=n)},{default:d(()=>[s(e(F),{style:{width:"600px"}},{default:d(()=>[s(E,{id:t.id,onChanged:m},null,8,["id"])]),_:1})]),_:1},8,["show"])]))}});export{re as default};
