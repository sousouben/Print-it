const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Récupération du DOM
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const slider = document.querySelector("#banner");
const dotsContainer = slider.querySelector(".dots");
const bannerImg = slider.querySelector(".banner-img");
const tagLine = slider.querySelector("p");

/*test Ajout des Event Listeners sur les flèches 

arrow_left.addEventListener('click', function() {
	console.log('Flèche gauche cliquée')
});

arrow_right.addEventListener('click', function() {
	console.log('Flèche droite cliquée')
});

*/

// Création des éléments DOM pour les points
const dots = slides.map((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
  return dot;
});

// Image et texte du slider
let currentSlide = 0;

// Fonction de mise à jour de l'affichage du slider
function updateSlider() {
  dots.forEach((dot, index) =>
    dot.classList.toggle("dot_selected", index === currentSlide)
  );

  const slide = slides[currentSlide];
  bannerImg.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;
}

// Défilement infini sur le carrousel
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
}

// Au clic sur la flèche droite
arrow_right.addEventListener("click", nextSlide);

// Au clic sur la flèche gauche
arrow_left.addEventListener("click", prevSlide);

// Initialisation du slider
updateSlider();
