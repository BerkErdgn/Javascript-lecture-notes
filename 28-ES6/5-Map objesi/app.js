//!-----------------5-Map objesi----------------
//? Mpa ---> Key, value

const map1 = new Map();

//Değer koymak için et metodu kullanılır.
map1.set(1, "Berk")
map1.set(true, 5)
map1.set([1, 2, 3], { firstname: "Berk", lasrname: "Erdoğan" })



const map2 = new Map();

map2.set(34, "istanbul")
map2.set(35, "izmir")
map2.set(1, "Adana")
map2.set(6, "Ankara")

//GET bir değeri getirmek
console.log(map2.get(6)); //Ankara 

//size
let value = map2.size;
console.log(value);//4

//Delete
value = map2.delete(34);
console.log(value)//true (true demesi sildim demek )

console.log(map2.size)//3

//Has : Bir değerin olup olmadığına bakmak için

console.log(map2.has(35)); //true
console.log(map2.has(55)); //false


//Bir map üzerinde dönmek için;

for (const [key, value] of map2) {
    console.log(key, value);
}

//bu da olur ama burada sanki array list veriris hibi veriyor.
for (const value of map2) {
    console.log(value);
}


const keys = map2.keys();
console.log(keys);//34,35,1,6


const values = map2.values();
console.log(values);//istanbul,izmir,adana,ankara


//todo:  Maptan Arraya çevirmek için;

const array = Array.from(map2);
console.log(array);


