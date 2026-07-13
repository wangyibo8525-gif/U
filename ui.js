function updateUI(){
  document.getElementById('lives').textContent = '❤️'.repeat(lives);
  document.getElementById('state').textContent = hasMaze ? 'เขาวงกตปรากฏแล้ว!' : 'ทางเดินโล่ง';
}
