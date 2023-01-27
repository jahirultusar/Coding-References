// strings are collections of characters

var fruitName = "Apple";

console.log(typeof fruitName);
console.log(fruitName.length);
console.log(fruitName[0]);
console.log(fruitName.toUpperCase());
console.log(fruitName.toLowerCase());
console.log(fruitName.indexOf("p"));
console.log(fruitName.substring(1, 4));
console.log(fruitName.slice(1, 4));
console.log(fruitName.slice(-3));
console.log(fruitName.split(""));
console.log(fruitName.split("p"));
console.log(fruitName.split(""));


// string concatenation

var firstName = "Jahirul";
var lastName = "Tusar";

console.log(`${firstName} ${lastName}`)

var fullName = firstName + " " + lastName;
console.log(fullName);


// string properties

length;
prototype;
constructor;

// string literals

var str = "Hello World";
var str2 = 'Hello World';
var str3 = `Hello World`;

// string objects

var str = new String("Hello World");

// string properties

var str = "Hello World";
console.log(str.length);

// string methods

toUpperCase();
toLowerCase();
indexOf();
substring();
slice();
split();
trim();
replace();
concat();
charAt();
charCodeAt();
includes();
endsWith();
startsWith();
repeat();
padStart();
padEnd();
match();
search();
toString();
valueOf();
toLocaleLowerCase();
toLocaleUpperCase();

var str = "Hello World";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.indexOf("o"));
console.log(str.substring(1, 4));
console.log(str.slice(1, 4));
console.log(str.slice(-3));
console.log(str.split(""));
console.log(str.split("o"));
console.log(str.split(""));
console.log(str.trim());
console.log(str.replace("World", "Jahirul"));
console.log(str.concat(" ", "Tusar"));
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.includes("Hello"));
console.log(str.endsWith("World"));
console.log(str.startsWith("Hello"));
console.log(str.repeat(3));
console.log(str.padStart(20, "0"));
console.log(str.padEnd(20, "0"));
console.log(str.match(/o/g));
console.log(str.search(/o/g));
console.log(str.toString());
console.log(str.valueOf());
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());
