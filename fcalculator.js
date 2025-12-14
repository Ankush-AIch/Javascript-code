let random = Math.random();

let a = prompt("Enter the first number: ");
let b = prompt("Enter the operation number: ");
let c = prompt("Enter the second number: ");

let obj = {
    "+":"-",
    "-":"/",
    "*": "**",
    "/": "*"
}

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}

else { 
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}