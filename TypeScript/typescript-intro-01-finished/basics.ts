let age: number = 12.1;

let userName: string = "Max";

let isInstructor: boolean = true;

let hobbies: string[] = ['Sports','Cooking'];

type Person = {
    name:string;
    age:number;
};

let person: Person = {
    name: "Max",
    age: 32
};


let people: Person[] = [person,{name: "wow",age: 32}];


// type inference

let course: string | number = 'React - The Complete Guide';
course = 9;


function suma(a:number, b:number): number | string {
    return a + b;
}

function print(value: any){
    console.log(value);
}

function insertAtBeginning(array: any[], value: any){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1,2,3];
const updatedArray = insertAtBeginning(demoArray,-2);
print(updatedArray);