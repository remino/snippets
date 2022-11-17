export const findAsync = async (arr, fn) => {
	const promises = arr.map(fn)
	const results = await Promise.all(promises)
	const index = results.findIndex(result => result)
	return arr[index]
}
