let animais = [
    {
        palavra: "A hipertensão muitas vezes não dá sinal, como podemos descobrir e avaliar em casa?",
        imagem: "Imagens/Aferir pressão.jpg"
    },
    {
        palavra: "Para tomar o remédio no horário certo, devo?",
        imagem: "Imagens/Alarme.jpg"
    },
    {
        palavra: "Para ter detalhes específicos do meu remédio devo consultar a?",
        imagem: "Imagens/Bula.jpg"
    },
    {
        palavra: "Qual nutriente do leite e derivados ajuda a prevenir a osteoporose?",
        imagem: "Imagens/Cálcio.jpg"
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
        resultado.textContent = "Todos as dicas foram sorteados";
        imagem.src = "";
        animalSorteado = null;
        return;
    }
    let numero = Math.floor(Math.random() * animaisDisponiveis.length);

    animalSorteado = animaisDisponiveis[numero];

    resultado.textContent = animalSorteado.palavra;
    imagem.src = "";
    animaisDisponiveis.splice(numero,1);

});

revelar.addEventListener("click", function() {

    if (animalSorteado === null) {
        resultado.textContent = "Primeiro sorteie uma imagem!";
        return;
    }

    imagem.src = animalSorteado.imagem;

});
