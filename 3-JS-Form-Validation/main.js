const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

function error(input, message) {
    input.className = "form-control is-invalid"
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback";
}
function success(input) {
    input.className = "form-control is-valid"
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
        success(input);
    } else {
        error(input, "Please enter a valid email address.");
    }
}

function checkRequired(inputs) {
    inputs.forEach(function (input) {
        if (input.value === '') {
            error(input, `Please enter your ${input.id}.`)
        } else {
            success(input)
        }
    })
}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `The ${input.id} must be at least ${min} characters.`);
    } else if (input.value.length > max) {
        error(input, `The ${input.id} must be less than ${max} characters.`);
    } else {
        success(input);
    }
}

function checkPasswords(pass, cpass) {
    if (pass.value !== cpass.value) {
        error(cpass, "Passwords do not match.");
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    checkRequired([username, email, password, confirmPassword]);
    checkEmail(email);
    checkLength(username, 5, 15);
    checkLength(password, 8, 12);
    checkPasswords(password, confirmPassword);
})