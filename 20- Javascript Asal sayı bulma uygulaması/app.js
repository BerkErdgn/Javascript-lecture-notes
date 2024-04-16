let sayi = 15;
let sonuc = true;

for (let i = 2; i <= Math.floor(sayi / 2); i++) {
    if (sayi % i == 0) {
        //asal değildir.
        sonuc = false;
        break;
    }
}
if (sonuc) {
    console.log("asal");
} else {
    console.log("asal değil.");
}