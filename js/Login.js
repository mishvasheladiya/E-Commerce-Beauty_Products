document.getElementById("signInForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email validation
    if (!email) {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Please enter a valid email";
        isValid = false;
    }

    // Password validation
    if (!password) {
        passwordError.textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        isValid = false;
    }

    // If form is valid, proceed to home page
    if (isValid) {
        // Redirect to home page
        window.location.href = "Home.html";
    }
});

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}