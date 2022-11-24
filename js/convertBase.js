#!/usr/bin/env node
/* eslint-disable  no-array-constructor,no-console */

const decToHex = dec => dec.toString(16)
const hexToDec = hex => parseInt(hex, 16)

Array(
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
