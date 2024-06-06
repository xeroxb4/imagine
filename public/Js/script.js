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
  
  
  
  



