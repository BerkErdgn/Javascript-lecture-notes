//! -------STRİNG SINIFININ METOTLARI---------------

//?  charAt() :index numarasına göre karakteri döner
//?  charAt() : Birşetirme metotudur, ikitane stringi birleştirir. Birden falza stringi bitleştirebilrisin.
//?  indexof() : Verdiğin stringin indexini alırsın.
//?  lastindexof() : Verdiğin stringin sondan indexini alırsın.
//?  toUpperCase() : Kelimlerin hepsini büyük harfe çevirir.
//?  toLowerCase() : Kelimelerin hepsini küçük harfe döner.
//?  trim() :Bu metot sayesinde seçtiğin karakteri yok eder ve temizler. Genelde boşluk için kullanılır
//?  slice() : Belli bir kısmını cekmek için
//?  substring() : Belli bir kısmını cekmek için
//?  replace() :  İştediğin kelimenin yerine başka bir kelime yazar.
//?  split() : Belilrlediğin ayrıcıya göre ayırıp sana veriri.
//?  valueOf() : Objeyi primitive hale döndürür.
//?  startsWith() : Bir değer veriyorsun, Stringin o değer ile başlayıp başlamadığının True yada False olarak söylüyor. Harf de kelime de verilebiliyor.
//?  endsWith(); : Sonu şunlamı bitiyor demek. Harf de kelime de verilebiliyor.

let kurs = "Modern web geliştirme kursu";
let tarih = "2022";

let index = kurs.charAt(5); //n

let birşleşri = kurs.concat("", tarih); //Modern web geliştirme kursu 2022

kurs.indexOf("o"); //1

let kurs1 = "                Kurslarr"
console.log(kurs1); //                Kurslarr
console.log(kurs1.trim()); //Kurslarr


console.log(kurs.slice(7, 10)); //web

console.log(kurs); //Modern web geliştirme kursu
console.log(kurs.replace("Modern", "Güncel")); //Güncel web geliştirme kursu

console.log(kurs);
console.log(kurs.split(" "));//["Modern" ,"web" ,"geliştirme", "kursu"]

console.log(kurs);//Modern web geliştirme kursu
console.log(kurs.valueOf());


console.log(kurs);//Modern web geliştirme kursu
console.log(kurs.startsWith("M"));// true


console.log(kurs);//Modern web geliştirme kursu
console.log(kurs.endsWith("M"));// false