for (let i = -2; i <= 3; i++) {
    console.log("Numer iteracji:", i);
}


let liczba = -8;

while (liczba <= 7) {
    console.log("Liczba to:", liczba);
    liczba++;
}

const plytycds = ["ERO", "JWP", "KOSI", "ŁAJZOL", "SIWERS", "DJ DESZCZU STRUGI"];

for (const plytycd of plytycds) {
    console.log("Płyty cd:", plytycd);
}

const products = [
    { nazwa: "Laptop", cena: 5000 },
    { nazwa: "Myszka", cena: 200 },
    { nazwa: "Monitor", cena: 1500 },
];

for (const product of products) {
    console.log("Produkt:", product.nazwa, "-", product.cena, "zł");

    if (product.cena > 3000) {
        console.log("💸 product premium!");
    } else {
        console.log("👌 Standardowy product.");
    }

    console.log("---------------");
}



const produkty = [
    { nazwa: "Komputer", cena: 5000 },
    { nazwa: "Monitor", cena: 1000 },
    { nazwa: "Mysz", cena: 250 },
    { nazwa: "Klawiatura", cena: 400 },
];
let suma = 0;

for (const produkt of produkty) {
    console.log("Produkt:", produkt.nazwa);
    console.log("Cena:", produkt.cena, "zł");

    if (produkt.cena > 3000) {
        console.log("Sprzęt drogi");
    } else if (produkt.cena >= 1000 && produkt.cena <= 3000) {
        console.log("Sprzęt średni");
    } else {
        console.log("Sprzęt tani");
    }
    console.log("---------------");

    suma += produkt.cena;
}
console.log("Łączna wartość wszystkich produktów:", suma, "zł");
