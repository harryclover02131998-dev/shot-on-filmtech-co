export const debounce=(fn,d=200)=>{let t;return(...a)=>{clearTimeout(t);t=setTimeout(()=>fn(...a),d)}};
export const throttle=(fn,w=200)=>{let l=0;return(...a)=>{const n=Date.now();if(n-l>w){l=n;fn(...a)}}};
