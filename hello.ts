//DEFINING TYPES
let helloWorld = "Hello World";
console.log(helloWorld);

interface User{
    name:string;
    id:number;
}

const user = {
    name: "Hayes",
    id: 0,
  };
  console.log(user.name)
  console.log(typeof(user.id))

const user2 : User= {
    name: "Can Baran",
    id: 1,
};

console.log(user2.name)

interface Car {
    model:string;
    id:number;
}

class CarRegister{
    model: string;
    id: number;

    constructor(model:string, id:number){
        this.id=id;
        this.model=model;
    }
}

const oneCar : Car= new CarRegister("toyota",1);
console.log(oneCar.model)

// you can use interfaces to annotate parameters and return values to functions

/*
function getAdminUser(): X {
    //...
  }
  
  function deleteUser(user: X) {
    // ...
  }

*/

// COMPOSING TYPES

// Unions
// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:
type Mybool = true | false;

// A popular use-case for union types is to describe the set of strings or numbers literal that a value is allowed to be:

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example, you may have a function that takes an array or a string:
getLength(oneCar.model+"onecar inside");
function getLength(obj: string | string[]) {
    

    return console.log(obj.length);
  }
/*
  function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
      return [obj];
              
  (parameter) obj: string
    } else {
      return obj;
    }
  }
*/

// GENERICS

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

//You can declare your own types that use generics:

interface Backpack<Type>{
    add:(obj:Type) => void;
    get:() => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;
/*
// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
*/

// STRUCTURAL TYPE SYSTEM duck typing structural typing

interface Point{
    x: number;
    y: number;
}

// const onePoint : Point= {
//     x:12,
//     y:18
// }

function logPoint(p: Point){
    console.log(`${p.x},${p.y}`)
}
const point = { x: 12, y: 26 };
logPoint(point);
// logPoint(onePoint);

// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

// The shape-matching only requires a subset of the object’s fields to match.

const point3 = { x: 12, y: 34, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

// const color = { hex: "#187ABF" };
// logPoint(color);

// There is no difference between how classes and objects conform to shapes:

class VirtualPoint {
    x: number;
    y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
  }
  
  const newVPoint = new VirtualPoint(13, 56);
  logPoint(newVPoint); // logs "13, 56"
