# Jogo de Adivinhação de Números

Este é um simples jogo de adivinhação onde o usuário deve adivinhar um número entre 1 e 100. O jogo fornece feedback ao usuário sobre suas tentativas, indicando se o palpite foi menor ou maior do que o número correto.

## Tecnologias Utilizadas

- HTML
- CSS
- JavaScript


## Como Usar

1. **Clonar o repositório:**
git clone https://github.com/seu-usuario/adivinhacao.git

2. **Navegar para o diretório do projeto:**
cd adivinhacao

3. **Abrir o arquivo `index.html` em um navegador:**
- Você pode arrastar e soltar o arquivo `index.html` em uma janela do navegador ou clicar duas vezes nele.

## Como Jogar

1. O número sorteado está entre 1 e 100.
2. Insira seu palpite no campo de texto e clique em "Enviar".
3. O jogo fornecerá feedback, informando se o seu palpite foi menor ou maior que o número correto.
4. Você pode ver suas tentativas menores e maiores listadas abaixo.

## Exemplo de Código

Aqui está um exemplo de como a lógica do jogo foi implementada em JavaScript:

```javascript
var numeroSorte = parseInt(Math.floor(Math.random() * 101));

var chuteUsuario = (document.getElementById("chute"));

function envie() {
 console.log(numeroSorte);

 if (chuteUsuario.value == numeroSorte) {
     document.getElementById("numeroCerto").innerHTML = "Parabéns, você acertou!";
 } else if (chuteUsuario.value < numeroSorte) {
     document.getElementById("menores").innerHTML += (chuteUsuario.value + " ");
 } else if (chuteUsuario.value > numeroSorte) {
     document.getElementById("maiores").innerHTML += (chuteUsuario.value + " ");
 }
}
