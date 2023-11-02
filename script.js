let btnSenha = document.querySelector("#verSenha");
let btnConfirmarSenha = document.querySelector("#verConfirmarSenha");

function Cadastrar() {}

btnSenha.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

btnConfirmarSenha.addEventListener("click", () => {
  let inputConfirmarSenha = document.querySelector("#confirmarSenha");
  if (inputConfirmarSenha.getAttribute("type") == "password") {
    inputConfirmarSenha.setAttribute("type", "text");
  } else {
    inputConfirmarSenha.setAttribute("type", "password");
  }
});