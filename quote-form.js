// quote-form.js
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();

    const required = form.querySelectorAll('[required]');
    let valid = true;

    required.forEach(field => {
      field.classList.remove('is-invalid');
      if (!field.value.trim()) {
        field.classList.add('is-invalid');
        valid = false
      }
    });

    if (!valid) {
      alert('Please complete all required fields.');
      return;
    }

    alert('Thank you! Your quote request has been submitted.');
    form.reset();
  });
});
