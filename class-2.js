// access modifiers
// public - accessible everywhere
// private - accessible within class
// class User {
//   email: string;
//   name: string;
//   private readonly city: string = "Kannur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
// const rishi = new User("r@r.com", "rishi");
// // rishi.city = "Kkd"   -- accessible only in class  , default - public
// better from of code
var User3 = /** @class */ (function () {
    function User3(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
    }
    return User3;
}());
// it will produce a js code given below
// class User {
//     constructor(email, name, userId) {
//         this.email = email;
//         this.name = name;
//         this.userId = userId;
//     }
// }
var rish = new User("r@r.com", "rishi");
