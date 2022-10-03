#!/bin/sh

e_missing_app=17

_require() {
	missing_bin=0

	for bin in "$@"
	do
		if ! which "$bin" > /dev/null 2>&1
		then
			missing_bin=1
			_error "Required: $bin"
		fi
	done

	if [ $missing_bin -ne 0 ]
	then
		_fatal "$e_missing_app" "One or more executables or apps are missing."
	fi
}
