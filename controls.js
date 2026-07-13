// ควบคุมด้วยคีย์บอร์ด
document.addEventListener('keydown', e => {
  e.preventDefault();
  if(e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') move('up');
  if(e.key === 'ArrowDown' || e.key.toLowerCase() === 's') move('down');
  if(e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') move('left');
  if(e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') move('right');
  if(e.key === ' ') punch();
});
