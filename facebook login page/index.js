function validateForm() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var emailError = document.getElementById('email-error');
    var passwordError = document.getElementById('password-error');

    // Reset previous error messages
    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    if (email === '') {
        emailError.innerHTML = 'Email is required.';
    } else if (!email.includes('@')) {
        emailError.innerHTML = 'Email should contain @.';
    }

    if (password === '') {
        passwordError.innerHTML = 'Password is required.';
    }

    // Check if any errors exist
    if (emailError.innerHTML !== '' || passwordError.innerHTML !== '') {
        return false;
    }

    // You can add more specific validation rules here if needed.

    return true;
}

function light() {
    // Add any logic related to the light function if needed.
}