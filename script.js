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
let animaisDisponiveis = [...animais];

let botao = document.querySelector("button");
let resultado = document.querySelector("#resultado");
let imagem = document.querySelector("#imagem");

if(animaisDisponiveis.length === 0){
    resultado.textContent = "Todos os animais foram sorteados";
    imagem.src = "";
    return;
}

let reiniciar = document.querySelector("#reiniciar");
reiniciar.addEventListener("click", function()){
    animaisDisponiveis = [...animais];

    resultado.textContent = "";
    imagem.src= "";
}

botao.addEventListener("click", function() {

    let numero = Math.floor(Math.random() * animaisDisponiveis.length);
    resultado.textContent = animaisDisponiveis[numero].palavra;
    imagem.src = animaisDisponiveis[numero].imagem;
    animaisDisponiveis.splice(numero,1);

});
