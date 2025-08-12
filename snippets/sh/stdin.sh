#!/bin/sh

has_stdin_file() {
	[ -t 0 ] && return 1
	[ -p /dev/stdin ]
}

arg_or_piped_or_input() {
	( [ -t 0 ] && [ $# -gt 0 ] && echo "$1" ) || cat -
}

arg_or_piped() {
	( [ -t 0 ] && [ $# -gt 0 ] && echo "$1" ) || ( [ -p /dev/stdin ] && cat - )
}

arg_or_piped "$@"
