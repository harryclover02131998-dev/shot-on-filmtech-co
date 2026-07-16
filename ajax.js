// ajax.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('form[data-ajax]').forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('[type="submit"]');
      const status = form.querySelector('.form-status');

      btn.disabled = true;
      const original = btn.textContent;
      btn.textContent = 'Sending...';

      try {
        const response = await fetch(form.action, {
          method: form.method || 'POST',
          body: new FormData(form),
          headers: { 'X-Requested-With': 'XMLHttpRequest' }
        });

        if (!response.ok) throw new Error('Request failed');

        if (status) status.textContent = 'Message sent successfully.';
        form.reset();
      } catch (err) {
        if (status) status.textContent = 'Failed to send message.';
        console.error(err);
      } finally {
        btn.disabled = false;
        btn.textContent = original;
      }
    });
  });
});
