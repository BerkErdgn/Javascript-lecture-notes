//!  ------------Math sınıfı Metotları
/*
? 1-Floor // Noktadan sonraki kısmı siler ve aşağı kısma yuvarlar.
? 2-Ceil // Noktadan sonraki kısmı siler ve üst kısma yuvarlar.
? 3-Round // en yakın tam değere döner.

? 4-Max // Bir dizi veririsin ve buradan en büyük değer döner.
? 5-Min // Bir dizi veririsin ve buradan en küçük değer döner.

? 6-Random // rastgele bir sayı döner.
? 7-Abs // Mutlak değer almak için kullanılır. |-12| = 12
? 8-Sqrt // Karekökünü almak için kullanılır.
? 9-Pow // üssünü almka için kullanılır.

? 10-PI // pi sayısını veriri.

*/

let a = 3.15;

console.log(Math.floor(a));//3

console.log(Math.ceil(a));//4

console.log(Math.round(a));//3

console.log(Math.max([20, 30, 40, 55, 68, 88])); //88


console.log(Math.min([20, 30, 40, 55, 68, 88])); //20

console.log(Math.abs(-12))//12

console.log(Math.sqrt(9))//3


console.log(Math.pow(2, 3))//8

console.log(Math.PI())//3.1415
