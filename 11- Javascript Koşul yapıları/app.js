//! 11- Javascript Koşul yapıları----------------------


/*

if(koşul){
    kodlar
}else{
    kodlar
}

*/

// let not = 65;

// if (not > 50) {
//     console.log("Geçtiniz , Notunuz : " + not);
// } else {
//     console.log("Kaldınız, Notunuz : " + not);
// }


//------DERS ORTALAMASI BULMAK---------------

//vize1 %30 vize2 %30 final %40

let vize1 = Number(prompt("Vize 1 notunuzu giriniz :"));
let vize2 = Number(prompt("Vize 2 notunuzu giriniz :"));
let final = Number(prompt("final notunuzu giriniz :"));

let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.6;

if (ortalama > 60) {
    alert("Tebrikler dersten geçtiniz.");
} else {
    alert("KAldınız");
}


