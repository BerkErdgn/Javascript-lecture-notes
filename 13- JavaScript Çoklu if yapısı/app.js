/*


if (koşul) {
    kod
}
if (condition) {
    kod
}
if (condition) {
    kod
}

Burada bütün if lere girere ve koşulu sağlar ise kodu uygular. Yani bir if çalışsa bile diğerlerine girere ve eğer orayıda uyarsa çalıştırı.

*/


// Aşağıda kontrol 1 ve konrtrol2 aynı cıktıyı veriri.
let isim2 = "";
let tckn = "";


function kontrol1(isim2, tckn) {
    if (isim2 != "") {
        if (tckn.length == 11) {
            console.log("isim ve tckn pproblemsiz girildi");
        } else {
            console.log("Lütfen tc nizi 11 karakter olarakgiriniz");
        }
    } else {
        console.log("Litfen isim alanına boş brakmayınız!!");
    }
}

function kontrol2(isim2, tckn) {
    if (isim2 == "") {
        console.log("isim ve tckn pproblemsiz girildi");
        return;
    }
    if (tckn.length != 11) {
        console.log("Lütfen tcnizi 11 karakter olarak giriniz");
        return;
    }
    console.log("isim ve tckn pproblemsiz girildi");
}




