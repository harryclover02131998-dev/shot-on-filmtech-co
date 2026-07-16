'use strict';
function initRatings(selector='.rating'){
document.querySelectorAll(selector).forEach(group=>{
group.querySelectorAll('[data-value]').forEach(btn=>{
btn.addEventListener('click',()=>{
group.dataset.rating=btn.dataset.value;
group.dispatchEvent(new CustomEvent('ratingchange',{detail:{rating:+btn.dataset.value}}));
});
});
});
}
document.addEventListener('DOMContentLoaded',initRatings);
