// For loop

for(let i = 0;i<10;i++){
    console.log(i);
}



let obj = {
    name:"Ankush",
    age: 14,
    fan: "Seinen"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,":", element)
    
    
}


for (const c of "Ankush") {
    console.log(c);
}
