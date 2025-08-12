#!/usr/bin/env node

import { isEven, isOdd } from './number.js'

const SUNDAY = 0
const SATURDAY = 6

export const isoUtcDate = () => {
	const date = new Date()
	return date.toISOString()
}

export const localIsoDate = (date = new Date()) => {
	const offset = -date.getTimezoneOffset()
	const sign = offset >= 0 ? '+' : '-'
	const pad = num => (num < 10 ? '0' : '') + num

	return `${date.getFullYear()
	}-${pad(date.getMonth() + 1)
	}-${pad(date.getDate())
	}T${pad(date.getHours())
	}:${pad(date.getMinutes())
	}:${pad(date.getSeconds())
	}${sign}${pad(Math.floor(Math.abs(offset) / 60))
	}:${pad(Math.abs(offset) % 60)}`
}

export const utcDate = () => {
	const date = new Date()
	return date.toUTCString()
}

export const isEvenMonth = date => isEven(date.getMonth() + 1)
export const isOddMonth = date => isOdd(date.getMonth() + 1)

export const isWeekend = date => {
	const day = date.getDay()
	return day === SUNDAY || day === SATURDAY
}

export const isTimeAfter = (date, hours, minutes, seconds) => {
	const d = new Date(date)
	d.setHours(hours)
	d.setMinutes(minutes)
	d.setSeconds(seconds)
	return date > d
}

