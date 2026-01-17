#!/bin/sh

cmd=normal

while getopts 'a:h' opt; do
	case $opt in
	a) val="$OPTARG" ;;
	h) echo "USAGE: ..." ;;
	?) echo "Invalid option: $OPTARG" >&2 ;;
	esac
done

echo $?

shift "$((OPTIND - 1))"

echo "./getopts.sh [-a <val>] [-h] [<args>...]"
echo "cmd: $cmd"
echo "val: $val"
echo "args: $*"
