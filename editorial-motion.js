(() => {
  if(!window.gsap||!window.ScrollTrigger)return;
  const media=gsap.matchMedia();
  media.add('(prefers-reduced-motion: no-preference)',()=>{
    document.querySelectorAll('.edition-margin').forEach(el=>gsap.from(el,{opacity:.15,y:12,duration:.8,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 94%',once:true}}));
    document.querySelectorAll('.edition-line-art').forEach(path=>{
      const length=path.getTotalLength();
      gsap.fromTo(path,{strokeDasharray:length,strokeDashoffset:length},{strokeDashoffset:0,duration:1.2,ease:'power2.out',scrollTrigger:{trigger:path.closest('.edition-margin'),start:'top 94%',once:true}});
    });
  });
})();
