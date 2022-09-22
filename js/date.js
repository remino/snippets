#!/usr/bin/env node

const isoUtcDate = () => {
	const date = new Date()
	return date.toISOString()
}

const isoLocalDate = () => {
	const date = new Date()
	const offset = date.getTimezoneOffset()
	const offsetHours = Math.floor(Math.abs(offset) / 60)
	const offsetMinutes = Math.abs(offset) % 60
	const sign = offset < 0 ? '+' : '-'
	const isoDate = date.toISOString().slice(0, 10)
	const isoTime = date.toISOString().slice(11, 19)
	return `${isoDate}T${isoTime}${sign}${offsetHours}:${offsetMinutes}`
}

const utcDate = () => {
	const date = new Date()
	return date.toUTCString()
}

module.exports = {
	isoLocalDate,
	isoUtcDate,
	utcDate,
}
