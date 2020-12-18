function calcularIMC(){
    let altura = document.getElementById("altura").value
    let peso = document.getElementById("peso").value
    
    let resultado = "Muito abaixo do peso: ";
    let resultado2 = "Abaixo do peso: ";
    let resultado3 = "Peso normal: ";
    let resultado4 = "Acima do peso: ";
    let resultado5 = "Obesidade I: ";
    let resultado6 = "Obesidade II (severa): ";
    let resultado7 = "Obesidade III (mórbida): ";
    

    let imc = peso / (altura,2);
    
    if(imc<17){
      document.getElementById("calcular").textContent = resultado + imc
    }
    else if(imc>17 && imc<18.49){
      document.getElementById("calcular").textContent = resultado2 + imc
    }
    else if(imc>18.5 && imc<24.99){
      document.getElementById("calcular").textContent = resultado3 + imc
    }
    else if(imc>25 && imc<24.99) {
      document.getElementById("calcular").textContent = resultado4 + imc
    }
    else if (imc>30 && imc<39.99){
      document.getElementById("calcular").textContent = resultado5 + imc
    }
    else if (imc>35 && imc<39.99){
      document.getElementById("calcular").textContent = resultado6 + imc
    }
    else if (imc>=40)
      document.getElementById("calcular").textContent = resultado7 + imc
    } 




