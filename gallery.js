'use strict';
class Gallery{
 constructor(){this.links=document.querySelectorAll('[data-gallery]');}
 init(){this.links.forEach(l=>l.addEventListener('click',e=>{e.preventDefault();window.dispatchEvent(new CustomEvent('gallery:open',{detail:l.href}));}));}
}
document.addEventListener('DOMContentLoaded',()=>new Gallery().init());
