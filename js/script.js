let email = document.querySelector('.input');
let good = document.querySelector('.true');
let error = document.querySelector('.error');
let submitButton = document.querySelector('.submit');

console.log(email);

function validateEmail(test) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if(emailRegex.test(test)){
        email.classList.add('border-true');
        
        error.classList.add('hide');
        good.classList.remove('hide');
    }
    else {
        email.classList.add('border-false');
        
        good.classList.add('hide');
        error.classList.remove('hide');
    }
}


email.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        validateEmail(email.value);
    }
    else {
        email.classList.remove('border-true');
        email.classList.remove('border-false');
        error.classList.add('hide');
        good.classList.add('hide');
    }
});
submitButton.addEventListener("click", function(event) {
    validateEmail(email.value);
});
