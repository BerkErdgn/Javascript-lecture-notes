//! ------- Destructing Kullanımı-------------


let langs = ["C#", "C++", "Javascripth", "python"]

let lang1, lang2, lang3, lang4

//old way

lang1 = langs[0]
lang2 = langs[1]
lang3 = langs[2]
lang4 = langs[3]

console.log(lang1, lang2, lang3, lang4); //C# C++  Javascripth python

//? bu yapılan işlemi yeni yöntem ile şöyle yaparız;
//New way
[lang1, lang2, lang3, lang4] = langs

console.log(lang1, lang2, lang3, lang4);//C# C++  Javascripth python



const person = {
    firstName: "Berk",
    lastName: "Erdoğan",
    salaray: 5000,
    age: 23
}

let { firstName, lastName, salaray, age } = person;

console.log(firstName, lastName, salaray, age);//Berk Erdoğan 5000 23



