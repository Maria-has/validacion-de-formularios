function emailValidation() {
  const form = document.getElementById('form');
  const emailInput = form.email;
  const emailConfirmInput = form.email_confirm;
  const emailError = document.getElementById('emailError');

  emailConfirmInput.addEventListener('input', () => {
    if (emailInput.value !== emailConfirmInput.value) {
      emailError.textContent = 'Email does not match.';
      emailError.style.color = '#d14539'; // Cambiar el color del texto a #d14539
      emailConfirmInput.style.backgroundColor = 'rgba(230, 169, 171, 0.5)'; // Cambiar el color de fondo
      emailConfirmInput.classList.add('error');
    } else {
      emailError.textContent = '';
      emailError.style.color = ''; // Restaurar el color del texto a su valor predeterminado
      emailConfirmInput.style.backgroundColor = ''; // Restaurar el color de fondo a su valor predeterminado
      emailConfirmInput.classList.remove('error');
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (emailInput.value !== emailConfirmInput.value) {
      emailError.textContent = 'Email does not match.';
      emailError.style.color = '#d14539'; // Cambiar el color del texto a #d14539
      emailConfirmInput.style.backgroundColor = 'rgba(230, 169, 171, 0.5)'; // Cambiar el color de fondo
      emailConfirmInput.classList.add('error');
    } else {
      emailError.textContent = '';
      emailError.style.color = ''; // Restaurar el color del texto a su valor predeterminado
      emailConfirmInput.style.backgroundColor = ''; // Restaurar el color de fondo a su valor predeterminado
      emailConfirmInput.classList.remove('error');
      form.submit();
    }
  });
}

window.onload = emailValidation;
