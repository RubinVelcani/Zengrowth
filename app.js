import validator from 'validator';

const dropDownButton = document.querySelector('#drop-down');
const liftUpButton = document.querySelector('#lift-up');
const mobileMenu = document.querySelector('.mobile-menu');
const formContainer = document.querySelector('.form-container');
const submitButton = document.querySelector('#submitButton');

let checkedServices = [];

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

// function grabCheckValues() {
//   for (var checkbox of markedCheckbox) {
//     if (checkbox.checked)
//       checkedServices.push(checkbox.value);
//     console.log(checkedServices);
//   }
// }

function validateFirst() {

  const firstNameInput = document.querySelector('#firstName').value;
  const alertFirstNameInput = document.querySelector("#alertFirstNameInput");

  if (/^[a-zA-Z ]+$/.test(firstNameInput)) {

    alertFirstNameInput.classList.remove('block')
    alertFirstNameInput.classList.add('hidden')

    return (true);
  }
  alertFirstNameInput.classList.remove('hidden')
  alertFirstNameInput.classList.add('block');

  return (false);
}

function validateLast() {

  const lastNameInput = document.querySelector('#lastName').value;
  const alertLastNameInput = document.querySelector("#alertLastNameInput");


  if (/^[a-zA-Z ]+$/.test(lastNameInput)) {

    alertLastNameInput.classList.remove('block')
    alertLastNameInput.classList.add('hidden')

    return (true);
  }
  alertLastNameInput.classList.remove('hidden')
  alertLastNameInput.classList.add('block');

  return (false);
}

function validateEmail() {

  const emailInput = document.querySelector('#email').value;
  const alertEmailInput = document.querySelector('#alertEmailInput');

  if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailInput)) {

    alertEmailInput.classList.remove('block')
    alertEmailInput.classList.add('hidden')

    return (true)
  }
  alertEmailInput.classList.remove('hidden')
  alertEmailInput.classList.add('block')

  return (false)
}

function validatePhoneNumber() {

  const prefixInput = document.querySelector('#prefixInput').value;
  const phoneNumberInput = document.querySelector('#phoneNumberInput').value;
  const fullNumber = prefixInput + phoneNumberInput;
  const alertPhoneNumberInput = document.querySelector('#alertPhoneNumberInput');

  if (/^[+]*[0-9]{1,4}[0-9]{7}$/.test(fullNumber)) {

    alertPhoneNumberInput.classList.remove('block')
    alertPhoneNumberInput.classList.add('hidden')

    return (true)
  }
  alertPhoneNumberInput.classList.remove('hidden')
  alertPhoneNumberInput.classList.add('block')

  return (false)
}

function validateCheckboxes () {

  const checkboxInput = document.querySelectorAll('input[name=services]:checked');
  const alertCheckboxInput = document.querySelector('#alertCheckboxInput');
  const checkedCheckboxInput = [];
  checkboxInput.forEach(box => {
    checkedCheckboxInput.push(box.value)
  });

  !checkedCheckboxInput.length ? (
    alertCheckboxInput.classList.remove('hidden'),
    alertCheckboxInput.classList.add('block')
  ) : (
    alertCheckboxInput.classList.remove('block'),
    alertCheckboxInput.classList.add('hidden')
  )
}

function validateBudgetSelect () {

  const budgetSelectInput = document.querySelector('#budgetSelectInput');
  const alertBudgetSelectInput = document.querySelector('#alertBudgetSelectInput');

  !budgetSelectInput.value ? (
    alertBudgetSelectInput.classList.remove('hidden'),
    alertBudgetSelectInput.classList.add('block')
  ) : (
    alertBudgetSelectInput.classList.remove('block'),
    alertBudgetSelectInput.classList.add('hidden')
  )
}

function validateForm() {

  submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    validateFirst();
    validateLast();
    validateEmail();
    validatePhoneNumber();
    validateCheckboxes();
    validateBudgetSelect();
  })
}

dropDownMenu();
liftUpMenu();
validateForm();