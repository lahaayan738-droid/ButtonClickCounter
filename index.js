let content = document.querySelector(".content");
let addBtn = document.querySelector(".btn");
let subBtn = document.querySelector(".btn1");
let resetBtn = document.querySelector(".reset");
let darkBtn = document.querySelector(".dark");
let body = document.querySelector("body");
let count = 0;

addBtn.addEventListener("click", () =>{
    count+=1;
    content.textContent = count;
});
subBtn.addEventListener("click", () =>{
    count = count-1;
    content.textContent = count;
});
resetBtn.addEventListener("click", () =>{
    count = 0;
    content.textContent = count;
})

darkBtn.addEventListener("click", () =>{
    let currMode = "light";
    if(currMode ==="light"){
        currMode = "dark";
        body.classList.toggle("darkMode");
    }else{
        currMode = "light";
    }

})

