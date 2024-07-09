function addTwo(num: number): number {
  return num + 2;
  // return "hello"
}

// addTwo("12")
addTwo(1);

const upper = (str: string): string => {
  return str.toUpperCase();
};

// upper(1)
upper("hi");

function signUp(name: string, age: number, email: string) {}

let loginUser = (name: string, email: string, age: number = 10) => {};

loginUser("r", "rishi");

//void

function consoleError(err: string): void {
  console.log(err);
}

consoleError("error")

function handleError(err: string): never {
  throw new Error(err);
}


const names = ["Rishi" ,"Rahul" , "Amal" , "Aadith" , "Abhinav"]

names.map((name): string => {
    return `name: ${name}`
})

export {};
