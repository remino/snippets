#!/usr/bin/env node

// const fetch = require('node-fetch')

const geocode = async address => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=${process.env.MAPBOX_API_KEY}`
	const { features } = await (await fetch(url)).json()
	return features[0]
}

const reverseGeocode = async (lat, lon) => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=${process.env.MAPBOX_API_KEY}`
	const { features } = await (await fetch(url)).json()
	return features[0]
}

const americanZipCodeToAddress = async code => {
	const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${code}.json?access_token=${process.env.MAPBOX_API_KEY}`
	const { features } = await (await fetch(url)).json()
	return features[0]
}

const canadianPostalCodeToAddress = async postalCode => {
	const url = `https://api.zippopotam.us/ca/${postalCode}`
	const { places } = await (await fetch(url)).json()
	return places[0]
}

const japanesePostalCodeToAddress = async code => {
	const url = `https://api.zipaddress.net/?zipcode=${code}`
	const { data } = await (await fetch(url)).json()
	return data
}

module.exports = {
	americanZipCodeToAddress,
	canadianPostalCodeToAddress,
	geocode,
	japanesePostalCodeToAddress,
	reverseGeocode,
}
