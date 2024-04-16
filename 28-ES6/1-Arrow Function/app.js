//! ------- Arrow Fonctions-------------

//? Eskiden,

function yazdir() {
    console.log("Merhaba");
}

yazdir();



//? şimdi Arrow function da eklendi,

//*:  1)

const yazdir2 = () => {
    console.log("Merhaba");
}

yazdir2();

//*:  2)

const yazdir3 = (firsname) => {
    console.log("Merhaba" + firsname);
}

yazdir3("Berk");

//*:  3) Eğer yazdığın kod 1 satırsa böyle de yazabilrisin;

const yazdir4 = (firsname) => console.log("Merhaba" + firsname);

//*:  4)İstenen parametre 1 tane ise parametrede bulunan parantezleri silebilrisin de.
const yazdir5 = firsname => {
    console.log("Merhaba" + firsname);
}

yazdir4("Berk");
