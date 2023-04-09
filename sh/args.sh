#!/bin/sh

parse_args() {
	while [ $# -gt 0 ]
	do
		case "$1" in
			--time|-t) echo "time: $2"; shift ;;
			--message|-m) echo "message: $2"; shift ;;
			*) echo "Unknown argument: $1" >&2; return 16 ;;
		esac
		shift
	done
}

parse_args_with_getopts() {
	while getopts ":t:m:" opt
	do
		case $opt in
			t) echo "time: $OPTARG" ;;
			m) echo "message: $OPTARG" ;;
			\?) echo "Invalid option: -$OPTARG" >&2; return 16 ;;
			:) echo "Option -$OPTARG requires an argument." >&2; return 16 ;;
		esac
	done
}

parse_args "$@"
parse_args_with_getopts "$@"
