#!/usr/bin/env node

const exchangeCurrency = async (amount, from, to) => {
	const url = `https://api.exchangeratesapi.io/latest?base=${from}`
	const { rates } = await (await fetch(url)).json()
	return amount * rates[to]
}

module.exports = {
	exchangeCurrency,
}
