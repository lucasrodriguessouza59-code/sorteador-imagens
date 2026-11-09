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
let animalSorteado = null;

let botao = document.querySelector("#sortear");
let revelar = document.querySelector("#revelar");
let reiniciar = document.querySelector("#reiniciar");

let resultado = document.querySelector("#resultado");
let imagem = document.querySelector("#imagem");


reiniciar.addEventListener("click", function(){
    animaisDisponiveis = [...animais];
    animalSorteado = null;
    resultado.textContent = "";
    imagem.src= "";
});

botao.addEventListener("click", function() {

    if(animaisDisponiveis.length === 0){
        resultado.textContent = "Todos os animais foram sorteados";
        imagem.src = "";
        animalSorteado = null;
        return;
    }
    let numero = Math.floor(Math.random() * animaisDisponiveis.length);

    animalSorteado = animaisDisponiveis[numero];

    imagem.src = animalSorteado.imagem;
    resultado.textContent = "";

    animaisDisponiveis.splice(numero,1);

});

revelar.addEventListener("click", function() {

    if (animalSorteado === null) {
        resultado.textContent = "Primeiro sorteie uma imagem!";
        return;
    }

    resultado.textContent = animalSorteado.palavra;

});
