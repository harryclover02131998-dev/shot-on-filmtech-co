// contact.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('button[type="submit"]');
    const status = document.querySelector("#formStatus");

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (status) {
        status.textContent = "Thank you! Your message has been sent.";
        status.className = "success";
      }
      form.reset();
    } catch (err) {
      if (status) {
        status.textContent = "Something went wrong. Please try again.";
        status.className = "error";
      }
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
  });
});
