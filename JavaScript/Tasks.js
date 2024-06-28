// Task 1: Closures //

// Description: Write a function createCounter that uses a closure to create a counter.
// Requirements:
// The function createCounter should return an object with two methods: increment and getValue.
// increment should increase the counter value by 1.
// getValue should return the current counter value.

console.log("\n\nTASK 1:");

{
    function createCounter() {
        let counter = 0; // initializing counter value inside the function prevents from code outside this function's scope from modifying the counter value.

        const obj = {
                increment: function increment() {counter++} , // adds 1 the counter
                getValue: function getValue() {return counter} // returns current value of counter
            }
        return obj;
    }

    var counter = createCounter(); // storing return value (obj) in a variable so that the counter value is maintained

    console.log(counter.getValue()) // logging initial value of counter
    counter.increment()             // incrementing 1 to counter value '0 -> 1'
    console.log(counter.getValue()) // logging new value of counter
    counter.increment()             // incrementing 1 to counter value '1 -> 2'
    console.log(counter.getValue()) // logging new value of counter
}





// Task 2: Primitive Types //

// Description: Create a function checkPrimitiveTypes that takes one argument of any type and logs the type of the argument.
// Requirements:
// Use typeof to determine and log the type of the argument.

console.log("\n\nTASK 2:");

{
    function checkPrimitiveTypes(arg) {
        return console.log(typeof(arg))
    }

    checkPrimitiveTypes('as') // using string
    checkPrimitiveTypes(132) // using an integer
    checkPrimitiveTypes(true) // using boolean true
    checkPrimitiveTypes(null) // using null
    checkPrimitiveTypes(counter) // using object which we initialized in Task 1
}





// Task 3: Array Methods - Filter, Find, forEach //

// Description: Given an array of numbers, perform the following operations:
// Filter out even numbers.
// Find the first number greater than 50.
// Log each number to the console.
// Requirements:
// Use filter to create a new array of odd numbers.
// Use find to get the first number greater than 50.
// Use forEach to log each number from the original array.

console.log("\n\nTASK 3:");

{
    function filtering(num) {
        return num % 2 != 0 // only odd numbers will be returned
    }

    function finder(num) {
        return num > 50 // only number greater than 50 will be returned
    }

    function looping(num) {
        console.log(num); // print each number that is passed to the function
    }

    const numbers = [10, 25, 30, 55, 60, 75, 80, 95]; // initializing an array of random arrays to test the methods

    const oddsOnly = numbers.filter(filtering); // filter to create a new array of odd numbers
    console.log("\nOdd numbers: ", oddsOnly);

    const greaterThan50 = numbers.find(finder); // finding the first number greater than 50
    console.log("\nFirst number greater than 50: ", greaterThan50);

    console.log("\nAll numbers in the array: ");
    numbers.forEach(looping); // logging each number from the original array
}





// Task 4: Loops - For, For...in //

// Description: Create a function logObjectProperties that takes an object and logs its properties and values.
// Requirements:
// Use a for loop to log numbers from 1 to 10.
// Use for...in to iterate over the properties of an object and log each property and its value.

console.log("\n\nTASK 4:");

{
    function logObjectProperties(obj) {
        console.log("\nNumbers from 1 till 10: ");
        for(let i = 1; i <= 10; i++) { // for loop, starts from 1 and runs till 10 (inclusive)
            console.log(i);
        }

        console.log("\nLogging each key - value pair: ");
        for(let i in obj) { // the 'profile' object is iterated and the keys are subsequently stored in i
            console.log(i, ': ' , obj[i]); // using i we print both key and it's corresponding value
        }
    }

    const profile = { // a simple object with multiple different key-value pairs
        firstname: 'Maaz', 
        lastname: 'Imam',
        age: 21,
        YOE: 0,
        hobby: 'Sleeping' 
    }

    logObjectProperties(profile);
}





// Task 5: Hoisting
// Description: Demonstrate hoisting by writing code snippets that show the difference in behavior between var, let, and const.
// Requirements:
// Write code snippets that illustrate variable hoisting for var, let, and const.
// Explain the output in comments.

console.log("\n\nTASK 5:");

{
    console.log(a); // logs undefined
    var a = 5;
    console.log(a);

    // console.log(b); // logs ReferenceError: Cannot access 'b' before initialization
    let b = 10;
    console.log(b);

    // console.log(c); // logs ReferenceError: Cannot access 'b' before initialization
    const c = 15;
    console.log(c);

    // It is observed that var is initialized with 'undefined' where as let and const are not 
    // initialized until their declaration statemen, this is called Temporal Deadzone
}





// Task 6: Variable Scopes //

// Description: Write a function variableScopeTest to demonstrate the difference between global, function, and block scopes.
// Requirements:
// Define variables in global, function, and block scopes.
// Log the variables to demonstrate their accessibility in different scopes.

console.log("\n\nTASK 6:");


var a = 'Lost';
let b = 'Pak';
const c = 'Cricket';

