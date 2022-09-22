#!/bin/sh

weahter() {
	curl -s wttr.in/"$1"?format="%c+%t"
}

weather "$1"
