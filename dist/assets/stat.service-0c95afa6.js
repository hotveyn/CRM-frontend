import{y as s}from"./index-19bdbec0.js";function o(){return{async getSelfStat(){const t=new Date;t.setDate(1),t.setHours(0,0,0);const a=new Date;a.setDate(31),a.setHours(23,59,59);const e={start:t.toISOString(),end:a.toISOString()};return(await s.get("stat/self",{params:e})).data},async getEmployeesStat(t,a){const e={start:t,end:a};return(await s.get("stat/employees",{params:e})).data},async getDepartmentsStat(t,a){const e={start:t,end:a};return(await s.get("stat/departments",{params:e})).data},async getPaymentStat(t,a){const e={start:t,end:a};return(await s.get("stat/payment",{params:e})).data},async getOrdersStoppedStat(){return(await s.get("stat/orders/stopped")).data},async getOrdersReclamationStat(){return(await s.get("stat/orders/reclamation")).data}}}export{o as u};