class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(`Hi, I am ${this.name}`);        
    }
}

class Student extends Person {
    constructor(name, age, marks){
        super(name, age);
        this.marks = marks;
    }

    
}

class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age);
        this.subject = subject;
    }
}

let s1 = new Student("adam" ,26, 546);
let t1 = new Teacher("Mamata" , 42, "maths");

s1.talk();
t1.talk();