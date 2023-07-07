#!/bin/sh

_to_lowercase() {
	tr '[:upper:]' '[:lower:]'
}

_to_lowercase_words() {
	perl -pe 's/(?<![A-Z])([A-Z])/ \1/g;s/[^a-zA-Z0-9]+/ /g;s/(^[^a-zA-Z0-9]|[^a-zA-Z0-9]$)//g;s/.*/lc($&)/e'
}

_to_camel_case() {
	_to_lowercase_words | perl -pe 's/ [a-z]/uc($&)/ge;s/ ([A-Z])/\1/g'
}

_to_pascal_case() {
	_to_lowercase_words | perl -pe 's/(^| )[a-z]/uc($&)/ge;s/ ([A-Z])/\1/g'
}

_to_kebab_case() {
	_to_lowercase_words | sed -E 's/ /-/g'
}

_to_snake_case() {
	_to_lowercase_words | sed -E 's/ /_/g'
}

_to_uppercase() {
	tr '[:lower:]' '[:upper:]'
}

_test() {
	if [ "$1" = "$2" ]; then
		echo "OK: $1"
	else
		echo "FAIL: $1 != $2"
	fi
}

ORIGINAL=" stringWith  various-separators in_IT! "
_test "$( echo "$ORIGINAL" | _to_lowercase_words )" "string with various separators in it"
_test "$( echo "$ORIGINAL" | _to_camel_case )" "stringWithVariousSeparatorsInIt"
_test "$( echo "$ORIGINAL" | _to_pascal_case )" "StringWithVariousSeparatorsInIt"
_test "$( echo "$ORIGINAL" | _to_kebab_case )" "string-with-various-separators-in-it"
_test "$( echo "$ORIGINAL" | _to_snake_case )" "string_with_various_separators_in_it"
_test "$( echo "$ORIGINAL" | _to_lowercase )" " stringwith  various-separators in_it! "
_test "$( echo "$ORIGINAL" | _to_uppercase )" " STRINGWITH  VARIOUS-SEPARATORS IN_IT! "
_test "$( echo "abc-1234" | _to_lowercase_words )" "abc 1234"
