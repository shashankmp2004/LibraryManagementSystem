document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('errorMessage');

    // Simple form validation
    if (!email.includes('@')) {
        errorMessage.textContent = 'Please enter a valid email address.';
        return;
    }

    if (password.length < 6) {
        errorMessage.textContent = 'Password must be at least 6 characters long.';
        return;
    }

    // If validation passes
    errorMessage.textContent = '';
    alert('Login successful!');
    window.location.href = 'index.html'; // Redirect to home page
});
