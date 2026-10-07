(() => {
  const config = window.WEDDING;
  if (!config) return;
  const initials = `${Array.from(config.bride)[0] || ''} & ${Array.from(config.groom)[0] || ''}`;
  for (const key of ['garden', 'editorial', 'theatre', 'paper']) {
    const card = document.querySelector(`.item-${key}`);
    const design = config.themes[key];
    if (!card || !design) continue;
    if (key !== 'editorial') card.querySelector('.card-initials').textContent = initials;
    const img = card.querySelector('img');
    img.src = design.photo.startsWith('../') ? design.photo.slice(3) : design.photo;
    img.alt = design.photoAlt;
  }
})();
