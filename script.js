function submission(){
    let password = passwordField.value;
    let confirmPassword =  confirmPasswordField.value;
    
    if (password === confirmPassword && password.length !=0&&password.length>4){
        let successMsg = 'Form successfully submitted!'
        greyishTextbox.appendChild(msgBox)
        msgBox.style.color = '#228c22'
        msgBox.innerHTML = '';
        msgBox.innerHTML = successMsg;
        return true;
    }
    else if (password.length == 0){
        greyishTextbox.appendChild(msgBox)
        msgBox.innerHTML = '';
        msgBox.style.color = 'red'
        msgBox.innerHTML = 'You\'ve left the password field empty.\n Fill it and try again!';
        return false;
    }
    else if (password.length<5){
        greyishTextbox.appendChild(msgBox)
        msgBox.innerHTML = '';
        msgBox.style.color = 'red'
        msgBox.innerHTML = 'Your password is smaller than the required length of 5 characters. Kindly increase the strength of your password! \n(Recommended size: >=5 characters)';
        return false;
    }
    else if (password != confirmPassword && password.length !=0){
        greyishTextbox.appendChild(msgBox)
        msgBox.innerHTML = '';
        msgBox.style.color = 'red'
        msgBox.innerHTML = 'Passwords don\'t match. Try again!';
        return false;
    }

}

const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const submit = document.getElementById('submitButton');
const greyishTextbox = document.getElementById('promotionalText')
const msgBox = document.createElement('div');
msgBox.style.fontSize = '25px';
msgBox.style.marginTop = '3%';

submit.addEventListener('click', submission);