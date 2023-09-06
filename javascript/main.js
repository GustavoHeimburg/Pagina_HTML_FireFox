const leia = document.querySelector("h1");
leia.textContent = "Olá mundo";

let nomePessoa = "Gustavo";
console.log(nomePessoa);
nomePessoa = "H.Pereira"
console.log(nomePessoa);

/*var tipodeDoce = "chocolate"

if (tipodeDoce == "chocolate"){
    alert("Sim, é igual a chocolate")
}else {
    alert("Nao, Voce esta errado, nao e chocolate")
}
var alerta = document.querySelector("h1")
alert("Processa um dado")*/

//Multiplic

function multi (valor1, valor2){
    let result = valor1 * valor2;
    return result;
}
function div (valor1, valor2){
    let resul = valor1 / valor2
    return resul;
}
console.log(multi(2, 5))
console.log(div(5, 2))