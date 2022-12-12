#!/usr/bin/env node

export const randomInt = (a, b = 0) => {
	const {
		floor, random, max, min,
	} = Math
	const [minVal, maxVal] = [min(a, b), max(a, b)]
	const result = floor(random() * floor(maxVal - minVal + 1)) + minVal
	return result
}
