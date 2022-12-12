#!/usr/bin/env node

// -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8<

export const randomInt = (a, b = 0) => {
	const {
		floor, random, max, min,
	} = Math
	const [minVal, maxVal] = [min(a, b), max(a, b)]
	const result = floor(random() * floor(maxVal - minVal + 1)) + minVal
	return result
}

// -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8< -- 8<

const test = () => {
	const min = 5
	const max = 6
	Array(1000).fill().forEach(i => {
		const int = randomInt(min, max)
		if (int < min || int > max) throw new Error('randomInt failed.')
	})
	console.info('All good!')
}

test()
