document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.signup-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-message');
    form.appendChild(errorContainer);

    form.addEventListener('submit', function(event) {
        let messages = [];

        if (usernameInput.value.length < 4) {
            messages.push('Username must be at least 4 characters long');
        }

        if (passwordInput.value.length < 8) {
            messages.push('Password must be at least 8 characters long');
        }

        if (messages.length > 0) {
            event.preventDefault();
            errorContainer.innerHTML = ''; // Clear previous error messages
            messages.forEach(function(message) {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = message;
                errorContainer.appendChild(errorMessage);
            });
        }
    });
});