// Parsing ISO date strings using regexp is faster than splits, even quicker when using newDate():
// https://perf.link/#eyJpZCI6Imt2b2h4enVtejZlIiwidGl0bGUiOiJQYXJzZSBkYXRlIiwiYmVmb3JlIjoiY29uc3QgZGF0YSA9ICcyMjAyLTEwLTExVDEyOjEzOjE0JyIsInRlc3RzIjpbeyJuYW1lIjoiUGFyc2UgZGF0ZSB1c2luZyByZWdleHAgYW5kIG5vIGFzc2lnbm1lbnRzIiwiY29kZSI6ImNvbnN0IG5ld0RhdGUgPSAoeSwgbW9uLCBkLCBoLCBtaW4sIHMpID0%2BIG5ldyBEYXRlKHksIG1vbiAtIDEsIGQsIGggfHwgMCwgbWluIHx8IDAsIHMgfHwgMClcbmNvbnN0IHBhcnNlSXNvID0gaXNvU3RyID0%2BIG5ld0RhdGUoLi4uaXNvU3RyLm1hdGNoKC9eXFxzKihbLStdW1xcZF17NSx9fFtcXGRdezR9KS0oXFxkezJ9KS0oXFxkezJ9KVtUXFxzXShcXGR7Mn0pOihcXGR7Mn0pOihcXGR7Mn0pLiokLykuc2xpY2UoMSwgNykubWFwKHYgPT4gcGFyc2VJbnQodiwgMTApKSlcblxucGFyc2VJc28oZGF0YSkiLCJydW5zIjpbMTAwMDAsMTU3MDAwLDE2MDAwMCwzNDAwMCwxMDAwLDMwMDAwLDMyMDAwLDM3MDAwLDE1MjAwMCwyOTIwMDAsNjQwMDAsMTgyMDAwLDMyMzAwMCwyODkwMDAsMjMzMDAwLDI2NjAwMCwyOTcwMDAsMTU1MDAwLDYyMDAwLDEwMDAsMjA0MDAwLDcxMDAwLDI4OTAwMCw0NjAwMCwxMDAwLDE3MDAwLDM2NzAwMCwyODAwMCwxMDAwLDE2NzAwMCwzMDYwMDAsMjUzMDAwLDE1NDAwMCwyMTIwMDAsNDUwMDAsODQwMDAsMjcwMDAwLDI3NjAwMCwzMzgwMDAsMzA4MDAwLDM0NDAwMCwzNDQwMDAsMTAwMCwyOTAwMCwzNTUwMDAsMzYwMDAsMzEwMDAsMzI5MDAwLDEwMDAsNTIwMDAsMTAwMCwxNjkwMDAsMTAwMCwxODEwMDAsMTAwMCw0ODAwMCwxMDAwLDMwMDAwLDEwMDAsNjAwMCwxMDAwLDQ0MDAwLDI1NjAwMCwxNTAwMCw0NTYwMDAsODUwMDAsMTgxMDAwLDEwMDAsOTkwMDAsMTAwMCwxMDAwLDgxMDAwLDE2OTAwMCwyNzgwMDAsNDIwMDAsMjU0MDAwLDMwOTAwMCwyMjAwMDAsMTAwMCw2MTAwMCwyMzgwMDAsMjY0MDAwLDIwMDAsMTAwMCwzMDAwMCwxMDAwLDMyMzAwMCwzNjAwMDAsMzEzMDAwLDMxOTAwMCwxMDAwMDAsMjY5MDAwLDk4MDAwLDEwNDAwMCwzNDMwMDAsMTAwMCwxMzEwMDAsNDcwMDAsMTAwMCwxODYwMDBdLCJvcHMiOjEzODYxMH0seyJuYW1lIjoiUGFyc2UgZGF0ZSB1c2luZyBzcGxpdHMiLCJjb2RlIjoiY29uc3QgcGFyc2VJc29TcGxpdHMgPSBpc29TdHIgPT4ge1xuXHRjb25zdCBbZGF0ZSwgdGltZV0gPSBpc29TdHIudHJpbSgpLnJlcGxhY2UoLyhafFsrLV1bXFxkOl0rKSQvLCAnJykuc3BsaXQoL1tUXFxzXS8pXG5cdGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5XSA9IGRhdGUuc3BsaXQoJy0nKS5tYXAobnVtID0%2BIHBhcnNlSW50KG51bSwgMTApKVxuXHRjb25zdCBbaG91ciwgbWludXRlLCBzZWNvbmRdID0gdGltZS5zcGxpdCgnOicpLm1hcChudW0gPT4gcGFyc2VJbnQobnVtLCAxMCkpXG5cdHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpXG59XG5cbnBhcnNlSXNvU3BsaXRzKGRhdGEpIiwicnVucyI6WzEwMDAsMTIwMDAsMjcwMDAsODAwMCwxMDAwLDgwMDAsMjAwMCwxMzAwMCwzNTAwMCw1ODAwMCwxOTAwMCwzNjAwMCw1MTAwMCw1NzAwMCwzMDAwMCwzNDAwMCw0NzAwMCwzNDAwMCwzNTAwMCwxMDAwLDQ0MDAwLDE4MDAwLDUwMDAwLDExMDAwLDEwMDAsMjAwMCw1NDAwMCwxMjAwMCw2MzAwMCwzOTAwMCwyNzAwMCw0NDAwMCwzNzAwMCwxNTAwMCwyMTAwMCwxNTAwMCwxMDAwLDUwMDAwLDgwMDAsNTAwMDAsMTAwMCw0NzAwMCwxMDAwLDgwMDAsNTgwMDAsMTUwMDAsNzAwMCwxMDAwLDEwMDAsMTkwMDAsMTAwMCwyODAwMCwxMDAwLDQ2MDAwLDYwMDAwLDEzMDAwLDEwMDAsOTAwMCwxMDAwLDQwMDAsMTAwMCwxNzAwMCw0MzAwMCw3MDAwLDY1MDAwLDE4MDAwLDM0MDAwLDEwMDAsMjgwMDAsMTAwMCwxMDAwLDE4MDAwLDQyMDAwLDU0MDAwLDkwMDAsMzAwMDAsNTkwMDAsNDUwMDAsMTAwMCwxODAwMCw0OTAwMCw1MzAwMCw0MDAwLDEwMDAsNDAwMCwxMDAwLDU5MDAwLDU4MDAwLDQwMDAwLDM1MDAwLDIyMDAwLDU0MDAwLDE4MDAwLDI5MDAwLDU5MDAwLDEwMDAsMTQwMDAsMTMwMDAsNzgwMDAsNDEwMDBdLCJvcHMiOjI1MTgwfSx7Im5hbWUiOiJQYXJzZSBkYXRlIHVzaW5nIHJlZ2V4cCIsImNvZGUiOiJjb25zdCBwYXJzZUlzb1JlZ2V4cCA9IGlzb1N0ciA9PiB7XG4gIGNvbnN0IFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZF0gPSBpc29TdHIubWF0Y2goL15cXHMqKFstK11bXFxkXXs1LH18W1xcZF17NH0pLShcXGR7Mn0pLShcXGR7Mn0pW1RcXHNdKFxcZHsyfSk6KFxcZHsyfSk6KFxcZHsyfSkuKiQvKS5zbGljZSgxLCA3KS5tYXAodiA9PiBwYXJzZUludCh2LCAxMCkpXG4gIGNvbnNvbGUubG9nKFt5ZWFyLCBtb250aCwgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZF0pXG4gIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSwgaG91ciwgbWludXRlLCBzZWNvbmQpXG59XG5cbnBhcnNlSXNvUmVnZXhwKGRhdGEpIiwicnVucyI6WzUwMDAsNDAwMDAsNDUwMDAsODAwMCwxMDAwLDE2MDAwLDYwMDAsMzQwMDAsNDQwMDAsOTIwMDAsNDAwMDAsNTMwMDAsMTAzMDAwLDg1MDAwLDM2MDAwLDQ0MDAwLDc0MDAwLDUzMDAwLDQ2MDAwLDEwMDAsNjMwMDAsNDEwMDAsNzcwMDAsMjQwMDAsMTAwMCw1MDAwLDg1MDAwLDExMDAwLDEwMDAsNTUwMDAsNjYwMDAsNjYwMDAsNTIwMDAsNTAwMDAsMzQwMDAsMjEwMDAsOTUwMDAsNTkwMDAsODkwMDAsOTUwMDAsMTAwMCwxMDUwMDAsMTAwMCw3MDAwLDEwNjAwMCwzMzAwMCw3MDAwLDcwMDAwLDEwMDAsMzgwMDAsMTAwMCw1MDAwMCwxMDAwLDU1MDAwLDEyNjAwMCwzNDAwMCwxMDAwLDE1MDAwLDEzMTAwMCw2MDAwLDEwMDAsNDEwMDAsNTYwMDAsODAwMCwxMDAwLDM1MDAwLDU3MDAwLDEwMDAsMzgwMDAsODYwMDAsMTAwMCwzOTAwMCw1MTAwMCw4OTAwMCwxMjAwMCw4NTAwMCwxMDAwLDU0MDAwLDEwMDAsMzEwMDAsNzMwMDAsNzYwMDAsNzAwMCwxMDAwLDEyMDAwLDEwMDAsMTEwMDAwLDkzMDAwLDU2MDAwLDUwMDAwLDQ2MDAwLDg1MDAwLDM2MDAwLDM

const newDate = (y, mon, d, h, min, s) => new Date(y, mon - 1, d, h, min, s)
const parseIso = isoStr => newDate(...isoStr.match(/^\s*([-+][\d]{5,}|[\d]{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2}).*$/).slice(1, 7).map(v => parseInt(v, 10)))

const parseIsoSplits = isoStr => {
	const [date, time] = isoStr.trim().replace(/(Z|[+-][\d:]+)$/, '').split(/[T\s]/)
	const [year, month, day] = date.split('-').map(num => parseInt(num, 10))
	const [hour, minute, second] = time.split(':').map(num => parseInt(num, 10))
	return new Date(year, month - 1, day, hour, minute, second)
}

const parseIsoRegexp = isoStr => {
	const [year, month, day, hour, minute, second] = isoStr.match(/^\s*([-+][\d]{5,}|[\d]{4})-(\d{2})-(\d{2})[T\s](\d{2}):(\d{2}):(\d{2}).*$/).slice(1, 7).map(v => parseInt(v, 10))
	return new Date(year, month - 1, day, hour, minute, second)
}
