const danzas = [
  {
    nombre:"Pandilla Amazónica",
    puntos:["Danza alegre y festiva de la Amazonía.","Representa la celebración en comunidad.","Se baila en carnavales selváticos."],
    img:"selva/pandilla-amazonica.jpg"
  },
  {nombre:"Anaconda",puntos:["Inspirada en la serpiente mítica.","Expresa fuerza y destreza.","Utiliza movimientos ondulantes."],img:"selva/anaconda.jpg"},
  {nombre:"Danzantes de Tipunaves",puntos:["Baile tradicional shipibo.","Honra a los ancestros.","Coloridos atuendos amazónicos."],img:"selva/danzantes-de-tipunaves.jpg"},
  {nombre:"Ayahuasca",puntos:["Danza ritual espiritual.","Basada en ceremonias amazónicas.","Evoca la conexión con la naturaleza."],img:"selva/ayahuasca.jpg"},
  {nombre:"Changanacuy",puntos:["Baile divertido y pícaro.","Usado en festividades locales.","Representa la alegría selvática."],img:"selva/changanacuy.jpg"},
  {nombre:"Kurupira",puntos:["Danza basada en un espíritu del bosque.","Protege la selva y sus animales.","Trajes verdes y enérgicos."],img:"selva/kurupira.jpg"},
  {nombre:"Baile de la Culebra",puntos:["Imita el movimiento de una serpiente.","Se baila en filas ondulantes.","Simbólico de la selva amazónica."],img:"selva/baile-de-la-culebra.jpg"},
  {nombre:"Otorongo",puntos:["Representa al jaguar amazónico.","Fuerza y agilidad en el baile.","Se usa pintura corporal."],img:"selva/otorongo.jpg"},
  {nombre:"Danzantes del Bufeo",puntos:["Inspirada en el delfín rosado.","Baile acuático y ágil.","Tradición de las comunidades ribereñas."],img:"selva/danzantes-del-bufeo.jpg"},
  {nombre:"Shapish",puntos:["Danza guerrera de la selva alta.","Usa movimientos fuertes y saltos.","Honra el valor de los pueblos amazónicos."],img:"selva/shapish.jpg"}
];

const slider = document.querySelector('.slider-container');
const imgs = slider.querySelectorAll('img');
const caption = slider.querySelector('.caption');
const titleEl = caption.querySelector('h2');
const pointsEl = caption.querySelector('.points');

let idx=0;
let pointIdx=0;
const slideTime=7000;
const pointTime=2500;

function showSlide(i){
  imgs.forEach((img,j)=>img.classList.toggle('active',j===i));
  caption.classList.add('active');
  titleEl.textContent=danzas[i].nombre;
  pointIdx=0;
  pointsEl.innerHTML=`<li>${danzas[i].puntos[pointIdx]}</li>`;
}

function nextSlide(){
  idx=(idx+1)%danzas.length;
  showSlide(idx);
}

function rotatePoints(){
  const danza=danzas[idx];
  pointIdx=(pointIdx+1)%danza.puntos.length;
  pointsEl.innerHTML=`<li>${danza.puntos[pointIdx]}</li>`;
}

showSlide(idx);
setInterval(nextSlide,slideTime);
setInterval(rotatePoints,pointTime);
