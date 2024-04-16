//!--------------Promise-----------------

//* Callbackler yarine promiseleri kullanılır. Promise sayesinde callback hall den kurtuluruz.

//*1 - Birinci yol;
// let check = false;

// const promise1 = new Promise((resolve, reject) => {
//     if (check) {
//         resolve("Promise Başarılı");
//     } else {
//         reject("Promise başarısız..");
//     }
// });

// console.log(promise1);


//*2 - İkinci yol Bu daha iyi;

//*buna Asenkron yapıları senkrona çevirmek için kullanılıyor.
//*callbaack lerin alternatifi iççin kullanılır.

let check = true;
function createPromise() {
    return new Promise((resolve, reject) => {
        if (check) {
            resolve("Promise te herhangi bir sıkıntı yok");
        } else {
            reject("Sıkıntı büyük");
        }
    })
}

createPromise()
    .then((response) => {
        console.log(response);
    })
    .catch((response) => {
        console.log(response);
    })
    .finally(() => {
        console.log("Her zaman çalışır.")
    })


