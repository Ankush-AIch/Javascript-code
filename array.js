let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr[7], arr[9])
console.log(arr.length);

arr[1] = 67;
arr[2] = "Ankush";

console.log(arr[1], arr[2]);
console.log(arr.join(", "));
console.log(arr)


arr.pop();
console.log(arr)

arr.shift();
console.log(arr)

delete (arr[9]);

arr[9] = "leo messi";

console.log(arr)

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let combine = arr1.concat(arr2);

console.log(combine);


let hmm = [1, 6, 0, 9, 3];

hmm.sort();
console.log(hmm)

let newArr = [9, 5, 6, 3, 7, 3, 7, 9, 8, 3];

newArr.forEach(element => {
    console.log(element);
});

const world = [1, 23, 65, 2, 54];
let newArray = world.map((e, index, arrays) => {
    return e;
})
console.log(newArray);

//filter method in array

function GreaterThanSeven(a) {
    return a > 7;
}

let justNbr = arr.filter(GreaterThanSeven);

console.log(justNbr)

  
let the = [1,2,3,4,5];

const blue = (a,b) => {
    return a+b;
}

console.log(the.reduce(blue))
