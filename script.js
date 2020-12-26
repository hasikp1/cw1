let img= document.querySelector('img');
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener('click', ()=> {
    
    img.src = "images/1.jpg"; 

})

btn2.addEventListener('click',()=> {
    img.src = "images/2.jpg"; 
})

img.addEventListener("click", ()=>{
    alert("Hello! This is an image!!");
})