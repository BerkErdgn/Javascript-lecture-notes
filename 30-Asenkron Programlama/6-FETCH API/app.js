//!------------------FETCH APİ-------------------------

//callback ->> promise
//ajax(xmlhttprequest) ->> fetch api


function getStudents(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })

}
getStudents("students.json");


function getData(url) {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
        })
}

getData("https://jsonplaceholder.typicode.com/users");



//!-----------POST İSTEĞİ İÇİN----------------
function saveStudents() {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            //Gönderilen data buraya yazılır.
            {
                "id": 4,
                "firstname": "Ayşe",
                "lastname": "Aydın"
            }
        )
    })
}




