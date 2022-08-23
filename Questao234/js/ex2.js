function calc(consumo, vUnitario){
    if (consumo > 100 && consumo <= 200) {
        vUnitario *= 1.25; //acrescimo de 25%
    } else if (consumo > 200) {
        vUnitario *= 1.50; //acrescimo de 50%
    }

    return (consumo * vUnitario).toFixed(2); //retorna o valor com 2 casas
}

function setResultado(msg){
    let divResult = document.querySelector('#result-div-2');
    
    divResult.classList.remove('d-none');
    
    divResult.innerHTML = `Resultado: R$ ${msg}`;
}

function click(event) {
    event.preventDefault();
    
    let qtd = document.querySelector('#quantidade');
    let vUnit = document.querySelector('#valor');

    let result = calc(Number(qtd.value),Number(vUnit.value));
    
    console.log(result);
    setResultado(result);

}

const form = document.querySelector('#form-2');

form.addEventListener('submit', click);