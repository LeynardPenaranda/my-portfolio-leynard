const container = document.getElementById('particle-container');
const numParticles = 50;

for (let i = 0; i < numParticles; i++) {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  container.appendChild(particle);

  animateParticle(particle);
}

function animateParticle(particle) {
  const duration = 5000 + Math.random() * 5000;
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;

  particle.style.transition = `transform ${duration}ms linear`;
  particle.style.transform = `translate(${x}px, ${y}px)`;

  setTimeout(() => animateParticle(particle), duration);
}

function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'

}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

function fixbg(element){
    var backGround = document.querySelectorAll(".nav1");
    
    backGround.forEach(function(items){
      items.classList.remove("navbackground-color");
    });

    element.classList.add("navbackground-color");
}

function removebg() {
  var items = document.querySelectorAll(".nav1");
  items.forEach(function(removebg){
    removebg.classList.remove("navbackground-color");
  });
}
