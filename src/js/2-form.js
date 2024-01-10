const FEEDBACK_STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');

let formObject = {};

 function saveToLocalStorage() {
        const formData = {
            email: formRef.email.value.trim(),
            message: formRef.message.value.trim()
        };
        localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(formData));
    }
formRef.addEventListener('input', saveToLocalStorage);

    const savedData = localStorage.getItem(FEEDBACK_STORAGE_KEY);
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formRef.email.value = parsedData.email;
        formRef.message.value = parsedData.message;
    }

formRef.addEventListener('submit', event => {
  const emailValue = formRef.elements.email.value;
  const messageValue = formRef.elements.message.value;
  event.preventDefault();
  
  if (emailValue && messageValue) {
            console.log({ email: emailValue, message: messageValue });
            localStorage.removeItem('feedback-form-state');
            formRef.reset();
        } else {
            alert('All fields must be filled in');
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
