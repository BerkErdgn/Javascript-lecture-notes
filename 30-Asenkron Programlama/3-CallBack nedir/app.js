//! ---------------------CallBack Nedir ? (Eski yöntem) -----------------------



//callback - promise - async await

//Callback : Bir fonsiyonu bir fonksiyona parametre geçerek asenkron yapıyı senkron yapıya çeviririz.
function getName(callback) {
    setTimeout(() => {
        //Servisden ismimi getirdi.
        let name = "Berk"; //Web servisten geldi
        callback(name);
    }, 1000);
}


function getsurname(name) {
    //Servisden soyismimi getirdi.
    setTimeout(() => {
        let surname = "Erdoğan" //Web servisten geldi
        console.log(name, surname);
    }, 500);
}

getName(getsurname);//Berk Erdoğan

//bı sayede tek satır işlem ile önce getName sonra getSurname fonksiyonu çalışır.




//todo: 2. Yöntem; (Callback Hall)
//*Direk fonksiyonuda burada tanımlayabilrisin.
function getsurname2(name, callback) {
    //Servisden soyismimi getirdi.
    setTimeout(() => {
        let surname = "Erdoğan" //name'e göre soy ismi buldu
        callback(surname);
    }, 500);
}

getName((name) => {
    getsurname2(name, () => {
        console.log(name, surname); //Berk Erdoğan
    });
});







