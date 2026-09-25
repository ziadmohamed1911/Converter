/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputFieldEl = document.getElementById("input-field-el")
const convertBtn = document.getElementById("convert-btn")
const meterCalc = document.getElementById("meters-calc")
const litersCalc = document.getElementById("liters-calc")
const kiloCalc = document.getElementById("kilo-calc")

let inputValue, metersResultRounded, litersResultRounded, kiloResultRounded, feetResultRounded, gallonResultRounded, poundResultRounded

convertBtn.addEventListener("click", function() {
    inputValue  = inputFieldEl.value
    const metersResult = inputValue * 3.281
    metersResultRounded = Number(metersResult.toFixed(3))
    const litersResult = inputValue * 0.264
    litersResultRounded = Number(litersResult.toFixed(3))
    const kiloResult = inputValue * 2.204
    kiloResultRounded = Number(kiloResult.toFixed(3))
    const feetResult = inputValue * 0.3048
    feetResultRounded = Number(feetResult.toFixed(3))
    const gallonResult = inputValue * 3.78541
    gallonResultRounded = Number(gallonResult.toFixed(3))
    const poundResult = inputValue * 0.453592
    poundResultRounded = Number(poundResult.toFixed(3))
    renderResults()
})

function renderResults() {
    
    meterCalc.innerHTML = `${inputValue} meters = ${metersResultRounded} feet | ${inputValue} feet = ${feetResultRounded} meters`
    
    litersCalc.innerHTML = `${inputValue} liters = ${litersResultRounded} gallons | ${inputValue} gallons  = ${gallonResultRounded} liters`
    
    kiloCalc.innerHTML = `${inputValue} kilos = ${kiloResultRounded} pounds  | ${inputValue} pounds  = ${poundResultRounded} kilos`
}