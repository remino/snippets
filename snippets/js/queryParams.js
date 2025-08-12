#!/usr/bin/env node

const queryParams = {
	q: 'test',
	colors: ['red', 'green', 'blue'],
}

const urlQueryParams = params => Object.keys(params).map(key => {
	const val = params[key]
	return `${key}=${encodeURIComponent(val)}`
}).join('&')

console.log(urlQueryParams(queryParams))
