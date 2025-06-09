document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('success-message');

    // Clear previous errors and messages
    nameError.innerText = '';
    emailError.innerText = '';
    messageError.innerText = '';
    successMessage.innerText = '';

    // Validate name
    if (name.value.trim() === '') {
        nameError.innerText = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        emailError.innerText = 'Email is required.';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        emailError.innerText = 'Invalid email format.';
        isValid = false;
    }

    // Validate message
    if (message.value.trim() === '') {
        messageError.innerText = 'Message is required.';
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {
        successMessage.innerText = 'Form submitted successfully!';
    }
});
