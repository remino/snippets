#!/usr/bin/env osascript -l JavaScript

// SEE "JXA Cookbook"
// https://github.com/JXA-Cookbook/JXA-Cookbook/wiki

function run(argv) {
	ObjC.import('stdlib')

	const app = Application.currentApplication()
	app.includeStandardAdditions = true

	console.log(JSON.stringify(argv))

	const result = app.displayAlert(['Args:', ...argv].join(' '))

	console.log(JSON.stringify(result))
	$.exit(0)
	// return result
}
