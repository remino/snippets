#!/usr/bin/env bash

# Make file sourceable as a library, yet automatically executable when run on its own.

run_main() {
	say_hello
}

say_hello() {
	echo "hello world"
}

if [[ "${BASH_SOURCE[0]}" == "${0}" ]]; then
	run_main
fi
