/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Arsène Brosy
 * @version 0.0.1
 * @since   2023-08-29
 */

"use strict";

// Récuperer tout les paragraphes du document
let btnAjouter = document.querySelector(".ajouter");
let txtArticle = document.querySelector("#article");
let ulArticles = document.querySelector("ul.articles");

btnAjouter.addEventListener("click", () => {
  ulArticles.innerHTML += "<li>" + txtArticle.value + "</li>";
  txtArticle.value = "";
});