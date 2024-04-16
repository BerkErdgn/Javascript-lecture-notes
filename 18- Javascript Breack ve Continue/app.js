//! ----------------break - Continue--------------------------

//? mesela 1 den 10 a kadar sayıları yazdıralım ama 8 e geldiğinde döngüden cıkalım.(Break için bu;)


for (let sayac = 1; sayac <= 10; sayac++) {
    console.log(sayac);
    if (sayac == 8) {
        break;
    }
}//1,2,3,4,5,6,7,8

//todo: Break dilediğimiz zamandöngüden cıkmak için kullanılır.




//todo: Continue sadece bir defa döngüden cıkmak için kullanılır sonra devam eder döngüye. Kısacası Continue dan sornaki codlar çalışmaz diğer döngüye gecer.
//? mesela 1,2,3,4,5,6,7,9,10 yazdırmak için 8 yazdırmamak için.

for (let sayac = 1; sayac <= 10; sayac++) {
    if (sayac == 8) {
        continue;
    }
    console.log(sayac);
}//1,2,3,4,5,6,7,9,10

