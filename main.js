function tocaSomAplausos(){
    document.querySelector("#som_tecla_aplausos").play();   
}

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[2].onclick = tocaSomAplausos

let contador = 0;
//Estrutura de repetição - Enquanto
while(contador<listaDeTeclas.length){
    listaDeTeclas[contador].onclick = tocaSomAplausos;
    contador = contador + 1;
}

