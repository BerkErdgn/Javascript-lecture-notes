/*

! Veri Tipleri

1-String
2-Number
3-Boollean
4-Null
5-Undefined
6-Object
7-function
 */



//todo : 1-String----------------------------
let isim = "Berk";
console.log(isim);
console.log(typeof isim);

//todo : 2-Number----------------------------
let sayi1 = 10;
console.log(sayi1);
console.log(typeof sayi1);

let sayi2 = 10.5;
console.log(sayi1 + sayi2);
console.log(sayi1);
console.log(typeof sayi1);

//todo : 3-Boollean : true false----------------------

console.log(5 > 2);
let a = 3;
let b = 12;
let sonuc = a + b;
console.log(sonuc > 15);


//todo : 4-Null-------------------------------
let d = null; //boş
d = 27
console.log(d);

//todo : 5-Undefined-------------------------------

let e;
console.log(typeof e);

//todo : 6-Object-------------------------------
//object kıvırcık parantez ile atanır.
let insan = {
    isim: "Berk",
    sayisim: "Erdoğan",
    yas: 26,
}

console.log(insan);
console.log(typeof insan);

//dizi tanımlamak için []kullanılır
let rakamlar = [1, 2, 3, 4, 5];
console.log(rakamlar);

//todo : 7-function-------------------------------

let func = function () {
    console.log("merhaba");
}

func();
console.log(typeof func);


