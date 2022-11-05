#!/bin/sh

_to_lowercase_words() {
	echo "$*" | perl -pe 's/^./lc($&)/e;s/(?<![A-Z])([A-Z])/ \1/g;s/[^a-zA-Z0-9]+/ /g;s/(^[^a-zA-Z0-9]|[^a-zA-Z0-9]$)//g;s/.*/lc($&)/e'
}

_to_camel_case() {
	_to_lowercase_words "$*" | perl -pe 's/ [a-z]/uc($&)/ge;s/ ([A-Z])/\1/g'
}

_to_pascal_case() {
	_to_lowercase_words "$*" | perl -pe 's/(^| )[a-z]/uc($&)/ge;s/ ([A-Z])/\1/g'
}

_to_kebab_case() {
	_to_lowercase_words "$*" | sed -E 's/ /-/g'
}

_to_snake_case() {
	_to_lowercase_words "$*" | sed -E 's/ /_/g'
}

_test() {
	if [ "$1" = "$2" ]; then
		echo "OK: $1"
	else
		echo "FAIL: $1 != $2"
	fi
}

ORIGINAL=" stringWith  various-separators in_IT! "
_test "$( _to_lowercase_words "$ORIGINAL" )" "string with various separators in it"
_test "$( _to_camel_case "$ORIGINAL" )" "stringWithVariousSeparatorsInIt"
_test "$( _to_pascal_case "$ORIGINAL" )" "StringWithVariousSeparatorsInIt"
_test "$( _to_kebab_case "$ORIGINAL" )" "string-with-various-separators-in-it"
_test "$( _to_snake_case "$ORIGINAL" )" "string_with_various_separators_in_it"
