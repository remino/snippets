#!/usr/bin/env node

const celsiusToFahrenheit = c => (c * (9 / 5)) + 32
const celsiusToKelvin = c => c + 273.15
const cmToInch = cm => cm / 2.54
const fahrenheitToCelsius = f => (f - 32) * (5 / 9)
const fahrenheitToKelvin = f => (f + 459.67) * (5 / 9)
const inchToCm = inch => inch * 2.54
const kelvinToCelsius = k => k - 273.15
const kelvinToFahrenheit = k => (k * (9 / 5)) - 459.67
const kgToPound = kg => kg * 2.205
const kmToMile = km => km / 1.609
const mileToKm = mile => mile * 1.609
const poundToKg = pound => pound / 2.205

module.exports = {
	celsiusToFahrenheit,
	celsiusToKelvin,
	cmToInch,
	fahrenheitToCelsius,
	fahrenheitToKelvin,
	inchToCm,
	kelvinToCelsius,
	kelvinToFahrenheit,
	kgToPound,
	kmToMile,
	mileToKm,
	poundToKg,
}
