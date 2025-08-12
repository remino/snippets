#!/usr/bin/env node

const sortVersions = versions => versions.sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))

const assert = (actual, expected) => {
	// eslint-disable-next-line no-console
	console.info(
		actual,
		actual.toString() === expected.toString() ? '===' : '!==',
		expected,
	)
}

const VERSIONS = [
	'2.1.1',
	'1.20.1',
	'1.2.1',
	'0.4.1',
]

const EXPECTED = [
	'0.4.1',
	'1.2.1',
	'1.20.1',
	'2.1.1',
]

assert(sortVersions(VERSIONS), EXPECTED)
