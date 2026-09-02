const inscription = {
    nom: "",
    email: "aminaexample.com",
    motDePasse: "123",
    age: 17
};

function validerInscription(donnees) {
    const erreurs = [];

    if (donnees.nom.length < 2) {
        erreurs.push("Le nom doit contenir au moins 2 caracteres.");
    }

    if (!donnees.email.includes("@") || !donnees.email.includes(".")) {
        erreurs.push("L'email n'est pas valide.");
    }

    if (donnees.motDePasse.length < 8) {
        erreurs.push("Le mot de passe doit contenir au moins 8 caracteres.");
    }

    if (typeof donnees.age !== "number" || donnees.age < 18) {
        erreurs.push("Vous devez avoir au moins 18 ans.");
    }

    return {
        valide: erreurs.length === 0,
        erreurs: erreurs
    };
}

console.log(validerInscription(inscription));