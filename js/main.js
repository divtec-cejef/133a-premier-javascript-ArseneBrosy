/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Arsène Brosy
 * @version 0.0.1
 * @since   2023-08-29
 */

"use strict";

// Récuperer tout les paragraphes du document
let paraphs = document.querySelectorAll("p");
let btnAjouter = document.querySelector(".ajouter");

// Affiche le contenu des variables dans la console
console.log(paraphs, btnAjouter);

btnAjouter.addEventListener("click", () => {
  console.log("Ajouter");
});