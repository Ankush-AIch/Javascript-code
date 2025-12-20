let num = prompt("Enter the number whose factorial you want:");

num = Number(num);

let factorial = 1;
length
for (let i = 1; i <=num; i++) {
    factorial *= i;
}

alert(`The factorial of ${num} is ${factorial}`);
