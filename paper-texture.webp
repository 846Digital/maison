/* GSAP / ScrollTrigger: the thread is the reading path, never a scroll lock. */
(() => {
  'use strict';
  const config=window.WEDDING, paper=config.paper;
  document.querySelectorAll('[data-paper]').forEach(el=>{
    const value=paper[el.dataset.paper]; if(value!==undefined) el.textContent=value;
  });
  const safeUrl=value=>{
    if(!value||typeof value!=='string') return null;
    try {const u=new URL(value,location.href);if(['https:','http:','file:'].includes(u.protocol))return u.href;}catch(_){}
    return null;
  };
  document.querySelectorAll('[data-paper-link]').forEach(el=>{
    const u=safeUrl(paper[el.dataset.paperLink]);if(u){el.href=u;el.target='_blank';el.rel='noopener noreferrer';el.hidden=false;}
  });
  document.querySelector('[data-bride-initial]').textContent=Array.from(config.bride)[0]||'';
  document.querySelector('[data-groom-initial]').textContent=Array.from(config.groom)[0]||'';
  document.querySelectorAll('[data-paper-photo]').forEach(img=>{
    const key=img.dataset.paperPhoto, u=safeUrl(paper[key]);
    img.alt=paper[key+'Alt']||'Наша фотография';
    if(!u)return;
    const fallback=img.parentElement.querySelector('.photo-fallback');
    img.addEventListener('load',()=>{img.hidden=false;fallback.hidden=true;},{once:true});
    img.addEventListener('error',()=>{img.hidden=true;fallback.hidden=false;},{once:true});
    img.src=u;
  });
  document.querySelectorAll('.scrap-program .event').forEach((el,i)=>{
    const stamp=document.createElement('span');stamp.className='scrap-number';stamp.textContent=String(i+1).padStart(2,'0');stamp.setAttribute('aria-hidden','true');el.append(stamp);
  });
  const book=document.querySelector('.paper-book'), svg=document.querySelector('.thread-canvas');
  const ink=svg.querySelector('.thread-ink'), guide=svg.querySelector('.thread-guide'), shadow=svg.querySelector('.thread-shadow'), bead=svg.querySelector('.thread-bead');
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const progress={value:0};let length=0, firstY=0, lastY=0, bookTop=0, refreshTimer;
  const updateThread=()=>{
    if(!length)return;
    const distance=length*Math.max(0,Math.min(1,progress.value));
    ink.style.strokeDashoffset=String(length-distance);
    const point=ink.getPointAtLength(distance), next=ink.getPointAtLength(Math.min(length,distance+2));
    const angle=Math.atan2(next.y-point.y,next.x-point.x)*180/Math.PI;
    bead.setAttribute('transform','translate('+point.x+' '+point.y+') rotate('+(angle-90)+')');
  };
  const geometry=()=>{
    book.classList.toggle('paper-large-type',parseFloat(getComputedStyle(document.documentElement).fontSize)>20);
    const rect=book.getBoundingClientRect(), width=rect.width, height=book.scrollHeight;
    bookTop=rect.top+scrollY;
    const mobile=width<768;
    const points=[...book.querySelectorAll('[data-thread-point]')].map(el=>{
      const r=el.getBoundingClientRect();return{x:width*Number(mobile?el.dataset.threadMobile:el.dataset.threadX),y:r.top-rect.top,heart:el.hasAttribute('data-thread-heart')};
    });
    if(!points.length)return;
    firstY=points[0].y;
    let d='M '+points[0].x+' '+firstY;
    for(let i=1;i<points.length;i++){
      const a=points[i-1],b=points[i],delta=b.y-a.y;
      d+=' C '+a.x+' '+(a.y+delta*.48)+' '+b.x+' '+(b.y-delta*.48)+' '+b.x+' '+b.y;
    }
    const last=points.at(-1), h=Math.min(125,width*.24);
    d+=' C '+(last.x-h*.85)+' '+(last.y-h*.6)+' '+(last.x-h*1.1)+' '+(last.y+h*.35)+' '+last.x+' '+(last.y+h);
    d+=' C '+(last.x+h*1.1)+' '+(last.y+h*.35)+' '+(last.x+h*.85)+' '+(last.y-h*.6)+' '+last.x+' '+last.y;
    lastY=last.y+h;
    svg.setAttribute('viewBox','0 0 '+width+' '+height);
    [ink,guide,shadow].forEach(p=>p.setAttribute('d',d));
    length=ink.getTotalLength();
    ink.style.strokeDasharray=String(length);
    if(reduced.matches||!window.gsap)ink.style.strokeDashoffset='0';else updateThread();
  };
  const refresh=()=>{clearTimeout(refreshTimer);refreshTimer=setTimeout(()=>{geometry();window.ScrollTrigger?.refresh();},100);};
  const intro=document.querySelector('.paper-opening'), skip=intro.querySelector('.paper-skip');
  let entrance,failSafe;
  const close=()=>{
    entrance?.kill();clearTimeout(failSafe);intro.classList.remove('active');intro.setAttribute('aria-hidden','true');skip.tabIndex=-1;
    window.gsap?.set('.paper-enter',{clearProps:'all'});
  };
  const open=()=>{
    close();if(!window.gsap||reduced.matches)return;
    gsap.set('.opening-sheet,.opening-mark',{clearProps:'all'});
    intro.classList.add('active');intro.removeAttribute('aria-hidden');skip.tabIndex=0;
    entrance=gsap.timeline({defaults:{ease:'power3.inOut'},onComplete:close});
    entrance.from('.opening-mark',{opacity:0,y:12,duration:.4})
      .to('.opening-mark',{opacity:0,scale:.96,duration:.4},.65)
      .to('.sheet-left',{xPercent:-105,rotationY:-12,duration:1.2},.85)
      .to('.sheet-right',{xPercent:105,rotationY:12,duration:1.2},.95)
      .fromTo('.paper-enter',{opacity:0,y:12},{opacity:1,y:0,stagger:.1,duration:.75,ease:'power3.out',clearProps:'all'},1.25);
    failSafe=setTimeout(close,4500);
  };
  skip.addEventListener('click',()=>{close();book.tabIndex=-1;book.focus({preventScroll:true});});
  document.querySelector('[data-replay]').addEventListener('click',()=>{scrollTo({top:0,behavior:'instant'});open();});
  reduced.addEventListener('change',()=>{close();refresh();});
  geometry();
  if(window.gsap&&window.ScrollTrigger){
    gsap.registerPlugin(ScrollTrigger);
    const media=gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)',()=>{
      progress.value=0;bead.style.display='block';updateThread();
      gsap.to(progress,{value:1,ease:'none',onUpdate:updateThread,scrollTrigger:{
        id:'paper-thread',start:()=>Math.max(0,bookTop+firstY-innerHeight*.72),
        end:()=>bookTop+lastY-innerHeight*.45,scrub:.55,invalidateOnRefresh:true
      }});
      document.querySelectorAll('.fold-note').forEach(el=>gsap.from(el,{transformPerspective:900,rotationX:8,y:24,opacity:.65,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}}));
      gsap.fromTo('.bride-print',{rotation:-15,x:-12,y:35},{rotation:-8,x:0,y:0,ease:'none',scrollTrigger:{trigger:'.childhood-collage',start:'top 90%',end:'bottom 65%',scrub:.7}});
      gsap.fromTo('.groom-print',{rotation:16,x:12,y:55},{rotation:9,x:0,y:0,ease:'none',scrollTrigger:{trigger:'.childhood-collage',start:'top 90%',end:'bottom 65%',scrub:.7}});
      gsap.from('.collage-heart',{scale:.8,opacity:0,duration:.75,ease:'power2.out',scrollTrigger:{trigger:'.collage-heart',start:'top 92%',once:true}});
      document.querySelectorAll('.scrap-program .event').forEach(el=>gsap.from(el,{y:18,rotation:0,opacity:.5,duration:.75,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 92%',once:true}}));
      gsap.from('.heart-palette .color',{y:20,rotation:-5,opacity:.4,stagger:.1,duration:.8,ease:'power2.out',scrollTrigger:{trigger:'.heart-palette',start:'top 90%',once:true}});
      gsap.from('.together-print',{rotation:4,y:25,ease:'none',scrollTrigger:{trigger:'.paper-together',start:'top 90%',end:'center center',scrub:.7}});
      document.querySelectorAll('.margin-art').forEach(el=>gsap.from(el,{y:16,opacity:.15,duration:1.1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
      return()=>{ink.style.strokeDashoffset='0';bead.style.display='none';};
    });
    document.querySelectorAll('details').forEach(el=>el.addEventListener('toggle',refresh));
    window.addEventListener('pageshow',e=>{if(e.persisted){close();refresh();}});
  }
  document.fonts?.ready.then(refresh);
  document.querySelectorAll('[data-paper-photo]').forEach(img=>img.addEventListener('load',refresh));
  new ResizeObserver(refresh).observe(book);
  window.addEventListener('load',refresh,{once:true});
  open();
})();
