const frases = [
  "estudante de Ciência da Computação",
  "programador",
  "apaixonado por resolver problemas"
];

let i = 0;      
let j = 0;      
let apagando = false;
let speed = 75;

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