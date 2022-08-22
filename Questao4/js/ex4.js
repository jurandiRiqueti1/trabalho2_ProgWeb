function calc(num1,num2,op){
    let msg = '';

    switch (op) {
        case '+':
            msg = num1 + num2;
            break;
        
        case '-':
            msg = num1 - num2;
            break;

        case '*':
            msg = num1 * num2;
            break;

        case '/':
            msg = num1 / num2;
            break;
    }

    return msg;
}

function setResultado(msg){
    document.querySelector('#result-div').classList.remove('d-none');

    let divResult = document.querySelector('#resultado');
    divResult.innerHTML = '';

    let p = document.createElement('p');
    p.innerHTML = `Resultado: ${msg}`;

    divResult.appendChild(p);
}

function click(event) {
    event.preventDefault();
    
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let op = document.querySelector('#operacao');

    let result = calc(Number(num1.value),Number(num2.value),op.value);
    
    console.log(result);
    setResultado(result);
}

const form = document.querySelector('#form');

form.addEventListener('submit', click);