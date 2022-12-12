#!/usr/bin/env node

import { access } from 'fs/promises'
import { fileURLToPath } from 'url'
import { forEachAsync } from './forEachAsync.js'

// -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8<

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

// -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8<

const __filename = fileURLToPath(import.meta.url)

forEachAsync([__filename, 'doesntexist'], async path => {
	// eslint-disable-next-line no-console
	console.info(`File ${path} exists? ${await fileExists(path) ? 'yes' : 'no'}`)
})
