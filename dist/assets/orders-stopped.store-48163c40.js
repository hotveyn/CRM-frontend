import{v as e}from"./index-4abd5337.js";import{u as r}from"./order.service-d7c23b82.js";const t=r(),d=e("orders-stopped",{state:()=>({orders:[]}),actions:{async request(){this.orders=await t.getStop()}}});export{d as u};
