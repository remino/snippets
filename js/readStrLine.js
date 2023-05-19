#!/usr/bin/env node

export function* readStrLine(str) {
	let i = 0
	let line = ''
	while (i < str.length) {
		if (str[i] === '\n') {
			yield line
			line = ''
		} else {
			line += str[i]
		}
		i += 1
	}
	return line
}

// 8< --------------------------------------------------------------------------

const INPUT = 'Hello\nWorld\n!!!\n'

const example = () => {
	const gen = readStrLine(INPUT)
	let genDone = false

	do {
		const { value, done } = gen.next()
		genDone = done
		if (!done || value.length) console.log('-', value)
	} while (!genDone)
}

example()
