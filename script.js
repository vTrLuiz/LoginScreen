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
