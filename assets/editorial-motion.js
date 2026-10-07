/* GSAP: print shutters, horizontal spreads, a moving typographic line. */
(() => {
  'use strict';
  const intro = document.querySelector('.issue-intro');
  const skip = intro.querySelector('.issue-skip');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const section = document.querySelector('.issue-program');
  const track = document.querySelector('.spread-track');
  const events = [...track.querySelectorAll('.event')];
  document.querySelector('[data-spread-total]').textContent = String(events.length).padStart(2, '0');
  events.forEach((el, i) => {
    const no = document.createElement('span'); no.className = 'chapter-no'; no.textContent = 'Глава ' + String(i + 1).padStart(2, '0');
    no.setAttribute('aria-hidden', 'true'); el.append(no);
  });
  let entrance, failSafe;
  const close = () => {
    entrance?.kill(); clearTimeout(failSafe);
    intro.classList.remove('active'); intro.setAttribute('aria-hidden', 'true'); skip.tabIndex = -1;
    window.gsap?.set('.issue-enter,.cover-panorama', { clearProps: 'all' });
  };
  const open = () => {
    close(); if (!window.gsap || reduced.matches) return;
    gsap.set('.issue-shutter,.issue-intro-title', { clearProps: 'all' });
    intro.classList.add('active'); intro.removeAttribute('aria-hidden'); skip.tabIndex = 0;
    entrance = gsap.timeline({ defaults: { ease: 'power4.inOut' }, onComplete: close });
    entrance.from('.issue-intro-title', { opacity: 0, y: 12, duration: .4 })
      .to('.issue-intro-title', { opacity: 0, y: -12, duration: .3 }, .65)
      .to('.issue-shutter', { yPercent: -102, duration: 1.1, stagger: .11 }, .8)
      .fromTo('.issue-enter', { y: 14, opacity: .2 }, { y: 0, opacity: 1, duration: .7, stagger: .1, clearProps: 'all' }, 1.1)
      .fromTo('.cover-panorama', { scale: 1.02, opacity: .4 }, { scale: 1, opacity: 1, duration: .9, clearProps: 'all' }, 1.15);
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
      document.querySelectorAll('.issue-dress h2,.story-spread h2,.place-heading h2').forEach(el => gsap.from(el, { y: 24, duration: .75, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } }));
      gsap.from('.color-columns .color', { y: 40, duration: 1, stagger: .12, ease: 'power3.out', scrollTrigger: { trigger: '.color-columns', start: 'top 90%', once: true } });
      gsap.to('.story-running-line span', { xPercent: -15, ease: 'none', scrollTrigger: { trigger: '.story-running-line', start: 'top bottom', end: 'bottom top', scrub: 1 } });
    });
    const pinMedia = gsap.matchMedia();
    const setupPin = () => {
      pinMedia.revert();
      // Large browser text stays in normal document flow, with no clipped spread.
      if (parseFloat(getComputedStyle(document.documentElement).fontSize) > 20) return;
      pinMedia.add('(min-width: 1000px) and (min-height: 650px) and (prefers-reduced-motion: no-preference)', () => {
      section.classList.add('program-is-pinned');
      const distance = () => Math.max(0, track.scrollWidth - document.querySelector('.program-viewport').clientWidth);
      gsap.to(track, {
        x: () => -distance(), ease: 'none',
        scrollTrigger: {
          trigger: section, start: 'top top', end: () => '+=' + distance(), pin: true, scrub: .6, invalidateOnRefresh: true,
          onUpdate: self => { document.querySelector('[data-current-spread]').textContent = String(Math.min(events.length, Math.floor(self.progress * events.length) + 1)).padStart(2, '0'); }
        }
      });
      return () => { section.classList.remove('program-is-pinned'); document.querySelector('[data-current-spread]').textContent = '01'; };
      });
    };
    let rootFont = getComputedStyle(document.documentElement).fontSize;
    setupPin();
    new ResizeObserver(() => {
      const nextFont = getComputedStyle(document.documentElement).fontSize;
      if (nextFont !== rootFont) { rootFont = nextFont; setupPin(); ScrollTrigger.refresh(); }
    }).observe(document.documentElement);
    document.querySelectorAll('img').forEach(img => img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true }));
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    window.addEventListener('pageshow', e => { if (e.persisted) { close(); ScrollTrigger.refresh(); } });
  }
  open();
})();
