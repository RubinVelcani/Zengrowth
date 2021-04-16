import validator from 'validator';

const dropDownButton = document.querySelector('#drop-down');
const liftUpButton = document.querySelector('#lift-up');
const mobileMenu = document.querySelector('.mobile-menu');
const formContainer = document.querySelector('.form-container');
const submitButton = document.querySelector('#submitButton');
let validationCounter = 0;

function dropDownMenu() {
  dropDownButton.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.add('mobile-style');
    dropDownButton.classList.toggle('hidden');
    liftUpButton.classList.toggle('hidden');
  })
}

function liftUpMenu() {
  liftUpButton.addEventListener('click', function (e) {
    e.preventDefault();
    mobileMenu.classList.remove('mobile-style');
    dropDownButton.classList.toggle('hidden');
    liftUpButton.classList.toggle('hidden');
  })
}

function validateFirst() {

  const firstNameInput = document.querySelector('#firstName');
  const alertFirstNameInput = document.querySelector("#alertFirstNameInput");

  if (/^[a-zA-Z ]+$/.test(firstNameInput.value)) {

    alertFirstNameInput.classList.remove('block');
    alertFirstNameInput.classList.add('hidden');
    firstNameInput.classList.add('correct-input-border');
    validationCounter ++;

    return true;
  }
  alertFirstNameInput.classList.remove('hidden');
  alertFirstNameInput.classList.add('block');
  firstNameInput.classList.add('error-border');

  return false;
}

function validateLast() {

  const lastNameInput = document.querySelector('#lastName');
  const alertLastNameInput = document.querySelector("#alertLastNameInput");


  if (/^[a-zA-Z ]+$/.test(lastNameInput.value)) {

    alertLastNameInput.classList.remove('block');
    alertLastNameInput.classList.add('hidden');
    lastNameInput.classList.add('correct-input-border');
    validationCounter ++;


    return true;
  } else {
    alertLastNameInput.classList.remove('hidden');
    alertLastNameInput.classList.add('block');
    lastNameInput.classList.add('error-border');

    return false;
  }
}

function validateEmail() {

  const emailInput = document.querySelector('#email');
  const alertEmailInput = document.querySelector('#alertEmailInput');

  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput.value)) {

    alertEmailInput.classList.remove('block');
    alertEmailInput.classList.add('hidden');
    emailInput.classList.add('correct-input-border');
    validationCounter ++;

    return true;
  } else {
    alertEmailInput.classList.remove('hidden');
    alertEmailInput.classList.add('block');
    emailInput.classList.add('error-border');

    return false;
  }
}

function validatePhoneNumber() {

  const prefixInput = document.querySelector('#prefixInput');
  const phoneNumberInput = document.querySelector('#phoneNumberInput');
  const fullNumber = prefixInput.value + phoneNumberInput.value;
  const alertPhoneNumberInput = document.querySelector('#alertPhoneNumberInput');

  if (/^[+]*[0-9]{1,4}[0-9]{7}$/.test(fullNumber)) {

    alertPhoneNumberInput.classList.remove('block')
    alertPhoneNumberInput.classList.add('hidden')
    phoneNumberInput.classList.add('correct-input-border');
    validationCounter ++;

    return (true)
  }
  alertPhoneNumberInput.classList.remove('hidden')
  alertPhoneNumberInput.classList.add('block')
  phoneNumberInput.classList.add('error-border');

  return (false)
}

function validateCheckboxes() {

  const checkboxInput = document.querySelectorAll('input[name=services]:checked');
  const alertCheckboxInput = document.querySelector('#alertCheckboxInput');
  const checkedCheckboxInput = [];
  checkboxInput.forEach(box => {
    checkedCheckboxInput.push(box.value)
  });

  if (!checkedCheckboxInput.length) {
    alertCheckboxInput.classList.remove('hidden');
    alertCheckboxInput.classList.add('block');
    return true;

  } else {
    alertCheckboxInput.classList.remove('block');
    alertCheckboxInput.classList.add('hidden');
    checkboxInput.classList.add('correct-input-border');
    validationCounter ++;

    return false;
  }
}

function validateBudgetSelect() {

  const budgetSelectInput = document.querySelector('#budgetSelectInput');
  const alertBudgetSelectInput = document.querySelector('#alertBudgetSelectInput');

  if(!budgetSelectInput.value) {
    alertBudgetSelectInput.classList.remove('hidden');
    alertBudgetSelectInput.classList.add('block');
    budgetSelectInput.classList.add('error-border');

    return true
    
   } else {
    alertBudgetSelectInput.classList.remove('block');
    alertBudgetSelectInput.classList.add('hidden');
    budgetSelectInput.classList.add('correct-input-border');
    validationCounter ++;

    return false
   }
}

function validateForm() {
  validateFirst();
  validateLast();
  validateEmail();
  validatePhoneNumber();
  validateCheckboxes();
  validateBudgetSelect();
}

function validateCheck() {

  const displayForm = document.querySelector('.form-container-pending');
  const displayCard = document.querySelector('.card-pending');

  validateForm();


  let validationCheck = false;

  validationCounter < 6 ? validationCheck = false : validationCheck = true;
  validationCounter = 0;

  validationCheck ? (

    displayForm.classList.add('form-container-sucess'),
    displayCard.classList.add('card-success')
  ) : (
    displayForm.classList.add('form-container-pending'),
    displayCard.classList.add('card-pending')
  )
}

function toggleCheck() {
  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    validateCheck();
  }
  )
}

dropDownMenu();
liftUpMenu();
toggleCheck();