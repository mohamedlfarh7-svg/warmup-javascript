const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre");

const position = courses.indexOf("lait");

if (position !== -1) {
    courses.splice(position, 1);
}

console.log("Nombre d'articles :", courses.length);

for (let i = 0; i < courses.length; i++) {
    console.log((i + 1) + ". " + courses[i]);
}
if (courses.includes("cafe")) {
    console.log("Le cafe est bien dans la liste.");
} else {
    console.log("Le cafe n'est pas dans la liste.");
}