#!/bin/sh

extname() {
	echo "$1" | grep -oE '\.[^./]+$'
}

extname "test.jpg" # .jpg
extname "test.html.md" # .md
extname "$0" # .sh
