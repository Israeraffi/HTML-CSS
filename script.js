const form = document.getElementById("form");
const span = document.querySelectorAll(".span");
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");

  const email = emailInput.value;
  const senha = senhaInput.value;

  let isValid = true;


  if (!validEmailRegex.test(email)) {
    mostrarErro(0, emailInput);
    isValid = false;
  } else {
    tirarErro(0, emailInput);
  }


  if (senha.length < 8) {
    mostrarErro(1, senhaInput);
    isValid = false;
  } else {
    tirarErro(1, senhaInput);
  }


  if (email === "teste@email.com" && senha === "senha123") {
    if (isValid) {
      alert("Login feito com sucesso!");
      window.location.href = "index2.html";
    }
  } else {

    if (isValid) {
      mostrarErro(2);
      emailInput.style.border = "2px solid red";
      senhaInput.style.border = "2px solid red";
    }
  }
});

function mostrarErro(index, input = null) {
  span[index].style.display = "block";
  if (input) {
    input.style.border = "2px solid red";
  }
}


function tirarErro(index, input) {
  span[index].style.display = "none";
  input.style.border = "2px solid green";
}


function Validemail() {
  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;

  if (validEmailRegex.test(emailValue)) {
    tirarErro(0, emailInput);
  } else {
    mostrarErro(0, emailInput);
  }
}

function validacion() {
  const senhaInput = document.getElementById("senha");
  const senha = senhaInput.value;

  if (senha.length < 8) {
    mostrarErro(1, senhaInput);
  } else {
    tirarErro(1, senhaInput);
  }
}