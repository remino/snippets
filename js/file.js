#!/usr/bin/env node

const { readFile, writeFile } = require('fs/promises')
const { join } = require('path')

const saveToFile = async () => {
	const path = join(__dirname, 'test.txt')
	const body = 'Hey'
	await writeFile(path, body)
}

const loadFromFile = async () => {
	const path = join(__dirname, 'test.txt')
	const body = await readFile(path, 'utf8')
	return body
}

module.exports = {
	loadFromFile,
	saveToFile,
}
