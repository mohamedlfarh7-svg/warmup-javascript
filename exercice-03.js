
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Decollage !");

let somme=0
for(let i=1;i<=100;i++){
somme+=i;
}
console.log("Somme de 1 a 100 :", somme);

let pairs = "";

for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        pairs += i + " ";
    }
}

console.log("Nombres pairs :", pairs);