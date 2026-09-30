let animais = [
    {
        palavra: "Gato",
        imagem: "imagens/gato.jpg"
    },
    {
        palavra: "Cachorro",
        imagem: "imagens/cachorro.jpg"
    },
    {
        palavra: "Leão",
        imagem: "imagens/leão.jpg"
    },
    {
        palavra: "Elefante",
        imagem: "imagens/elefante.jpg"
    }
];

let botao = document.querySelector("button");
let resultado = document.querySelector("#resultado");
let imagem = document.querySelector("#imagem");


botao.addEventListener("click", function() {

    let numero = Math.floor(Math.random() * animais.length);
    resultado.textContent = animais[numero].palavra;
    imagem.src = animais[numero].imagem;


});