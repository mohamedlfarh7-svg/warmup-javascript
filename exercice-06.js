const panier = [
 { nom: "Souris", prix: 150, quantite: 2 },
 { nom: "Casque", prix: 400, quantite: 1 },
 { nom: "Tapis", prix: 60, quantite: 3 },
 { nom: "Webcam", prix: 520, quantite: 1 }
];


const Noms = panier.map(n=>n.nom)
const Totaux = panier.map(n => ({
  nom: n.nom,
  total: n.prix * n.quantite
}));

const prix = panier.filter(n=>n.prix>100).map(n=>n.nom)

const  totalPanier = panier.reduce((acc,cur)=>acc+cur.prix*cur.quantite,0)


const  nombreArticles = panier.reduce((acc,cur)=>acc+cur.quantite,0)

console.log("Noms :", Noms);
console.log("Totaux lignes :", Totaux);
console.log("Prix > 100 :", prix);
console.log("Total panier :", totalPanier, "DH");
console.log("Nombre d'articles :", nombreArticles);