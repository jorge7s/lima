var idade = ""

        function calcular2() {
            let idade = document.getElementById("idade").value
            
            if (idade >= 18) {
                document.getElementById("resultado3").innerHTML = ("Você é maior de idade")

            }

            else {
                document.getElementById("resultado3").innerHTML = ("Você é menor de idade")
            }

        }