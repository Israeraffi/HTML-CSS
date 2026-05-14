const campos = document.getElementsByClassName("requered");
const form = document.getElementById("form");
const span = document.querySelectorAll(".span");
const validEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  validarNome();
  validarCPF();
  validarData();
  validarTel();
  validarEmail();
  validarSenha();
  confSenha();
});

function erro(index){
  campos[index].style.border = "2px solid red";
  span[index].style.display = "block";
}

function tirarErro(index){
  campos[index].style.border = "2px solid green";
  span[index].style.display = "none";
}

function capitalizarNome() {
  let input = document.getElementById("nome");
  input.value = input.value
    .toLowerCase()
    .replace(/\b\w/g, letra => letra.toUpperCase());
}

function validarNome(){
  if(campos[0].value.length < 3){
    erro(0)
  }else{
    tirarErro(0)
  }
}

function validarCPF(){
  if(campos[1].value.length < 14){
    erro(1)
  }else{
    tirarErro(1)
  }
}

function validarData(){
  if(campos[2].value.length < 10){
    erro(2)
  }else{
    tirarErro(2)
  }
}

function validarTel(){
  if(campos[3].value.length < 14){
    erro(3)
  }else{
    tirarErro(3)
  }
}

function validarEmail(){
  if (!validEmailRegex.test(campos[4].value)) {
    erro(4);
  } else {
    tirarErro(4);
  }
}

function validarSenha(){

  if (campos[5].value.length < 8) {
    erro(5)
  } else {
    tirarErro(5)
    confSenha()
  }
}

function confSenha() {
  if (campos[6].value === campos[5].value && campos[5].value.length >= 8) {
    tirarErro(6);
  } else {
    erro(6);
  }
}

campos[1].addEventListener('keypress', () =>{
  let inputlength = campos[1].value.length

  if(inputlength === 3 || inputlength === 7){
    campos[1].value += '.'
  }else if(inputlength === 11){
    campos[1].value += '-'
  }
}
)

campos[2].addEventListener('keypress', () =>{
  let inputlength = campos[2].value.length

  if(inputlength === 2){
    campos[2].value += '/'
  }else if(inputlength === 5){
    campos[2].value += '/'
  }
}
)

campos[3].addEventListener('keypress', () =>{
  let inputlength = campos[3].value.length

  if(inputlength === 0){
    campos[3].value += '('
  }else if(inputlength === 3){
    campos[3].value += ')'
  }else if(inputlength === 9){
    campos[3].value += '-'
  }
}
)