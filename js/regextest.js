#!/usr/bin/env node
/* eslint-disable no-console */

const REGEX = /(?<letter>\w)/g
const TEXT = 'Hey'

console.info('REGEX')
console.info('')
console.info(REGEX)
console.info('')
console.info('TEXT')
console.info('')
console.info(TEXT)
console.info('')
console.info('MATCHES')
console.info('')

const showNextMatch = (text, regex) => {
	const match = regex.exec(text)
	if (!match) return null
	console.info(match)
	return match
}

// eslint-disable-next-line no-empty
while (showNextMatch(TEXT, REGEX)) {}
