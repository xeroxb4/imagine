const btn= document.getElementById('btn');
btn.onclick = function() {
    const name = prompt('Enter your Full Name.')
    document.getElementById('name').innerText = name;
}

// Variables

const pi = 3.142;
let username = 'xeroxb4';
let age = 50;
let present = false;

// Objects
const person = {
    username: 'xeroxb4', 
    age: 50,
    present: false,
    child: {
        name: 'joy',
        friend:{
            name: 'tashon',
        }
    }
}

console.log(person.username);
console.log(person.age);
person.age = 25;
console.log(person);
person.username = 'Motion';
console.log(person);


// Array
const bottle1 = {
    size: 'large',
    color: 'indigo'
  }
  
  const bottle2 = {
    size: 'small',
    color: 'purple'
  }
  
  const bottle3 = {
    size: 'small',
    color: 'tan'
  }
  
  
  const bottles = [bottle1, bottle2];
  bottles.push(bottle1);
  bottles.push(bottle2);
  bottles;
  bottles[3].color;
  
  const date = new Date();
  date.getDay();
  
  // If/Else
  const grade = 17;
  if (grade >=18){
    'you are true'
  }else{
    'you are false'
  }
  
  
  
  //For loop
  for(let i = 0; i<= 5; i+=1) {
    console.log('we did it!', i)
  }

  // Functions
// Defining a function
function login(username, password){
  // Validate username and password
  if (!username || !password) {
    return 'Username or password not provided';
  }
  // Verify usermane and password
  if (usermane == 'xeroxb4' && password == '1234'){
    return 'user is logged in';
  } else {
    return 'Invalid username or password';
  }
}

// Invoking a function
login('xeroxb4')



// Basic Arithmetic Operations
11+12;
1+0.5;
43-12;
25/5;
20*5;
14%2000;

45/24;
45%24;

Math.round(45/24);

Math.floor(45/24);

Math.random(45/24)*1000;
  
  
  
  
  



