//!-------------------MANTIKSAL OPERATÖRLER---------------

/*


&& : ve
|| : veya
! : değil


*/

let yas = 20;
let para = 3500;
let saglikliMi = false;

console.log(yas > 18 && para > 3000 && saglikliMi == true);



console.log(yas > 18 && para > 3000 || saglikliMi == true);


console.log(!(5 > 3));  //burada ünlem sayesinde tersini aldık. Bu sayede false gelir. Birşeyin zıttını almak için kullanılır.

console.log((para > 3000 && saglikliMi == false) || (para > 3800 && saglikliMi == true))

