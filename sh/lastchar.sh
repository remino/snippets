#!/bin/sh

_file_ends_with() {
	tail -c 1 "$2" | od -An -t x1 | grep -q "$1" > /dev/null 2>&1
}

_file_ends_with_cr() {
	_file_ends_with "0d" "$1"
}

_file_ends_with_lf() {
	_file_ends_with "0a" "$1"
}
