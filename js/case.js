#!/usr/bin/env node

// Path: js/case.js

const toKebabCase = str => str.replace(/[ _-]+/g, '-').replace(/([A-Z])/g, $1 => `-${$1.toLowerCase()}`)
const toSnakeCase = str => str.replace(/[ _-]+/g, '_').replace(/([A-Z])/g, $1 => `_${$1.toLowerCase()}`)

Array.from([
	[toKebabCase, 'camelCase', 'camel-case'],
	[toKebabCase, 'test test', 'test-test'],
	[toSnakeCase, 'camelCase', 'camel_case'],
	[toSnakeCase, 'test test', 'test_test'],
]).forEach(([func, input, expected]) => {
	const result = func(input)
	if (result === expected) {
		// eslint-disable-next-line no-console
		console.info(`OK: ${func.name}(${input}) = ${expected}`)
	} else {
		// eslint-disable-next-line no-console
		console.error(`FAILED: ${func.name}(${input}) = ${expected} != ${result}`)
	}
})
