const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  if (name === "" || email === "" || message === "") {
    alert("Please fill all fields.");
    return;
  }

  alert("Thank you! Your message has been sent.");

  form.reset();
});
