// Add event listener to the Learn More button
document.querySelector('button').addEventListener('click', () => {
    // Add a funky animation to the button
    document.querySelector('button').classList.add('animate');
    setTimeout(() => {
      document.querySelector('button').classList.remove('animate');
    }, 1000);
  });
  
  // Add a scrolling effect to the sections
  document.querySelectorAll('section').forEach((section) => {
    section.addEventListener('mouseover', () => {
      section.classList.add('scroll');
    });
    section.addEventListener('mouseout', () => {
      section.classList.remove('scroll');
    });
  });
  
  // Add a particle system to the background
  const particles = [];
  for (let i = 0; i < 100; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(particle);
    particles.push(particle);
  }
  
  setInterval(() => {
    particles.forEach((particle) => {
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.left = `${Math.random() * 100}%`;
    });
  }, 1000);
  
  // Add a score counter to the games section
  let score = 0;
  document.querySelector('#games').addEventListener('click', () => {
    score++;
    document.querySelector('#score').textContent = `Score: ${score}`;
  });
  
  // Add a game to the games section
  const game = document.createElement('div');
  game.classList.add('game');
  game.innerHTML = `
    <h2>Game 1</h2>
    <p>Click to play!</p>
  `;
  document.querySelector('#games').appendChild(game);
  
  game.addEventListener('click', () => {
    // Add game logic here
    alert('Game started!');
  });