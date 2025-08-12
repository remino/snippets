#!/bin/sh

read_from_stdin() {
	while read -r line
	do
		echo "$line"
	done
}

read_from_file() {
	while read -r line
	do
		echo "$line"
	done < "$1"
}

read_from_stdin_or_file() {
	if [ -t 0 ]
	then
		read_from_file "$1"
	else
		read_from_stdin
	fi
}

read_interactive() {
	while read -r line
	do
		echo "Input something:"
		read -r input < /dev/tty
		echo "$input"
	done
}
