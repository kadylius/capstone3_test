"use strict";

const apiBaseURL = "http://microbloglite.us-east-2.elasticbeanstalk.com";




const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});



const registerForm = document.querySelector("#register");

registerForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    event.preventDefault();

    // the input element in the form which has the ID of "username".
    const registerData = {
        username: registerForm.username.value,
        fullname: registerForm.firstname.value + ' ' + registerForm.lastname.value,
        password: registerForm.password.value,
    }

    console.log('Register Data', registerData);
     register(registerData);
     
};