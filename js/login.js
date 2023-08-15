// step 1- add click event handler with the submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  // step 2- get the email address inside the email input
  // always remember to use .value to get text form an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //    step 3 - get password
  // 3.1 - set id on the HTML element
  //   3.2 - get the element
  //  3.3 - get the value form the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  //   DANGER : DO NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
  // STEP 4- verify email and password
  if (email === "sontan@baap.com" && password === "secret") {
  window.location.href = 'bank.html'
  } else {
    alert("invalid user");
  }
});
