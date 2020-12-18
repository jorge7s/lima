function verificar(){
    let numero = document.getElementById("entrada").value
    let resultado = "Esse numero é primo"
    let resultado2 = "Esse numero não é primo"

    for(var i = 2; i < numero; i++){
        
        var resto = numero % i

        if (resto == 0) {
            
            document.getElementById("saida").textContent = resultado2
            i = n+1
        }
        else{
            document.getElementById("saida").textContent = resultado
        }
    }
}