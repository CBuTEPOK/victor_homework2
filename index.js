let admin;
let user;
user = "Anna"
admin = user;
console.log(admin);

//document.querySelector('h1').innerHTML = admin;

//HomeWork 2_1
function lesson2_1() {  
    let admin;
    let user;
    user = "Anna"
    admin = user;
   alert (admin);    //output Anna
}  

//HomeWork 2_2
let userI = 'ivan';
console.log(userI);

// Ver 0.1 
// let prom = userI.charAt(0);
// let newUser = userI.replace(userI.charAt(0), prom.toUpperCase()); 
let newUser = userI.replace(userI.charAt(0), userI[0].toUpperCase()); 
console.log(newUser); //output Ivan

//HomeWork 2_3
//in progress


//HomeWork 2_4
let a = '';
let b = 'bbb';
let c = false;

let test1 = !b.length === c; // true. b.length can be converted to true. !b.length = false. false===false = true
let test2 = a.length > b.length; // false length of strin a les then string b
let test3 = !a.length && !b.length; // false. empty string lenght = 0. !0 = true. 
//Not empty string - 3. !3 = false. && = true only if all the operands are true. true && false = false

let test4 = a === c; // false. different types always different