#!/usr/bin/env node

// Path: js/case.js

const toLowerCaseWords = str => str
	.replace(/(?<![A-Z0-9])([A-Z0-9])/g, ' $1')
	.replace(/[^a-zA-Z0-9]+/g, ' ')
	.replace(/(^[^a-zA-Z0-9]|[^a-zA-Z0-9]$)/g, '')
	.toLowerCase()

const toKebabCase = str => toLowerCaseWords(str).replace(/ /g, '-')
const toSnakeCase = str => toLowerCaseWords(str).replace(/ /g, '_')

Array.from([
	[toLowerCaseWords, '1234abc', '1234 abc'], // XXX
	[toLowerCaseWords, 'ThisIsATest', 'this is a test'], // XXX
	[toLowerCaseWords, 'abc-1234', 'abc 1234'],
	[toLowerCaseWords, ' abc-1234 ', 'abc 1234'],
	[toLowerCaseWords, ' abc1234 ', 'abc 1234'],
	[toLowerCaseWords, ' ABC1234 ', 'abc 1234'], // XXX
	[toLowerCaseWords, ' ABC-1234 ', 'abc 1234'],
	[toKebabCase, 'camelCase', 'camel-case'],
	[toKebabCase, 'test test', 'test-test'],
	[toKebabCase, 'HTMLElement', 'html-element'], // XXX
	[toSnakeCase, 'camelCase', 'camel_case'],
	[toSnakeCase, 'test test', 'test_test'],
]).forEach(([func, input, expected]) => {
	const result = func(input)
	if (result === expected) {
		// eslint-disable-next-line no-console
		console.info(`OK: ${func.name}(${input}) = ${expected}`)
	} else {
		// eslint-disable-next-line no-console
		console.error(`FAILED: ${func.name}(${input}) = ${result} != ${expected}`)
	}
})
