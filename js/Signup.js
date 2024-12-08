document.getElementById("signUpForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var emailError = document.getElementById("emailError");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var confirmPasswordError = document.getElementById("confirmPasswordError");
    var isValid = true;

    emailError.textContent = "";
    usernameError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (!email) {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
    }

    if (!username) {
        usernameError.textContent = "Username is required";
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    }

    if (!confirmPassword) {
        confirmPasswordError.textContent = "Please confirm your password";
        isValid = false;
    } else if (password !== confirmPassword) {
        confirmPasswordError.textContent = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
        // Redirect to home page
        window.location.href = "Home.html";
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}