const list  = {
    tecla(){
        return document.querySelectorAll('.tecla');
    },
    sons(){
        return document.querySelectorAll('audio');
    },
    tocaSom(som) {
        document.querySelector('#'+som).play();
    },
}

let teclas = list.tecla;
let sons = list.sons;
let tocaSom = list.tocaSom;

for(count = 0; count < teclas().length; count++) {
    
    let tecla = teclas();
    tecla = tecla[count];
    let som = sons();
    som = som[count].id;

    tecla.onclick = function() {
        tocaSom(som);
    }
    
    tecla.onkeydown = function (evento){
        //console.log(tecla);
        if(evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
            onKUp(tecla);
        }
    }

}

const enventoNumero = {
    Numpad1(){
        let tecla = list.tecla()[0]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[0].id);
        return tecla;
    },
    Numpad2(){
        let tecla = list.tecla()[1]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[1].id);
        return tecla;
    },
    Numpad3(){
        let tecla = list.tecla()[2]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[2].id);
        return tecla;
    },
    Numpad4(){
        let tecla = list.tecla()[3]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[3].id);
        return tecla;
    },
    Numpad5(){
        let tecla = list.tecla()[4]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[4].id);
        return tecla;
    },
    Numpad6(){
        let tecla = list.tecla()[5]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[5].id);
        return tecla;
    },
    Numpad7(){
        let tecla = list.tecla()[6]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[6].id);
        return tecla;
    },
    Numpad8(){
        let tecla = list.tecla()[7]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[7].id);
        return tecla;
    },
    Numpad9(){
        let tecla = list.tecla()[8]
        tecla.classList.add('ativa');
        list.tocaSom(list.sons()[8].id);
        return tecla;
    },
}

onkeydown = function (evento){
    if(!isNaN(parseFloat(evento.key)) && isFinite(evento.key)){
        let eventNumber = enventoNumero[evento.code];
        let tecla = eventNumber();
        onKUp(tecla);
    }
}

function onKUp(tecla){
    onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
