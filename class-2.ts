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

class User3 {
    constructor(
      public email: string, 
      public name: string,
      private userId?: string
      ){
      }
  }
  
  // it will produce a js code given below
  // class User {
  //     constructor(email, name, userId) {
  //         this.email = email;
  //         this.name = name;
  //         this.userId = userId;
  //     }
  // }
  const rish = new User("r@r.com", "rishi");