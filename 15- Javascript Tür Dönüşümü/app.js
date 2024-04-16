/*
!--------------TÜR DÖNÜŞÜMÜ------------------
?:    string, numbers, booleans, undefined, and null, 
?:    object, function
*/

let a = 5;
let b = "10";

console.log(a + b); //510

//?:   String to Number.-----Number("10")---parseInt("12")------parseFloat("12.5")---------------

let c = Number(b);
//şimdi c number oldu.
console.log(a + c); //15 

let d = Number("10");
console.log(typeof c); //Number

let e = 8;
let f = parseInt("12");
console.log(e + f) // 20

let h = parseFloat("12.5");


//?:   Number to String.-----String(x)---String(5)-------(55).toString()--------------

let x = 55;
console.log(typeof x); //number

let y = String(x);
console.log(typeof y); // String

let t = (55).toString();

//?:   Boolean to  String .-----String(true)-----------------

let sonuc = String(true);
console.log(typeof sonuc); // String 

//?:   Objext to  String .-----String(rakamlar-----------------
let rakamlar = [1, 2, 3, 4];
console.log(typeof rakamlar); //object

console.log(String(rakamlar)); // 1,2,3,4
