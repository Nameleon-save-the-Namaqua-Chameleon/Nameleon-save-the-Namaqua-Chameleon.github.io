import{a7 as x,a8 as f}from"./index.58f29621.js";function h(n){const o=n-1;return o*o*o+1}function v(n,{delay:o=0,duration:p=400,easing:c=x}={}){const s=+getComputedStyle(n).opacity;return{delay:o,duration:p,easing:c,css:t=>`opacity: ${t*s}`}}function F(n,{delay:o=0,duration:p=400,easing:c=h,x:s=0,y:t=0,opacity:l=0}={}){const i=getComputedStyle(n),d=+i.opacity,r=i.transform==="none"?"":i.transform,e=d*(1-l),[y,u]=f(s),[_,m]=f(t);return{delay:o,duration:p,easing:c,css:($,g)=>`
			transform: ${r} translate(${(1-$)*y}${u}, ${(1-$)*_}${m});
			opacity: ${d-e*g}`}}function w(n,{delay:o=0,duration:p=400,easing:c=h,axis:s="y"}={}){const t=getComputedStyle(n),l=+t.opacity,i=s==="y"?"height":"width",d=parseFloat(t[i]),r=s==="y"?["top","bottom"]:["left","right"],e=r.map(a=>`${a[0].toUpperCase()}${a.slice(1)}`),y=parseFloat(t[`padding${e[0]}`]),u=parseFloat(t[`padding${e[1]}`]),_=parseFloat(t[`margin${e[0]}`]),m=parseFloat(t[`margin${e[1]}`]),$=parseFloat(t[`border${e[0]}Width`]),g=parseFloat(t[`border${e[1]}Width`]);return{delay:o,duration:p,easing:c,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*l};${i}: ${a*d}px;padding-${r[0]}: ${a*y}px;padding-${r[1]}: ${a*u}px;margin-${r[0]}: ${a*_}px;margin-${r[1]}: ${a*m}px;border-${r[0]}-width: ${a*$}px;border-${r[1]}-width: ${a*g}px;`}}export{v as a,F as f,w as s};