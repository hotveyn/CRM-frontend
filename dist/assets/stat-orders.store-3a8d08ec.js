import{d as o,f as n,g as l,a as e,o as d,v as i}from"./index-62384645.js";import{N as c}from"./Skeleton-a17865c3.js";import{u as p}from"./stat.service-8a00fe09.js";const u={class:"table-orders-stopped"},y=o({__name:"TableStatOrdersStopped",props:{tableData:{}},setup(m){const a=r();function r(){return[{title:"Код",key:"code",sorter:"default"},{title:"Название",key:"name",sorter:"default"},{title:"Дата начала",key:"date_start",sorter:"default"},{title:"Дата сдачи",key:"date_end",sorter:"default"},{title:"Тип",key:"type",sorter:"default"},{title:"Стоимость",key:"price",sorter:"default"},{title:"Брак",key:"break.name",sorter:"default"},{title:"Комментарий",key:"comment",sorter:"default"}]}return(s,f)=>(d(),n("div",u,[l(e(c),{"single-line":!1,data:s.tableData,columns:e(a),pagination:{pageSize:30},bordered:!0},null,8,["data","columns"])]))}}),t=p(),b=i("stat-order",{state:()=>({stoppedStat:{orders:0,orders_stopped:0,stopped_percent:""},reclamationStat:{orders:0,reclamations:0,reclamations_percent:""}}),actions:{async requestStopped(){this.stoppedStat=await t.getOrdersStoppedStat()},async requestReclamation(){this.reclamationStat=await t.getOrdersReclamationStat()}}});export{y as _,b as u};