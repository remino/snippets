#!/bin/sh

_cmd_exists() {
	which "$1" > /dev/null 2>&1
}

for i in ls doesnotexist
do
	echo "$i $( _cmd_exists "$i"; echo $? )"
done
