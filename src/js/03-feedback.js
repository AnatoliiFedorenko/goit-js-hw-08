import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const Storage = 'feedback-form-state';

const result = () => JSON.parse(localStorage.getItem(Storage)) || {};

if (localStorage.getItem(Storage)) {
  const formData = result();
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}

form.addEventListener('input', throttle(saveData, 500));

function saveData(e) {
  const formData = result();
  formData[e.target.name] = e.target.value;
  localStorage.setItem(Storage, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  console.log(result());
  localStorage.removeItem(Storage);
}
