let img= document.querySelector('img');
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn2 = document.querySelector("#btn3");

btn1.addEventListener('click', ()=> {
    
    img.src = "images/1.jpg"; 

})

btn2.addEventListener('click',()=> {
    img.src = "images/2.jpg"; 
})

btn3.addEventListener('click',()=> {
    img.src = "images/3.jpg"; 
})

btn4.addEventListener('click',()=> {
    img.src = "images/4.jpg"; 
})

img.addEventListener("click", ()=>{
    alert("Hello! This after code commit!!");
})