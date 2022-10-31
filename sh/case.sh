#!/bin/sh

_to_camel_case() {
	echo "$*" | perl -pe 's/[_\s-]./uc($&)/ge;s/^./lc($&)/e;s/[_\s-](?=.)//g'
}

_to_pascal_case() {
	echo "$*" | perl -pe 's/(^|[_\s-])./uc($&)/ge;s/[_\s-](?=.)//g'
}

_to_kebab_case() {
	echo "$*" | perl -pe 's/(^|[_\s-])./lc($&)/ge;s/[_\s-](?=.)/-/g'
}

_to_snake_case() {
	echo "$*" | perl -pe 's/(^|[_\s-])./lc($&)/ge;s/[_\s-](?=.)/_/g'
}

_to_camel_case "this is camelCase"
_to_pascal_case "this is PascalCase"
_to_kebab_case "this is kebab-case"
_to_snake_case "this is snake_case"
