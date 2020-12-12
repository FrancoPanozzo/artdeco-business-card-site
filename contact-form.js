// Variables from each input field
const form = document.querySelector('#contact form');
const nameInput = document.querySelector('#name-field');
const emailInput = document.querySelector('#email-field');
const phoneInput = document.querySelector('#phone-field');
const subjectInput = document.querySelector('#subject-field');
const messageTextarea = document.querySelector('#message-field');

// Event handler
function handleSubmit(e) {
  e.preventDefault();
  const name = nameInput.value;
  const email = emailInput.value;
  const phone = phoneInput.value;
  const subject = subjectInput.value;
  const message = messageTextarea.value;
  const messageObject = { name, email, phone, subject, message };

  if (validateInput(messageObject)) send(messageObject);
  else handleInvalidInput(messageObject);

  nameInput.focus();
}

// Function to validate the data
function validateInput(messageObject) {
  // Basic check to see if any field is empty
  if (Object.values(messageObject).includes('')) return false;
  return true;
}

// Function to submit the data to the server
function send(messageObject) {
  console.log('SENT', messageObject);
  clear();
}

// Function to handle invalid inputs on submit
function handleInvalidInput(messageObject) {
  // do something...
  console.error('INVALID INPUT', messageObject);
}

// Function to clear up after a submit
function clear() {
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
  subjectInput.value = '';
  messageTextarea.value = '';
}

// Event listener
form.addEventListener('submit', handleSubmit);
