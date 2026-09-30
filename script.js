let animais = [
    {
        palavra: "Gato",
        imagem: "Imagens/Gato.jpg"
    },
    {
        palavra: "Cachorro",
        imagem: "Imagens/Cachorro.jpg"
    },
    {
        palavra: "Leão",
        imagem: "Imagens/Leão.jpg"
    },
    {
        palavra: "Elefante",
        imagem: "Imagens/Elefante.jpg"
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
