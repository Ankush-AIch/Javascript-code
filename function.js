function method(name) {
    console.log("The name is,", name);
    console.log("Who is disciplined,", name);
    console.log("Who is code + programmer,", name);
}

method("Ankush")
method("Sounok")
sum(5, 7);

//Simply Addition calculator

function sum(a, b) {
    return a + b
}

result = sum(25, 67);

console.log("The sum of the numebers are", result);

//arrow function

const f1 = (x)=> {
    console.log("This is an arrow function", x);
}

f1(5)