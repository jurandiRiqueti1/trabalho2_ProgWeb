function tipoTriangulo(a,b,c){
    let msg = '';


    if (a != 0 && b != 0 && c != 0) {
        if (a == b && a == c) {
            msg = 'Triângulo Equilátero';
        } else if (a == b || a == c || b == c) {
            msg = 'Triângulo Isósceles';
        } else {
            msg = 'Triângulo Escaleno';
        }
    } else {
        msg = 'Valor inválido!';
    }

    return msg;
}

function setResultado2(msg){
    let divResult = document.querySelector('#result-div-3');

    divResult.classList.remove('d-none');

    divResult.innerHTML = msg;
}

function click2(event) {
    event.preventDefault();
    
    let a = document.querySelector('#lado-a');
    let b = document.querySelector('#lado-b');
    let c = document.querySelector('#lado-c');

    let result = tipoTriangulo(a.value,b.value,c.value);
    
    console.log(result);
    setResultado2(result);
}

const form2 = document.querySelector('#form-3');

form2.addEventListener('submit', click2);