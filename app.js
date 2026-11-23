(function(){var d=document,h=d.querySelector('header'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var bar=d.createElement('div');bar.className='pb';d.body.appendChild(bar);
function sc(){var m=d.documentElement.scrollHeight-innerHeight;bar.style.transform='scaleX('+(m>0?scrollY/m:0)+')';if(h)h.classList.toggle('sh',scrollY>8)}
addEventListener('scroll',sc,{passive:true});sc();
var els=d.querySelectorAll('.rv');
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.remove('rv')})}else{
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(!x.isIntersecting)return;var e=x.target;e.classList.add('in');io.unobserve(e);
e.addEventListener('transitionend',function f(ev){if(ev.propertyName!=='opacity')return;e.classList.remove('rv','in');e.style.removeProperty('--d');e.removeEventListener('transitionend',f)})})},{threshold:.12});
els.forEach(function(e){io.observe(e)})}
d.querySelectorAll('[data-n]').forEach(function(el){var n=+el.dataset.n;if(rm)return;var t0=null;el.textContent='0';
function f(t){if(!t0)t0=t;var p=Math.min((t-t0)/1200,1);el.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)});
var L=[].slice.call(d.querySelectorAll('.nav ul a[href^="#"]'));
if(L.length&&'IntersectionObserver' in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)L.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})})},{rootMargin:'-40% 0px -55% 0px'});
L.forEach(function(a){var s=d.querySelector(a.getAttribute('href'));if(s)so.observe(s)})}})();