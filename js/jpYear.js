#!/usr/bin/env node

const eras = {
	明治: 1868,
	大正: 1912,
	昭和: 1926,
	平成: 1989,
	令和: 2019,
}

const erasByLatest = Object.entries(eras).sort((a, b) => b[1] - a[1])
const getEraNameAndYear = (name, start, year) => ([name, year - start + 1])

const convertGregorianYearToJapaneseYear = userYear => {
	const year = parseInt(userYear, 10) || new Date().getFullYear()
	const era = getEraNameAndYear(...erasByLatest.find(([_, start]) => start <= year), year)
	const [eraName, eraYear] = era

	if (eraYear === 1) {
		const [prevEraName, prevEraYear] = getEraNameAndYear(...erasByLatest.find(
			([_, start]) => start < year,
		) || [], year - 1)
		return `${eraName}元年/${prevEraName}${prevEraYear}年`
	}

	return `${eraName}${eraYear}年`
}

console.log(convertGregorianYearToJapaneseYear(process.argv[2]))
