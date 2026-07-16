'use strict';
const Reviews={
items:[],
add(review){this.items.push({...review,date:new Date().toISOString()});},
average(){if(!this.items.length)return 0;return this.items.reduce((a,b)=>a+b.rating,0)/this.items.length;},
render(selector='.reviews'){const el=document.querySelector(selector);if(!el)return;el.innerHTML=this.items.map(r=>`<article><h4>${r.name}</h4><p>${r.text}</p><strong>${r.rating}/5</strong></article>`).join('');}
};
