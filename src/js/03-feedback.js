import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';

const dataFeedbackForm = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('[name="email"]'),
  message: document.querySelector('[name="message"]'),
};

console.log(dataFeedbackForm);

const formData = deserializeData(readLocalStorageKey(localStorageKey));

if (formData) {
  dataFeedbackForm.email.value = formData.email || '';
  dataFeedbackForm.message.value = formData.message || '';
}

// FUNCTIONS

function serializeData(data) {
  return JSON.stringify(data);
}

function deserializeData(data) {
  let deserializedData;
  console.log(deserializedData);
  try {
    deserializedData = JSON.parse(data);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
  return deserializedData;
}

function createFormState(key, value) {
  const formState = deserializeData(readLocalStorageKey(localStorageKey)) || {};
  console.log(formState);
  formState[key] = value;
  localStorage.setItem(localStorageKey, serializeData(formState));
}

function readLocalStorageKey(key) {
  return localStorage.getItem(key);
}

function deleteLocalStorageKey(key) {
  localStorage.removeItem(key);
}
// EVENT LISTENERS

const timeFunction = target => {
  form.addEventListener('input', event => {
    const { email, message } = event.currentTarget.elements;
    localStorage.setItem(
      localStorageKey,
      serializeData({ email: email.value, message: message.value })
    );
  });
};

dataFeedbackForm.form.addEventListener('input', throttle(timeFunction, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  deleteLocalStorageKey(localStorageKey);
  form.reset();
});
