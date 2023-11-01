document.querySelector('form').addEventListener('submit', function (event) {
    var password = document.getElementById('pass-word').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var passwordMatchMessage = document.getElementById('passwordMatchMessage');

    if (password !== confirmPassword) {
        event.preventDefault();
        passwordMatchMessage.textContent = 'Passwords do not match!';
        passwordMatchMessage.classList.add('error-message');
    } else {
        passwordMatchMessage.textContent = '';
        passwordMatchMessage.classList.remove('error-message');
    }
});
