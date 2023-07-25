#!/usr/bin/env node

const REGEX = /(?<letter>\w)/g
const TEXT = 'Hey'

const { info } = console

info('REGEX')
info('')
info(REGEX)
info('')
info('TEXT')
info('')
info(TEXT)
info('')
info('MATCHES')
info('')

const showNextMatch = (text, regex) => {
	const match = regex.exec(text)
	if (!match) return null
	info(match)
	return match
}

// eslint-disable-next-line no-empty
while (showNextMatch(TEXT, REGEX)) {}
