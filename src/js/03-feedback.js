import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const Storage = 'feedback-form-state';

if (localStorage.getItem(Storage)) {
  const formData = JSON.parse(localStorage.getItem(Storage));
  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}

form.addEventListener('input', throttle(saveData, 500));

function saveData(e) {
  const formData = JSON.parse(localStorage.getItem(Storage)) || {};
  formData[e.target.name] = e.target.value;
  localStorage.setItem(Storage, JSON.stringify(formData));
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault;
  e.currentTarget.reset();
  localStorage.removeItem(Storage);
}
