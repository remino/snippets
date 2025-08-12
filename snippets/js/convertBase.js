#!/usr/bin/env node
/* eslint-disable no-array-constructor,no-console */

const decToBin = dec => dec.toString(2)
const binToDec = bin => parseInt(bin, 2)

const decToOct = dec => dec.toString(8)
const octToDec = oct => parseInt(oct, 8)

const decToHex = dec => dec.toString(16)
const hexToDec = hex => parseInt(hex, 16)

/*
	Or specify to define integers on other bases:
		0b10 === 2 // Binary
		0o10 === 8 // Octal
		0x10 === 16 // Hexademical

	Note parseInt without explicit base will try to detect hexadecimal integers
	from the string, but not binary or octal:
		parseInt('0b10') === 0
		parseInt('0b10', 2) === 0
		parseInt('0b10', 10) === 0
		parseInt('0o10') === 0
		parseInt('0o10', 8) === 0
		parseInt('0o10', 10) === 0
		parseInt('0x10') === 16
		parseInt('0x10', 16) === 16
		parseInt('0x10', 10) === 0
*/

Array(
	[2, '10', decToBin],
	['10', 2, binToDec],
	[8, '10', decToOct],
	['10', 8, octToDec],
	[16, '10', decToHex],
	['10', 16, hexToDec],
	[10, 'a', decToHex],
	['a', 10, hexToDec],
	['A', 10, hexToDec],
).forEach(([input, expected, func]) => {
	const result = func(input)
	if (result === expected) {
		console.info(`OK: ${func.name}(${input}) = ${expected}`)
	} else {
		console.error(`FAILED: ${func.name}(${input}) = ${expected} != ${result}`)
	}
})
