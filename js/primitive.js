let name = 'Dhanesh'; //string Literal</li>
let age = 22; //Number Literal</li>
let isApproved = false; //Boolean Literal</li>
let firstName = undefined; //</li>
let lastName =  null;  //this is only used when you have confirmed value

var output = typeof name + "\\" + age + " \\" + isApproved + "\\ " + firstName + "\\ " + lastName;
document.getElementById("log").innerHTML = output;
console.log(typeof name, age, isApproved, firstName, lastName);