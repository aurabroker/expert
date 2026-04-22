/* ─── CURSOR ──────────────────────── */
const cur=document.getElementById('cursor'),ring=document.getElementById('cursor-ring');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
function animateRing(){rx+=(mx-rx)*0.15;ry+=(my-ry)*0.15;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(animateRing);}
animateRing();
document.querySelectorAll('.bento-card').forEach(card=>{
  card.addEventListener('mousemove',e=>{
    const r=card.getBoundingClientRect();
    const x=((e.clientX-r.left)/r.width)*100;
    const y=((e.clientY-r.top)/r.height)*100;
    card.style.setProperty('--mx',x+'%');
    card.style.setProperty('--my',y+'%');
  });
});

/* ─── NAV SCROLL ─────────────────── */
const nav=document.getElementById('mainNav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',window.scrollY>80);},{ passive:true });

/* ─── TICKER ─────────────────────── */
const tickerData=[
  {label:'OC komunikacyjne',cls:'green'},
  {label:'Ubezpieczenia życia',cls:'blue'},
  {label:'Cyber',cls:'green'},
  {label:'D&O Directors',cls:'green'},
  {label:'Ubezpieczenia majątkowe',cls:'blue'},
  {label:'Gwarancje przetargowe',cls:'green'},
  {label:'OC zawodowe',cls:'blue'},
  {label:'Pakiety medyczne',cls:'green'},
];
function buildTicker(){
  const wrap=document.getElementById('tickerInner');
  const doubled=[...tickerData,...tickerData];
  wrap.innerHTML=doubled.map(d=>`
    <div class="ticker-item ${d.cls}">
      <span class="dot"></span>
      <span>${d.label}</span>
    </div>
  `).join('');
}
buildTicker();

/* ─── INTERSECTION OBSERVER ──────── */
const revealObserver=new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
    }
  });
},{threshold:0.12,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal,.reveal-clip').forEach(el=>revealObserver.observe(el));

/* ─── HERO ANIMATIONS ────────────── */
window.addEventListener('load',()=>{
  setTimeout(()=>document.getElementById('heroEyebrow').classList.add('visible'),100);
  setTimeout(()=>document.getElementById('heroH1').classList.add('visible'),200);
  setTimeout(()=>document.getElementById('heroSub').classList.add('visible'),400);
  setTimeout(()=>document.getElementById('heroCtas').classList.add('visible'),600);
  setTimeout(()=>{
    document.getElementById('heroStats').classList.add('visible');
    animateCounters(document.querySelectorAll('.hero-stats .stat-num'));
  },800);
});

/* ─── COUNTER ANIMATION ──────────── */
function animateCounters(nodes){
  nodes.forEach(n=>{
    const target=+n.dataset.target;
    const suffix=n.dataset.suffix||'';
    const dur=1800;const step=16;
    let current=0;
    const inc=target/Math.ceil(dur/step);
    const timer=setInterval(()=>{
      current=Math.min(current+inc,target);
      n.textContent=Math.floor(current).toLocaleString('pl-PL')+suffix;
      if(current>=target)clearInterval(timer);
    },step);
  });
}

/* ─── BENTO COUNTER OBSERVER ────── */
const bentoCounterObs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      animateCounters(e.target.querySelectorAll('[data-target]'));
      e.target.querySelectorAll('.prog-fill').forEach(f=>{
        f.style.width=f.dataset.w+'%';
      });
      bentoCounterObs.unobserve(e.target);
    }
  });
},{threshold:0.2});
const bentoSection=document.querySelector('.bento-section');
if(bentoSection)bentoCounterObs.observe(bentoSection);

/* ─── LIVE DATA FLICKER ───────────── */
function randomFlicker(){
  const cells=[
    {id:'dm1',vals:['+4.7%','+5.1%','+4.3%','+4.9%'],cls:'green'},
    {id:'dm3',vals:['14 237','14 265','14 291','14 314'],cls:'blue'},
    {id:'dm5',vals:['47','51','44','53','48'],cls:'green'},
    {id:'dm6',vals:['2h','1h 54min','2h 08min','1h 47min'],cls:'blue'},
  ];
  const pick=cells[Math.floor(Math.random()*cells.length)];
  const el=document.getElementById(pick.id);
  if(el){
    el.style.opacity='0.3';
    el.style.transition='opacity 0.15s';
    setTimeout(()=>{
      el.textContent=pick.vals[Math.floor(Math.random()*pick.vals.length)];
      el.style.opacity='1';
    },150);
  }
}
setInterval(randomFlicker,2200);

/* ─── SPARKLINE ──────────────────── */
window.addEventListener('load',()=>{
  const canvas=document.getElementById('sparklineCanvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  canvas.width=canvas.offsetWidth*window.devicePixelRatio||400;
  canvas.height=canvas.offsetHeight*window.devicePixelRatio||70;
  ctx.scale(window.devicePixelRatio,window.devicePixelRatio);
  const W=canvas.offsetWidth||200;const H=canvas.offsetHeight||70;
  const data=[30,38,32,45,40,55,48,62,57,70,65,80,74,88,85,95];
  const min=Math.min(...data),max=Math.max(...data),range=max-min;
  const pts=data.map((v,i)=>({
    x:(i/(data.length-1))*W,
    y:H-((v-min)/range)*(H*0.8)-H*0.1
  }));
  const grad=ctx.createLinearGradient(0,0,0,H);
  grad.addColorStop(0,'rgba(79,156,249,0.2)');
  grad.addColorStop(1,'rgba(79,156,249,0)');
  ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);
  for(let i=1;i<pts.length;i++){
    const cpx=(pts[i-1].x+pts[i].x)/2;
    ctx.bezierCurveTo(cpx,pts[i-1].y,cpx,pts[i].y,pts[i].x,pts[i].y);
  }
  ctx.lineTo(pts[pts.length-1].x,H);ctx.lineTo(pts[0].x,H);ctx.closePath();
  ctx.fillStyle=grad;ctx.fill();
  ctx.beginPath();ctx.moveTo(pts[0].x,pts[0].y);
  for(let i=1;i<pts.length;i++){
    const cpx=(pts[i-1].x+pts[i].x)/2;
    ctx.bezierCurveTo(cpx,pts[i-1].y,cpx,pts[i].y,pts[i].x,pts[i].y);
  }
  ctx.strokeStyle='#4f9cf9';ctx.lineWidth=1.5;ctx.stroke();
  const last=pts[pts.length-1];
  ctx.beginPath();ctx.arc(last.x,last.y,3,0,Math.PI*2);
  ctx.fillStyle='#4f9cf9';ctx.fill();
});

/* ─── TOAST ─────────────────────── */
setTimeout(()=>{
  document.getElementById('toast').classList.add('show');
},5000);

/* ─── SMOOTH HOVER LIFT on bento ── */
document.querySelectorAll('.bento-card').forEach(card=>{
  card.style.transition='border-color 0.4s cubic-bezier(0.16,1,0.3,1),box-shadow 0.4s cubic-bezier(0.16,1,0.3,1),transform 0.4s cubic-bezier(0.16,1,0.3,1)';
});
