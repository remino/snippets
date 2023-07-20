#!/usr/bin/env node

const REGEX = /(.)/g
const TEXT = 'Hello'

console.info(
	'REGEX:\n',
	REGEX,
	'\n\nTEXT:\n',
	TEXT,
	'\n\nRegExp.prototype.test():\n',
	REGEX.test(TEXT),
	'\n\nRegExp.prototype.exec():\n',
	REGEX.exec(TEXT),
	'\n\nString.prototype.match():\n',
	TEXT.match(REGEX),
)

