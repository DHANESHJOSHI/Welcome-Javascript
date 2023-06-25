let fn_name = prompt('Please enter your name:');
let lastfn_name = prompt('Please enter your Last Lastname:');
function greet(fn_name = 'Dhanesh', lastfn_name = 'Joshi') {
    let greeting = 'Hello ' + fn_name + ' ' + lastfn_name;
    document.getElementById('greeting').innerHTML = greeting;
  }
  
  greet(fn_name, lastfn_name);
  console.log(fn_name, lastfn_name);

  function square(number) {
    return number * number;
  }
  
  let number = square(2);
  document.getElementById('result1').innerHTML = number;
  document.getElementById('result2').innerHTML = square(2);

  console.log(number + ' ' + 'Log using fun call single');