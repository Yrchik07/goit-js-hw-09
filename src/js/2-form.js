import "../css/form.css"

const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');

emailInput.addEventListener('input', saveFormState);
messageInput.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

function saveFormState() {
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}


window.addEventListener('DOMContentLoaded', () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
});

function handleSubmit(event) {
  event.preventDefault();
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log(formState);
}
