const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let lives = 3;
let hasMaze = false;
let player = {x:1, y:1};

// วาดฉากทั้งหมด
function drawGame(){
  const map = hasMaze ? mapMaze : mapOpen;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // วาดพื้นและกำแพง
  for(let y = 0; y < map.length; y++){
    for(let x = 0; x < map[y].length; x++){
      ctx.fillStyle = map[y][x] === 1 ? '#3A2E00' : '#F8F5E6';
      ctx.fillRect(x*40, y*40, 37, 37);
    }
  }

  // วาดกับดัก
  ctx.font = '28px Arial';
  traps.forEach(t => ctx.fillText('⚠️', t.x*40+5, t.y*40+30));

  // วาดจุดหมาย
  ctx.font = '32px Arial';
  ctx.fillText('🏆', goal.x*40+4, goal.y*40+30);

  // วาดตัวละครหุ่นยนต์
  ctx.font = '24px Arial';
  ctx.fillText('🤖', player.x*40+7, player.y*40+28);
}

// เคลื่อนที่
function move(dir){
  const map = hasMaze ? mapMaze : mapOpen;
  let nx = player.x;
  let ny = player.y;

  if(dir === 'up') ny--;
  if(dir === 'down') ny++;
  if(dir === 'left') nx--;
  if(dir === 'right') nx++;

  if(map[ny][nx] === 0){
    player.x = nx;
    player.y = ny;
    checkPosition();
    drawGame();
  }
}

// กดต่อย เปิดเขาวงกต
function punch(){
  playSound('sndHit');
  if(!hasMaze){
    hasMaze = true;
    updateUI();
    drawGame();
  }
}

// ตรวจสอบตำแหน่ง ชนกับดัก/ถึงเส้นชัย
function checkPosition(){
  traps.forEach(trap => {
    if(trap.x === player.x && trap.y === player.y){
      playSound('sndHurt');
      lives--;
      updateUI();
      player = {x:1, y:1};
      if(lives <= 0){
        alert('💀 เกมจบ! ลองใหม่อีกครั้งนะครับ');
        resetGame();
      }
    }
  });

  if(player.x === goal.x && player.y === goal.y){
    playSound('sndWin');
    alert('🎉 ยินดีด้วย! คุณผ่านด่านสำเร็จแล้วครับ');
    resetGame();
  }
}

// เริ่มเกมใหม่
function resetGame(){
  lives = 3;
  hasMaze = false;
  player = {x:1, y:1};
  updateUI();
  drawGame();
}

// เริ่มทำงานครั้งแรก
drawGame();