function variableScopeTest() {
    var d = 'me';
    let e = 'him';
    const f = 'her';

    console.log("Global var (inside function): ", a);
    console.log("Global let (inside function): ", b);
    console.log("Global const (inside function): ", c);

    if(true) {
        var g = 'hello';
        let h = 'bye';
        const i = 'idk';     

        console.log("\nGlobal var (inside function and if block): ", a);
        console.log("Global let (inside function and if block): ", b);
        console.log("Global const (inside function and if block): ", c);
        console.log("\nfunction scope var (inside function and if block): ", d);
        console.log("function scope let (inside function and if block): ", e);
        console.log("function scope const (inside function and if block): ", f);
    }

    console.log("\nif block var (inside function but out of if block): ", g);
    // console.log("if block let: ", h); // ReferenceError: h is not defined
    // console.log("if block const: ", i); // ReferenceError: i is not defined

}
variableScopeTest();
// console.log(d); // ReferenceError: d is not defined
// console.log(e); // ReferenceError: e is not defined
// console.log(f); // ReferenceError: f is not defined

// console.log("\nif block var: ", g); // ReferenceError: g is not defined
// console.log("if block let: ", h); // ReferenceError: h is not defined
// console.log("if block const: ", i); // ReferenceError: i is not defined

if(true) {
    var j = 5;
    let k = 10;
    const l = 15;
}

console.log("\nif block var: ", j);
// console.log("if block let: ", k); ReferenceError: k is not defined
// console.log("if block const: ", l); ReferenceError: l is not defined

// a,b,c were defined outside any function or block hence they have global scope and can be accessed anywhere and we can also not redeclare the let 'b' or const 'c'.
// Since d,e,f were defined inside the function scope hence they can not be accessed anywhere else but that function itself
// g,h,i being inside a block within the function limit the scope of let and const to just that block however var can be accessed outside the block aswell however not outside the function scope
// j,k,l are defined inside the if block, only var can be accessed outside the block scope where as let and const throw a reference error






// Task 7: Classes //

// Description: Create a class Person with properties name and age and a method greet.
// Requirements:
// The greet method should return a greeting message that includes the person's name and age.
// Create an instance of the Person class and call the greet method.

console.log("\n\nTASK 7:");

{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        greet() {
            console.log(`Hello ${this.name}, you are ${this.age} years old.`);
        }
    }

    const person1 = new Person ("Maaz",21);
    const person2 = new Person ("Bilal",22);
    const person3 = new Person ("Some guy",29);

    person1.greet();
    person2.greet();
    person3.greet();
}





// Task 8: Functions //

// Description: Write a function calculateArea that takes the radius of a circle as an argument and returns the area.
// Requirements:
// Use a function declaration to define calculateArea.
// Use the formula area=π×radius2\text{area} = \pi \times \text{radius}^2area=π×radius2 to calculate the area.
// Call the function and log the result.

console.log("\n\nTASK 8:");

{
    function calculateArea(radius) {
        return Math.PI * (radius**2); // Using value of PI from Math library to calculate Area
    }

    var radius = 4;
    var area =  calculateArea(radius);
    console.log(`Area of a Circle with Radius: ${radius} is ${area.toFixed(2)}`); // Logs the area of the circle, upto 2 Decimal Places, on the given Radius
}





// Task 9: Shallow Cloning //

// Description: Write a function shallowClone that creates a shallow clone of an object.
// Requirements:
// Use the spread operator (...) or Object.assign to create a shallow copy of the given object.
// Demonstrate the behavior of shallow cloning with nested objects.

console.log("\n\nTASK 9:");

{
    function shallowClone1(obj) {
        return Object.assign({},obj); // The '{}' in Object.assign() shows that an empty object was created in which we shallow copied the obj argument
    } 

    function shallowClone2({...obj}) {
        return {...obj}; // We return a shallow copy of the obj argument using the Spread Operator
    }

    const me = {age: 21, name: {first: 'Maaz', last: 'Imam'}}; // A nested object

    console.log("Original: ", me);

    const new_obj1 = shallowClone1(me);
    new_obj1.age = 23;
    new_obj1.name.first = 'Saad';
    console.log("After performing Shallow Copy with Object.assign{}: ", me);

    const new_obj2 = shallowClone2(me);
    new_obj2.age = 24;
    new_obj2.name.first = 'Imam';
    console.log("After performing Shallow Copy with Spread operator: ", me); 

    // Shallow copy copies by reference hence we can expect changes made in the original object or it's shallow copy to be reflected in the other 
    // It is observed that changes are only reflected in the nested object properties, primitive properties remain the same as they are copied by value
}





// Task 10: Deep Cloning //

// Description: Write a function deepClone that creates a deep clone of an object.
// Requirements:
// Use a recursive approach or JSON.stringify and JSON.parse to create a deep copy of the given object.
// Demonstrate the behavior of deep cloning with nested objects.

console.log("\n\nTASK 10:");

{
    function deepClone1(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    const me = {age: 21, name: {first: 'Maaz', last: 'Imam'}}; // A nested object

    console.log("Original: ", me);

    const new_obj1 = deepClone1(me);
    new_obj1.age = 23;
    new_obj1.name.first = 'Saad';
    console.log("After performing Deep Copy with JSON.stringify and JSON.parse: ", me); 

    // Changes aren't reflected as Deep Copy only copies by value not references hence any changes in the original object
    // or it's deep copy won't be carried out to the other
}