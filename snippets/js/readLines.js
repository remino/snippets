#!/usr/bin/env node
/* eslint-disable no-console */

import readline from 'readline'
import { createReadStream } from 'fs'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const file = readline.createInterface({
	input: createReadStream(resolve(__dirname, '../fixtures/fruits.txt')),
	output: process.stdout,
	terminal: false,
})

file.on('line', line => {
	console.log(line)
})
