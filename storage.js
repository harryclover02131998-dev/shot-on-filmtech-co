export const set=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
export const get=(k,d=null)=>{try{return JSON.parse(localStorage.getItem(k))??d}catch{return d}};
export const remove=(k)=>localStorage.removeItem(k);
