const emailInput = document.getElementById('exampleFormControlInput1');
const estiloMakeupInput = document.getElementById('exampleFormControlTextarea1');
const enviarButton = document.querySelector('.btn');

enviarButton.addEventListener('click', function() {
  const email = emailInput.value;
  const estiloMakeup = estiloMakeupInput.value;

  console.log('Email:', email);
  console.log('Estilo de Make up preferido:', estiloMakeup);
});
