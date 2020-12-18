function numberint(){
    let int = document.getElementById("llegada").value
    let resultado = ""

     for (var  i = 0; i  <= int; i++) {
      if (i % 2 != 0) {
        alert(i);
    }
    document.getElementById("exit").textContent = resultado
 }
}