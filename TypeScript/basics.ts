let age: number = 12.1;

let userName: string = "Max";

let isInstructor: boolean = true;

let hobbies: string[] = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};

let person: Person = {
    name: "Max",
    age: 32
};


let people: Person[] = [person, { name: "wow", age: 32 }];


// type inference

let course: string | number = 'React - The Complete Guide';
course = 9;


function suma(a: number, b: number): number | string {
    return a + b;
}

function print(value: any) {
    console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -2);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// Classes

class Student {
    firstName: string;
    lastName: string;
    age: number;
    private courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    // method
    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}

class Student2 {


    constructor(
        public firstName: string,
        public lastName: string,
        public age: number,
        private courses: string[]
    ) { }

    // method
    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    listCourses() {
        return this.courses.slice();
    }
}


const student = new Student('Kevin', 'Abregu', 27, ['Angular']);
student.enrol('React');

interface Human {
    firstName: string;
    age: number;

    // Every human must have a greet method
    greet: () => void;

}

let kevin: Human;
kevin = {
    firstName: "Kevin",
    age: 27,
    greet(){
        console.log("Hello!");
    },
}

