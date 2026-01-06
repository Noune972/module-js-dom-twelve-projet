/*
Nouvelles compétences:
- querySelector // Selectionne le premier element seulement mieux que getElementsBy
- HTMLElement.style 
*/

// 1. Je recupere le bouton "Accepter les cookies"
const but_elem = document.querySelector(".btn-accept");    // ButtonElement

// 2. Je recupere la banniere de cookies
const banner_elem = document.querySelector(".cookies");    // divElement

// 3. J'ecoute l'evenement "click" sur le bouton "Accepter les cookies"
document.addEventListener (".cookies-texte");