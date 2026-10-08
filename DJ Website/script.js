const form = document.getElementById("booking-form");
const formMessage= document.getElementById("form-message");
const submitButton = form.querySelector('button[type="submit"]');
const loader = document.getElementById("form-loader");
const buttonText = submitButton.querySelector(".button-text");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    submitButton.disabled = true;

    const formData = new FormData(form);
    
    buttonText.style.display = "none";
    loader.classList.remove("loader-hidden")

    fetch(form.action, {
        method: "POST",
        body: formData,
        mode: "no-cors"
    })
    .then(function() {
        formMessage.textContent = "Your booking request has been sent!";
        form.reset();
        submitButton.disabled = false;
        loader.classList.add("loader-hidden");
        buttonText.style.display = "inline";
    })
    .catch(function(error) {
        formMessage.textContent = "Something went wrong. Please try again.";
        console.log(error);
        submitButton.disabled = false;
        loader.classList.add("loader-hidden");
        buttonText.style.display = "inline";
    })
});


