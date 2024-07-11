// string array

const arr1: string[] = [];

arr1.push("data");
console.log(arr1);

// number array

const arr2: number[] = [];
// another method of defining array
const arr3: Array<number> = [];

type User = {
  name: string;
  age: number;
};

const users: User[] = []; // array of user objects
users.push({ name: "Jhon", age: 12 });
console.log(users[0])

// multidimensional array definition
const MLModels: number[][] = [[1, 2, 3], []];


export{}
