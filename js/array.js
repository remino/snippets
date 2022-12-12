#!/usr/bin/env node

import randomInt from './randomInt.js'

const randItem = val => {
	const arr = Array.from(val)
	return arr[randomInt(0, arr.length - 1)]
}
