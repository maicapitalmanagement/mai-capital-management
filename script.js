// Handle login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === "davemoore112" && password === "InGoditrust") {
        localStorage.setItem('username', username);
        window.location.href = 'dashboard.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});

// Display username and check login status
document.addEventListener('DOMContentLoaded', function() {
    const userNameDisplay = document.getElementById('userNameDisplay');
    const username = localStorage.getItem('username');

    if (userNameDisplay) {
        if (username) {
            userNameDisplay.textContent = username;
        } else {
            window.location.href = 'index.html';
        }
    }
});

// Handle transfer form submission (fake)
document.getElementById('transferForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const transferMessage = document.getElementById('transfer-message');
    transferMessage.textContent = 'Transfer processed successfully! (Demo only)';
    transferMessage.style.display = 'block';
    setTimeout(() => {
        transferMessage.style.display = 'none';
    }, 3000); // Hide message after 3 seconds
});

// Logout function
function logout() {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
}