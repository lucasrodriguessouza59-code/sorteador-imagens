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
        
        palavra: "Para saber em quais dias já tomei o remédio, posso  marcar no…?",
        imagem: "Imagens/Calendário.jpg"

        palavra: "Mesmo sem sentir nada, uma vez que ao ano é recomendado fazer um??",
        imagem: "Imagens/Check up.jpg"

        palavra: " Alguns remédios devem ser tomados junto com a?",
        imagem: "Imagens/Comida.jpg"

        palavra: "Tenho dúvidas na forma de adesão de  um medicamento. Qual profissional devo procurar?",
        imagem: "Imagens/Farmacêutico.jpg"
        
        palavra: "Para não perder a receita, posso guardar uma?",
        imagem: "Imagens/Foto.jpg"

        palavra: "Outros remédios são tomados de estômago vazio. Isso se chama tomar em?",
        imagem: "Imagens/Jejum.jpg"

        palavra: "Estou me sentindo melhor, quero parar de tomar o remédio. Devo procurar um",
        imagem: "Imagens/Médico.jpg"

        palavra: "Posso tomar ou emprestar o remédio de outra pessoa?",
        imagem: "Imagens/Não.jpg"

        palavra: " Esqueci uma dose. Posso tomar em dobro?",
        imagem: "Imagens/Não pode.jpg"

        palavra: "Para separar os remédios de cada dia da semana, posso usar um?",
        imagem: "Imagens/Porta comprimidos.jpg"

        palavra: "O remédio que tomo todo dia protege meu coração e minha pressão. Ele funciona como um?",
        imagem: "Imagens/Proteção.jpg"

        palavra: "Para saber como tomar o remédio, devo seguir o que está na?",
        imagem: "Imagens/Receita.jpg"

        palavra: " Qual tempero em excesso está ligado ao aumento da pressão?",
        imagem: "Imagens/Sal.jpg"

        palavra: "Qual serviço do SUS, perto de casa, que oferece consultas, vacinas e que afere a pressão?",
        imagem: "Imagens/UBS.jpg"

        palavra: "Como podemos prevenir a gripe e outras doenças infecciosas?",
        imagem: "Imagens/Vacina.jpg"

        palavra: "Antes de tomar, devo conferir na caixa a data de?",
        imagem: "Imagens/Validade.jpg"
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
