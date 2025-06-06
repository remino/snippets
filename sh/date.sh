#!/bin/sh

date_parse() {
	date -j -f '%Y-%m-%dT%H:%M:%S%z' "$1" +"%Y/%m/%d/%H/%M/%S/%z"
}

# ---

iso_date_local() {
	date +%Y-%m-%dT%H:%M:%S%z
}

iso_date_utc() {
	date -u +%Y-%m-%dT%H:%M:%SZ
}

# ---

# Works for both GNU and BSD date.

_iso_date_to_sec() {
	{ date -j >/dev/null 2>&1 && date -j -f '%Y-%m-%dT%H:%M:%S%z' "$1" +%s; } || date --date="$1" +%s
}

_sec_to_date_iso() {
	{ date -j >/dev/null 2>&1 && date -r "$1" +'%Y-%m-%dT%H:%M:%S%z'; } || date --date=@"$1" +'%Y-%m-%dT%H:%M:%S%z'
}

# ---

# Get week's Monday

week_monday() {
	# Try with GNU date first (Linux), then BSD date (macOS)
	date -d "last Monday" +%Y-%m-%d 2>/dev/null || date -v -Mon +%Y-%m-%d
}
