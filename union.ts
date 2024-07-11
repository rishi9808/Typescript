// Union - allowing multiple data types for the variable

let data: string | number = 123;
data = "hello";

// we can also have multiple object types

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let Rishi: User | Admin = { name: "Rishi", id: 123 };

Rishi = { username: "r", id: 123 };


// union in function

function getDbId(id: number | string) {
  console.log(`DB id is ${id}`);
}

function getId(id: number | string) {

  // id.toLowerCase()  = results in error (it can be num also) ,so should you if condition

  if (typeof id === "string") {
    id.toLowerCase();
  }
}


// UNION in Array
const data2 : (string | number )[] = [1,2,"3"]              // make sure to add parenthesis ()

const arr : (string | number | boolean)[] = [true ,1,"2"]



//Union usecase

let status : "start" | "stop"


status = "start";

// status = "pending"  --- results in error 
// status can have only 2 value start and stop




export {};
