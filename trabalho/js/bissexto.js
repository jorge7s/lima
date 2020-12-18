function bissexto(){
    let ano = document.getElementById("llegad").value
    let resultado = "Este ano é bissexto";
    let resultado2 = "Este ano não é bissexto";
     
         if(ano % 4 == 0){
             document.getElementById("said").textContent = resultado
         }
         else
         {
            document.getElementById ("said").textContent = resultado2
         }
         
} 
