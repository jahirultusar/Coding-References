// loops

// for loop

for (let i = 0; i < 10; i++) {
    console.log(i);
};

// while loop

let i = 0;
while (i < 10) {
    console.log(i);
    i++;
};

// do while loop

let t = 0;
do {
    console.log(i);
    t++;
}
while (i < 10);

// for in loop

const person = {
    name: 'John',
    age: 30
};

for (let key in person) {
    console.log(key, person[key]);
}

// for of loop

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

// forEach loop

colors.forEach(function(color) {
    console.log(color);
});

// map loop

const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log(doubleNumbers);

// filter loop

const num = [1, -1, 2, 3];

const filtered = num.filter(function(value) {
    return value >= 0;
});

console.log(filtered);

// reduce loop

const numb = [1, -1, 2, 3];

const sum = numb.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum);

// includes loop

const numb = [1, -1, 2, 3];

const includes = numb.includes(2);

console.log(includes);

// indexOf loop

const numb = [1, -1, 2, 3];

const index = numb.indexOf(2);

console.log(index);

// find loop

const numb = [1, -1, 2, 3];

const item = numb.find(function(value) {
    return value > 2;
});

console.log(item);

// findIndex loop

const numb = [1, -1, 2, 3];

const item = numb.findIndex(function(value) {
    return value > 2;
});

console.log(item);

// every loop

const numb = [1, -1, 2, 3];

const allPositive = numb.every(function(value) {
    return value >= 0;
});

console.log(allPositive);

// some loop

const numb = [1, -1, 2, 3];

const atLeastOnePositive = numb.some(function(value) {
    return value >= 0;
});

console.log(atLeastOnePositive);

// emptying an array

let numb = [1, -1, 2, 3];

let another = numb;

// Break and Continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
};

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
};

