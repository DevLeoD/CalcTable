var value = document.querySelector("div.container input")
var result = document.querySelector("div.container div.table")

const calculator = document.querySelector("div.container button")

calculator.addEventListener("click", () => {
    if (Number(value.value) < 1) return result.innerText = "Este valor não é válido."

    for (i = 1; i <= 10; i++) {
        var calc =  value.value + " x " + String(i) + " = " + Number(value.value) * i

        var resultFinal = document.createElement("p")

        resultFinal.innerText = calc

        result.appendChild(resultFinal)
    }
})