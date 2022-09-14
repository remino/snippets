#!/usr/bin/env node
/* eslint-disable no-console */

const assert = {
	equal(a, b) {
		if (a !== b) throw new Error(`Assertion failed: ${a} === ${b}`)
	},
}

const sub = () => {
	// Put code here:
	const msg = 'Hello'
	return msg
}

const test = async () => {
	// Update tests with changes to your code:
	assert.equal(sub(), 'Hello')
}

const main = async () => {
	await test()
	return sub()
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
