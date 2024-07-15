// typescript generics

const num: Array<number> = [];
const names: Array<string> = [];

// in general case where we are not sure of what the
// argument datatype in function is but but we need to
// make sure that the argument datatype and return type datatype
// is same, so we use <Type>

// NOte : we cant use any, beacuse any can have diff datatype for
// input arg and return type

function identityOne(val: any): any {
  return val; // val can be string and return type be  number which is not what we need
}

function identityTwo<Type>(val: Type): Type {
  return val; // val- string return- string
}

//simpler way of writing <Type>

function identityThree<T>(val: T): T {
  return val;
}

// conversion to arrow fn

function getProducts<T>(products: T[]): T {
  // some op
  const i = 3;
  return products[i];
}

const getMoreProducts = <T,>(products: T[]): T => { // NOTE!! : <T, > IS USED IN JSX TO DENOTE IT IS NOT ANOTHER HTML TAG
  //do some op
  const i = 4;
  return products[i];
};


