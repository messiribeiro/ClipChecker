const input = document.querySelector("#clipInput");
const inputContainer = document.querySelector(".input-container");



input.addEventListener("focus", () => {
    inputContainer.classList.add("input-container-focus")
    inputContainer.classList.remove("input-container")



})

input.addEventListener("blur", () => {
    inputContainer.classList.remove("input-container-focus")
    inputContainer.classList.add("input-container")


})


function getClipLink() {
    alert(input.value)
}

input.addEventListener("submit", () => alert('eae'))