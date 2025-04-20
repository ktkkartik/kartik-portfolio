const form = document.getElementById("contact-form");
const popup = document.getElementById("thankPopup");
const userNameSpan = document.getElementById("userName");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const action = form.action;

  fetch(action, {
    method: "POST",
    body: data,
    headers: { Accept: "application/json" },
  })
  .then((response) => {
    if (response.ok) {
      form.reset();
      userNameSpan.textContent = name;
      popup.style.display = "flex";
    } else {
      alert("Oops! There was a problem submitting your form.");
    }
  })
  .catch(() => {
    alert("Something went wrong. Please try again later.");
  });
});

function closePopup() {
  popup.style.display = "none";
}