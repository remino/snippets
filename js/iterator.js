#!/usr/bin/env node
/* eslint-disable no-console,no-restricted-syntax */

function* iteratorFilter(iterator, filter) {
	for (const item of iterator) {
		if (filter(item)) {
			yield item
		}
	}
}

const url = new URL('https://www.example.com/a?b=c&d=e')
const params = url.searchParams
const iterator = params.keys()
const filter = key => key === 'b'
const filtered = iteratorFilter(iterator, filter)

console.log(filtered)

for (const item of filtered) {
	console.log('key', item)
}
