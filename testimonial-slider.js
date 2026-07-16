'use strict';
class TestimonialSlider{
constructor(selector='.testimonial-slider'){this.el=document.querySelector(selector);this.index=0;this.slides=this.el?this.el.querySelectorAll('.testimonial'):[];}
init(){if(!this.el)return;this.show(0);}
show(i){this.slides.forEach((s,n)=>s.hidden=n!==i);this.index=i;}
next(){if(!this.slides.length)return;this.show((this.index+1)%this.slides.length);}
prev(){if(!this.slides.length)return;this.show((this.index-1+this.slides.length)%this.slides.length);}
}
document.addEventListener('DOMContentLoaded',()=>new TestimonialSlider().init());
