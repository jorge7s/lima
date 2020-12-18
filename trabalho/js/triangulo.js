    var res1 = "Equilatero"
    var res2 = "Isosceles"
    var res3 = "Escaleno"

    function triangulo() {
        let la = document.getElementById("la").value
        let lb = document.getElementById("lb").value
        let lc = document.getElementById("lc").value

        if (la == lb || la == lc) {
            document.getElementById ("resultado2").textContent = res1
        }

        else if (la == lb || la == lc || lb == lc) {
            document.getElementById ("resultado2").textContent = res2
        }

        else {
            document.getElementById ("resultado2").textContent = res3
        }
    }
