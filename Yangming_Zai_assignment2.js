/*
  Question 1
  Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
  Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
  Given the array, implement a function to calculate the total value of the items.
*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

console.log("Q1: -----------------------------");

const getDoubledArray = (array) => {
  return array.map((obj) => {
    Object.keys(obj).forEach((key) => {
      obj[key] = obj[key] * 2;
    });
    return obj;
  });
};

const getFilteredArray = (array) => {
  return array.filter((obj) => {
    return obj["quantity"] > 2 && obj["price"] > 300;
  });
};

const getSum = (array) => {
  return array.reduce((acc, ele) => {
    return acc + ele.quantity * ele.price;
  }, 0);
};

let tmpItemsObject = structuredClone(itemsObject);
let doubledArray = getDoubledArray(tmpItemsObject);
console.log(doubledArray);

tmpItemsObject = structuredClone(itemsObject);
let filteredArray = getFilteredArray(tmpItemsObject);
console.log(filteredArray);

tmpItemsObject = structuredClone(itemsObject);
let sum = getSum(tmpItemsObject);
console.log(sum);

/*
  Question 2
  Given the string, implement a function to remove all the non-alphabet characters and extra space in the string 
  and convert the string to all lowercase.
*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

let returnedString = string
  .toLowerCase()
  .trim()
  .split(/[ -]+/)
  .filter((x) => x != " ")
  .join(" ");
console.log("Q2: -----------------------------");
console.log(returnedString);
console.log(returnedString == expectedReturnString);

/*
  Question 3
  Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. 
  With the not existing property, fill with null. Sort according to uuid after merge.
*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

const getMergedObjectArray = (first, second) => {
  let mergedObjectArray = [...first, ...second];
  let reducedObjectArray = mergedObjectArray.reduce((acc, obj) => {
    let found = acc.find((ele) => ele.uuid == obj.uuid);
    let newObj = {
      uuid: obj.uuid || null,
      role: obj.role || null,
      name: obj.name || null,
    };
    if (found) {
      found.role = found.role || obj.role;
      found.name = found.name || obj.name;
    } else {
      acc.push(newObj);
    }
    return acc;
  }, []);
  return reducedObjectArray.sort((obj1, obj2) => obj1.uuid - obj2.uuid);
};

console.log("Q3: -----------------------------");
let mergedObjectArray = getMergedObjectArray(first, second);
console.log(mergedObjectArray);

//---------------------------------------------------------------

/* let array = [1, 2, 3, 4];
function getFilteredArray(array) {
    return array.filter((ele, index, array) => {
        return ele > 2;
    });
}
*/

/* let array = [1, 2, 3, 4];
function getSum(array) {
    return array.reduce((acc, ele) => {
        return acc + ele;
    }, 0);
}
*/

//let doubledArray = [...array];
/*
const getDoubledArray = (array) => {
  for (let key in array) {
    Object.keys(array[key]).forEach((i) => {
      array[key][i] = array[key][i] * 2;
    });
  }
  return array;
}
*/
