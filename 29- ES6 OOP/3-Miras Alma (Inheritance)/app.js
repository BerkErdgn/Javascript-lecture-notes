//! ---------Inheritance (Miraz Alma)-------------------------



class Person {
    firtname = "Berk";

    write() {
        console.log("Person write :", this.firtname);
    }
}

class Student extends Person {

    write() {
        console.log("Student", this.firtname);
        super.write();
    }

}


// const person = new Person();
// person.write();

const student1 = new Student();
student1.write();


//! ---------Inheritance ile hayatımıza giren kelimeler : -------------------------
//todo   1- super : üst sınıfı gösterir.
//todo   2- super()


//* 1- super için;

class Insan {
    firstName = "Berk";

    write() {
        console.log(this.firstName);
    }
}

class Ogrenci extends Insan {

    write() {
        //super mires alığın sınıfı gösteriri. this ise o anki sınıfı gösteriri.
        super.write();
    }
}

const ogreneci1 = new Ogrenci();
ogreneci1.write();


//* 2- super() için;


class Insan2 {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo() {
        console.log(this.firstName, this.lastName, this.salary);
    }

}

class Ogrenci2 extends Insan2 {
    constructor(firtname, lastName, salary) {
        super(firtname, lastName, salary); //burada aslında Insan2 nin constructor'ını direkt olarak göstemiş oluruz. bu sayede orayı tekrar yazmamış oluruz.
    }

    write() {
        super.writeInfo();
    }

}

const ogreneci2 = new Ogrenci2("Berk", "Erdoğan", 10000);
ogreneci2.write();














