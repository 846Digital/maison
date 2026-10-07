/* MAISON spatial journey: expanding portal, interactive SVG table,
   camera-linked archive and circular day-to-night transition. */
(() => {
 'use strict';
 const c=window.RESTAURANT, root=document.documentElement;
 document.querySelectorAll('[data-restaurant]').forEach(el=>{const value=c[el.dataset.restaurant];if(value){el.textContent=value;el.hidden=false;}});
 document.title=c.name+' · Свадебный ресторан и банкетный дом';
 document.querySelector('.brand').setAttribute('aria-label',c.name+' — начало страницы');
 const url=value=>{try{const u=new URL(value,location.href);return value&&['https:','http:','file:'].includes(u.protocol)?u.href:null;}catch(_){return null;}};
 document.querySelectorAll('[data-image]').forEach(img=>{const value=url(c.images[img.dataset.image]);if(value)img.src=value;});
 const email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)?c.email:'';
 const phone=(c.phone||'').replace(/[^+\d]/g,'');
 const contact=(key,href,text)=>{const a=document.querySelector('[data-contact="'+key+'"]');if(href){a.href=href;if(text)a.textContent=text;a.hidden=false;}};
 contact('phone',phone?'tel:'+phone:null,c.displayPhone||c.phone);
 contact('email',email?'mailto:'+email:null,email);contact('map',url(c.mapUrl));
 if(c.bookingUrl&&url(c.bookingUrl)){const a=document.createElement('a');a.className='line-link';a.href=url(c.bookingUrl);a.target='_blank';a.rel='noopener noreferrer';a.textContent='Онлайн-заявка ↗';document.querySelector('.contact-links').append(a);}
 if(email){document.querySelector('[data-submit-label]').textContent='Подготовить письмо';document.querySelector('[data-form-explanation]').textContent='Откроется почтовое приложение с вашими пожеланиями.';document.querySelector('[data-request-note]').textContent='Подготовим письмо с деталями вашего вечера — останется его отправить.';}
 const form=document.querySelector('.enquiry-form'), status=form.querySelector('.form-status');
 form.addEventListener('submit',e=>{
   e.preventDefault();if(!form.reportValidity())return;
   const data=new FormData(form),body=[c.name+' — пожелания к вечеру','', 'Имя: '+data.get('name'),'Дата: '+data.get('date'),'Гостей: '+data.get('guests'),'Пространство: '+data.get('space'),'','Пожелания:',data.get('message')||'Обсудим лично.'].join('\n');
   if(email){location.href='mailto:'+email+'?subject='+encodeURIComponent('Обсудить свадебный вечер — '+data.get('name'))+'&body='+encodeURIComponent(body);status.textContent='Письмо подготовлено. Отправьте его в вашем почтовом приложении.';}
   else{const blob=new Blob(['\ufeff'+body],{type:'text/plain;charset=utf-8'}),href=URL.createObjectURL(blob),a=document.createElement('a');a.href=href;a.download='maison-wedding-request.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(href),1500);status.textContent='Пожелания сохранены. Возьмите файл с собой на обсуждение площадки.';}
 });
 const dialog=document.querySelector('#site-menu'), menuButton=document.querySelector('.menu-toggle');let menuTween;
 menuButton.addEventListener('click',()=>{dialog.showModal();if(window.gsap&&!matchMedia('(prefers-reduced-motion: reduce)').matches){menuTween?.kill();menuTween=gsap.fromTo(dialog.querySelectorAll('nav a'),{y:35,opacity:0},{y:0,opacity:1,stagger:.08,duration:.7,ease:'power3.out',clearProps:'all'});}});
 const closeMenu=()=>{menuTween?.kill();dialog.close();menuButton.focus({preventScroll:true});};
 dialog.querySelector('.menu-close').addEventListener('click',closeMenu);
 dialog.addEventListener('close',()=>menuButton.focus({preventScroll:true}));
 dialog.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{closeMenu();const target=document.querySelector(a.getAttribute('href'));target.tabIndex=-1;target.focus({preventScroll:true});}));
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const largeType=()=>{const large=parseFloat(getComputedStyle(root).fontSize)>20;root.classList.toggle('large-text',large);return large;};
 const intro=document.querySelector('.opening'),skip=intro.querySelector('button');let entrance,failSafe;
 const finishIntro=()=>{entrance?.kill();clearTimeout(failSafe);intro.classList.remove('active');intro.setAttribute('aria-hidden','true');skip.tabIndex=-1;if(window.gsap)gsap.set('.opening,.opening-emblem',{clearProps:'opacity,transform'});};
 const playIntro=()=>{finishIntro();if(!window.gsap||reduced.matches)return;intro.classList.add('active');intro.removeAttribute('aria-hidden');skip.tabIndex=0;const lines=intro.querySelectorAll('svg path');lines.forEach(p=>{const l=p.getTotalLength();p.style.strokeDasharray=l;p.style.strokeDashoffset=l;});entrance=gsap.timeline({onComplete:finishIntro}).to(lines,{strokeDashoffset:0,duration:.9,stagger:.1,ease:'power2.inOut'},0).fromTo('.opening-emblem span',{opacity:0,y:12},{opacity:1,y:0,duration:.5},.4).to(intro,{opacity:0,duration:.65,ease:'power2.inOut'},1.1);failSafe=setTimeout(finishIntro,2800);};
 skip.addEventListener('click',finishIntro);document.querySelector('[data-replay]').addEventListener('click',()=>{scrollTo({top:0,behavior:'instant'});playIntro();});
 const gallery=document.querySelector('.gallery'),windowEl=document.querySelector('.gallery-window'),track=document.querySelector('.gallery-track'),frames=[...track.children];let galleryTween,galleryIndex=0,context;
 const maxGallery=()=>Math.max(0,track.scrollWidth-windowEl.clientWidth);
 const frameOffset=i=>Math.min(maxGallery(),Math.max(0,frames[i].offsetLeft-parseFloat(getComputedStyle(track).paddingLeft)));
 const showIndex=i=>{galleryIndex=i;document.querySelector('[data-gallery-count]').textContent=String(i+1).padStart(2,'0')+' / 03';};
 const nearest=x=>{let best=0,d=Infinity;frames.forEach((_,i)=>{const delta=Math.abs(frameOffset(i)-x);if(delta<d){d=delta;best=i;}});showIndex(best);};
 const galleryStep=i=>{i=Math.max(0,Math.min(2,i));showIndex(i);if(galleryTween){const s=galleryTween.scrollTrigger;scrollTo({top:s.start+(s.end-s.start)*(frameOffset(i)/(maxGallery()||1)),behavior:reduced.matches?'instant':'smooth'});}else windowEl.scrollTo({left:frameOffset(i),behavior:reduced.matches?'instant':'smooth'});};
 document.querySelector('[data-gallery-prev]').addEventListener('click',()=>galleryStep(galleryIndex-1));document.querySelector('[data-gallery-next]').addEventListener('click',()=>galleryStep(galleryIndex+1));
 windowEl.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','Home','End'].includes(e.key)){e.preventDefault();galleryStep(e.key==='Home'?0:e.key==='End'?2:galleryIndex+(e.key==='ArrowRight'?1:-1));}});
 windowEl.addEventListener('scroll',()=>{if(!galleryTween)nearest(windowEl.scrollLeft);});
 document.querySelectorAll('[data-space-choice]').forEach(a=>a.addEventListener('click',()=>{form.elements.space.value=a.dataset.spaceChoice;}));
 const applyTable=(button,animate)=>{const on=button.getAttribute('aria-pressed')==='true',parts=document.querySelectorAll('.tablescape-'+button.dataset.tableToggle);if(animate&&window.gsap&&!reduced.matches)gsap.to(parts,{opacity:on?1:0,duration:.35,overwrite:true});else parts.forEach(p=>p.style.opacity=on?'1':'0');};
 document.querySelectorAll('[data-table-toggle]').forEach(b=>b.addEventListener('click',()=>{b.setAttribute('aria-pressed',String(b.getAttribute('aria-pressed')!=='true'));applyTable(b,true);}));
 const buildMotion=()=>{
  context?.revert();context=null;galleryTween=null;gallery.classList.remove('is-filmstrip');root.classList.remove('motion-desktop');largeType();document.querySelector('.light-scene').classList.toggle('light-static',reduced.matches||!window.gsap||!window.ScrollTrigger);
  if(!window.gsap||!window.ScrollTrigger||reduced.matches)return;
  gsap.registerPlugin(ScrollTrigger);const desktop=innerWidth>=1024&&innerHeight>=780&&!largeType();
  context=gsap.context(()=>{
   gsap.to('.reading-progress',{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}});
   document.querySelectorAll('.menu-notes article').forEach(el=>gsap.from(el,{y:35,opacity:0,duration:1,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 90%',toggleActions:'play none none none'}}));
   gsap.fromTo('.cuisine-portrait',{rotation:5,y:80},{rotation:-6,y:0,ease:'none',scrollTrigger:{trigger:'.cuisine-letter',start:'top 85%',end:'center 40%',scrub:.8}});
   gsap.from('.contact-head h2,.enquiry-form',{y:35,opacity:0,stagger:.15,duration:1,scrollTrigger:{trigger:'.contact',start:'top 85%',toggleActions:'play none none none'}});
   if(desktop){
    root.classList.add('motion-desktop');
    const camera={p:0},frame=document.querySelector('.portal-frame'),photo=document.querySelector('.portal-photo');
    const portal=gsap.timeline({scrollTrigger:{id:'maison-entry',trigger:'.threshold',start:'top top',end:()=>'+='+innerHeight*1.5,pin:true,scrub:.7,invalidateOnRefresh:true}});
    portal.to(camera,{p:1,duration:1,ease:'none',onUpdate:()=>{const p=camera.p,sx=.42+.58*p,sy=.76+.24*p;gsap.set(frame,{xPercent:21*(1-p),scaleX:sx,scaleY:sy});gsap.set(photo,{scaleX:(1+.08*p)/sx,scaleY:(1+.08*p)/sy});}},0).to('#portal-shape',{attr:{d:'M0 1 L0 0 C0 0 1 0 1 0 L1 1 Z'},duration:1,ease:'none'},0).to('.threshold-copy',{opacity:0,y:-45,duration:.35},.15).to('.threshold-bottom,.architecture-note,.threshold-tick',{opacity:0,duration:.3},.35).to('.portal-caption',{opacity:1,duration:.2},.8);
    const table=gsap.timeline({scrollTrigger:{id:'maison-table',trigger:'.table-stage',start:'top top',end:()=>'+='+innerHeight*1.5,pin:true,scrub:.9,invalidateOnRefresh:true}});
    table.fromTo('.table-svg',{rotationX:45,rotationZ:-12},{rotationX:12,rotationZ:12,duration:1,ease:'none'},0).from('.table-note',{opacity:0,y:25,stagger:.12,duration:.25},.08).to('.table-watermark',{xPercent:-8,duration:1,ease:'none'},0).to('.table-note',{opacity:0,duration:.15},.75).to('.table-dish',{scale:3.4,duration:.3,ease:'power2.inOut'},.7);
    gallery.classList.add('is-filmstrip');windowEl.scrollLeft=0;
    galleryTween=gsap.timeline({scrollTrigger:{id:'maison-archive',trigger:gallery,start:'top top',end:()=>'+='+maxGallery(),pin:true,scrub:.65,invalidateOnRefresh:true,onUpdate:s=>nearest(s.progress*maxGallery())}});
    galleryTween.to(track,{x:()=>-maxGallery(),ease:'none',duration:1},0);frames.forEach((f,i)=>galleryTween.fromTo(f.querySelector('img'),{scale:1.13},{scale:1,ease:'none',duration:.6},i*.2));
   }else{
    gsap.fromTo('.portal-photo',{scale:1.12},{scale:1,ease:'none',scrollTrigger:{trigger:'.portal-frame',start:'top bottom',end:'bottom top',scrub:1}});
    gsap.fromTo('.table-svg',{rotationX:40,rotationZ:-12},{rotationX:15,rotationZ:9,ease:'none',scrollTrigger:{trigger:'.table-board',start:'top 90%',end:'bottom 30%',scrub:.8}});
   }
   const ink=[...document.querySelectorAll('.table-ink')];ink.forEach(p=>{const length=p.getTotalLength();gsap.set(p,{strokeDasharray:length,strokeDashoffset:length});});gsap.to(ink,{strokeDashoffset:0,duration:1.4,stagger:.008,ease:'power2.inOut',scrollTrigger:{trigger:'.table-board',start:'top 90%',toggleActions:'play none none none'}});
   const light=gsap.timeline({scrollTrigger:{id:'maison-light',trigger:'.light-stage',start:desktop?'top top':'top 55%',end:desktop?()=>'+='+innerHeight*1.4:'bottom 35%',pin:desktop,scrub:.8,invalidateOnRefresh:true}});
   light.to('.night-layer',{clipPath:'circle(150% at 72% 60%)',duration:1,ease:'none'},0).to('.day-words',{opacity:0,y:-40,duration:.3},.12).fromTo('.night-words',{opacity:0,y:60},{opacity:1,y:0,duration:.35},.5).to('.clock-hand',{rotation:220,svgOrigin:'70 70',duration:1,ease:'none'},0).to('.day-photo',{scale:1.12,duration:1,ease:'none'},0).fromTo('.night-layer img',{scale:1.2},{scale:1,duration:1,ease:'none'},0);
  });
  document.querySelectorAll('[data-table-toggle]').forEach(b=>applyTable(b,false));ScrollTrigger.refresh();
 };
 reduced.addEventListener('change',()=>{finishIntro();buildMotion();});
 let timer,w=innerWidth,h=innerHeight,large=largeType();const rebuild=()=>{clearTimeout(timer);timer=setTimeout(()=>{const l=largeType();if(w!==innerWidth||Math.abs(h-innerHeight)>100||l!==large){w=innerWidth;h=innerHeight;large=l;buildMotion();}},180);};
 addEventListener('resize',rebuild);new ResizeObserver(()=>{if(large!==largeType())rebuild();}).observe(root);
 buildMotion();document.fonts?.ready.then(()=>window.ScrollTrigger?.refresh());addEventListener('pageshow',e=>{if(e.persisted){finishIntro();window.ScrollTrigger?.refresh();}});playIntro();
})();
