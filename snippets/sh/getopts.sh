#!/bin/sh

cmd=normal

# while getopts a:h opt
# Above line equivalent to below, but outputs error message on invalid option.
while getopts ':a h' opt
do
	case $opt in
		a) val="$OPTARG" ;;
		h) cmd=help ;;
		?) cmd="invalid: $OPTARG" ;;
	esac
done

echo $?

shift "$(( OPTIND - 1 ))"

echo "./getopts.sh [-a <val>] [-h] [<args>...]"
echo "cmd: $cmd"
echo "val: $val"
echo "args: $*"
