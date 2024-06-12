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
  
  // write a funtion that will add a participant to Google Classroom

  const participants = [];
  function addParticipant(email){
    // check if email was provided
    if (email === undefined || email === null)
      return 'No email provided';
    
    if (!email.includes('@gmail')){
      return 'undefined';
    }
    
    
    // Add email participants
    participants.push(email);
    return 'Participant added'
  }
// String in JavaScript
// Concatenation
const lastname = 'Amon';
const firstname = 'Erasmos';
const middlename = 'Ashie';
firstname+' '+lastname +' '+ middlename;
// Template Literal
`${firstname} ${middlename} ${lastname}`;
  
  addParticipant('')
  addParticipant('xeroxb4@gmail.com')
  addParticipant('xeroxb4@aol.com')



// Arrays in JavaScript
const users = [
  {
    username: 'xeroxb4',
    password: '12345',
    email: 'xeroxb4@gmail.com'
  },
  {
    username: 'adansy',
    password: '12345',
    email: 'xeroxb4@aol.com'
  },
  {
    username: 'octopit',
    password: '12345',
    email: 'xeroxb4@ymail.com'
  }
]

users
  

// write a function that will take a user with firstname, lastname, and return fullname;


function fullname(user) {
  return {
    ...user,
   fullname:`${user.firstname} ${user.lastname}`
  };
}

const user = {
  firstname: 'Amon',
  lastname: 'Erasmos'
}
  
fullname(user);


// Array map
const users = [
{firstname: 'Amon', lastname: 'Erasmos'},
{firstname: 'Amarh', lastname: 'Daniel'},
{firstname: 'Amoah', lastname: 'Amanda'},
{firstname: 'Ampah', lastname: 'Collins'},
{firstname: 'Tony', lastname: 'Bravo'},
]

// users.map(fullname);


// Square of numbers
function square(number){
  return number **2;
}

square(9);

const numbers = [9,8,7,6];
numbers.map(square);

// Array filter
function isOdd(number){
  return number % 3 === 0;
}

isOdd(3);

numbers.filter(isOdd)



// write a function that will allow a user to reset their password

const user = {
  email: 'xeroxb4@gmail.com',
  password: '1234'
}

// 
function resetPassword(letters,numbers,email){
  // check if email and new password was provided
  if (!email || !newPassword){
    return "email or password not provided";
  }
  
  // check if provided email is correct
  if(email === user.email){
    // update password with new one
    user.password = newPassword;
    return "Password reset successfully";
  }
  
  if (email === !user.email){
    return "Invalid email";
  }
  
  
}

user;
resetPassword("xeroxb4@gmail.com", "0987")

























  
  
  



