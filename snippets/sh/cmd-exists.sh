#!/bin/sh

_cmd_exists() {
	which "$1" > /dev/null 2>&1
}

_cmd_exists_alt() {
	command -v "$1" >/dev/null 2>&1
}

for i in ls doesnotexist
do
	echo "_cmd_exists $i: $( _cmd_exists "$i"; echo $? )"
	echo "_cmd_exists_alt $i: $( _cmd_exists_alt "$i"; echo $? )"
done
