// 🔹 Pytamy użytkownika o dane
const produkt = prompt("Podaj nazwę produktu:");
const cena = Number(prompt("Podaj cenę produktu:"));
const ilosc = Number(prompt("Podaj ilość sztuk:"));

// 🔹 Obliczamy wartość
const wartoscCalkowita = cena * ilosc;

// 🔹 Wyświetlamy wynik
alert("Produkt: " + produkt + "\nŁączna wartość: " + wartoscCalkowita + " zł");

// 🔹 Zapytaj, czy dodać rabat
const rabat = confirm("Czy chcesz zastosować rabat 15%?");

if (rabat) {
  const nowaCena = wartoscCalkowita * 0.85;
  alert("Cena po rabacie: " + nowaCena + " zł 💸");
} else {
  alert("Bez rabatu: " + wartoscCalkowita + " zł");
}

console.log("Wartość końcowa:", rabat ? wartoscCalkowita * 0.85 : wartoscCalkowita);