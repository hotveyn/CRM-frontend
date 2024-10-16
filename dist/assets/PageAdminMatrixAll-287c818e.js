import{d as b,c as h,a as l,o as d,y as p,t as M,v as S,i as u,k as N,m as w,f as x,g as _,w as g,F as k,l as z,b as y,N as C,_ as A}from"./index-62384645.js";import{N as D,a as B}from"./Skeleton-a17865c3.js";import{a as q}from"./departments.store-3fc2218e.js";import{N as O}from"./InputNumber-17324f83.js";import{N as P}from"./Divider-bdda2be5.js";import"./get-806e042e.js";import"./use-locale-a4cb9846.js";import"./get-slot-1efb97e5.js";import"./Select-8ae686c1.js";import"./cssr-1cbf0123.js";import"./Suffix-86caeb40.js";import"./Empty-6144791c.js";import"./ChevronRight-7e3f7794.js";import"./Forward-d200b360.js";import"./Input-c95d618b.js";import"./Add-27b36ee1.js";const T=b({__name:"TableMatrix",props:{tableData:{},departmentColumns:{}},setup(r){const t=r,s=e();function e(){return[{title:"Тип вывески",key:"order_type.name",sorter:"default"},...t.departmentColumns,{title:"Сумма",key:"sum",sorter:"default"}]}return(i,a)=>(d(),h(l(D),{"single-line":!1,data:i.tableData,columns:l(s),bordered:!0},null,8,["data","columns"]))}});function U(){return{async getSerialized(){return(await p.get("/monetary-matrix/ser-to-table")).data},async getAll(){return(await p.get("/monetary-matrix/")).data},async bulkUpdate(r){return(await p.patch("/monetary-matrix/bulk-update",{matrices:r})).data}}}const v=U(),V=M(),$=S("matrix",{state:()=>({matrices:[],serializedMatrices:[]}),actions:{async requestSerialized(){this.serializedMatrices=await v.getSerialized()},async update(r){const t=[];for(let s=0;s<r.length;s++){const e=this.serializedMatrices[s],i=r[s];Object.keys(e).forEach(a=>{if(a!=="order_type"&&e[a].percent!==i[a].percent){const n=i[a];e[a].percent=i[a].percent,t.push({order_type_id:+n.order_type_id,department_id:+n.department_id,percent:n.percent})}})}t.length&&(await v.bulkUpdate(t),V.matrix.updated())},getCopy(){return JSON.parse(JSON.stringify(this.serializedMatrices))}}}),E={class:"admin-matrix-all"},F=b({__name:"PageAdminMatrixAll",setup(r){const t=$(),s=q(),e=u([]),i=u(!0),a=u([]);async function n(){await t.update(e.value)}return N(async()=>{await t.requestSerialized(),await s.request(),e.value=t.getCopy(),a.value=s.departments.map(o=>({title:o.name,key:`${o.id}.percent`,sorter:"default",render(c,f){return w(O,{value:c[o.id].percent,min:0,precision:2,max:100,onUpdateValue(m){m!=null&&(e.value[f][o.id].percent=m,console.log(m))}})}})),i.value=!1}),(o,c)=>(d(),x("div",E,[_(l(P),{"title-placement":"left"},{default:g(()=>[y("Матрица оплаты")]),_:1}),i.value?(d(),h(l(B),{key:0,width:"100%",height:"52px",sharp:!1,text:"",size:"medium",repeat:5})):(d(),x(k,{key:1},[_(T,{"table-data":e.value,"department-columns":a.value},null,8,["table-data","department-columns"]),_(l(C),{class:"admin-matrix-all__save-button",disabled:!e.value.length,type:"primary",onClick:c[0]||(c[0]=z(f=>n(),["prevent"]))},{default:g(()=>[y(" Сохранить ")]),_:1},8,["disabled"])],64))]))}});const re=A(F,[["__scopeId","data-v-b69e2842"]]);export{re as default};