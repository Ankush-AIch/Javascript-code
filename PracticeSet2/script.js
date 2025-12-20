const boxes = document.querySelectorAll(".box");
const arr = ["blue", "red", "yellow", "green", "purple", "aqua"];

boxes.forEach(e => {
    e.style.backgroundColor = arr[Math.floor(Math.random()*arr.length)];
});