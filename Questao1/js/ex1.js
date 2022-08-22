function maiorMenor(n1){
    if (n1 < 10) {
        window.alert(`${n1} é menor que 10!`)
    }else if (n1 = 10) {
        window.alert(`${n1} é igual a 10!`)
    }else{
        window.alert(`${n1} é maior que 10!`)
    }
}

function calc(n1, n2, op){
    switch (op) {
        case "+":
            return(n1 + n2)
            
        case "-":
            return(n1 - n2)
        
        case "*":
            return(n1 * n2)
        
        case "/":
            return(n1 / n2)
            
        default:
            window.alert("Esta operação não existe!")
            break
    }
}

maiorMenor(Number(window.prompt("Digite um número!")))

let n1 = Number(window.prompt("Digite um valor!"))
let n2 = Number(window.prompt("Digite outro valor!"))

window.alert(`A soma entre ${n1} e ${n2} é ${calc(n1, n2, "+")}`)

n1 = Number(window.prompt("Digite um valor!"))
let op = window.prompt("Digite a operação (+,-,*,/)")

if (op == "+" || op == "-" || op == "*" || op == "/") {
    n2 = Number(window.prompt("Digite outro valor!"))
    window.alert("O resultado é " + calc(n1,n2,op))
}else{
    window.alert("Operação inválida!")
}

n1 = Number(window.prompt("Digite um número para repetir o laço!"))
for (let index = 1; index <= n1; index++) {
    window.alert(`Número ${index}`);
}