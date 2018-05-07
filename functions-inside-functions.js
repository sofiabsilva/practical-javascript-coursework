// function inside function - runWithDebugger(): 

function log10Numbers() {
  for (var i = 0; i< 10; i++) {
    console.log(i);
  }
}
//function that enhances behavior of other functions
function runWithDebugger(ourFunction) {
  debugger;
  ourFunction();
}

/* //Testing:

  runWithDebugger(function log10Numbers() {
  for (var i = 0; i< 10; i++) {
    console.log(i);
  }
});
*/

// function inside function - setTimeout() (built in JS function):

setTimeout(function() { console.log("5 seconds have passed"); } ,5000)

// functions inside functios - forEach();

var students = ['john', 'lara', 'sara', 'sofia'];

function logName(name) {
  console.log(name);
}

/*
  for (var i = 0; i<students.length; i++) {
  logName(students[i]);
}
*/

// method forEach can be used instead, because it is an array:

/* students.forEach(logName) */

// this is equivalent:

/* students.forEach(function logName(name){
   console.log(name);
})
*/
//or:

/* students.forEach(function (name){
   console.log(name);
})
*/

//forEach automatically runs the function on every item of the array

// Understanding how the forEach() method works:

function forEach(myArray, myFunction) {
  for (var i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}
//testing

forEach(students, function(name) {
  console.log(name);
});
//or
forEach(students, logName);

// the addEventListener() method is also an example of a function that takes 
// another function as a paramenter and enhances it's behaviour. For ex:

insertElementNameHere.addEventListener('click', function() {
  console.log("the insertElementNameHere element was clicked")
})
// You can use the event object inside of the function, ex:
insertElementNameHere.addEventListener('click', function(event) {
  console.log(event); //event or another name, it will log the MouseEvent object
  console.log("the insertElementNameHere element was clicked")
})
