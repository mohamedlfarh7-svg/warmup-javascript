const ventes = [
    { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
    { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
    { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
    { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
    { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
    { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];


function calculerCATotal(ventes) {
    return ventes.reduce((total, vente) => total + vente.montant, 0);
}

function trouverMeilleureVente(ventes) {
    return ventes.reduce((meilleure, vente) => {
        return vente.montant > meilleure.montant ? vente : meilleure;
    });
}


function calculerCAParVendeur(ventes) {
    return ventes.reduce((ca, vente) => {
        if (!ca[vente.vendeur]) {
            ca[vente.vendeur] = 0;
        }

        ca[vente.vendeur] += vente.montant;

        return ca;
    }, {});
}

function calculerMoyenneParVendeur(caParVendeur) {
    const montants = Object.values(caParVendeur);

    return montants.reduce((total, montant) => total + montant, 0) 
           / montants.length;
}

function vendeursAuDessusMoyenne(caParVendeur, moyenne) {
    return Object.entries(caParVendeur)
        .filter(([vendeur, ca]) => ca > moyenne)
        .map(([vendeur]) => vendeur);
}

function genererRapport(ventes) {

    const caTotal = calculerCATotal(ventes);

    const meilleureVente = trouverMeilleureVente(ventes);

    const caParVendeur = calculerCAParVendeur(ventes);

    const moyenne = calculerMoyenneParVendeur(caParVendeur);

    const auDessusMoyenne = vendeursAuDessusMoyenne(
        caParVendeur,
        moyenne
    );

    let rapport = "=== RAPPORT DES VENTES ===\n";

    rapport += `Chiffre d'affaires total : ${caTotal} DH\n`;

    rapport += `Meilleure vente : ${meilleureVente.produit} `;
    rapport += `(${meilleureVente.vendeur}) - `;
    rapport += `${meilleureVente.montant} DH\n`;

    rapport += "CA par vendeur :\n";

    for (const vendeur in caParVendeur) {
        rapport += ` ${vendeur} : ${caParVendeur[vendeur]} DH\n`;
    }

    rapport += `Moyenne par vendeur : ${moyenne.toFixed(2)} DH\n`;

    rapport += `Au-dessus de la moyenne : ${auDessusMoyenne.join(", ")}`;

    return rapport;
}

console.log(genererRapport(ventes));