//!-----------Örnek-------------


//? promise + xlmhttprequest

function readStudents(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange", () => {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            })
        } catch (error) {
            reject(error);
        }

        xhr.open("GET", url);
        xhr.send();
    })
}


readStudents("students.json")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err)
    })



function getUsers(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url);
        xhr.send();
    })
}

function getCommentsByUserId(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", () => {
            try {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                }
            } catch (error) {
                reject(error);
            }
        })
        xhr.open("GET", url);
        xhr.send();
    })
}

getUsers("https://jsonplaceholder.typicode.com/users/3")
    .then((data) => {
        console.log(data);
        return getCommentsByUserId(`https://jsonplaceholder.typicode.com/comments/${data.id}`)

    })
    .then((res) => {
        console.log(res)
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        //MAil atma kodlarını yazarsınız.
    })



//*örnek3

const p1 = Promise.resolve("Birinci promis başarılı");
const p2 = Promise.resolve("İkinci promis başarılı");
const p3 = new Promise((resolve, reject) => {
    resolve("üçüncü promis başarılı.")
})


Promise.all([p1, p2, p3])
    .then((res) => {
        console.log(res);

    })
    .catch((error) => {

    })

