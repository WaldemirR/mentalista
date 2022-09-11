var numeroSecreto = parseInt(Math.random()*21)

function Chutar(){
    var elementoResultado = document.getElementById("resultado")

    var chute = parseInt(document.getElementById("valor").value);
     

    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou"
    } else if (chute > 20 || chute < 0){

        elementoResultado.innerHTML = "Você deve chutar um número de 0 a 20";
    }else{
        elementoResultado.innerHTML = "Você errou, o número correto era " + numeroSecreto;
    }
}