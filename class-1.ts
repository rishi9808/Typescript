class User1 {
    email: string;
    name: string;
    readonly city: string = "Kannur";
    constructor(email: string, name: string) {
      this.email = email;
      this.name = name;
    }
  }
  const rishikesh = new User("r@r.com", "rishi");
  // rishi.city = "Kkd"
