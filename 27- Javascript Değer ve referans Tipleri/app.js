//! ------- Değer ve referans Tipleri-------------

/*
 ?      Değer tipli dediğimiz ilkel (primitive) tipli oluyor 
 todo:      [Primitive tiplar -> String, Number, Boolean, Null, Symbol, Undefined].
 ?      Referans tipler daha gelişmiş tipler diyebilriz. 
 todo:      [Referans tipler -> Array ,Object, Function]
 */


let a = 5;
let b = a;


console.log("a :" + a);// a: 5
console.log("b :" + b);// b: 5

b = 10;
console.log("a :" + a);// a: 5
console.log("b :" + b);// b: 10


let dizi1 = [1, 2, 3];
console.log(typeof dizi1) //object
let dizi2 = dizi1;
console.log(dizi1);
console.log(dizi2);

if (dizi1 == dizi2) {
    console.log("Eşittir")
} else {
    console.log("Eşitdeğildir.")
} //Eşittir 

let dizi3 = [1, 2, 3];

if (dizi1 == dizi3) {
    console.log("Eşittir")
} else {
    console.log("Eşitdeğildir.")
} //Eşitdeğildir 

let dizi4 = [1, 2, 3];
let dizi5 = dizi1;

dizi5.push(12);
console.log(dizi4); //[1, 2, 3,12]
console.log(dizi5);//[1, 2, 3,12]


