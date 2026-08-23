// Captura dos elementos
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
let botao = document.getElementById("inscrever");
let telefone = document.getElementById("telefone");
let email = document.getElementById ("email");
// ERRO: elemento possui outro id no HTML
let mensagem = document.getElementById("mensagem");
// Evento do botão
botao.addEventListener("click", function () {
 let nomeDigitado = nome.value;
 let idadeDigitada = idade.value;
 let emailDigitado = email.value;
  let telefoneDigitado = telefone.value; 
 // ERRO: condição incompleta
 if (nomeDigitado == "" || idadeDigitada == "" || emailDigitado =="" || telefoneDigitado =="") {
 mensagem.textContent =
 "Preencha todos os campos antes de continuar.";
 }
 else if (idadeDigitada >= 18) {
 mensagem.textContent =
 "Inscrição realizada com sucesso!";
 }
 else {
 mensagem.textContent = 
 "É necessária autorização de um responsável.";
 } 
});