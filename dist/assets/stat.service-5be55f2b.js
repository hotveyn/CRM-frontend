import{y as s}from"./index-febb9171.js";function o(){return{async getSelfStat(){const t=new Date,e=new Date;e.setMonth(e.getMonth()-1);const a={start:e,end:t},r=await s.get("stat/self",{params:a});return new Map(Object.entries(r.data))},async getEmployeesStat(t,e){const a={start:t,end:e};return(await s.get("stat/employees",{params:a})).data},async getDepartmentsStat(t,e){const a={start:t,end:e};return(await s.get("stat/departments",{params:a})).data},async getPaymentStat(t,e){const a={start:t,end:e};return(await s.get("stat/payment",{params:a})).data},async getOrdersStoppedStat(){return(await s.get("stat/orders/stopped")).data},async getOrdersReclamationStat(){return(await s.get("stat/orders/reclamation")).data}}}export{o as u};
