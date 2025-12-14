/*
Adjectives: 
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub

*/

let adj = {
    1: "Crazy",
    2: "Amazing",
    3: "Fire"
}

let shop = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}

let ending = {
    1: "Bros",
    2: "LImited",
    3: "Hub"
}

//generating random numbers 

let randomadj = Math.floor(Math.random()*3)+1;
let randomshp = Math.floor(Math.random()*3)+1;
let randomend = Math.floor(Math.random()*3)+1;

let businessName = `${adj[randomadj]} ${shop[randomshp]} ${ending[randomend]}`;

alert(businessName);