import "../css/form.css"

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.message.value.trim();

  if (email === "" || message === "") {
     alert("All form fields must be filled in");
  }else{
    let formData = {
      email: email,
      message: message
  };
  console.log(formData);
  form.reset();
}}
