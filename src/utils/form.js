const queries = {
  form: document.querySelector(".my-form"),
  status: document.querySelector(".my-form-status"),
};

const handleSubmit = (event) => {
  event.preventDefault();
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: queries.form.method,
    body: data,
    headers: { Accept: "application/json" },
  }).then((response) => {
    if (response.ok) {
      queries.status.innerHTML = "Thanks for your submission!";
      queries.form.reset();
    } else {
      response.json().then((data) => {
        if (Object.hasOwn(data, "errors")) {
          queries.status.innerHTML = data["errors"]
            .map((error) => error["message"])
            .join(", ");
        } else {
          queries.status.innerHTML =
            "Oops! There was a problem submitting your form";
        }
      });
    }
  });
  if (error) {
    queries.status.innerHTML = "Oops! There was a problem submitting your form";
    throw new Error(error);
  }
};

module.exports = { handleSubmit };
