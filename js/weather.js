#!/usr/bin/env node

// const fetch = require('node-fetch')

const getWeather = async (city, country) => {
	const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.WEATHER_API_KEY}&units=metric`
	const {
		main, name, sys, weather,
	} = await (await fetch(url)).json()
	return {
		city: name,
		country: sys.country,
		description: weather[0].description,
		humidity: main.humidity,
		temperature: main.temp,
	}
}

module.exports = {
	getWeather,
}
