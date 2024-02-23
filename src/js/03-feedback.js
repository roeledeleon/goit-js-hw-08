// ---------- IMPORT

import throttle from 'lodash.throttle';

// ---------- DECLARATIONS

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const dataFeedbackForm = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

const formData = deserializeData(readLocalStorageKey(localStorageKey)) || {};

if (formData) {
  dataFeedbackForm.email.value = formData.email || '';
  dataFeedbackForm.message.value = formData.message || '';
}

// ---------- FUNCTIONS

function serializeData(data) {
  return JSON.stringify(data);
}

function deserializeData(data) {
  let deserializedData;
  //console.log(deserializedData);
  try {
    deserializedData = JSON.parse(data);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  return deserializedData;
}

function readLocalStorageKey(key) {
  return localStorage.getItem(key);
}

function deleteLocalStorageKey(key) {
  localStorage.removeItem(key);
}

const timeFunction = () => {
  form.addEventListener('input', event => {
    const { email, message } = event.currentTarget.elements;
    localStorage.setItem(
      localStorageKey,
      serializeData({ email: email.value, message: message.value })
    );
  });
};

// ---------- EVENT LISTENERS

dataFeedbackForm.form.addEventListener('input', throttle(timeFunction, 500));

form.addEventListener('submit', event => {
  const { email, message } = event.currentTarget.elements;
  event.preventDefault();

  // check for null values
  if (email.value == '' || message.value == '') {
    alert('Enter both parameters!');
    form.reset();
    return;
  }

  console.log({ email: email.value, message: message.value });
  deleteLocalStorageKey(localStorageKey);
  form.reset();
});
