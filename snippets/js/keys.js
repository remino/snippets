import { disableEvent } from './event.js'
import { isInputField } from './form.js'
import { isMac } from './platform.js'

/**
 * Extract key press data from event.
 *
 * @param {*} event Event
 * @returns Object of key press data.
 */
export const getKeys = event => {
	const mac = isMac()
	const {
		code, ctrlKey, shiftKey, altKey, metaKey, key,
	} = event

	return {
		code,
		key,
		ctrlKey,
		shiftKey,
		altKey: mac ? false : altKey,
		metaKey: mac ? false : metaKey,
		optKey: mac ? altKey : false,
		cmdKey: mac ? metaKey : false,
	}
}

const keyPress = event => {
	const { target } = event
	const {
		altKey, optKey, shiftKey, ctrlKey, metaKey, cmdKey, key,
	} = getKeys(event)

	if (
		!isInputField(target)
		&& !optKey
		&& !shiftKey
		&& !metaKey
		&& ctrlKey
		&& (altKey || cmdKey)
		&& key === 's'
	) {
		disableEvent(event)
	}
}
