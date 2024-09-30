var numeroSorte = parseInt(Math.floor(Math.random() * 101))

var chuteUsuario = (document.getElementById("chute"))

function envie() {
    console.log(numeroSorte)

    if (chuteUsuario.value == numeroSorte){
        document.getElementById("numeroCerto").innerHTML=("Parabéns, você acertou!")
    }
    else if (chuteUsuario.value < numeroSorte){
        document.getElementById("menores").innerHTML+=(chuteUsuario.value + " ");
    }
    else if (chuteUsuario.value > numeroSorte){
        document.getElementById("maiores").innerHTML+=(chuteUsuario.value + " ");
    }
}