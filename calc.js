var value = document.querySelector("div.container input")
var result = document.querySelector("div.container div.table")

const calculator = document.querySelector("div.container button")

calculator.addEventListener("click", () => {
    if (Number(value.value) < 1 || Number(value.value) > 12 ) { 
        result.innerHTML = "Este valor não é válido."
    } else {

        for (i = 1; i <= 12; i++) {
            var calc =  String(i) + " x " + value.value + " = " + i * Number(value.value)

            var resultFinal = document.createElement("p")

            resultFinal.innerText = calc

            result.appendChild(resultFinal)
        }
    }
})