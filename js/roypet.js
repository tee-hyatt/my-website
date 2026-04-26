const pet = document.getElementById("roypet");

function movePet() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  pet.style.transform = `translate(${x}px, ${y}px)`;
}

setInterval(movePet, 2000);
movePet();
