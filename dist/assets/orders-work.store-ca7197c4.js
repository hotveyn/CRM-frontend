import{t as i,v as p,bI as c}from"./index-49ec2185.js";import{u as m}from"./order.service-bec46c7e.js";import{a as y}from"./departments.store-270a0ea0.js";import{u as f}from"./orderTypes.store-9147d02d.js";const o=m(),a=i(),I=p("orders-work",{state:()=>({orders:[]}),actions:{async request(){this.orders=await o.getWork()},findById(r){return this.orders.find(e=>e.id===r)},async update(r,e){o.update(r,e).then(async()=>{a.order.updated();const s=y(),t=this.findById(r);if(t){if(e.name&&(t.name=e.name),t.comment=e.comment,e.type_id){const d=await f().findById(e.type_id);d&&(t.type=d)}if(e.departments&&e.departments.length){const n=s.findById(e.departments[0].department_id);n&&(t.current_department=n.name)}}}).catch(s=>{s instanceof c&&a.error.custom(s.response.data.message)})}}});export{I as u};