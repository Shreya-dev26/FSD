function validateForm() {
    // Clear previous error message
    document.getElementById("errorMessage").textContent = "";

    // Get form values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Check if fields are empty
    if (!username || !email || !phone || !password || !confirmPassword) {
        displayError("All fields are required.");
        return false;
    }

    // Validate phone number
    if (!/^\d{10}$/.test(phone)) {
        displayError("Phone number must be exactly 10 digits.");
        return false;
    }

    // Validate password
    if (password.length < 7 || 
        !/[A-Z]/.test(password) || 
        !/[0-9]/.test(password) || 
        !/[&$#@]/.test(password)) {
        displayError("Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character (&,$,#,@).");
        return false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        displayError("Passwords do not match.");
        return false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        displayError("Please enter a valid email address.");
        return false;
    }

    return true;
}

function displayError(message) {
    document.getElementById("errorMessage").textContent = message;
}
