//! ---------Static Anahtarı-------------------------

class Matemarik {

    static topla(a, b) {
        console.log(a + b);
    }

    cikar(a, b) {
        console.log(a - b);
    }

    carp(a, b) {
        console.log(a * b);
    }

    bolme(a, b) {
        console.log(a / b);
    }

}

const matematik = new Matemarik();

//? Hata verir çünkü `static` şeklinde yazılan şeyler nesne üzerinden erişilemez.
matematik.topla(5, 6);//Hata!!

//? Sınıf üzerinden erişilir.
Matemarik.topla(10, 20);//30

matematik.carp(5, 7);//35

//todo:  Bir function veya özellik static ise CLASS'a özgüdür. Ama değilse nesneye özgüdür.



class Insan {

    static languages = 10;

    constructor(firsName, lastName, salary) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firsName, this.lastName, this.salary, this.languages);
    }

}

const insan1 = new Insan("Berk", "Erdoğan", "1000");
insan1.writeInfo();//Hata veriri. çünkü languages static olarak tanımlanıdğı içim göremiyoruz. Çünkü nesne üzerinden staticler erişilemez.




