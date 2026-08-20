// Captura dos elementos
// ERRO: não existe nenhum elemento com id "nome"
let nome = document.getElementById("nome");
let idade = document.getElementById("idade");
// ERRO: botão possui outro id no HTML
let botao = document.getElementById("botao");
// ERRO: elemento possui outro id no HTML
let mensagem = document.getElementById("mensagem");
// Evento do botão
botao.addEventListener("click", function () {
 let nomeDigitado = nome.value;
 let idadeDigitada = idade.value;
 // ERRO: condição incompleta
 if (nomeDigitado == "" && idadeDigitada == "") {
 mensagem.textContent =
 "Preencha todos os campos antes de continuar.";
 }
 // ERRO: operador incorreto
 else if (idadeDigitada > 18) {
 mensagem.textContent =
 "Inscrição realizada com sucesso!";
 }
 else {
 mensagem.textContent =
 "É necessária autorização de um responsável.";
 }
});