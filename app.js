'use strict'

// Les différentes Punchlines
let punchlines = [
"Lorsque Chuck Norris fait l'amour à sa femme, la voisine jouit aussi.",
"Wall Street n'est que la 3ème bourse au monde, il y a d'abord les deux de Chuck Norris.",
"Chuck Norris a gagné un tournoi de poker avec des cartes Pokémon. ",
"Chuck Norris connaît la dernière décimale de Pi, et celle d'après aussi.",
"Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
"Chuck Norris enfant n'envoyait pas de lettres au Père Noël. Il envoyait des ultimatums.",
"Quand Chuck Norris s’est mis au judo, David Douillet s’est mis aux pièces jaunes. ",
"Un jour, Chuck Norris a plongé dans la Mer Rouge. Moïse en a profité pour passer. ",
"Si Chuck Norris avait été dans « Lost », il aurait ramené l'île à la rame, jusqu'au Texas. ",
"Quand la tartine de Chuck Norris tombe, la confiture change de côté. ",
]

let changeText = document.querySelector("#text");

function changePunchline() {
    let i = getRandomInt(10);
    changeText.textContent = punchlines[i];   
  // console.log(changeText.textContent)
}

function changeColor() {
  let r = getRandomInt(256);
  let g = getRandomInt(256);
  let b = getRandomInt(256);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  changeText.style.color = `rgb(${r}, ${g}, ${b})`;
  button.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  para.style.color = `rgb(${r}, ${g}, ${b})`;
}

let para = document.querySelector("p");

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
//console.log(getRandomInt(256));
  
let button = document.querySelector("#btn");
// Affiche le bouton dans la console pour voir si bien récupéré
console.log(btn);

// Ajoute un écouteur d'événement au click qui vient exécuter
// à chaque fois changeMainTitle
button.addEventListener("click", changePunchline);
button.addEventListener("click", changeColor);