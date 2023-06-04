const forma = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const mess = document.querySelector('textarea[name="message"]');

const delay = require('lodash.throttle');
fillingFields() 
forma.addEventListener('input', delay((setLocalStorage), 500))
function setLocalStorage(event)

{

    const formData =
    {
        localEmail: email.value,
        localMess:mess.value
    }

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));

}

forma.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  if (email.value === null || mess.value === null || email.value === '' || mess.value === '') {
    console.log(email.value);
    alert('There are empty fields')
  } else {
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    e.preventDefault()
    e.currentTarget.reset()
    localStorage.clear("feedback-form-state")
  }
}

function fillingFields() {

    let storageData = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (storageData) {
        email.value = storageData.localEmail
        mess.value = storageData.localMess
    }
}