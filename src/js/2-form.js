const FEEDBACK_STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

let formObject = {};

formRef.addEventListener('input', event => {
  formObject[event.target.name] = event.target.value.trim();
  localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formObject));
});

formRef.addEventListener('submit', event => {
  const emailValue = formRef.elements.email.value;
  const messageValue = formRef.elements.message.value;
  event.preventDefault();
  if (!emailValue || !messageValue) {
    alert('All fields must be filled in');
  } else {
    const storageInfo = JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY));
    localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    formRef.reset();
    console.log(storageInfo);
  }
});

try {
  const storageValue = localStorage.getItem(FEEDBACK_STORAGE_KEY);
  if (storageValue) {
    formObject = JSON.parse(storageValue);
    for (let key in formObject) {
      formRef.elements[key].value = formObject[key];
    }
  }
} catch (error) {
  console.error('PARSE ERROR');
}





