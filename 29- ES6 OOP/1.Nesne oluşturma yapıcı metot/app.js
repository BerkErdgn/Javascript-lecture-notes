//! ---------OOP GİRİS-------------------------


class Insan {//* sınıf demek

    /*
    ? Bir sınıfın içinde ne olabilir ?
    1-Özellikler 
    2-yapıcı metot
    3-Function
    */

    constructor(isim, soyisim, yas, maas) {//* yapıcı metot demek.
        //özellik dediğimiz kısım burasi
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
        this.maas = maas;
    }


    bilgileriGoster() {
        console.log(`isim : ${this.isim} soyisim: ${this.soyisim} yas : ${yas} maas: ${this.maas}`);
    }

}

//* nesene oluşturmak için,
const insan1 = new Insan("Berk", "Erdoğan", 25, 10000);
insan1.bilgileriGoster;
console.log(insan1.isim);//Berk
const insan2 = new Insan("Betül", "Cınar", 24, 7500);
insan2.bilgileriGoster;





