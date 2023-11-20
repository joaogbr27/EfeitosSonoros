function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();   
}
const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
//Estrutura de repetição - Enquanto
while(contador<listaDeTeclas.length){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    tecla.onclick = function(){
       const idAudio = `#som_${instrumento}`;
    }
    contador = contador + 1;
    console.log(instrumento);
}

