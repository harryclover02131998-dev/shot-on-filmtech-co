// newsletter.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]');
    const message = form.querySelector('.newsletter-message');

    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    if (!valid) {
      if (message) {
        message.textContent = "Please enter a valid email address.";
        message.className = "newsletter-message error";
      }
      return;
    }

    if (message) {
      message.textContent = "Thank you for subscribing!";
      message.className = "newsletter-message success";
    }

    form.reset();
  });
});
