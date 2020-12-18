function verificarCPF(){
    let cpf = document.getElementById("ingreso").value
    let resultado = ""
    
    //Obter terceito segmento do CPF 111.222.333-DD
    let segmento = parseInt(cpf.split("-")[0].split(".")[2].split("")[2])
    
    switch(segmento)
    {
        case 0:
            resultado = "Rio Grande do Sul"
            break
        case 1:
            resultado = "Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins"
            break
        case 2:
            resultado = "Amazonas, Pará, Roraima, Amapá, Acre e Rondônia"
            break
        case 3:
            resultado = "Ceará, Maranhão e Piauí"
            break
        case 4:
            resultado = "Paraíba, Pernambuco, Alagoas e Rio Grande do Norte"
            break
        case 5:
            resultado = "Bahia e Sergipe"
            break
        case 6:
            resultado = "Minas Gerais"
            break
        case 7:
            resultado = "Rio de Janeiro e Espírito Santo"
            break
        case 8:
            resultado = "São Paulo"
            break
        case 9:
            resultado = "Paraná e Santa Catarina"
            break                                
    }

    document.getElementById("output").textContent = resultado
}