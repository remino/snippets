#!/usr/bin/env node

/**
 * Return wether or not a point is within a circle.
 *
 * @param {Number} x Point x coordinate.
 * @param {Number} y Point y coordinate.
 * @param {Number} cx Circle centre x coordinate.
 * @param {Number} cy Circle centre y coordinate.
 * @param {Number} radius Circle radius.
 * @returns {Boolean} True if the point is within the circle, false otherwise.
 */
const isPointInCircle = (x, y, cx, cy, radius) => Math.sqrt((x - cx) ** 2 + (y - cy) ** 2) <= radius

/**
 * Return wether or not a point is within a rotated square.
 *
 * @param {Number} x Point x coordinate.
 * @param {Number} y Point y coordinate.
 * @param {Number} squareX Square centre x coordinate.
 * @param {Number} squareY Square centre y coordinate.
 * @param {Number} sideLength Square side length.
 * @param {Number} angle Square rotation angle in degrees.
 * @returns {Boolean} True if the point is within the rotated square, false otherwise.
 */
const isPointInRotatedSquare = (x, y, squareX, squareY, sideLength, angle) => {
	// Translate point and square to origin
	const x1 = x - squareX
	const y1 = y - squareY

	// Rotate point back by -angle
	const angleRad = -angle * (Math.PI / 180) // Convert to radians
	const x2 = x1 * Math.cos(angleRad) - y1 * Math.sin(angleRad)
	const y2 = x1 * Math.sin(angleRad) + y1 * Math.cos(angleRad)

	// Check if rotated point is inside axis-aligned square
	const halfSide = sideLength / 2
	return x2 >= -halfSide && x2 <= halfSide && y2 >= -halfSide && y2 <= halfSide
}

for (let x = -2; x < 2; x += 0.2) {
	for (let y = -2; y < 2; y += 0.2) {
		process.stdout.write(isPointInCircle(x, y, 0, 0, 2) ? '██' : '▒▒')
	}
	process.stdout.write('\n')
}

process.stdout.write('\n')

for (let x = -2; x < 2; x += 0.2) {
	for (let y = -2; y < 2; y += 0.2) {
		process.stdout.write(isPointInRotatedSquare(x, y, 0, 0, 4, 10) ? '██' : '▒▒')
	}
	process.stdout.write('\n')
}
