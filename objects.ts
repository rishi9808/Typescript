function createUser():{name: string , age: number} {
    return {name: "" , age:10}
}



// using type

type User = {
    name: string,
    age: number
}

function createUsers(user : User) : User{
    return {name: user.name , age: user.age}
}



// readonly and ?

type Users = {
    readonly _id: string,   // readonly  - do not allow modification once it has a value
    name: string,
    age: number,
    cardDetails? : number   // ? - it may or may not contain value
}

let myUser : Users = {
    _id: "123",
    name: "rishi",
    age: 12
}
// myUser._id = "qw"
let nextUser : Users = {
    _id : "123",
    name: "rishi",
    age: 12
}
export {}
