function calc3(num1,num2,op){
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

function setResultado3(msg){
    let divResult = document.querySelector('#result-div-4');

    divResult.classList.remove('d-none');

    divResult.innerHTML = `Resultado: ${msg}`;
}

function click3(event) {
    event.preventDefault();
    
    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let op = document.querySelector('#operacao');

    let result = calc3(Number(num1.value),Number(num2.value),op.value);
    
    console.log(result);
    setResultado3(result);
}

const form3 = document.querySelector('#form-4');

form3.addEventListener('submit', click3);