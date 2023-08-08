let minus = document.querySelector(".minus");
let add = document.querySelector(".add");
let show = document.querySelector(".show");

let Counter = 0;

minus.addEventListener("click" , ()=>{
    Counter--;
    show.innerText = Counter;
});

add.addEventListener("click" , ()=>{
    Counter++;
    show.innerText = Counter;
});