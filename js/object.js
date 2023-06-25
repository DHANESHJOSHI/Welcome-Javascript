let obj_name = 'TechWithJoshi';
let obj_age = 22

let person = {
    obj_name: 'TechWithJoshi',
    obj_age: 22,
};

let output2 = person.obj_name + " " + person.obj_age;
document.getElementById("obj").innerHTML = output2 + '&nbsp;'+ '<b>'+'open console and see object'+ '</b>';
console.log(person); // this will call the object and display in conosle

//Dot Notation
person.obj_name = 'Dhanesh';
//Bracket Notation
person['obj_name'] = 'Joshi';