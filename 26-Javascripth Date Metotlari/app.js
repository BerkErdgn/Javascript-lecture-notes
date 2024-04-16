//!  ------------Date sınıfı Metotları---------------


let tarih = new Date(); //Şuanın tarihini almak için

let tarih2 = new Date(1999, 8, 7, 10, 40, 50); //Belirli bir zamanın tarihini oluşturmak için

console.log(tarih); // Sat Oct 22 2022 12:36:06  Bu bir obkject olarak böyle döner
console.log(tarih.toString()); // Sat Oct 22 2022 12:36:06  Stringe çeviri.

console.log(tarih.getHours()); //1666642315512
console.log(tarih.getDate()); //22 (Ayın kaçıncı gününü veriri.)
console.log(tarih.getFullYear()); //2022
console.log(tarih.getDay()); //6  (Haftanın gününü alır. Yani 7 günden kaçıncıdasın )
console.log(tarih.getHours()); //12
console.log(tarih.getMonth() + 1); //10 (0 dan başladığı için + 1 yaparız.)


console.log(tarih.setDate(24)); //Dünü değiştirmek için kullanılır.
console.log(tarih.setHours(15)); //saati değiştirmek için kullanılır.


