//!-----------------4-For in - For of döngüleri----------------

let names = ["Berk", "Ali", "Yusuf", "Enes"];


//Eski yöntem
names.forEach(function (name) {
    console.log(name);
})

//yukarıdakinin aynısı
names.forEach((name) => {
    console.log(name);
})



//! Yeni yöntem
//todo:----- For in---- (Listedeki değerin indexini verir. Buradaki "in" index demek gibi düşün.)
for (const name in names) {
    console.log(name);// 0,1,2,3,4
}

//todo:----- For of---- (Listedeki değerini verir.)

for (const name of names) {
    console.log(name);// Berk Ali Yusuf Enes 
}


