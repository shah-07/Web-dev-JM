document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const emailValue = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const passwordValue = passwordField.value;
    // make a condition
    if(emailValue == 'sontan@baap.com' && passwordValue == 'secret'){
        window.location.href = 'banking.html';
    }
})

