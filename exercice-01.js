const prenom = "Amina";
const ville = "Casablanca";
let age = 22;
let estEnFormation = true;

let statut;
if (age >= 18) {
    statut = "majeur";
} else {
    statut = "mineur";
}
console.log(`${prenom}, ${age} ans, habite à ${ville}`);
console.log(`Statut : ${statut}`);
console.log(`Formation en cours : ${estEnFormation}`);

console.log(`prenom -> ${typeof prenom}`);
console.log(`age -> ${typeof age}`);
console.log(`estEnFormation -> ${typeof estEnFormation}`);