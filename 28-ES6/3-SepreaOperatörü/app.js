//! --------3-SepreaOperatörü ... ----------

let numbers = [10, 20, 30, 40];

function add(a, b, c, d) {
    console.log(a + b + c + d)
}

//Eski Yöntem
add(numbers[0], numbers[1], numbers[2], numbers[3]); //100

//Yeni Yöntem (... sayesinde dizideki bütün karekteri al dilimle demek.[... kısacası bunu demek -> numbers[0], numbers[1], numbers[2], numbers[3] ])
add(...numbers); //100



const diller1 = ["java", "C#"]
const diller2 = ["C++", "Python"]

//Eski yöntem
diller2 = ["C++", "Python", diller1[0], diller1[1]]
console.log(diller2)

//Yeni Yöntem
diller2 = ["C++", "Python", ...diller1];
console.log(diller2);




const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let [a, b] = numbers2;

console.log(a, b);//1 2

let [c, d, kalanSayılar] = numbers2;
console.log(kalanSayılar);//[3, 4, 5, 6, 7, 8, 9]



