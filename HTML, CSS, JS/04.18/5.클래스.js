class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

document.write(myCar1.name);
document.write(myCar1.year);
document.write(myCar2.name);
document.write(myCar2.year);


class TestClass {
    constructor(){
        this.name = "";
        this.age = 0;
    }

    setName(){
        this.name = "Hello!";
        this.setAge();
        document.write(this.name);
    }

    setAge(){
        this.age = 20;
        document.write(this.age);
    }
}

let testClass = new TestClass();
testClass.setName();
testClass.setAge();
