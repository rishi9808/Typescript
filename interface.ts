interface User {
  readonly id: string;
  name: string;
  age: number;
  getName(fullName: string): string;
  remarks?: string;
}

//  reopening of interface
interface User {
  address: string;
}

//extending interface - gets all properties of user and can add additional props
interface Admin extends User {
  role: "admin" | "user";
}

const Rishi: User = {
  id: "a12",
  name: "Rishi",
  age: 12,
  address: "Abc 1234",

  getName: (name: "Rishikesh") => {
    return `hello ${name}`;
  },
};

const admin: Admin = {
  role: "admin",
  id: "a12",
  name: "Rishi",
  age: 12,
  address: "Abc 1234",
  getName: (name: "Rishikesh") => {
    return `hello ${name}`;
  },
};

export {};
