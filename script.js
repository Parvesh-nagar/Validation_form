
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('validationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        // Clearing the  previous errors
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(error => error.textContent = '');

        // Getting the  form values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        let valid = true;

        // Full Name Validation
        if (fullName.length < 5) {
            document.getElementById('fullNameError').textContent = 'Full Name must be at least 5 characters.';
            valid = false;
        }

        // Email Validation
        if (!email.includes('@')) {
            document.getElementById('emailError').textContent = 'Enter a valid email.';
            valid = false;
        }

        // Phone Number Validation
        if (phoneNumber.length !== 10 || phoneNumber === '1234567890') {
            document.getElementById('phoneNumberError').textContent = 'Enter a valid 10-digit phone number.';
            valid = false;
        }

        // Password Validation
        const prohibitedPasswords = ['password', fullName];
        if (password.length < 8 || prohibitedPasswords.includes(password.toLowerCase())) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters and not be "password" or your name.';
            valid = false;
        }

        // Confirm Password Validation
        if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
            valid = false;
        }

        if (valid) {
            form.submit(); // If all validations pass, submit the form
        }
    });
});


