// підключення стилів
import "../css/form.css"

// пошук елементів
const form = document.querySelector(".feedback-form");
const emailInput = form.querySelector('input');
const messageInput = form.querySelector('textarea');

// додавання слухачів
form.addEventListener('input', saveFormState);
form.addEventListener('submit', handleSubmit);

// запис данних до сховищя
function saveFormState() {
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

// перевірка на наявність у сховищі данних і підстановка їх до форми
window.addEventListener('DOMContentLoaded', () => {
  const savedFormState = localStorage.getItem('feedback-form-state');
  if (savedFormState) {
    const formState = JSON.parse(savedFormState);
    emailInput.value = formState.email;
    messageInput.value = formState.message;
  }
});

// перевірка і відправка данних та очищення форми і сховищя
function handleSubmit(event) {
  event.preventDefault();
  if (emailInput.value.trim() === "" || messageInput.value.trim() === "") {
    return alert("All form fields must be filled in") ;
  };
  const formState = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim()
  };
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
  console.log(formState);
}
