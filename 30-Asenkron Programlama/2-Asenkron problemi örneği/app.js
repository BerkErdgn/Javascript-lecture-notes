//!--------Asenkron Problemi örenği----------------

//http istekleri

const users = [
    {
        userId: 5,
        post: "Berk Post 1"
    },
    {
        userId: 5,
        post: "Berk Post 2"
    },
    {
        userId: 5,
        post: "Berk Post 3"
    },
    {
        userId: 6,
        post: "Ali Post 1"
    },
    {
        userId: 7,
        post: "Enes Post 1"
    },


]

//user id
//post by id

function getUserId() {
    setTimeout(() => {
        //Servise gittik ve cevabı aldık
        return 5;
    }, 1000);
}

function getPostByUserId(userId) {
    //Gerçek bir rest api ya istek atıcaksınız.
    setTimeout(() => {
        users.forEach((user) => {
            if (user.userId == userId) {
                console.log(user.post);
            }
        })

    }, 500);

}


let userId = getUserId();
getPostByUserId(userId);

//todo:  Bu çevaplarda bir cıktı vermez çünkü asenkronu senkrona cevirmek lazım. callback- promise -async awaid

