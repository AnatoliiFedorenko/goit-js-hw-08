import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE = 'feedback-form-state';

const result = () => JSON.parse(localStorage.getItem(STORAGE)) || {};

if (localStorage.getItem(STORAGE)) {
  const formData = result();
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}

form.addEventListener('input', throttle(saveData, 500));

function saveData(e) {
  const formData = result();
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;

  const result = {
    email: email.value,
    message: message.value,
  };
  console.log(result);

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE);
}
