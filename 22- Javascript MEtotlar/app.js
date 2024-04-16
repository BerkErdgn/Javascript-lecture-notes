
//!--------------------------- METOTOLAR (METHODS)------------------------

//?  Parametre ve geriye değer döndrümeyen metot tanımı;


/*
 
 function metotAdı(){
  Kod
 }
  
 */

yazdir();


function yazdir() {
    console.log("Berk");
}


//?  Parametreli metot tanımı;

yazdir2("Berk", "Erdoğan");
yazdir2("Ali", "Kırca");

function yazdir2(isim, soyisim) {
    console.log(isim + " " + soyisim);
}


//?   geriye değer döndüren metot tanımı;

let doneneDeger = cube(3);
console.log(doneneDeger);


function cube(sayi) {
    let sonuc = sayi * sayi * sayi;
    return sonuc;
    console.log("Return den sonra yazılan kod çalışmaz.")
}






