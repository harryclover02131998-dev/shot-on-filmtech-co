'use strict';
class Modal{
 constructor(){this.el=document.querySelector('#modal');window.addEventListener('gallery:open',e=>this.open(e.detail));}
 open(src){if(!this.el)return;this.el.classList.add('open');const img=this.el.querySelector('img');if(img)img.src=src;}
 close(){this.el?.classList.remove('open');}
}
document.addEventListener('DOMContentLoaded',()=>new Modal());
