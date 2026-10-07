/* Editorial marginalia: crop marks, folios, ink flourishes and fine frames. */
.editorial main { position: relative; }
.edition-margin { position: absolute; width: 26px; pointer-events: none; z-index: 3; color: var(--color-accent); display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.edition-left { left: -2.8vw; }.edition-right { right: -2.8vw; }
.edition-margin svg { width: 26px; height: 100px; overflow: visible; flex: none; }
.edition-margin .folio { font-family: var(--font-display); font-size: 1.5rem; line-height: 1; }
.edition-margin .vertical-copy { font-size: .75rem; line-height: 1; letter-spacing: .06em; writing-mode: vertical-rl; white-space: nowrap; }
.edition-margin .edition-rule { width: 1px; height: 90px; background: currentColor; opacity: .5; }
.issue-cover .edition-margin { top: 20%; }.issue-dress .edition-margin { top: 30%; }.issue-story .edition-margin { top: 25%; }.issue-place .edition-margin { top: 20%; }.issue-notes .edition-margin { top: 35%; }.issue-colophon .edition-margin { top: 20%; }
.issue-colophon .edition-margin,.issue-program .edition-margin { color: var(--color-edition-light); }
.cover-panorama::after { content: ''; position: absolute; inset: 12px; border: 1px solid var(--color-edition-light); pointer-events: none; opacity: .75; }
.edition-corner { position: absolute; width: 28px; height: 28px; border-color: var(--color-accent); border-style: solid; border-width: 1px 0 0 1px; left: 1rem; top: 1rem; pointer-events: none; }
.edition-corner.corner-end { left: auto; top: auto; right: 1rem; bottom: 1rem; border-width: 0 1px 1px 0; }
.issue-dress,.issue-story,.issue-notes { position: relative; }
.editorial .edition-amp { font-family: var(--font-classic); font-size: 2.25rem; line-height: 1; }
.edition-line-art { fill: none; stroke: currentColor; stroke-width: 1.2; stroke-linecap: round; }
.edition-ticket { display: inline-flex; align-items: center; gap: 1rem; font-size: .75rem; padding: .55rem .8rem; border: 1px solid var(--color-rule); margin-top: 1.2rem; transform: rotate(-3deg); }
.edition-ticket::before { content: ''; width: 22px; height: 22px; border: 1px solid currentColor; border-radius: 50%; opacity: .65; }
@media(min-width:1000px) {
 .editorial main { margin-inline: 4vw; border-inline: 1px solid var(--color-rule); }
 .edition-left { left: -2.8vw; }.edition-right { right: -2.8vw; }
 .issue-colophon .edition-right { right: 1rem; }
 .issue-program .edition-right { right: .6rem; top: 46%; opacity: .75; }
 .issue-program .edition-right .folio { display: none; }
}
@media(max-width:999px) {
 .edition-margin { width: 15px; opacity: .65; gap: .8rem; }
 .edition-left { left: 3px; }.edition-right { right: 3px; }
 .edition-margin svg { width: 15px; height: 75px; }
 .edition-margin .folio { font-size: 1rem; }
 .edition-margin .vertical-copy { font-size: .75rem; letter-spacing: 0; }
 .edition-margin .edition-rule { height: 55px; }
 .issue-program .edition-margin { display: none; }
 .edition-corner { width: 14px; height: 14px; left: .3rem; top: .3rem; }
 .edition-corner.corner-end { right: .3rem; bottom: .3rem; }
 .editorial .edition-amp { font-size: 1.4rem; }
 .cover-panorama::after { inset: 8px; }
 .editorial .issue-calendar { font-size: clamp(1.25rem,3vw,1.7rem); }
}
@media print { .edition-margin,.edition-corner { display: none; }.editorial main { margin: 0; } }
