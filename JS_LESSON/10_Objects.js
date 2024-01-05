let person = {
    firstName : 'Joe',
    lastName : 'Doe'
}

console.log(person);
console.log(person.firstName);

// add a new property with dot notation
person.age = 25; 

console.log(person);

// delete 
delete person.lastName;
console.log(person);

// define key as a string value then call it with square bracket
let address = {
    'building no' : 5555,
    street : 'Keowee',
    state : 'Kentucky'
}
console.log(address);
console.log(address['building no']);

// check if a  property exists
console.log('street' in address); 

// print out key value
let course = {
    courseName : 'JS',
    url : 'www.cydeo.com',
    subjects : ['Objects', 'Arrays','Functions']
}

for (const key in course) {
    console.log(key+' : '+course[key]);
}

// object can include object, fuction, arrays
let myCar = {
    make : 'Dodge',
    year : 2023,
    engine : {
        cylinders : 4,
        size : 2.4
    },
    extras : ['AC', 'Cruise control', 'Sound System'],
    drive : function(){
        console.log('Running on Gas');
    }
}

myCar.drive(); // Running on Gas
console.log(myCar.extras[1]); // Cruise control
