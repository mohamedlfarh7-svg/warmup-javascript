
const titre = " Mon Premier Projet MERN ";
const phrase = "Le JavaScript est la base du stack MERN";
const nomComplet = "amina el idrissi";

function genererSlug(titre) {
    return titre
        .trim()
        .toLowerCase()
        .split(" ")
        .filter(mot => mot !== "")
        .join("-");
}

function compterMots(phrase) {
    return phrase
        .trim()
        .split(" ")
        .filter(mot => mot !== "")
        .length;
}

function initiales(nomComplet) {
    return nomComplet
        .trim()
        .split(" ")
        .filter(mot => mot !== "")
        .map(mot => mot[0].toUpperCase())
        .join(".") + ".";
}


console.log(genererSlug(titre));
console.log(compterMots(phrase));
console.log(initiales(nomComplet));
console.log(genererSlug(" Sprint   1  "));