let as = () => {let age = prompt("Enter your age:");
age = Number(age);

if (age > 0) {
    if (age <= 18) {
        alert("Can't drive")
    }
    else if (age > 18) {
        alert("Can drive")
    }
}
else {
    alert.error("Its invalid")
}
}
alert(as());

let world = prompt("Do you want to see the prompt again:");

if (world == "yes") {
    alert(as());
}
else {
    alert("Alright as ya wish.");
}


