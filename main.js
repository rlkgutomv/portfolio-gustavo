const frases = [
  "estudante da Ciência da Computação  ",
  "programador  ",
  "apaixonado por resolver problemas  ",
  "futuro desenvolvedor Full Stack  "
];

let i = 0;      
let j = 0;      
let apagando = false;
let speed = 90;

function digitar() {
  let texto = frases[i];
  let span = document.getElementById("texto");

  if (!apagando) {
    span.textContent = texto.substring(0, j++);
    if (j >= texto.length) {
      apagando = true;
      setTimeout(digitar, 1000); 
      return;
    }
  } else {
    span.textContent = texto.substring(0, j--);
    if (j < 0) {
      apagando = false;
      i = (i + 1) % frases.length;
    }
  }

  setTimeout(digitar, speed);
}

digitar();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}