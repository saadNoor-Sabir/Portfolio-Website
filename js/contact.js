// After Html Paage Loaded these Function works

document.addEventListener("DOMContentLoaded", () => {
  // Dynamic parsing profiles to target data tags
  document.getElementById("contact-email").textContent = profile.email;
  document.getElementById("contact-phone").textContent = profile.phone;
  document.getElementById("contact-location").textContent = profile.location;
  const contactForm = document.getElementById("portfolioContactForm");
  const feedbackAlert = document.getElementById("form-feedback-alert");

  if (contactForm) {
    contactForm.addEventListener(
      "submit",
      (event) => {
        // If the browser identifies invalid inputs, prevent submission behavior
        if (!contactForm.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Form is valid! Prevent default refresh to process via JavaScript fetch/AJAX
          event.preventDefault();

          // Target structural message nodes to communicate operational states
          feedbackAlert.innerHTML = `
          <div class="alert alert-success border-0 shadow-sm rounded-3 d-flex align-items-center mb-4" role="alert">
            <i class="fa-solid fa-circle-check fs-5 me-2"></i>
            <div>Your secure routing message request was sent successfully!</div>
          </div>
        `;

          // Optional: Reset form fields and clear validation classes after delivery tracking
          contactForm.reset();
          contactForm.classList.remove("was-validated");
          return;
        }

        // Applies standard Bootstrap visual validation states to input rows dynamically
        contactForm.classList.add("was-validated");
      },
      false,
    );
  }
});
