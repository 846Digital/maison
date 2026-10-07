/* Hallmark · studied handmade paper / photographic scrapbook · P5 H4 E4 S5 R4 V5 */
@font-face { font-family: 'Great Vibes'; font-style: normal; font-weight: 400; font-display: swap; src: url('./great-vibes.ttf') format('truetype'); }
[data-theme='paper'] {
  --color-paper: oklch(94% .022 82);
  --color-surface: oklch(97% .021 82);
  --color-ink: oklch(30% .058 45);
  --color-muted: oklch(43% .035 55);
  --color-accent: oklch(43% .075 42);
  --color-on-accent: oklch(97% .021 82);
  --color-rule: oklch(72% .028 72);
  --color-focus: oklch(37% .11 42);
  --color-thread: oklch(53% .049 74);
  --color-thread-faint: oklch(63% .04 74);
  --color-paper-shadow: oklch(28% .04 45 / .16);
  --color-paper-sheet: oklch(97% .02 90);
  --color-portrait: oklch(88% .035 79);
  --color-heart-cream: oklch(89% .05 87);
  --color-heart-dark: oklch(34% .05 43);
  --color-heart-rust: oklch(47% .093 41);
  --color-tape: oklch(82% .06 83 / .62);
  --font-handwritten: 'Great Vibes', 'Cormorant Garamond', Georgia, serif;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --paper-edge: polygon(0 1%,6% 0,13% 1%,20% .2%,27% 1%,35% 0,43% .8%,50% .2%,59% 1%,67% .2%,76% 1%,84% 0,91% .8%,99% 0,100% 8%,99.5% 17%,100% 25%,99% 33%,100% 43%,99.5% 51%,100% 60%,99% 68%,100% 77%,99.4% 86%,100% 98%,92% 99%,85% 98.6%,77% 100%,67% 99%,59% 100%,50% 99%,41% 100%,32% 99%,23% 100%,15% 99%,7% 100%,0 99%,1% 90%,0 80%,.8% 71%,0 61%,1% 52%,0 42%,.7% 32%,0 22%,1% 12%);
}
.paper { position: relative; isolation: isolate; }
.paper::before { content: ''; position: absolute; inset: 0; z-index: -1; pointer-events: none; background: url('./paper-texture.webp') center top / 1536px 1024px repeat; opacity: .65; }
.motif-library { position: absolute; width: 0; height: 0; overflow: clip; }
.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: clip; clip-path: inset(50%); white-space: nowrap; border: 0; }
.paper-nav { display: flex; align-items: center; justify-content: space-between; gap: 1rem; max-width: 1300px; margin: auto; padding: 1.5rem var(--page-gutter); }
.paper-nav .monogram { font-size: 1.6rem; }
.paper-book { width: min(100%,1120px); margin: auto; position: relative; }
.paper-book > section,.paper-close { position: relative; padding-inline: 5rem; }
.paper-book h2 { font-size: clamp(2.7rem,4.5vw,4.5rem); letter-spacing: -.03em; line-height: 1.08; }
.paper-book .label { letter-spacing: .09em; }
.thread-canvas { position: absolute; left: 0; top: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; overflow: visible; }
.thread-canvas path { fill: none; stroke-linecap: round; stroke-linejoin: round; }
.thread-shadow { stroke: var(--color-paper-shadow); stroke-width: 2.8px; transform: translate(1px,1px); opacity: .42; }
.thread-guide { stroke: var(--color-thread-faint); stroke-width: 1.4px; opacity: .25; }
.thread-ink { stroke: var(--color-thread); stroke-width: 1.8px; }
.thread-bead { display: none; }.thread-bead circle { fill: var(--color-paper-sheet); stroke: var(--color-thread); stroke-width: 1; }.thread-canvas .thread-bead path { fill: var(--color-heart-rust); stroke: none; }
.thread-point { position: absolute; width: 1px; height: 1px; pointer-events: none; }
.paper-cover { text-align: center; padding-top: 2.5rem; padding-bottom: 6rem; min-height: 900px; min-height: max(820px,94svh); }
.paper-cover > :not(.margin-art):not(.thread-point) { position: relative; z-index: 2; }
.wedding-script { font-family: var(--font-handwritten); font-size: clamp(6.8rem,14vw,12rem); font-style: normal; line-height: 1.1; margin: .2rem 0 .7rem; padding-right: .12em; }
.cover-invite { font-size: var(--text-sm); }
.cover-hearts { display: flex; align-items: center; justify-content: center; gap: 1.1rem; margin: 1.5rem 0 1.8rem; }
.cover-hearts svg { width: 3.25rem; height: 3.25rem; fill: var(--color-heart-cream); filter: drop-shadow(1px 3px 2px var(--color-paper-shadow)); transform: rotate(-8deg); }
.cover-hearts svg:nth-child(2) { fill: var(--color-heart-dark); transform: rotate(7deg); }.cover-hearts svg:nth-child(3) { fill: var(--color-heart-rust); transform: rotate(-5deg); }
.couple-title { font-size: clamp(3.6rem,6.5vw,6rem); display: flex; justify-content: center; align-items: center; gap: .8rem 1.3rem; line-height: 1.1; letter-spacing: -.035em; }
.couple-title > span { min-width: 0; overflow-wrap: anywhere; }.couple-title .names-amp { font-family: var(--font-handwritten); font-size: .7em; padding-top: .3em; }
.cover-day { font-family: var(--font-display); font-size: 2.5rem; line-height: 1.4; margin-top: 2rem; }
.cover-day span { position: relative; display: inline-block; padding: .1rem 1.2rem; }.cover-day span::after { content: ''; position: absolute; inset: 0; border: 1px solid var(--color-thread); border-radius: 50%; transform: rotate(-5deg); }
.cover-whisper { margin-top: 2rem; font-size: 1rem; line-height: 1.7; }
.follow-thread { display: inline-flex; align-items: center; flex-direction: column; gap: .8rem; font-size: var(--text-sm); min-height: 44px; text-decoration: none; margin-top: 2rem; }
.follow-thread span { font-size: 1.6rem; }
.cover-thread { bottom: 1rem; }
.margin-art { position: absolute; pointer-events: none; color: var(--color-thread); z-index: 1; }
.margin-art > svg { width: 100%; height: auto; overflow: visible; }.margin-art > p { font-family: var(--font-handwritten); font-size: 1.6rem; line-height: 1.4; color: var(--color-muted); text-align: center; }
.cover-art-left { top: 31%; left: -1rem; width: 130px; transform: rotate(-18deg); }
.cover-art-left > p { transform: rotate(14deg); margin-top: 1.2rem; }.cover-art-right { top: 5%; right: 0; width: 150px; transform: rotate(14deg); }.cover-art-right .little-flower { width: 100px; margin-top: 10rem; margin-left: 3rem; transform: rotate(-28deg); }
.tiny-heart { display: block; width: 22px; height: 22px; background: var(--color-heart-rust); clip-path: polygon(50% 95%,0 35%,4% 13%,26% 0,50% 20%,74% 0,96% 13%,100% 35%); margin: 1rem auto; opacity: .75; }
.paper-meetings { padding-block: 3rem 7rem; }
.section-eyebrow { font-family: var(--font-handwritten); font-size: 2.2rem; text-align: center; margin-bottom: 2.8rem; position: relative; z-index: 2; }
.meeting-papers { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 4rem; position: relative; z-index: 2; }
.meeting-note { position: relative; text-align: center; padding: 5.5rem 2rem 3rem; background: var(--color-paper-sheet) url('./paper-texture.webp') center / cover; background-blend-mode: multiply; clip-path: var(--paper-edge); }
.meeting-note:first-child { transform: rotate(-2deg); }.meeting-note:nth-child(2) { transform: rotate(2deg); margin-top: 2rem; }
.meeting-note h3 { font-family: var(--font-display); font-size: 2rem; line-height: 1.15; margin: 1rem 0; }
.meeting-date { font-family: var(--font-display); font-size: 2rem; font-variant-numeric: tabular-nums; }.meeting-time { font-size: 1.4rem; margin-bottom: 1.5rem; font-variant-numeric: tabular-nums; }.meeting-note > p:last-of-type { font-size: 1rem; }
.note-rings,.note-bow { position: absolute; top: 1.5rem; left: calc(50% - 2.5rem); width: 5rem; height: 3.5rem; color: var(--color-muted); }
.meeting-thread { top: 45%; }.meetings-art { left: -1.6rem; bottom: 0; width: 110px; transform: rotate(-14deg); }
.side-label { display: block; font-size: .75rem; letter-spacing: .07em; text-transform: uppercase; white-space: nowrap; transform: rotate(-90deg); transform-origin: left top; }
.meetings-art .side-label { position: absolute; left: 1rem; top: 4rem; }
.paper-childhood { text-align: center; padding-block: 5rem 7rem; }
.paper-childhood h2,.childhood-note { position: relative; z-index: 2; }
.childhood-note { margin-top: 1.5rem; font-family: var(--font-handwritten); font-size: 1.8rem; line-height: 1.45; }
.childhood-collage { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0; max-width: 730px; margin: 4rem auto 0; position: relative; }
.torn-print { position: relative; padding: 1.1rem 1.1rem 1.4rem; filter: drop-shadow(0 8px 8px var(--color-paper-shadow)); isolation: isolate; z-index: 2; }
.torn-print::before { content: ''; position: absolute; inset: 0; z-index: -1; background: var(--color-paper-sheet) url('./paper-texture.webp') center / cover; background-blend-mode: multiply; clip-path: var(--paper-edge); }
.bride-print { transform: rotate(-8deg); }.groom-print { transform: rotate(9deg); margin-top: 4rem; margin-left: -1.2rem; }
.portrait-window { height: 360px; position: relative; background: var(--color-portrait); overflow: clip; }
.portrait-window > img { width: 100%; height: 100%; object-fit: cover; outline: 1px solid var(--color-photo-outline); outline-offset: -1px; }
.photo-fallback { width: 100%; height: 100%; background: url('./paper-texture.webp') center / cover; background-blend-mode: multiply; background-color: var(--color-portrait); position: relative; display: flex; flex-direction: column; align-items: center; justify-content: center; overflow: clip; }
.photo-fallback > span { font-family: var(--font-display); font-size: 8rem; color: var(--color-muted); line-height: 1; z-index: 1; }
.photo-fallback > small { font-size: var(--text-sm); color: var(--color-muted); z-index: 1; margin-top: 1.2rem; }
.photo-fallback > svg { position: absolute; width: 120px; left: -1rem; bottom: -1.5rem; color: var(--color-thread); opacity: .55; transform: rotate(12deg); }.groom-print .photo-fallback > svg { left: auto; right: -.5rem; bottom: -2rem; width: 105px; transform: rotate(-20deg); }
.torn-print figcaption { margin-top: 1.3rem; line-height: 1.2; font-family: var(--font-handwritten); font-size: 2.3rem; }
.torn-print figcaption .label { display: block; font-family: var(--font-body); font-size: .8125rem; margin-bottom: .5rem; }
.print-pin { position: absolute; top: -1.1rem; left: calc(50% - .7rem); width: 1.4rem; height: 2.6rem; border: 1px solid var(--color-thread); border-radius: .7rem .7rem 0 0; transform: rotate(9deg); z-index: 4; }
.print-pin::after { content: ''; position: absolute; inset: .2rem .25rem -.3rem; border: 1px solid var(--color-thread); border-radius: .55rem .55rem 0 0; }
.collage-heart { width: 110px; height: 110px; position: absolute; bottom: -3.5rem; left: calc(50% - 55px); z-index: 4; fill: var(--color-heart-rust); filter: drop-shadow(0 3px 3px var(--color-paper-shadow)); transform: rotate(-9deg); }
.childhood-thread-start { top: 27%; }.childhood-thread-end { bottom: 3rem; }
.childhood-art { right: -2rem; top: 45%; width: 135px; transform: rotate(12deg); }.childhood-art > p { margin-top: 2rem; }
.paper-letter { padding-block: 5rem 6rem; }
.torn-letter { width: min(100%,650px); margin: auto; padding: 4rem 4rem 3rem; position: relative; z-index: 2; background: var(--color-paper-sheet) url('./paper-texture.webp') center / cover; background-blend-mode: multiply; clip-path: var(--paper-edge); transform: rotate(-1.5deg); }
.torn-letter h2 { font-size: 3.4rem; margin: 1.5rem 0 2rem; }.torn-letter > p:not(.label) { font-size: 1.1rem; line-height: 1.9; margin-top: 1.5rem; }
.letter-signature { display: block; font-family: var(--font-handwritten); font-size: 2.4rem; margin: 2rem 0; line-height: 1.4; }
.letter-corner { position: absolute; width: 3rem; height: 3rem; border: 1px solid var(--color-rule); pointer-events: none; }.corner-one { top: .9rem; left: 1rem; border-right: 0; border-bottom: 0; }.corner-two { bottom: 1rem; right: 1rem; border-top: 0; border-left: 0; }
.letter-doodle { width: 4rem; height: 3rem; color: var(--color-muted); }.letter-thread { top: 45%; }.letter-art { left: .4rem; top: 30%; width: 125px; transform: rotate(-19deg); }
.paper-program { padding-block: 4rem 6rem; text-align: center; }.paper-program > h2 { margin: 1.5rem 0 3rem; }
.scrap-program { width: min(100%,760px); display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 2rem; margin: auto; position: relative; z-index: 2; }
.scrap-program .event { background: var(--color-paper-sheet) url('./paper-texture.webp') center / cover; background-blend-mode: multiply; clip-path: var(--paper-edge); padding: 2.5rem 2rem; position: relative; text-align: left; transform: rotate(-2deg); }
.scrap-program .event:nth-child(even) { transform: rotate(2deg); margin-top: 2.5rem; }.scrap-program .event:last-child:nth-child(odd) { grid-column: 1 / -1; width: 62%; margin: 1rem auto 0; transform: rotate(-1deg); text-align: center; }
.scrap-program time { font-family: var(--font-display); font-size: 4rem; font-variant-numeric: tabular-nums; line-height: 1; }.scrap-program h3 { font-size: 1.9rem; margin: 1rem 0; }.scrap-program p { font-size: 1rem; color: var(--color-muted); max-width: 30ch; }.scrap-program .event:last-child p { margin-inline: auto; }
.scrap-number { position: absolute; top: 1rem; right: 1.2rem; font-family: var(--font-body); font-size: .75rem; color: var(--color-muted); }
.program-thread { top: 45%; }.program-art { right: -1rem; bottom: 15%; width: 150px; transform: rotate(9deg); }.program-art .side-label { margin-top: 4rem; margin-left: 7rem; }
.paper-palette { text-align: center; padding-block: 6rem; }.paper-palette h2 { margin: 1.5rem 0 2rem; }.paper-palette > p:not(.label) { max-width: 42ch; margin-inline: auto; position: relative; z-index: 2; }
.heart-palette { justify-content: center; gap: 2rem; margin: 3rem 0; position: relative; z-index: 2; }
.heart-palette .color { gap: 1.2rem; }
.heart-palette .color i { width: clamp(4.7rem,9vw,7.5rem); height: clamp(4.7rem,9vw,7.5rem); border: 0; border-radius: 0; background: var(--swatch) url('./paper-texture.webp') center / cover; background-blend-mode: multiply; mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 88 44 85 36 80 31 77 25 70 18 62 13 53 10 44 11 32 15 23 21 17 32 15 42 20 50 29 58 20 68 15 79 17 85 23 89 32 90 44 87 53 82 62 75 70 69 77 60 83Z'/%3E%3C/svg%3E"); mask-size: contain; mask-repeat: no-repeat; transform: rotate(-8deg); }
.heart-palette .color:nth-child(2) { padding-top: 1.6rem; }.heart-palette .color:nth-child(2) i { transform: rotate(9deg); }.heart-palette .color:nth-child(3) i { transform: rotate(-5deg); }
.palette-caption { font-family: var(--font-handwritten); font-size: 1.8rem; line-height: 1.5; }.palette-thread { top: 55%; }.palette-art { left: -1.5rem; top: 5%; width: 150px; transform: rotate(-10deg); }
.paper-wishes { padding-block: 4rem 6rem; }
.wishes-sheet { max-width: 640px; margin: auto; position: relative; padding: 3rem 3rem 2rem; z-index: 2; background: var(--color-paper-sheet) url('./paper-texture.webp') center / cover; background-blend-mode: multiply; transform: rotate(2deg); }
.wishes-sheet h2 { font-size: 3.3rem; margin: 1.2rem 0; }.wishes-sheet .faq summary { font-size: 1rem; }
.washi-tape { position: absolute; top: -1.2rem; left: 35%; width: 30%; height: 2.4rem; background: var(--color-tape); transform: rotate(-4deg); clip-path: polygon(2% 0,98% 0,96% 25%,100% 42%,97% 63%,99% 100%,0 100%,3% 73%,0 53%,3% 31%); }
.wishes-thread { top: 50%; }.wishes-art { right: 0; top: 15%; width: 130px; transform: rotate(17deg); }.wishes-art .small-bow { margin-top: 3rem; width: 105px; transform: rotate(-19deg); }
.paper-together { text-align: center; padding-block: 4rem 13rem; }.paper-together h2 { margin: 1.5rem 0 3rem; }
.together-print { width: min(100%,660px); margin: auto; transform: rotate(-3deg); }.together-window { height: 350px; background: var(--color-portrait); }.together-window img { width: 100%; height: 100%; object-fit: cover; outline: 1px solid var(--color-photo-outline); outline-offset: -1px; }.together-window .photo-fallback > span { font-size: 5rem; }.together-window .photo-fallback > svg { width: 220px; top: -1.5rem; left: auto; right: -1.5rem; transform: rotate(-15deg); }
.together-thread { bottom: 9rem; }.together-art { left: -1rem; top: 35%; width: 140px; transform: rotate(-15deg); }.together-art > p { margin-top: 1rem; }
.paper-close { padding-block: 2rem 2rem; text-align: center; }
.closing-script { font-family: var(--font-handwritten); font-size: clamp(2.7rem,5.4vw,4.5rem); line-height: 1.3; position: relative; z-index: 2; }.closing-names { font-family: var(--font-display); font-size: 2.3rem; margin-top: 1.5rem; }.closing-date { font-size: var(--text-sm); margin-top: 1rem; }
.closing-actions { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 1rem 2rem; margin: 2rem 0; }
.paper-button,.paper-action { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; max-width: 100%; font-size: var(--text-sm); white-space: nowrap; text-decoration: none; color: var(--color-accent); background: var(--color-transparent); transition: transform 150ms ease-out,background 180ms var(--ease-out); }
.paper-action { padding: .5rem 0; border-bottom: 1px solid currentColor; margin-top: 1rem; }.paper-button { padding: .8rem 1.5rem; border: 1px solid var(--color-accent); border-radius: .1rem; }.paper-button:active,.paper-action:active { transform: scale(.96); }
.qr-paper { display: inline-flex; flex-direction: column; align-items: center; padding: 1.2rem; background: var(--color-paper-sheet); border: 1px dashed var(--color-rule); position: relative; z-index: 2; transform: rotate(3deg); }.qr-paper img { width: 128px; height: 128px; }.qr-paper a { margin-top: .6rem; font-size: .8125rem; }
.paper-colophon { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; font-size: var(--text-sm); padding-top: 2rem; border-top: 1px solid var(--color-rule); margin-top: 4rem; }
.footer-bow { position: absolute; right: 0; top: 20%; width: 155px; height: 110px; color: var(--color-thread); transform: rotate(15deg); }
.paper-opening { display: none; position: fixed; inset: 0; z-index: var(--z-modal); perspective: 1400px; pointer-events: none; }.paper-opening.active { display: block; }
.opening-sheet { position: absolute; top: 0; bottom: 0; width: 50.5%; background: var(--color-paper) url('./paper-texture.webp') center / cover; box-shadow: 0 0 25px var(--color-paper-shadow); }.sheet-left { left: 0; transform-origin: left center; }.sheet-right { right: 0; transform-origin: right center; }
.opening-mark { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem; }.opening-mark > svg { width: 180px; height: 120px; color: var(--color-thread); }.opening-mark > span:not(.label) { font-family: var(--font-handwritten); font-size: 5rem; line-height: 1.1; }.opening-mark .label { font-size: .8125rem; }
.paper-skip { position: absolute; left: 50%; bottom: 3rem; transform: translateX(-50%); pointer-events: auto; padding: .6rem 0; border: 0; border-bottom: 1px solid currentColor; color: var(--color-accent); background: var(--color-transparent); font-size: var(--text-sm); white-space: nowrap; min-height: 44px; }
@media (hover:hover) and (pointer:fine) { .paper-button:hover { background: var(--color-surface); }.paper-action:hover { text-decoration: underline; } }
@media (max-width: 1199px) { .paper-book { width: 90%; }.margin-art { opacity: .75; }.cover-art-left { left: -3rem; width: 110px; }.cover-art-right { right: -2rem; width: 125px; }.paper-book > section,.paper-close { padding-inline: 3rem; }.childhood-art { right: -3rem; width: 110px; } }
@media (max-width: 767px) {
 .paper-nav { padding: 1rem 1.25rem; flex-wrap: wrap; }.paper-nav .monogram { font-size: 1.4rem; }.paper-nav .back { font-size: .8125rem; margin-left: auto; }
 .paper-book { width: 100%; }.paper-book > section,.paper-close { padding-inline: clamp(20px,5vw,32px); }.paper-book h2 { font-size: 2.9rem; }
 .paper-cover { min-height: 780px; padding-top: 2rem; padding-bottom: 5rem; }
 .wedding-script { font-size: clamp(5.9rem,23vw,9rem); line-height: 1.15; margin-top: 0; }.cover-invite { font-size: .75rem; letter-spacing: .06em !important; max-width: 27ch; margin-inline: auto; }.cover-hearts { margin: 1.5rem 0; gap: .8rem; }.cover-hearts svg { width: 2.8rem; height: 2.8rem; }
 .couple-title { flex-direction: column; gap: .1rem; font-size: clamp(3.3rem,11vw,4.4rem); }.couple-title .names-amp { padding-top: .1em; font-size: .6em; line-height: 1; }
 .cover-day { font-size: 2.1rem; margin-top: 1.5rem; }.cover-whisper { font-size: var(--text-sm); line-height: 1.7; margin-top: 1.5rem; }.follow-thread { margin-top: 1.8rem; font-size: .8125rem; }
 .cover-art-left { width: 58px; top: 33%; left: -.9rem; opacity: .7; }.cover-art-left > p { display: none; }.cover-art-right { width: 68px; top: 7%; right: -.65rem; }.cover-art-right .little-flower { width: 50px; margin-top: 10rem; margin-left: .7rem; }
 .margin-art > p { font-size: 1.2rem; }.paper-meetings { padding-block: 2rem 4rem; }.section-eyebrow { font-size: 1.7rem; margin-bottom: 2rem; }
 .meeting-papers { grid-template-columns: minmax(0,1fr); gap: 2rem; }.meeting-note { padding: 5rem 1.5rem 2.5rem; }.meeting-note:nth-child(2) { margin-top: 0; }.meeting-note h3 { font-size: 2rem; }.meeting-note > p:last-of-type { font-size: var(--text-sm); }.meetings-art { left: -.6rem; bottom: -1rem; width: 58px; }.side-label { display: none; }
 .paper-childhood { padding-block: 3rem 5rem; }.childhood-note { font-size: 1.6rem; }.childhood-collage { margin-top: 3rem; gap: 0; }.torn-print { padding: .6rem .6rem 1rem; }
 .portrait-window { height: 220px; }.photo-fallback > span { font-size: 5rem; }.photo-fallback > small { font-size: .75rem; max-width: 10ch; text-align: center; margin-top: .7rem; }.photo-fallback > svg { width: 78px; bottom: -2rem; }.groom-print .photo-fallback > svg { width: 67px; }
 .bride-print { margin-left: -.5rem; margin-right: -.5rem; }.groom-print { margin-left: -.7rem; margin-right: -.5rem; margin-top: 3rem; }
 .torn-print figcaption { font-size: 1.7rem; margin-top: .8rem; overflow-wrap: anywhere; }.torn-print figcaption .label { font-size: .75rem; margin-bottom: .4rem; }.collage-heart { width: 75px; height: 75px; left: calc(50% - 37px); bottom: -2rem; }
 .print-pin { width: 1rem; height: 2rem; top: -.8rem; left: calc(50% - .5rem); }.print-pin::after { inset: .15rem .2rem -.2rem; }.childhood-art { right: -1rem; top: 38%; width: 70px; }.childhood-art > p { display: none; }
 .paper-letter { padding-block: 4rem; }.torn-letter { padding: 3rem 1.5rem 2rem; }.torn-letter h2 { font-size: 2.6rem; }.torn-letter > p:not(.label) { font-size: 1rem; line-height: 1.85; }.letter-signature { font-size: 2rem; }.letter-art { left: -.5rem; width: 58px; top: 55%; }
 .paper-program { padding-block: 3rem 4rem; }.paper-program .label { font-size: .75rem; max-width: 25ch; margin: auto; }.scrap-program { grid-template-columns: minmax(0,1fr); gap: 1.7rem; }.scrap-program .event { padding: 2rem 1.5rem; }.scrap-program .event:nth-child(even) { margin-top: 0; }.scrap-program .event:last-child:nth-child(odd) { grid-column: 1; width: 100%; margin-top: 0; text-align: left; }.scrap-program .event:last-child p { margin-inline: 0; }.scrap-program time { font-size: 3.4rem; }.scrap-program h3 { font-size: 1.9rem; }.scrap-program p { font-size: 1rem; }.program-art { width: 64px; right: -.5rem; bottom: 14%; }
 .paper-palette { padding-block: 4rem; }.paper-palette > p:not(.label):not(.palette-caption) { font-size: 1rem; }.heart-palette { gap: .7rem; }.heart-palette .color i { width: 4.1rem; height: 4.1rem; }.heart-palette .color { font-size: .75rem; }.palette-caption { font-size: 1.5rem; }.palette-art { left: -1rem; top: 4%; width: 70px; }
 .paper-wishes { padding-block: 3rem 4rem; }.wishes-sheet { padding: 2.5rem 1.3rem 1.5rem; }.wishes-sheet h2 { font-size: 2.6rem; }.wishes-sheet .label { font-size: .75rem; }.wishes-art { width: 62px; right: -.7rem; top: 48%; }.wishes-art .small-bow { width: 57px; margin-top: 2rem; }
 .paper-together { padding-block: 3rem 11rem; }.together-window { height: 250px; }.together-window .photo-fallback > span { font-size: 3.5rem; }.together-window .photo-fallback > svg { width: 120px; }.together-window .photo-fallback > small { max-width: none; }.together-print figcaption { font-size: 1.9rem; }.together-art { width: 65px; left: -.5rem; top: 55%; }.together-art > p { display: none; }
 .paper-close { padding-top: 1rem; }.closing-script { font-size: 2.9rem; }.closing-names { font-size: 1.9rem; }.paper-colophon { margin-top: 3rem; flex-direction: column; font-size: .8125rem; }.footer-bow { width: 72px; right: -.5rem; top: 40%; }.paper-button { padding-inline: .8rem; }
}
.paper-large-type .childhood-collage { grid-template-columns: minmax(0,1fr); max-width: 540px; gap: 2rem; }
.paper-large-type .bride-print,.paper-large-type .groom-print { margin: 0; transform: rotate(-2deg); }
.paper-large-type .portrait-window { height: 420px; }
.paper-large-type .paper-cover { min-height: 0; }
@media (prefers-reduced-motion: reduce) { .paper-opening { display: none !important; }.thread-bead { display: none !important; } }
@media print { .paper-opening,.paper-nav,.thread-bead,.follow-thread,.closing-actions { display: none; }.paper::before { position: absolute; }.torn-print,.fold-note,.event { transform: none !important; }.paper-book { width: 100%; } }
