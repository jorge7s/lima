function calcular(event){
   let valor = document.getElementById("numero").value
   let resultado = "Numero Par"
   let resultado2 = "Numero Impar"

    if (valor % 2 == 0) {
        document.getElementById("result").textContent = resultado
    }
    else
    {
       document.getElementById ("result").textContent = resultado2
    }
    
} 