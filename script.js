const form = document.querySelector("form");
let errorText = document.getElementById("error-text");

form.addEventListener("submit", e => {
    let password1 = document.getElementById("password");
    let password2 = document.getElementById("confirm-password");
    if(password1.value !== password2.value) {
        e.preventDefault();
        password1.classList.add("error");
        password2.classList.add("error");
        errorText.style.display = "block";
        return false;
    }
})

