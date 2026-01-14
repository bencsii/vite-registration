function SendForm() {
  const quote = document.getElementById("quote");
  const sendButton = document.getElementById("sendButton");
  const nameField = document.getElementById("nameField");
  const emailField = document.getElementById("emailField");
  const passField = document.getElementById("passField");
  sendButton.addEventListener("click", (e) => {
    e.preventDefault();
    quote.style.display = "block";

    nameField.value = "";
    emailField.value = "";
    passField.value = "";
  });
}

document.addEventListener('DOMContentLoaded', SendForm);
