
const inputFieldEl = document.getElementById("input-field-el")
const convertBtn = document.getElementById("convert-btn")

conversions = {
    meters: {factor: 3.281, to: "feet", reverseFactor: 0.3048, reverseTo: "meters"},
    liters: {factor: 0.264, to: "gallons", reverseFactor: 3.78541, reverseTo: "liters"},
    kilos: {factor: 2.204, to: "pounds", reverseFactor: 0.453592, reverseTo: "kilos"}
}

convertBtn.addEventListener("click", function() {
   const inputValue = Number(inputFieldEl.value)
   renderResults(inputValue)
})

function renderResults(inputValue) {
    for (const [unit, {factor, to, reverseFactor ,reverseTo}] of Object.entries(conversions)) {
        const forward = (inputValue * factor).toFixed(3)
        const backward = (inputValue * reverseFactor).toFixed(3)
        const el =document.getElementById(`${unit}-calc`)
        el.innerHTML = `${inputValue} ${unit} = ${forward} ${to} | ${inputValue} ${to} = ${backward} ${reverseTo}`
    }
}