function movePet() {
  const margin = 150;

  const x = margin + Math.random() * (window.innerWidth - margin * 2);
  const y = margin + Math.random() * (window.innerHeight - margin * 2);

  pet.style.transform = `translate(${x}px, ${y}px)`;
}
