'use strict';
class PortfolioGrid{
 constructor(sel='.portfolio-grid'){this.grid=document.querySelector(sel);}
 init(){if(!this.grid)return;this.layout();window.addEventListener('resize',()=>this.layout());}
 layout(){[...this.grid.children].forEach((el,i)=>el.style.order=i);}
}
document.addEventListener('DOMContentLoaded',()=>new PortfolioGrid().init());
