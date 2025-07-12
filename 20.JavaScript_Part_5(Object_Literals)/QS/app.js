// Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].
console.log(Math.floor(Math.random()*6+1));

// Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car’s name.

let car={
    name:"Suzuki",model:"WagonR",color:"Brown"
};
console.log(car);

// Create an object Person with their name, age and city.
// Edit their city’s original value to change it to “New York”.
// Add a new property country and set it to the United States.

let person={
    name:"kundan",age:24,city:"Gaya"
};
person.city="NewYork";
person.country="UnitedStates";
console.log(person);