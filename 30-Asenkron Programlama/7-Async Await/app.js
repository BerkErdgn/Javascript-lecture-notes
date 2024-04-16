//!--------------ASYNC AWAİT (then zincirinden kurtaran yapı)---------------




/*Promise Then zinciri
then(){
    then().{
        then().{
            consol.log("Data")
        }
    }
}

*/


// async function hello() {
//     return "Hello World";
// }

// console.log(hello());

// hello()
//     .then((res) => {
//         console.log(res);
//     })


//Burada butoan basınca işlem yapsın diye
document.querySelector("#button").addEventListener("click", () => {
    //todo:  Promis ile bukaradar uzun oluyor. Ve bu seferde then sarmalı bizim için büyük problem. Ondan dolatyı promis yerine Async Await kullanırsak cok daha iyi olur.
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((response) => response.json())
        .then((post) => {
            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
                .then((response) => response.json())
                .then((comments) => {
                    console.log(comments);
                })
        })
})



//todo:  Yukarıdaki öreneğin async Await ile yapılışı.
//? await kullanıyorsan kullandığın fonksyionun başında async olması lazım.
document.querySelector("#buttonasync").addEventListener("click", async () => {

    const responsePost = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const post = await responsePost.json();
    const responseComments = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    const comments = await responseComments.json();
    console.log(comments);
})


//? yukarıdaki kodun daha kısa halini aşağıdaki gibi de yazabilriz.

document.querySelector("#buttonasyncshort").addEventListener("click", async () => {

    const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();
    const comments = await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json();
    console.log(comments);
})



