#!/bin/sh

E_MISSING_APP=17

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
		_fatal "$E_MISSING_APP" "One or more executables or apps are missing."
	fi
}
