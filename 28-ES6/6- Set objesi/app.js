//! ---------6-Set------------------------------
//map'e benzerler, tek farkı sete koyduun değer bir defa konur. Map ile aynı komutalrı kullanır.

const set = new Set();

//add metotu
set.add(true);
set.add(3.14);
set.add("Berk");
//"Berk" değerini 1 defa var oldğu için diğer berk değerleri yazılmaz.
set.add("Berk");
set.add("Berk");
set.add(7);
set.add({ username: "berk", password: "1" });
set.add([1, 2, 3, 4]);


//size uzunluk için
console.log(set.size);//6

set.delete("Enes");
console.log(set.size);//5

//has: değer var mı yokmu ona bakar.
console.log(set.has("Berk"));//true

for (const value of set) {
    console.log(value)//Bütün derğeler sıra ile yazdırılır.
}

//Arraya çevirmek için

const values = Array.from(set);
console.log(values);


//Bir Arrayi sete cevirmek için

let array = [1, "Berk", true, 15]
const newset = new Set(array);








