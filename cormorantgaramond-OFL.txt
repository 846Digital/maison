(() => {
  'use strict';
  const config = window.WEDDING;
  if (!config) return;
  const theme = document.documentElement.dataset.theme;
  const design = config.themes[theme];
  const [year, month, day] = config.date.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  const fmt = (options) => new Intl.DateTimeFormat('ru-RU', { ...options, timeZone: 'UTC' }).format(date);
  const initials = `${Array.from(config.bride)[0] || ''} & ${Array.from(config.groom)[0] || ''}`;
  const numericDate = fmt({ day: '2-digit', month: '2-digit', year: 'numeric' });
  const values = {
    ...config, initials, couple: `${config.bride} и ${config.groom}`, dateNumeric: numericDate,
    dateFull: fmt({ day: 'numeric', month: 'long', year: 'numeric' }).replace(/ г\.$/, ''),
    dateShort: `${String(day).padStart(2, '0')} / ${String(month).padStart(2, '0')} / ${String(year).slice(-2)}`,
    dateWeekday: fmt({ weekday: 'long' }), day: String(day).padStart(2, '0'), year,
    monthGenitive: fmt({ day: 'numeric', month: 'long' }).replace(/^\d+\s/, '')
  };
  document.querySelectorAll('[data-bind]').forEach(el => {
    const value = values[el.dataset.bind];
    if (value !== undefined) el.textContent = String(value);
  });
  const titles = { garden: 'Садовое письмо', editorial: 'Особенный выпуск', theatre: 'Вечер навсегда' };
  document.title = `${values.couple} · ${titles[theme]}`;
  function safeUrl(value, allowLocal = false) {
    if (!value || typeof value !== 'string') return null;
    try {
      const url = new URL(value, location.href);
      if (url.protocol === 'https:' || url.protocol === 'http:' || (allowLocal && url.protocol === 'file:')) return url.href;
    } catch (_) { /* Пустые или некорректные ссылки остаются скрытыми. */ }
    return null;
  }
  document.querySelectorAll('[data-link]').forEach(el => {
    const url = safeUrl(config[el.dataset.link]);
    if (url) { el.href = url; el.target = '_blank'; el.rel = 'noopener noreferrer'; el.hidden = false; }
  });
  document.querySelectorAll('[data-photo]').forEach(el => {
    const value = el.dataset.photo === 'venue' ? (design.venuePhoto || design.photo) : design.photo;
    const url = safeUrl(value, true);
    if (url && el.getAttribute('src') !== value) { el.src = url; el.removeAttribute('srcset'); el.removeAttribute('sizes'); }
    el.alt = el.dataset.photo === 'venue' && design.venuePhoto ? `Место праздника: ${config.venue}` : design.photoAlt;
  });
  document.querySelectorAll('[data-schedule]').forEach(container => {
    config.schedule.forEach(item => {
      const row = document.createElement('article'); row.className = 'event';
      const time = document.createElement('time'); time.dateTime = `${config.date}T${item.time}`; time.textContent = item.time;
      const content = document.createElement('div');
      const heading = document.createElement('h3'); heading.textContent = item.title;
      const text = document.createElement('p'); text.textContent = item.text;
      content.append(heading, text); row.append(time, content); container.append(row);
    });
  });
  document.querySelectorAll('[data-palette]').forEach(container => {
    design.palette.forEach((color, index) => {
      const item = document.createElement('div'); item.className = 'color';
      const swatch = document.createElement('i'); swatch.setAttribute('aria-hidden', 'true');
      if (/^#[\da-f]{6}$/i.test(color)) swatch.style.setProperty('--swatch', color);
      const name = document.createElement('span'); name.textContent = design.colorNames[index] || color;
      item.append(swatch, name); container.append(item);
    });
  });
  const calendarContainer = document.querySelector('[data-calendar-grid]');
  if (calendarContainer) {
    const title = document.createElement('p'); title.className = 'calendar-title';
    title.textContent = fmt({ month: 'long', year: 'numeric' });
    const grid = document.createElement('div'); grid.className = 'calendar-grid';
    const cell = (value, className = '') => { const el = document.createElement('span'); el.textContent = value; el.className = className; grid.append(el); return el; };
    ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].forEach(value => cell(value, 'weekday'));
    const first = new Date(Date.UTC(year, month - 1, 1));
    for (let n = 0; n < (first.getUTCDay() + 6) % 7; n++) cell('');
    const total = new Date(Date.UTC(year, month, 0)).getUTCDate();
    for (let n = 1; n <= total; n++) {
      const el = cell(n, n === day ? 'selected' : '');
      if (n === day) el.setAttribute('aria-label', `${values.dateFull} — день свадьбы`);
    }
    calendarContainer.append(title, grid);
  }
  const qrUrl = safeUrl(config.qrUrl);
  if (qrUrl && typeof window.qrcode === 'function') {
    try {
      const qr = window.qrcode(0, 'M'); qr.addData(qrUrl); qr.make();
      document.querySelectorAll('[data-qr]').forEach(el => {
        const image = document.createElement('img'); image.src = qr.createDataURL(4, 4);
        image.width = 128; image.height = 128; image.alt = 'QR-код со ссылкой на приглашение';
        el.querySelector('.qr-image').append(image); el.hidden = false;
        const link = el.querySelector('[data-qr-link]');
        if (link) { link.href = qrUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; }
      });
    } catch (_) { /* Слишком длинную ссылку лучше заменить короткой. */ }
  }
  function localTimeToUtc(time) {
    const [hours, minutes] = time.split(':').map(Number);
    const wall = Date.UTC(year, month - 1, day, hours, minutes);
    let guess = wall;
    const formatter = new Intl.DateTimeFormat('en-GB', { timeZone: config.timezone, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' });
    for (let pass = 0; pass < 3; pass++) {
      const parts = Object.fromEntries(formatter.formatToParts(new Date(guess)).filter(p => p.type !== 'literal').map(p => [p.type, p.value]));
      const actual = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
      guess += wall - actual;
    }
    return new Date(guess);
  }
  const icsStamp = value => value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  const icsEscape = value => String(value).replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
  function foldIcs(line) {
    const encoder = new TextEncoder(); let result = ''; let current = ''; let bytes = 0;
    for (const char of line) { const length = encoder.encode(char).length; if (bytes + length > 73) { result += current + '\r\n '; current = ''; bytes = 1; } current += char; bytes += length; }
    return result + current;
  }
  document.querySelectorAll('[data-calendar]').forEach(button => button.addEventListener('click', () => {
    let start; let end;
    try { start = localTimeToUtc(config.startTime); end = localTimeToUtc(config.endTime); }
    catch (_) { button.textContent = 'Проверьте часовой пояс'; return; }
    if (end <= start) end = new Date(end.getTime() + 86400000);
    const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Wedding Stories//RU', 'CALSCALE:GREGORIAN', 'BEGIN:VEVENT', `UID:wedding-${config.date}-${encodeURIComponent(values.couple)}@wedding-stories`, `DTSTAMP:${icsStamp(new Date())}`, `DTSTART:${icsStamp(start)}`, `DTEND:${icsStamp(end)}`, `SUMMARY:${icsEscape(`Свадьба: ${values.couple}`)}`, `LOCATION:${icsEscape(`${config.venue}, ${config.city}, ${config.address}`)}`, `DESCRIPTION:${icsEscape(config.welcome)}`, 'END:VEVENT', 'END:VCALENDAR'];
    const file = new Blob([lines.map(foldIcs).join('\r\n') + '\r\n'], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(file); const link = document.createElement('a'); link.href = url; link.download = 'our-wedding.ics'; document.body.append(link); link.click(); link.remove(); setTimeout(() => URL.revokeObjectURL(url), 1000);
  }));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const intro = document.querySelector('.intro');
  const skip = intro?.querySelector('.intro-skip');
  let entrance;
  function closeIntro() {
    entrance?.kill();
    intro?.classList.remove('active');
    intro?.setAttribute('aria-hidden', 'true');
    if (skip) skip.tabIndex = -1;
    if (window.gsap) window.gsap.set('.hero-enter, .hero-photo', { clearProps: 'all' });
  }
  function openIntro(animateHero = true) {
    closeIntro();
    if (!window.gsap || reduced.matches || !intro) return;
    const gsap = window.gsap;
    gsap.set(intro.querySelectorAll('.intro-panel, .intro-center'), { clearProps: 'all' });
    intro.classList.add('active'); intro.removeAttribute('aria-hidden'); skip.tabIndex = 0;
    entrance = gsap.timeline({ defaults: { ease: 'power3.inOut' }, onComplete: closeIntro });
    entrance.fromTo('.intro-center', { autoAlpha: 0, y: 12 }, { autoAlpha: 1, y: 0, duration: .5 }, 0)
      .to('.intro-center', { autoAlpha: 0, duration: .35 }, .7);
    const panelStart = .8;
    if (theme === 'editorial') {
      entrance.to('.intro-panel', { yPercent: -105, duration: 1, stagger: .1 }, panelStart);
    } else {
      entrance.to('.intro-panel.left', { xPercent: -102, duration: theme === 'theatre' ? 1.6 : 1.2 }, panelStart)
        .to('.intro-panel.right', { xPercent: 102, duration: theme === 'theatre' ? 1.6 : 1.2 }, panelStart);
    }
    if (animateHero) {
      entrance.fromTo('.hero-enter', { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: .9, stagger: .12, ease: 'power3.out', clearProps: 'all' }, 1.15)
        .fromTo('.hero-photo', { autoAlpha: .5, scale: 1.035 }, { autoAlpha: 1, scale: 1, duration: 1.1, clearProps: 'all' }, 1.1);
    }
  }
  skip?.addEventListener('click', () => { closeIntro(); document.querySelector('main')?.setAttribute('tabindex', '-1'); document.querySelector('main')?.focus({ preventScroll: true }); });
  document.querySelectorAll('[data-replay]').forEach(button => button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'instant' }); openIntro(true);
  }));
  reduced.addEventListener('change', event => { if (event.matches) closeIntro(); });
  if (window.gsap && window.ScrollTrigger) {
    const gsap = window.gsap; gsap.registerPlugin(window.ScrollTrigger);
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.to('.progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: true } });
      document.querySelectorAll('[data-reveal]').forEach(el => gsap.from(el, {
        autoAlpha: .15, y: theme === 'editorial' ? 0 : 32, x: theme === 'editorial' ? -28 : 0,
        duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }));
      document.querySelectorAll('.event').forEach(el => gsap.from(el, { autoAlpha: .2, y: 20, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 92%', once: true } }));
      if (theme === 'editorial') gsap.from('.giant-date', { x: -45, autoAlpha: .45, ease: 'none', scrollTrigger: { trigger: '.editorial-date', start: 'top 90%', end: 'center center', scrub: .7 } });
      if (theme === 'theatre') {
        const vow = document.querySelector('[data-vow]');
        const original = vow.textContent;
        vow.setAttribute('aria-label', original); vow.textContent = '';
        original.split(' ').forEach((word, i) => { const span = document.createElement('span'); span.textContent = (i ? ' ' : '') + word; span.setAttribute('aria-hidden', 'true'); vow.append(span); });
        gsap.from(vow.children, { opacity: .25, stagger: .15, ease: 'none', scrollTrigger: { trigger: '.theatre-vow', start: 'top 80%', end: 'bottom 65%', scrub: .6 } });
        return () => { vow.textContent = original; vow.removeAttribute('aria-label'); };
      }
    });
    window.addEventListener('load', () => window.ScrollTrigger.refresh(), { once: true });
    document.querySelectorAll('details').forEach(el => el.addEventListener('toggle', () => window.ScrollTrigger.refresh()));
    if (document.fonts) document.fonts.ready.then(() => window.ScrollTrigger.refresh());
    window.addEventListener('pageshow', event => { if (event.persisted) { closeIntro(); window.ScrollTrigger.refresh(); } });
    openIntro();
    // Even a runtime interruption must never leave a covering introduction.
    setTimeout(() => { if (intro?.classList.contains('active')) closeIntro(); }, 5000);
  }
})();
