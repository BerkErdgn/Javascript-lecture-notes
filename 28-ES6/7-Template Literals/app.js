//! ---------6-Template Literals------------------------------

//eski yöntem
function write(firstName, lastName) {
    console.log("İsim : " + firstName + " " + "Soyasim :" + lastName)
}

write("Berk", "Erdoğan"); //İsim: Berk Soyasim : Erdoğan


//Yeni Yöntem

function write2(firstName, lastName) {
    //ALT GR + İKİ KEZ NOKTALI VİRGÜL TUŞU
    console.log(`İsim : ${firstName} Soyisim : ${lastName}`);
}
write2("Berk", "Erdoğan");





