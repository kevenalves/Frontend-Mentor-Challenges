const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const sucessForm = document.querySelector('.sucessForm');

let FIRSTNAMETRUE = false;
let LASTNAMETRUE = false;
let EMAILTRUE = false;
let PASSWORDTRUE = false;
let PASSWORD2TRUE = false;


form.addEventListener('submit', e => {
	e.preventDefault();
	
    checkInputs();

    if (FIRSTNAMETRUE && LASTNAMETRUE && EMAILTRUE && PASSWORDTRUE && PASSWORD2TRUE) {
        sucessForm.className = 'sucessForm active';
    } else {
        return
    }

});

function checkInputs() {
    checkFirstName();
    checkLastName();
    checkEmail();
    checkPassword();
    checkPassword2();
}

function checkFirstName(){
    const firstNameValue = firstName.value.trim();

    if(firstNameValue === '') {
		setErrorFor(firstName, 'First name cannot be blank');
        FIRSTNAMETRUE = false;
	} else if (firstNameValue.length <= 2) {
        setErrorFor(firstName, 'First name invalid');
        FIRSTNAMETRUE = false;
    } else {
		setSuccessFor(firstName);
        FIRSTNAMETRUE = true;
	}
}

function checkLastName(){
    const lastNameValue = lastName.value.trim();

    if(lastNameValue === '') {
		setErrorFor(lastName, 'Last name cannot be blank');
        LASTNAMETRUE = false;
	} else if (lastNameValue.length <= 2) {
        setErrorFor(lastName, 'Last name invalid');
        LASTNAMETRUE = false;
    } else {
		setSuccessFor(lastName);
        LASTNAMETRUE = true;
	}
}

function checkEmail(){
    const emailValue = email.value.trim();

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        EMAILTRUE = false;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        EMAILTRUE = false;
	} else {
		setSuccessFor(email);
        EMAILTRUE = true;
	}
}

function checkPassword(){
    const passwordValue = password.value.trim();

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
        PASSWORDTRUE = false;
	} else if (passwordValue.length <= 7) {
		setErrorFor(password, 'Password of 8 characters or longer.');
        PASSWORDTRUE = false;
	} else {
        setSuccessFor(password);
        PASSWORDTRUE = true;
    }
}

function checkPassword2(){
    const password2Value = password2.value.trim();
    const passwordValue = password.value.trim();

    if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
        PASSWORD2TRUE = false;
	} else{
		setSuccessFor(password2);
        PASSWORD2TRUE = true;
	}
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}