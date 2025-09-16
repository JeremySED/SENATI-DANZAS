const danzas = [
  {
    nombre:"Huayno",
    puntos:["Danza tradicional de los Andes.","Expresión de alegría y trabajo comunitario.","Acompañada de quenas y charangos."],
    img:"sierra/huayno.jpg"
  },
  {
    nombre:"Carnaval Ayacuchano",
    puntos:["Celebración colorida y festiva.","Trajes con bordados andinos.","Se baila en las fiestas de carnavales."],
    img:"sierra/carnaval-ayacuchano.jpg"
  },
  {
    nombre:"Diablada Puneña",
    puntos:["Ritual religioso y festivo.","Máscaras espectaculares.","Originaria del altiplano puneño."],
    img:"sierra/diablada-puneña.jpg"
  },
  {
    nombre:"Saya Andina",
    puntos:["Ritmo afroandino con energía.","Baile colectivo y alegre.","Usa vestimentas coloridas."],
    img:"sierra/saya-andina.jpg"
  },
  {
    nombre:"Waylas Huancaínas",
    puntos:["Propia de Huancayo.","Rápidos zapateos y giros.","Muestra vitalidad serrana."],
    img:"sierra/waylas-huancainas.jpg"
  },
  {
    nombre:"Tinku",
    puntos:["Danza guerrera de confraternidad.","Proviene del altiplano boliviano-peruano.","Representa encuentros rituales."],
    img:"sierra/tinku.jpg"
  },
  {
    nombre:"Danza de las Tijeras",
    puntos:["Patrimonio Cultural de la Humanidad.","Increíbles acrobacias y resistencia.","Instrumento metálico: tijeras sonoras."],
    img:"sierra/danza-de-las-tijeras.jpg"
  },
  {
    nombre:"Carnaval Cajamarquino",
    puntos:["Fiesta más alegre de Cajamarca.","Uso de disfraces y pintura.","Ritmo contagioso y zapateo."],
    img:"sierra/carnaval-cajamarquino.jpg"
  },
  {
    nombre:"Qhapaq Negro",
    puntos:["Danza cusqueña tradicional.","Expresa devoción y fuerza.","Vestimenta negra y máscaras trabajadas."],
    img:"sierra/qhapaq-negro.jpg"
  },
  {
    nombre:"Qhapaq Chunchu",
    puntos:["Danza cusqueña de guerreros selváticos.","Parte del Corpus Christi en Cusco.","Trajes coloridos y dinámicos."],
    img:"sierra/qhapaq-chunchu.jpg"
  }
];

const slider = document.querySelector('.slider-container');
const imgs = slider.querySelectorAll('img');
const caption = slider.querySelector('.caption');
const titleEl = caption.querySelector('h2');
const pointsEl = caption.querySelector('.points');

let idx = 0;
let pointIdx = 0;
const slideTime = 7000;  // 7 segundos por danza
const pointTime = 2500;  // 2.5 segundos por punto curioso

function showSlide(i){
  imgs.forEach((img,j)=>{
    img.classList.toggle('active', j===i);
  });
  caption.classList.add('active');
  titleEl.textContent = danzas[i].nombre;
  pointIdx = 0;
  pointsEl.innerHTML = `<li>${danzas[i].puntos[pointIdx]}</li>`;
}

function nextSlide(){
  idx = (idx+1)%danzas.length;
  showSlide(idx);
}

function rotatePoints(){
  const danza = danzas[idx];
  pointIdx = (pointIdx+1)%danza.puntos.length;
  pointsEl.innerHTML = `<li>${danza.puntos[pointIdx]}</li>`;
}

showSlide(idx);
setInterval(nextSlide, slideTime);
setInterval(rotatePoints, pointTime);
