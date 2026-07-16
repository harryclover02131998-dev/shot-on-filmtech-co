'use strict';
document.addEventListener('DOMContentLoaded',()=>{
const io=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting){const img=e.target;img.src=img.dataset.src||img.src;io.unobserve(img);}});
});
document.querySelectorAll('img[data-src]').forEach(img=>io.observe(img));
});
