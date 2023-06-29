#!/usr/bin/env node
/* eslint-disable no-console,no-void */

// Global variables

const data = [...Array(1000).keys()]

// Snippets to test

const SNIPPETS = [
	() => {
		let i = 0; while (i < data.length) { void (data[i]); i += 1 }
	},
	() => {
		for (let i = 0; i < data.length; i += 1) { void (i) }
	},
	() => {
		data.forEach((_, i) => i)
	},
]

const MAIN_ITERATIONS = 10000 // Number of iterations to run
const WARMUP_ITERATIONS = 1000 // Number of warmup iterations to run

const tests = {
	time: {
		formatter: time => `${time.toFixed(2)}ms / ${MAIN_ITERATIONS}ops`,
		measure(snippet) {
			const start = performance.now()

			for (let i = 0; i < MAIN_ITERATIONS; i += 1) {
				snippet()
			}

			return performance.now() - start
		},
	},
}

const warmup = snippet => {
	for (let i = 0; i < WARMUP_ITERATIONS; i += 1) {
		snippet()
	}
}

const runSnippet = (number, snippet) => {
	try {
		warmup(snippet)

		return [
			number,
			...Object.values(tests).map(({ formatter, measure }) => formatter(measure(snippet))),
		]
	} catch (err) {
		console.error(err)
		return [number, 'Failed']
	}
}

const runSuite = async (snippets, title) => {
	console.info(title)

	Promise.all(
		snippets.map((snippet, index) => new Promise(resolve => {
			resolve(runSnippet(index + 1, snippet))
		})),
	).then(results => {
		results.forEach(([number, ...metrics]) => {
			console.info(`Snippet ${number}: ${metrics.join('; ')}`)
		})
	})
}

runSuite(SNIPPETS, 'Suite').then()
