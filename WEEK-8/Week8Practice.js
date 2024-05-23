const heading = "Hey how is everything going";
const num = 100;
var mySelf = {
  name: "Pari Bai",
  Semester: "BSCS-7",
};
console.log(`${heading} , ${num}`);
console.log(mySelf);
console.log(`Hello , ${JSON.stringify(mySelf)}`);

var number = [1, 2, 1, 3, 1, 5, 6, 1];
for (const key in number) {
  if (number.hasOwnProperty.call(number, key)) {
    const element = number[key];
    console.log(element);
  }
}
// const obj = []
// for(num in number){
//     if(obj[num]){
//         obj[num] = obj[num]+ 1
//     }
//     else{
//         obj[num]= 1
//     }
// }
var person = {
  name: "Amaeda",
  gender: "Female",
  Age: "22",
  Country_Code: "+92",
};
var person1 = { ...person };
person1.name = "zainab";
person.age = "100";
console.log(`Hello , ${JSON.stringify(person)}`);
console.log(`Hello , ${JSON.stringify(person1)}`);
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [...arr1];
arr1[0] = 12;
console.log(arr1[0]);
console.log(arr2[0]);

const { Country_Code, Age, ...rest } = person;
console.log(Country_Code);

// Basic object destructuring
const person2 = { name: "John", age: 30 };
const { naam, age } = person2;

console.log(naam); // Output: 'John'
console.log(age); // Output: 30

function greet(name = "World", ...languages) {
  console.log(`Hello, ${name}!`);
  console.log("Languages:", ...languages);
}
console.log("Starting setTimeout example...");
setTimeout(() => {
  console.log("This message will be displayed after 5 seconds.");
}, 5000); // 2000 milliseconds = 2 seconds
console.log("setTimeout example scheduled.");

// promise code

function getData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      // Simulating successful completion
      resolve(data);
      // Simulating failure
      // reject(new Error('Failed to fetch data'));
    }, 2000); // Simulating a delay of 2 seconds
  });
}
// Consuming the Promise
getData()
  .then((data) => {
    console.log("Data received:", data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
