/*
!--------------Döngüler------------------
?:   1-For
?:   2-While
?:   3-Do-While
?:   4-forEach
*/


/*

!--------------For------------------
for(değişken ; koşul ; arttırma-azalma){
    Kodlar
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

*/

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//1,2,3,4,5,6,7,8,9,10

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log("Tek sayı");
    } else {
        console.log("Çift sayı");
    }

}


/*
!--------------While------------------
while (Koşul) {
    kod

    sayacın değerini atarız
}

*/

let sayac = 1;

while (sayac <= 10) {
    console.log(sayac);
    sayac++;
}
//1,2,3,4,5,6,7,8,9,10

while (true) {
    console.log(sayac);
    if (sayac == 7) {
        break;
    }
    sayac++;
}

/*
!-------------- do- While------------------
önce yapar sonra koşula bakar eğer tutarsa tekrar yapar tutmaz ise yapmaz.
do{
kod
}while(Koşul);

*/

let sayac2 = 1;

do {
    console.log(sayac2);
    sayac2++;
} while (sayac2 <= 10);

