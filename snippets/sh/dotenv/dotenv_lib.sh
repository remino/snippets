#!/bin/sh
# POSIX-safe dotenv loader with whitelist
# Usage: ALLOWED_VARS="API_dotenv_key TIMEOUT FEATURE_FLAG"; dotenv ./.env

dotenv() {
	dotenv_file="$1"

	[ -r "$dotenv_file" ] || {
		echo "Cannot read: $dotenv_file" >&2
		return 1
	}

	while IFS= read -r line || [ -n "$line" ]; do
		case $line in
		'' | '#'*) continue ;;
		esac

		case $line in
		*'='*)
			dotenv_key=${line%%=*}
			dotenv_val=${line#*=}

			# trim spaces around key and value (POSIX sed)
			dotenv_key=$(printf '%s' "$dotenv_key" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')
			dotenv_val=$(printf '%s' "$dotenv_val" | sed 's/^[[:space:]]*//; s/[[:space:]]*$//')

			# validate key: only [A-Za-z0-9_], non-empty
			case $dotenv_key in *[!A-Za-z0-9_]* | '')
				echo "Bad key: $dotenv_key" >&2
				continue
				;;
			esac

			# strip matching single or double quotes only if both ends match
			case $dotenv_val in
			"\""*"\"")
				dotenv_val=${dotenv_val#\"}
				dotenv_val=${dotenv_val%\"}
				;;
			"'"*"'")
				dotenv_val=${dotenv_val#\'}
				dotenv_val=${dotenv_val%\'}
				;;
			esac

			# whitelist check
			allowed=0
			for a in $ALLOWED_VARS; do
				[ "$dotenv_key" = "$a" ] && {
					allowed=1
					break
				}
			done
			[ $allowed -eq 1 ] || continue

			# assign literally into current shell
			IFS= read -r "$dotenv_key" <<EOF
$dotenv_val
EOF
			export "$dotenv_key"
			;;
		*) : ;;
		esac
	done <"$dotenv_file"
}
