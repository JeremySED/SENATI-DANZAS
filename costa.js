// Datos de las danzas
const danzas = [
  {
    nombre: "Marinera Norteña",
    puntos: [
      "Danza elegante de cortejo con pañuelo.",
      "Patrimonio Cultural del Perú.",
      "Zapateo vigoroso y coquetería."
    ],
    img: "costa/marinera-nortena.jpg"
  },
  {
    nombre: "Marinera Limeña",
    puntos: [
      "Versión limeña más delicada.",
      "Acompañada de guitarra y cajón.",
      "Se baila en festivales de la capital."
    ],
    img: "costa/marinera-limena.jpg"
  },
  {
    nombre: "Festejo",
    puntos: [
      "Ritmo afroperuano alegre y enérgico.",
      "Destaca por zapateos fuertes.",
      "Celebración de la herencia africana."
    ],
    img: "costa/festejo.jpg"
  },
  {
    nombre: "Tondero",
    puntos: [
      "Originario del norte peruano.",
      "Combina guitarra criolla y cajón.",
      "Expresa melancolía y pasión."
    ],
    img: "costa/tondero.jpg"
  },
  {
    nombre: "Landó",
    puntos: [
      "Ritmo afroperuano lento y sensual.",
      "Resurge en los años 60 en Lima.",
      "Se canta y baila con sentimiento."
    ],
    img: "costa/lando.jpg"
  },
  {
    nombre: "Zamacueca",
    puntos: [
      "Antecesora de la marinera.",
      "Popular en el siglo XIX.",
      "Danza de cortejo tradicional."
    ],
    img: "costa/zamacueca.jpg"
  },
  {
    nombre: "Alcatraz",
    puntos: [
      "Bailarines intentan quemar el papel en la espalda.",
      "Juego y picardía característicos.",
      "Ritmo afroperuano festivo."
    ],
    img: "costa/alcatraz.jpg"
  },
  {
    nombre: "Son de los Diablos",
    puntos: [
      "Danza limeña de raíces afro.",
      "Usa máscaras y trajes vistosos.",
      "Revive en carnavales y festivales."
    ],
    img: "costa/son-de-los-diablos.jpg"
  },
  {
    nombre: "Vals Criollo",
    puntos: [
      "Símbolo musical de la costa peruana.",
      "Acompañado de guitarra y cajón.",
      "Evoca nostalgia y romanticismo."
    ],
    img: "costa/vals-criollo.jpg"
  },
  {
    nombre: "Lavanderas",
    puntos: [
      "Representa el trabajo tradicional femenino.",
      "Baile costumbrista de Lima.",
      "Coloridos atuendos y ritmo alegre."
    ],
    img: "costa/lavanderas.jpg"
  }
];

// Elementos del DOM
const sliderContainer = document.querySelector('.slider-container');
const images = sliderContainer.querySelectorAll('img');
const caption = sliderContainer.querySelector('.caption');
const titleEl = caption.querySelector('h2');
const pointsEl = caption.querySelector('.points');

let index = 0;
let pointIndex = 0;
let intervalTime = 7000; // 7 segundos por danza
let pointIntervalTime = 2500; // 2.5 segundos por punto curioso

// Función para actualizar la diapositiva
function showSlide(idx) {
  images.forEach((img, i) => {
    img.classList.toggle('active', i === idx);
  });

  const danza = danzas[idx];
  titleEl.textContent = danza.nombre;

  // Reiniciar puntos
  pointIndex = 0;
  pointsEl.innerHTML = `<li>${danza.puntos[pointIndex]}</li>`;
}

// Cambiar puntos curiosos dentro de la misma danza
function rotatePoints() {
  const danza = danzas[index];
  pointIndex = (pointIndex + 1) % danza.puntos.length;
  pointsEl.innerHTML = `<li>${danza.puntos[pointIndex]}</li>`;
}

// Rotar diapositivas
function nextSlide() {
  index = (index + 1) % danzas.length;
  showSlide(index);
}

// Iniciar slider
showSlide(index);
setInterval(nextSlide, intervalTime);
setInterval(rotatePoints, pointIntervalTime);
