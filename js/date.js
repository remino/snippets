#!/usr/bin/env node

const isoUtcDate = () => {
	const date = new Date()
	return date.toISOString()
}

const localIsoDate = (date = new Date()) => {
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

const utcDate = () => {
	const date = new Date()
	return date.toUTCString()
}

module.exports = {
	isoUtcDate,
	localIsoDate,
	utcDate,
}
