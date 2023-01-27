// objects are collections of properties


// var firstName = "Jahirul";
// var lastName = "Tusar";
// var age = 25;
// var isMarried = false;

// instead of this, we can use objects like this:
// objects are in key value pairs like json


var person = {
    firstName: "Jahirul",
    lastName: "Tusar",
    age: 25,
    isMarried: false,
    address: {
        city: "London",
        country: "UK"
    },
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }

};

console.log(person);
console.log(person.firstName);
console.log(person.address);
console.log(person.address.city);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(JSON.stringify(person));


