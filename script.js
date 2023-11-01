document.querySelector('form').addEventListener('submit', function (event) {
    var password = document.getElementById('pass-word').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        event.preventDefault();
        document.getElementById('passwordMatchMessage').textContent = 'Passwords do not match';
    } else {
        document.getElementById('passwordMatchMessage').textContent = '';
    }
});
