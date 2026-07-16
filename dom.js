export const ready=(cb)=>document.readyState!=='loading'?cb():document.addEventListener('DOMContentLoaded',cb);
export const on=(e,t,h,o)=>e&&e.addEventListener(t,h,o);
