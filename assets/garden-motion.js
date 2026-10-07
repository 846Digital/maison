/* GSAP: an opening envelope, photographs on paper, a walk through the day. */
(() => {
  'use strict';
  const intro = document.querySelector('.envelope-intro');
  const skip = intro.querySelector('.envelope-skip');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let entrance, failSafe;
  const close = () => {
    entrance?.kill(); clearTimeout(failSafe);
    intro.classList.remove('active'); intro.setAttribute('aria-hidden', 'true'); skip.tabIndex = -1;
    window.gsap?.set('.garden-enter', { clearProps: 'all' });
  };
  const open = () => {
    close();
    if (!window.gsap || reduced.matches) return;
    gsap.set('.envelope-flap,.envelope-note,.envelope-pocket,.envelope-back,.wax-seal', { clearProps: 'all' });
    gsap.set(intro, { clearProps: 'opacity,visibility,transform' });
    intro.classList.add('active'); intro.removeAttribute('aria-hidden'); skip.tabIndex = 0;
    entrance = gsap.timeline({ defaults: { ease: 'power3.inOut' }, onComplete: close });
    entrance.from('.wax-seal', { scale: .9, opacity: 0, duration: .45 })
      .to('.wax-seal', { scale: .8, opacity: 0, duration: .3 }, .65)
      .to('.envelope-flap', { rotationX: -175, duration: .8 }, .8)
      .to('.envelope-note', { yPercent: -35, duration: .75 }, 1.25)
      .to('.envelope-pocket,.envelope-back', { yPercent: 110, opacity: 0, duration: .8 }, 1.6)
      .to(intro, { opacity: 0, duration: .5 }, 2.05)
      .fromTo('.garden-enter', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: .7, stagger: .1, ease: 'power3.out', clearProps: 'all' }, 2.1);
    failSafe = setTimeout(close, 4500);
  };
  skip.addEventListener('click', () => { close(); const main = document.querySelector('main'); main.tabIndex = -1; main.focus({ preventScroll: true }); });
  document.querySelector('[data-replay]').addEventListener('click', () => { scrollTo({ top: 0, behavior: 'instant' }); open(); });
  reduced.addEventListener('change', e => { if (e.matches) close(); });
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
      gsap.from('.cover-flower', { y: -25, ease: 'none', scrollTrigger: { trigger: '.garden-cover', start: 'top top', end: 'bottom top', scrub: .8 } });
      document.querySelectorAll('[data-garden-reveal]').forEach(el => gsap.from(el, { y: 12, opacity: .3, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true } }));
      gsap.from('.print-first', { rotation: -4, y: 60, ease: 'none', scrollTrigger: { trigger: '.keepsake-album', start: 'top 85%', end: 'bottom 85%', scrub: 1 } });
      gsap.from('.print-second', { rotation: 5, y: 35, ease: 'none', scrollTrigger: { trigger: '.keepsake-album', start: 'top 80%', end: 'bottom 85%', scrub: 1 } });
      document.querySelectorAll('.walk-route .event').forEach((el, i) => gsap.from(el, { x: i % 2 ? 18 : -18, opacity: .2, duration: .8, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%', once: true } }));
      gsap.from('.address-postcard', { rotation: 3, y: 30, ease: 'none', scrollTrigger: { trigger: '.address-section', start: 'top 90%', end: 'center center', scrub: .8 } });
      gsap.from('.fabric-petals .color', { y: 20, opacity: .2, stagger: .1, duration: .6, scrollTrigger: { trigger: '.fabric-petals', start: 'top 90%', once: true } });
    });
    document.querySelectorAll('img').forEach(img => img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true }));
    document.querySelectorAll('details').forEach(el => el.addEventListener('toggle', () => ScrollTrigger.refresh()));
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener('pageshow', e => { if (e.persisted) { close(); ScrollTrigger.refresh(); } });
  }
  open();
})();
