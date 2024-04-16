//! -------------------------Asenkron antığı------------------------
/*
* 1- javascript senkron calışan bir programlama dildir.
* 2-Javascript bağzı durumlarda sadece asenkron çalışır bunlar;
    Timin işlemlerinde [mesela setTimeoutlar]
    Event(olaylar) [mesela klavyede bir tuşa basıldığında gibi]
    Http isteklerinde [mesela servis isteklerinde]

* Bizler bu duurmları yönetmek için CallBack - Promise - Async & Await yapılarını kullanrak Asenkron yapıları senkron yapılara çeviriyoruz.
*/


console.log("Berk");
setTimeout(() => {
    console.log("1000 ms süre doldu ve çalıştı");
}, 1000);

setTimeout(() => {
    console.log("500 ms de bekledi ve çalıştı");
}, 500);

console.log("Erdoğan");














