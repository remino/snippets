#!/bin/sh

_to_lowercase() {
	tr '[:upper:]' '[:lower:]'
}

_to_lowercase_words() {
	perl -pe 's/(?<![A-Z0-9])([A-Z0-9])/ \1/g;s/[^a-zA-Z0-9]+/ /g;s/(^[^a-zA-Z0-9]|[^a-zA-Z0-9]$)//g;s/.*/lc($&)/e'
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
	input="$1"
	func="$2"
	expected="$3"
	actual="$( echo "$input" | "$func" )"

	if [ "$actual" = "$expected" ]; then
		echo "OK: $func '$input' => '$actual'"
	else
		echo "FAIL: $func '$input' => '$actual' != '$expected'"
	fi
}

_test "1234abc" _to_lowercase_words "1234 abc" # XXX
_test "ThisIsATest" _to_lowercase_words "this is a test" # XXX
_test "abc-1234" _to_lowercase_words "abc 1234"
_test " abc-1234 " _to_lowercase_words "abc 1234"
_test " abc1234 " _to_lowercase_words "abc 1234"
_test " ABC1234 " _to_lowercase_words "abc 1234" # XXX
_test " ABC-1234 " _to_lowercase_words "abc 1234"

ORIGINAL=" stringWith  various-separators in_IT! "
_test "$ORIGINAL" _to_lowercase_words "string with various separators in it"
_test "$ORIGINAL" _to_camel_case "stringWithVariousSeparatorsInIt"
_test "$ORIGINAL" _to_pascal_case "StringWithVariousSeparatorsInIt"
_test "$ORIGINAL" _to_kebab_case "string-with-various-separators-in-it"
_test "$ORIGINAL" _to_snake_case "string_with_various_separators_in_it"
_test "$ORIGINAL" _to_lowercase " stringwith  various-separators in_it! "
_test "$ORIGINAL" _to_uppercase " STRINGWITH  VARIOUS-SEPARATORS IN_IT! "
