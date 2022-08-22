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

function setResultado(msg){
    document.querySelector('#result-div').classList.remove('d-none');

    let divResult = document.querySelector('#resultado');
    divResult.innerHTML = '';

    let p = document.createElement('p');
    p.innerHTML = msg;

    divResult.appendChild(p);
}

function click(event) {
    event.preventDefault();
    
    let a = document.querySelector('#lado-a');
    let b = document.querySelector('#lado-b');
    let c = document.querySelector('#lado-c');

    let result = tipoTriangulo(a.value,b.value,c.value);
    
    console.log(result);
    setResultado(result);
}

const form = document.querySelector('#form');

form.addEventListener('submit', click);