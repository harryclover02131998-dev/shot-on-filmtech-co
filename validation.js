// validation.js
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form[data-validate]');

  forms.forEach(form => {
    form.addEventListener('submit', e => {
      let valid = true;

      form.querySelectorAll('[required]').forEach(field => {
        const error = field.nextElementSibling?.classList.contains('error-message')
          ? field.nextElementSibling
          : null;

        if (!field.value.trim()) {
          valid = false;
          field.classList.add('is-invalid');
          if (error) error.textContent = 'This field is required.';
        } else if (
          field.type === 'email' &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
        ) {
          valid = false;
          field.classList.add('is-invalid');
          if (error) error.textContent = 'Please enter a valid email.';
        } else {
          field.classList.remove('is-invalid');
          if (error) error.textContent = '';
        }
      });

      if (!valid) e.preventDefault();
    });
  });
});
