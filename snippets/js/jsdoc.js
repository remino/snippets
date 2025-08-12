// https://jsdoc.app

// Some notes below with examples of cases not clear in the docs of JSDoc.

// Specify a variable number of args of any type with `@param {...*}`.
// If the function returns nothing, best to be explicit with `@returns {void}`.

/**
 * Display arguments in the console.
 * @param {...*} args - The arguments to display.
 * @returns {void}
 */
const echo = (...args) => {
	console.log(...args)
}

// If the function returns an array with values of any type,
// use `@returns {Array}`.

/**
 * Return the arguments as an array.
 * @param {...*} args - The arguments to return.
 * @returns {Array} The arguments as an array.
 */
const argArray = (...args) => args

// But if the function returns an array with values of a specific type,
// use `@returns {<type>[]}`.

// Like `@returns {Array}` above for returns,
// use `@param {Array}` for an arg with an array containing values of any type.

/**
 * Return the arguments as an array of strings.
 * @param {Array} vals - The arguments to return.
 * @returns {string[]} The arguments as an array of strings.
 */
const valsToStrings = vals => vals.map(val => `${val}`)
