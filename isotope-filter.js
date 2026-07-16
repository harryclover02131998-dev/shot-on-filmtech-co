'use strict';
class IsotopeFilter{
 constructor(){this.buttons=document.querySelectorAll('[data-filter]');this.items=document.querySelectorAll('[data-category]');}
 init(){this.buttons.forEach(b=>b.addEventListener('click',()=>this.filter(b.dataset.filter)));}
 filter(cat){this.items.forEach(i=>i.hidden=!(cat==='*'||i.dataset.category===cat));}
}
document.addEventListener('DOMContentLoaded',()=>new IsotopeFilter().init());
