const input = document.querySelector("#clipInput");
const form = document.querySelector("#form")
const inputContainer = document.querySelector(".form-container");
const message = document.querySelector("#message");


input.addEventListener("focus", () => {
    inputContainer.classList.add("form-container-focus")
    inputContainer.classList.remove("form-container")



})

input.addEventListener("blur", () => {
    inputContainer.classList.remove("form-container-focus")
    inputContainer.classList.add("form-container")


})

form.addEventListener("submit", (event) => {
    if(input.value == "") {
        alert("Bota alguma coisa ae garai")
    }else{
        console.log(input.value)
        input.value = "";
    }

    event.preventDefault();
    startAnimation();

    
})
 function startAnimation(){
    message.style.display = "flex";
    setTimeout(() => {
        message.style.display = "none"
    }, 985)
 }


