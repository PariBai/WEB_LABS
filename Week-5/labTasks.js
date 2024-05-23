 function reverseArray(arr) {
    return arr.reverse();
}

// Test the function
console.log(reverseArray([1, 2, 3])); 
let car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2022
};

function carInfo(car) {
    return `The ${car.brand} ${car.model} was manufactured in ${car.year}.`;
}

// Test the function
console.log(carInfo(car)); 
function applyFunction(arr, func) {
    return arr.map(func);
}

// Test the function
console.log(applyFunction([1, 2, 3], (x) => x * 2)); 
