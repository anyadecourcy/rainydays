const form = document.querySelector(".contact-us");
const firstName = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const number = document.querySelector("#number");
const numberError = document.querySelector("#numberError");


function validateForm (event){
    event.preventDefault();

    if (checkLength(firstName.value, 4) === true) {
        nameError.style.display = "none";
    } else {
        nameError.style.display = "block";
    }

    if (validateNumber(number.value)===true){
        numberError.style.display="none";
    }else{
        numberError.style.display = "block";
    }
    
   if(validateEmail(email.value)===true){
       emailError.style.display = "none";
   }else {
       emailError.style.display = "block";
   }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

function validateNumber (number){
    const regEx = /^\d{8}$/;
    const patternMatches = regEx.test(number);
    return patternMatches;
}