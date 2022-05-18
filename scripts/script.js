// JavaScript Document
var maguireButton = document.querySelector("#maguire");
var garfieldButton = document.querySelector("#garfield");
var hollandButton = document.querySelector("#holland");

maguireButton.addEventListener("click", openMaguireVerse);
garfieldButton.addEventListener("click", openGarfieldVerse);
hollandButton.addEventListener("click", openHollandVerse);

function openMaguireVerse() {
    document.body.dataset.verse = "maguire";
}

function openGarfieldVerse() {
    document.body.dataset.verse = "garfield";
}

function openHollandVerse() {
    document.body.dataset.verse = "holland";
}