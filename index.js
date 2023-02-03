/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.getElementById("convert-btn")
const lengthConversionValues = document.getElementById("length-conversion-values")
const volumeConversionValues = document.getElementById("volume-conversion-values")
const massConversionValues = document.getElementById("mass-conversion-values")

convertBtn.addEventListener("click", function() {
    const input = Number( document.getElementById("input-box").value )
    
    let feetCalc = (input * 3.281).toFixed(3)
    let meterCalc = (input / 3.281).toFixed(3)
    let lengthCalcs = `${input} meters = ${feetCalc} feet | ${input} feet = ${meterCalc} meters`
    lengthConversionValues.textContent = lengthCalcs
    
    let gallonsCalc = (input * 0.264).toFixed(3)
    let litersCalc = (input / 0.264).toFixed(3)
    let volumeCalcs = `${input} liters = ${gallonsCalc} gallons | ${input} gallons = ${litersCalc} liters`
    volumeConversionValues.textContent = volumeCalcs
    
    let poundsCalc = (input * 2.204).toFixed(3)
    let kilosCalc = (input / 2.204).toFixed(3)
    let massCalcs = `${input} kilos = ${poundsCalc} pounds | ${input} pounds = ${kilosCalc} kilos`
    massConversionValues.textContent = massCalcs
})