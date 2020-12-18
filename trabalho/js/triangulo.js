var la = ""
    var lb = ""
    var lc = ""

    function triangulo() {
        let la = document.getElementById("la").value
        let lb = document.getElementById("lb").value
        let lc = document.getElementById("lc").value

        if (la == lb || la == lc) {
            alert("Equilatero")
        }

        else if (la == lb || la == lc || lb == lc) {
            alert("Isosceles")
        }

        else {
            alert("Escaleno")
        }
    }
