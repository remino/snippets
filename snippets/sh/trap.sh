#!/bin/sh

_exit() {
	exit_code=$?
	exit $exit_code
}

main() {
	trap _exit INT TERM

	# ...

	_exit
}
