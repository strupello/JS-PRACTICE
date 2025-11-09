const nazwa = "Komputer";
let marka = "Asus";
let cenaJednostkowa = 5000;
let ilosc = 2;
let wMagazynie = true;
let odleglosc = 1001;
let oddanie = false;

// Obliczenia
let wartoscCalkowita = cenaJednostkowa * ilosc;

// Logika
console.log("Produkt:", nazwa);
console.log("Marka:", marka);
console.log("Cena jednostkowa:", cenaJednostkowa);
console.log("Ilość:", ilosc);
console.log("Wartość całkowita:", wartoscCalkowita, "zł");
console.log("Odległość:", odleglosc)

// Warunek
if (wMagazynie === true) {
  console.log("✅ Produkt jest dostępny w magazynie.");
} else {
  console.log("❌ Produkt jest niedostępny.");
}

// Drugi warunek - np. rabat
if (wartoscCalkowita > 20000) {
  console.log("🎁 Otrzymujesz darmową dostawę!");
} else if (wartoscCalkowita > 10000) {
  console.log("💸 Dostawa -50%!");
} else {
  console.log("🚚 Standardowa dostawa płatna.");
}

if (odleglosc > 1000) {
  console.log(" Test odleglosci ");
} else {
  console.log(" Test odleglosci 11");
}
if (ilosc > 3) {
  console.log(" Dodatkowe dwie osoby do montażu");
} else {
  console.log(" Brak dodatkowych osób do pomocy");
}

if (oddanie === true) {
  console.log(" Dodatkowy rabat na chłodzenie!");
} else {
  console.log(" Brak dodatkowego rabatu!")
}
if (wMagazynie && ilosc > 3) {
  console.log("Zamówienie duże i dostępne — priorytet!");
} else {
  console.log("Mamy fajrant.");
}