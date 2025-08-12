export const forEachAsync = async (array, func) => {
	for (let index = 0; index < array.length; index += 1) {
		const element = array[index]
		// eslint-disable-next-line no-await-in-loop
		await func(element, index, array)
	}
}
