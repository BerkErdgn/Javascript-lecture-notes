//! var - let - const

//todo   var/let/const degistenIsmi = degiskenDegeri;

let sayi = 10;


// var : Functin scope (ram bellekte cok fazla yer kaplar.) 

var a = 5;
var a = 10;
//ama let/const da bunu yapamazsın.
//let/const : block  scpoe özelliğine sahiptir 
//let/const  asarındaki fark: const değişmez sabittir. Ama let değişebilir.
let b = 5;
b = 7;
b = 12;

const user = {
    username: "Ahmet",
    passowrd: "123",
}

user.username = "Berk";

console.log(user);




//!--------Scope (Kapsam)------
/*
    --------Scope (Kapsam)------
    -> Global Scope : Heryerde ulaşılabilen. Hiçbir kıvırcık parantez olmadan yazılan
    -> Function Scope : Fonsiyonda tanımladığın değişken. Fonksiyon kıvırcığı içinde tanımlanan. Fonksuyon dışında erişilemez.
    -> Block Scope : Fonsiyonun içindeki mesela if için . Yani iç içe iki yada daha fazla kıvırcık paragraf olursa ve en içteki için tanımlarsan bu olay gelir.

*/


// var degişkenIsmi = 10;
// console.log(degişkenIsmi);

// var a = 5;

if (true) {
    console.log(a);
} else {

}

var a = 5 //Global scope

function method1() {
    var b = 6 //function scope

    if (true) {
        let c = 7 //Block scope
    }
    while (true) {
        let c = 7 //Block scope
    }
    for (let i = 10; i <= 10; i++) {
        let c = 7 //Block scope
    }

}

method1();



