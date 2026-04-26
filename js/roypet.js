const pet = document.getElementById("roypet");

function movePet() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  // where the center is 
  const centerX = width / 2;
  const centerY = height / 2;

  // how far he can go from center
  const rangeX = width * 0.4;   // 40% of screen width
  const rangeY = height * 0.4;  // 40% of screen height

  const x = centerX + (Math.random() - 0.5) * rangeX;
  const y = centerY + (Math.random() - 0.5) * rangeY;

  pet.style.transform = `translate(${x}px, ${y}px)`;
}

if (pet) {
  setInterval(movePet, 2000);
  movePet();
}
