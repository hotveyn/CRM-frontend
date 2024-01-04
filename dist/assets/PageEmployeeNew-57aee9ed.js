import{t as v,v as x,bO as k,d as N,n as b,o as s,c as _,w as o,b as l,T as u,g as m,a,N as C,h as w,f as c,S as E,q as B,k as $,F as f,M as y,_ as I}from"./index-febb9171.js";import{u as P}from"./stage.service-2d024ad4.js";import{N as T}from"./Divider-1a5ba554.js";import{N as V}from"./Empty-0a7cc83a.js";import{N as q,a as D}from"./Tabs-9b36c07a.js";import"./use-locale-07b54378.js";import"./Add-1d9d2516.js";import"./cssr-ece96bea.js";const h=P(),g=v(),S=x("stages-new",{state:()=>({stages:[]}),actions:{async request(){this.stages=await h.getAvailable()},async claim(d,r){h.claim(d).then(()=>{g.stage.claim();const e=this.stages.findIndex(i=>i.id===r);e!==-1&&(this.stages[e].orderStages=this.stages[e].orderStages.filter(i=>i.id!==d)),this.stages[e].orderStages.length||this.stages.splice(e,1)}).catch(e=>{k.isAxiosError(e)?g.error.custom(e.response.data.message):g.error.error()})}}}),M={class:"card-content"},z={key:0},A=w("strong",null,"Комментарий - ",-1),F=N({__name:"CardStageNew",props:{stage:{},departmentId:{}},setup(d){const r=d,{confirm:e}=b(),i=S();async function n(t){e(async()=>{await i.claim(t,r.departmentId)})}return(t,p)=>(s(),_(a(B),{title:t.stage.order.name},{"header-extra":o(()=>[l(u(t.stage.order.code),1)]),action:o(()=>[m(a(C),{onClick:p[0]||(p[0]=H=>n(t.stage.id)),style:{width:"100%"},type:"success"},{default:o(()=>[l("Принять в работу")]),_:1})]),default:o(()=>[w("div",M,[t.stage.order.comment?(s(),c("p",z,[A,l(" "+u(t.stage.order.comment),1)])):E("",!0)])]),_:1},8,["title"]))}}),L={class:"employee-new"},O={key:0,class:"employee-new__empty"},j={key:1,class:"employee-new__cards"},G=N({__name:"PageEmployeeNew",setup(d){const r=S();return $(async()=>{await r.request()}),(e,i)=>(s(),c("div",L,[m(a(T),null,{default:o(()=>[l("Новые задачи")]),_:1}),a(r).stages.length?(s(),c("div",j,[m(a(D),{style:{"max-width":"360px"},type:"card",animated:""},{default:o(()=>[(s(!0),c(f,null,y(a(r).stages,n=>(s(),_(a(q),{placement:"left",size:"small",key:n.id,name:n.id,tab:n.name},{default:o(()=>[(s(!0),c(f,null,y(n.orderStages,t=>(s(),_(F,{key:t.id,stage:t,"department-id":n.id,style:{"margin-bottom":"20px"}},null,8,["stage","department-id"]))),128))]),_:2},1032,["name","tab"]))),128))]),_:1})])):(s(),c("div",O,[m(a(V),{size:"huge",description:"Новых задач пока что нет"},{extra:o(()=>[l("Пусто")]),_:1})]))]))}});const Z=I(G,[["__scopeId","data-v-5cca1d0e"]]);export{Z as default};
