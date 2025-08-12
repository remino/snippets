#!/usr/bin/env node

const hex = x => {
	const hexVal = x.toString(16)
	return hexVal.length === 1 ? `0${hexVal}` : hexVal
}

const rgbToHexColor = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`

const hexToRgbColor = hexVal => {
	const r = parseInt(hexVal.slice(1, 3), 16)
	const g = parseInt(hexVal.slice(3, 5), 16)
	const b = parseInt(hexVal.slice(5, 7), 16)
	return [r, g, b]
}

const hexToHslColor = hexVal => {
	const [r, g, b] = hexToRgbColor(hexVal)
	const max = Math.max(r, g, b)
	const min = Math.min(r, g, b)
	const l = (max + min) / 2
	if (max === min) return [0, 0, l]
	const d = max - min
	const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
	// eslint-disable-next-line no-nested-ternary
	const h = max === r
		? (g - b) / d + (g < b ? 6 : 0)
		: max === g
			? (b - r) / d + 2
			: (r - g) / d + 4
	return [h * 60, s, l]
}

const rgbToHslColor = (r, g, b) => hexToHslColor(rgbToHexColor(r, g, b))

module.exports = {
	hex,
	hexToHslColor,
	hexToRgbColor,
	rgbToHexColor,
	rgbToHslColor,
}
