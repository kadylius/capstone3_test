const API_URL = "http://microbloglite.us-east-2.elasticbeanstalk.com";

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");

const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});
sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});


// Function to handle sign-up
async function signUp(event) {
    event.preventDefault();
    const username = document.getElementById('sign-up-username').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;

    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        if (response.ok) {
            window.location.href = 'home.html';
        } else {
            const data = await response.json();
            alert(`Sign Up Failed: ${data.message}`);
        }
    } catch (error) {
        alert('Sign In Failed: Network error');
    }
}

// Attach event listeners to the forms
document.getElementById('sign-in-form').addEventListener('submit', signIn);
document.getElementById('sign-up-form').addEventListener('submit', signUp);

const registerForm = document.querySelector("#register");

registerForm.onsubmit = function (event) {
    // Prevent the form from refreshing the page,
    event.preventDefault();

    // the input element in the form which has the ID of "username".
    const registerData = {
        username: registerForm.username.value,
        password: registerForm.password.value,
    }

    console.log('Register Data', registerData);
     register(registerData);
     
};