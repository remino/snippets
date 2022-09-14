#!/usr/bin/env node
/* eslint-disable no-console */

const main = async () => {
	// Put code here
	const msg = 'Hello'
	return msg
}

main()
	.then(result => {
		if (result) console.info(result)
		process.exit(0)
	})
	.catch(err => {
		console.error(err.message)
		process.exit(err.code || 1)
	})

/** ----------------------------------------------------------------------------
 * JAVASCRIPT SCRATCHPAD
 *
 * Copy the file and use it as a simple scratchpad to test any random bit of
 * JavaScript code you may have.
 */
