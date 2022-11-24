import { readFile } from 'fs/promises'

/**
 * Return string from the content of specified file.
 *
 * @param {string} path Path of file to read.
 * @returns {string}
 */
const readStrFromFile = async path => (await readFile(path)).toString()
