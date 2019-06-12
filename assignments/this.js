/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window: 'this' refers to the entire Window/JS language (you can expand it in the console)
* 2. Implicit: 'this' refers to the context in which it was called.
* 3. New: 'this' gets transferred to a new object created with a constructor function
* 4. Explicit: using a function/method (e.g., .call, .apply, and .bind) to point 'this' to a new context
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
console.log(this)


// Principle 2
// code example for Implicit Binding
const myObj = {
    name: 'Pat',
    logName: function() {
        console.log(this.name)
    }
}

myObj.logName()


// Principle 3
// code example for New Binding

function NewProducts(name, price) {
    this.name = name,
    this.price = price,
    this.advert = function() {
        console.log(this.name + " costs " + this.price);
    }
}

const guitar = new NewProducts('guitar', 200);
const drums = new NewProducts('drums', 400);

guitar.advert(); //'guitar costs 200'
drums.advert(); //'drums costs 400'

// Principle 4
// code example for Explicit Binding

const myObj = {
    name: 'Pat',
    age: '45',
    logName: function() {
        console.log(this.name)
    },
    logAge: function() {
        console.log(`${this.name} is ${this.age} years old.`)
    },
}

const myObj2 = {
    name: 'Old-Pat',
    age: '55',
    logName: function() {
        console.log(this.name + " in Obj2")
    },
    logAge: function() {
        console.log(`${this.name} is also ${this.age} years old.`)
    },
}

//This will take Pat's name (from myObj) and make that the 'this' in Obj2 (which should be 'Old-Pat', but .call has changes the context for 'this')
myObj2.logName.call(myObj);


