// Declearing a variable
let submitButton = document.querySelector(".submit-button");

//Get Access to DOM and Also Adding EventListener
window.onload = function () {
    let emailAddress = document.querySelector("#email");
    emailAddress.addEventListener('keyup', (e) => {
        if(emailAddress.value.includes(" ")) {
            e.preventDefault();
            emailAddress.style.border="solid red 2px";
            alert("No spaces are allowed in your e-mail");
        } else {
            emailAddress.style.border=""
        };
    });
};

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const fullName = document.querySelector("#fullName").value;
    alert(`${fullName} Your Submission Was Successful Thank You!`);
});
 