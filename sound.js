function playSound(id){
  const audio = document.getElementById(id);
  if(audio){
    audio.currentTime = 0;
    audio.play().catch(err => {
      // ปิดแจ้งเตือนถ้าเล่นเสียงไม่ได้
    });
  }
}
