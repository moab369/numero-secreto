let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
   let campo = document.querySelector(tag);
   campo.innerHTML = texto;
}


function exibirMensagenInicial(){
    exibirTextoNaTela('h1','jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número de 1 a 10');
} 
  

exibirMensagenInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
        
    
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'acertou');
        let palavratentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagenTentativas = `voce descubriu o numero secreto com ${tentativas} ${palavratentativa}`;
        exibirTextoNaTela('p', mensagenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','o numero secreto e menor');
        }else{
            exibirTextoNaTela('p','o numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    } 
        
}   

function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt( Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

 if (quantidadeDeElementosNaLista == numeroLimite){
     listaDeNumerosSorteados = [];
 }

 if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
 } else{
      listaDeNumerosSorteados.push(numeroEscolhido);
      return numeroEscolhido;
 }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarjogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
   exibirMensagenInicial();
}


