// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cursor.style.left=mx+'px';cursor.style.top=my+'px';});
function animRing(){rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animRing);}
animRing();
document.querySelectorAll('a,button,.service-card,.skill-item,.contact-item').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.classList.add('hovered');ring.classList.add('hovered');});
  el.addEventListener('mouseleave',()=>{cursor.classList.remove('hovered');ring.classList.remove('hovered');});
});

// Scroll reveal
const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}});
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));