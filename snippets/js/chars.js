#!/usr/bin/env node
/* eslint-disable no-array-constructor,no-console */

const strToByteArray = str => str.split('')
const matchEveryByte = str => str.match(/./g)
const strToCharArray = str => [...str]
const matchEveryChar = str => str.match(/./ug)

// -----------------------------------------------------------------------------

Array(
	['A1あ✨♪🍰', ['A', '1', 'あ', '✨', '♪', '\ud83c', '\udf70'], strToByteArray],
	['A1あ✨♪🍰', ['A', '1', 'あ', '✨', '♪', '\ud83c', '\udf70'], matchEveryByte],
	['A1あ✨♪🍰', ['A', '1', 'あ', '✨', '♪', '\u{1F370}'], strToCharArray],
	['A1あ✨♪🍰', ['A', '1', 'あ', '✨', '♪', '\u{1F370}'], matchEveryChar],
).forEach(([input, expected, func]) => {
	const result = func(input)
	if (result.toString() === expected.toString()) {
		console.info(`OK: ${func.name}(${input}) = ${expected}`)
	} else {
		console.error(`FAILED: ${func.name}(${input}) = ${expected} != ${result}`)
	}
})
