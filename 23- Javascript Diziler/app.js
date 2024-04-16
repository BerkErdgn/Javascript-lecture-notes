//! ---------------------DİZİLER------------------ARRAY--------------


//todo:  Dizileri tanımlamak için. Boş tanımlamak için ->> let sayilar = [];
let isimler2 = new Array(); //todo: Böylede tanımlayabilirsin, yada aşağıdaki gibi de tanımlayabilirsin.
let sayilar = [0, 1, false, 3, 4, "Berk", 6, true, 8, 9.53];

console.log(sayilar[10]);
console.log(sayilar[5]);
console.log(sayilar[3]);


//todo:  10. index değeri değiştirmek için
sayilar[10] = "mehmet";
console.log(sayilar[10]);//mehmet


//todo:  en sonuncu indexi değiştirmek için;
sayilar[sayilar.length - 1] = "mehmet";
console.log(sayilar[10]);//mehmet

let isimler = ["berk", "ali", "ahmet", "ayşe"];

console.log(isimler);//["berk", "ali", "ahmet", "ayşe"]



let dizi1 = [];
let dizi4 = ["Berk", "Ali", "Ayşe"];
let dizi2 = new Array(); //Bu verimli değil
let dizi3 = new Array("Berk", "Ali", "Ayşe");//Bu verimli değil


dizi1[0] = "berk";
dizi2[0] = "ali";


//!---------------- foreach Döngüsü -----------------------
//? foreach Döngüsü: Dizilerde kullanılır.

let isimler3 = ["Berk", "Enes", "yakup", "Hilal"];

isimler3.forEach(function (isim) {
    console.log(isim);
});

/*
! ---------------------Dizi metoroları ------------------------------------------------------
* push   : diziin sonuna eleman ekler, ayrıca dizinin uzunluğunu döner.
* unshift : dizinin başına eleman ekler, eleman sayısının geri döner.

* pop : dizinin sonundan eleman siler , eleman sayısının geri döner.
* shift : dizinin başından eleman siler , eleman sayısının geri döner.

* splice(index,incdex) : Eleman  ekleme ve silmek için kullanılır.

* toString : diziyi stringe çevirebilrisiniz.
* join : diziyi stringe ceviriri. Farkı ise araya eleman ekleyebiliriz.

* concat : dizileri birleştimrk için kullanılır. 
* slice(dilimlemek) : diziyi istenilen yerden bölüp yeni bir dizi oluşturur.
* length : dizinin uzunluğunu veriri.
* reverse : dizinin elemanlarını terse çeviri.
* split(bölmek) : belirli bir ifadeye göre bölüp diziyi çevirmek.
* indexOf: elemanın index numarasını verir.
* includes : verilen elemanı içeriyor mu ona bakar.

 */

let arabalar = ["bmw", "toyota", "porshe"];

arabalar.push("Opel");







