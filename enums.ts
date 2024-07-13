// restrict user choice

const enum SeatChoice { //add const that's better :)
  AISLE, // value =0
  MIDDLE, // value = 1
  WINDOW, //value = 2
}

//automatically assign and increment( in case of number)

const seat = SeatChoice.MIDDLE;

console.log(seat);

// number in enum case -2

const enum SeatChoice2 { //add const that's better :)
  AISLE = 5, // value =5
  MIDDLE, // value = 6
  WINDOW, //value = 7
}

const value = SeatChoice2.WINDOW;
console.log(value);

//in case of string
const enum UserCode {
  ADMIN = "E010",
  MEMBER = "M000",
}

const member = UserCode.MEMBER;
console.log(member);

// combination

const enum SeatChoice3 { //add const that's better :)
  AISLE = "aisle", // value =aisle
  MIDDLE = 5, // value = 5
  WINDOW, //value = 6
}

const combiCase = SeatChoice3.WINDOW;
console.log(combiCase);

export {};
