#!/usr/bin/env node

import { access } from 'fs/promises'
import { fileURLToPath } from 'url'

/**
 * Return whether or not a file or directory exists.
 *
 * @param {string} path Path to file to verify.
 * @returns {boolean}
 */
const fileExists = async path => {
	try {
		await access(path)
		return true
	} catch (err) {
		if (err.code === 'ENOENT') return false
		throw err
	}
}

// -----------------

const __filename = fileURLToPath(import.meta.url)

const forEachAsync = async (array, func) => {
	for (let index = 0; index < array.length; index += 1) {
		const element = array[index]
		// eslint-disable-next-line no-await-in-loop
		await func(element, index, array)
	}
}

forEachAsync([__filename, 'doesntexist'], async path => {
	// eslint-disable-next-line no-console
	console.info(`${path} ${await fileExists(path)}`)
})
