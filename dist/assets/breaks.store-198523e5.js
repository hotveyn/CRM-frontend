import{y as r,t as d,v as m}from"./index-febb9171.js";import{a as u}from"./departments.store-87494bd6.js";function k(){return{async getAll(){return(await r.get("break")).data},async create(e){return(await r.post("break",e)).data},async update(e,a){return(await r.patch(`break/${e}`,a)).data},async remove(e){return(await r.delete(`break/${e}`)).data}}}const s=k(),t=d(),h=m("breaks",{state:()=>({breaks:[]}),actions:{async request(){this.breaks=await s.getAll()},async create(e){await s.create(e).then(()=>{t.break.created()}).catch(a=>{t.error.custom(a.response.data.message)})},async update(e,a){await s.update(e,a).then(()=>{t.break.updated();const o=u().findById(a.department_id),c=this.breaks.findIndex(i=>i.id===e);c!==-1&&o&&(this.breaks[c].name=a.name,this.breaks[c].department.name=o.name)}).catch(n=>{t.error.custom(n.response.data.message)})},async remove(e){await s.remove(e).then(()=>{t.break.removed(),this.breaks=this.breaks.filter(a=>a.id!==e)}).catch(a=>{t.error.custom(a.response.data.message)})},findById(e){return this.breaks.find(a=>a.id===e)}}});export{h as u};
