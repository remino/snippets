#!/usr/bin/env node

const getErrorMessageForCode = code => {
	switch (code) {
		default: return ''
	}
}

class ConsoleError extends Error {
	constructor(code, customMsg) {
		super(customMsg || getErrorMessageForCode(code))
		this.name = 'ConsoleError'
		this.code = code
	}
}

const main = async (...args) => {
	console.log(args)
}

main(...process.argv.slice(2)).then(result => {
	process.stdout.write(result)
	process.exit(0)
}).catch(e => {
	process.stderr.write(e.message)
	process.exit(e.code || 1)
})
