import{t as a,v as n}from"./index-febb9171.js";import{u as c}from"./order.service-af9caac5.js";import{u as i}from"./orderTypes.store-ef57b4c4.js";const o=c(),t=a(),u=n("orders-break",{state:()=>({orders:[]}),actions:{async request(){this.orders=await o.getBreak()},async stop(r){o.setStop(r).then(()=>{t.order.stopped(),this.orders=this.orders.filter(e=>e.id!==r)}).catch(e=>t.error.custom(e.response.data.message))},findById(r){return this.orders.find(e=>e.id===r)},async restore(r){o.restore(r).then(()=>{t.order.restore(),this.orders=this.orders.filter(e=>e.id!==r)}).catch(e=>t.error.custom(e.response.data.message))},async update(r,e){o.update(r,e).then(async()=>{t.order.updated();const s=this.findById(r),d=await i().findById(e.type_id);s&&(s.name=e.name,s.type=d,s.comment=e.comment)}).catch(s=>t.error.custom(s.response.data.message))}}});export{u};
