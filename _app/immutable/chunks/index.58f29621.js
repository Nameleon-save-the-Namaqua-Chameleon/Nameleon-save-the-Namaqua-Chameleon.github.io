function E(){}const V=t=>t;function xt(t,e){for(const n in e)t[n]=e[n];return t}function ct(t){return t()}function it(){return Object.create(null)}function N(t){t.forEach(ct)}function O(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Gt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function wt(t){return Object.keys(t).length===0}function ot(t,...e){if(t==null)return E;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Jt(t){let e;return ot(t,n=>e=n)(),e}function Kt(t,e,n){t.$$.on_destroy.push(ot(e,n))}function Qt(t,e,n,i){if(t){const r=at(t,e,n,i);return t[0](r)}}function at(t,e,n,i){return t[1]&&i?xt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const a=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)a[c]=e.dirty[c]|r[c];return a}return e.dirty|r}return e.dirty}function Vt(t,e,n,i,r,a){if(r){const s=at(e,n,i,a);t.p(s,r)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Zt(t){const e={};for(const n in t)e[n]=!0;return e}function te(t){return t&&O(t.destroy)?t.destroy:E}function ee(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const lt=typeof window<"u";let X=lt?()=>window.performance.now():()=>Date.now(),Y=lt?t=>requestAnimationFrame(t):E;const M=new Set;function ut(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&Y(ut)}function Z(t){let e;return M.size===0&&Y(ut),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}const ne=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let J=!1;function vt(){J=!0}function kt(){J=!1}function Et(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Nt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:Et(1,r,h=>e[n[h]].claim_order,l))-1;i[o]=n[f]+1;const _=f+1;n[_]=o,r=Math.max(_,r)}const a=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(a.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);a.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<a.length&&s[o].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(s[o],f)}}function St(t,e){t.appendChild(e)}function ft(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Ct(t){const e=dt("style");return At(ft(t),e),e.sheet}function At(t,e){return St(t.head||t,e),e.sheet}function Mt(t,e){if(J){for(Nt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ie(t,e,n){J&&!n?Mt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function _t(t){t.parentNode&&t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function dt(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function tt(t){return document.createTextNode(t)}function se(){return tt(" ")}function ce(){return tt("")}function oe(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ae(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Dt(t){return Array.from(t.childNodes)}function Ot(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ht(t,e,n,i,r=!1){Ot(t);const a=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function mt(t,e,n,i){return ht(t,r=>r.nodeName===e,r=>{const a=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||a.push(c.name)}a.forEach(s=>r.removeAttribute(s))},()=>i(e))}function le(t,e,n){return mt(t,e,n,dt)}function ue(t,e,n){return mt(t,e,n,jt)}function Pt(t,e){return ht(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>tt(e),!0)}function fe(t){return Pt(t," ")}function _e(t,e){e=""+e,t.data!==e&&(t.data=e)}function de(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function he(t,e,n){t.classList[n?"add":"remove"](e)}function pt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function me(t,e){return new t(e)}const H=new Map;let I=0;function Tt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:Ct(e),rules:{}};return H.set(t,n),n}function W(t,e,n,i,r,a,s,c=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*a(m);l+=m*100+`%{${s(g,1-g)}}
`}const f=l+`100% {${s(n,1-n)}}
}`,_=`__svelte_${Tt(f)}_${c}`,h=ft(t),{stylesheet:u,rules:d}=H.get(h)||qt(h,t);d[_]||(d[_]=!0,u.insertRule(`@keyframes ${_} ${f}`,u.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${_} ${i}ms linear ${r}ms 1 both`,I+=1,_}function G(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),I-=r,I||Lt())}function Lt(){Y(()=>{I||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&_t(e)}),H.clear())})}let L;function q(t){L=t}function P(){if(!L)throw new Error("Function called outside component initialization");return L}function pe(t){P().$$.on_mount.push(t)}function ye(t){P().$$.after_update.push(t)}function ge(t){P().$$.on_destroy.push(t)}function be(){const t=P();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const a=pt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,a)}),!a.defaultPrevented}return!0}}function $e(t,e){return P().$$.context.set(t,e),e}function xe(t){return P().$$.context.get(t)}function we(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const A=[],rt=[];let j=[];const st=[],yt=Promise.resolve();let U=!1;function gt(){U||(U=!0,yt.then(bt))}function ve(){return gt(),yt}function D(t){j.push(t)}const Q=new Set;let C=0;function bt(){if(C!==0)return;const t=L;do{try{for(;C<A.length;){const e=A[C];C++,q(e),Rt(e.$$)}}catch(e){throw A.length=0,C=0,e}for(q(null),A.length=0,C=0;rt.length;)rt.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];Q.has(n)||(Q.add(n),n())}j.length=0}while(A.length);for(;st.length;)st.pop()();U=!1,Q.clear(),q(t)}function Rt(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}function zt(t){const e=[],n=[];j.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),j=e}let T;function et(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function S(t,e,n){t.dispatchEvent(pt(`${e?"intro":"outro"}${n}`))}const F=new Set;let v;function ke(){v={r:0,c:[],p:v}}function Ee(){v.r||N(v.c),v=v.p}function $t(t,e){t&&t.i&&(F.delete(t),t.i(e))}function Bt(t,e,n,i){if(t&&t.o){if(F.has(t))return;F.add(t),v.c.push(()=>{F.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const nt={duration:0};function Ne(t,e,n){const i={direction:"in"};let r=e(t,n,i),a=!1,s,c,o=0;function l(){s&&G(t,s)}function f(){const{delay:h=0,duration:u=300,easing:d=V,tick:p=E,css:m}=r||nt;m&&(s=W(t,0,1,u,h,d,m,o++)),p(0,1);const g=X()+h,k=g+u;c&&c.abort(),a=!0,D(()=>S(t,!0,"start")),c=Z(b=>{if(a){if(b>=k)return p(1,0),S(t,!0,"end"),l(),a=!1;if(b>=g){const $=d((b-g)/u);p($,1-$)}}return a})}let _=!1;return{start(){_||(_=!0,G(t),O(r)?(r=r(i),et().then(f)):f())},invalidate(){_=!1},end(){a&&(l(),a=!1)}}}function Se(t,e,n){const i={direction:"out"};let r=e(t,n,i),a=!0,s;const c=v;c.r+=1;function o(){const{delay:l=0,duration:f=300,easing:_=V,tick:h=E,css:u}=r||nt;u&&(s=W(t,1,0,f,l,_,u));const d=X()+l,p=d+f;D(()=>S(t,!1,"start")),Z(m=>{if(a){if(m>=p)return h(0,1),S(t,!1,"end"),--c.r||N(c.c),!1;if(m>=d){const g=_((m-d)/f);h(1-g,g)}}return a})}return O(r)?et().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),a&&(s&&G(t,s),a=!1)}}}function Ce(t,e,n,i){const r={direction:"both"};let a=e(t,n,r),s=i?0:1,c=null,o=null,l=null;function f(){l&&G(t,l)}function _(u,d){const p=u.b-s;return d*=Math.abs(p),{a:s,b:u.b,d:p,duration:d,start:u.start,end:u.start+d,group:u.group}}function h(u){const{delay:d=0,duration:p=300,easing:m=V,tick:g=E,css:k}=a||nt,b={start:X()+d,b:u};u||(b.group=v,v.r+=1),c||o?o=b:(k&&(f(),l=W(t,s,u,p,d,m,k)),u&&g(0,1),c=_(b,p),D(()=>S(t,u,"start")),Z($=>{if(o&&$>o.start&&(c=_(o,p),o=null,S(t,c.b,"start"),k&&(f(),l=W(t,s,c.b,c.duration,0,m,a.css))),c){if($>=c.end)g(s=c.b,1-s),S(t,c.b,"end"),o||(c.b?f():--c.group.r||N(c.group.c)),c=null;else if($>=c.start){const R=$-c.start;s=c.a+c.d*m(R/c.duration),g(s,1-s)}}return!!(c||o)}))}return{run(u){O(a)?et().then(()=>{a=a(r),h(u)}):h(u)},end(){f(),c=o=null}}}function Ae(t,e){Bt(t,1,1,()=>{e.delete(t.key)})}function Me(t,e,n,i,r,a,s,c,o,l,f,_){let h=t.length,u=a.length,d=h;const p={};for(;d--;)p[t[d].key]=d;const m=[],g=new Map,k=new Map,b=[];for(d=u;d--;){const y=_(r,a,d),x=n(y);let w=s.get(x);w?i&&b.push(()=>w.p(y,e)):(w=l(x,y),w.c()),g.set(x,m[d]=w),x in p&&k.set(x,Math.abs(d-p[x]))}const $=new Set,R=new Set;function K(y){$t(y,1),y.m(c,f),s.set(y.key,y),f=y.first,u--}for(;h&&u;){const y=m[u-1],x=t[h-1],w=y.key,z=x.key;y===x?(f=y.first,h--,u--):g.has(z)?!s.has(w)||$.has(w)?K(y):R.has(z)?h--:k.get(w)>k.get(z)?(R.add(w),K(y)):($.add(z),h--):(o(x,s),h--)}for(;h--;){const y=t[h];g.has(y.key)||o(y,s)}for(;u;)K(m[u-1]);return N(b),m}function je(t){t&&t.c()}function De(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(ct).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...s):N(s),t.$$.on_mount=[]}),a.forEach(D)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(zt(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(A.push(t),gt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,i,r,a,s,c=[-1]){const o=L;q(t);const l=t.$$={fragment:null,ctx:[],props:a,update:E,not_equal:r,bound:it(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:it(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,h,...u)=>{const d=u.length?u[0]:h;return l.ctx&&r(l.ctx[_],l.ctx[_]=d)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](d),f&&It(t,_)),h}):[],l.update(),f=!0,N(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){vt();const _=Dt(e.target);l.fragment&&l.fragment.l(_),_.forEach(_t)}else l.fragment&&l.fragment.c();e.intro&&$t(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),kt(),bt()}q(o)}class Pe{$destroy(){Ht(this,1),this.$destroy=E}$on(e,n){if(!O(n))return E;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{O as $,Ft as A,Ht as B,Qt as C,Mt as D,oe as E,Vt as F,Xt as G,Ut as H,Zt as I,xt as J,Yt as K,we as L,Kt as M,be as N,ne as O,te as P,D as Q,Ne as R,Pe as S,Ce as T,Se as U,N as V,E as W,re as X,he as Y,Me as Z,Ae as _,se as a,ge as a0,Gt as a1,$e as a2,jt as a3,ue as a4,xe as a5,ot as a6,V as a7,ee as a8,Jt as a9,ie as b,fe as c,Bt as d,ce as e,Ee as f,$t as g,_t as h,Oe as i,ye as j,dt as k,le as l,Dt as m,ae as n,pe as o,de as p,tt as q,Pt as r,Wt as s,ve as t,_e as u,ke as v,rt as w,me as x,je as y,De as z};
